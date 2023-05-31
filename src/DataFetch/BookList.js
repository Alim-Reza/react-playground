import React, { useEffect } from 'react';

const BookList = () => {
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        'https://openlibrary.org/subjects/fiction.json'
      );
      const data = await response.json();
      console.log(data);
      // Process the book data here
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return <div>Fetching books...</div>;
};

export default BookList;
