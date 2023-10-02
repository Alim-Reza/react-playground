import { useState } from 'react';

const useConfirmationDialog = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return {
    dialogOpen,
    handleOpenDialog,
    handleCloseDialog,
  };
};

export default useConfirmationDialog;
