import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const FetchComponent = () => {
  const { data, isLoading, isError, isFetching, fetchNextPage } = useQuery(
    'repositories',
    fetchRepositories,
    {
      getNextPageParam: (lastPage) =>
        lastPage.headers.link.match(/<([^>]+)>;\s*rel="next"/)?.[1], // Extracts the "next" link from the response headers
    }
  );

  const handleDeleteRow = async (repoName) => {
    try {
      await axios.delete(`/api/deleteRepo/${repoName}`);
      // On successful deletion, you can refetch the data to update the UI
      // You can use useMutation from react-query to handle the delete API call
    } catch (error) {
      console.error('Error deleting repository:', error);
    }
  };

  const renderRows = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isError) {
      return <div>Error loading data</div>;
    }

    return data.pages.flatMap((page) =>
      page.data.map((repo) => (
        <div key={repo.id}>
          <span>{repo.name}</span>
          <button onClick={() => handleDeleteRow(repo.name)}>Delete</button>
        </div>
      ))
    );
  };

  return (
    <div>
      {renderRows()}
      {data && data.pageInfo.hasNextPage && (
        <button onClick={fetchNextPage} disabled={isFetching}>
          {isFetching ? 'Loading...' : 'See More'}
        </button>
      )}
    </div>
  );
};

// Example function for fetching repositories from the GitHub API
const fetchRepositories = async ({ pageParam = 1 }) => {
  const response = await axios.get('https://api.github.com/repositories', {
    params: {
      page: pageParam,
      per_page: 10, // Number of repositories per page
    },
  });
  return response.data;
};

export default FetchComponent;
