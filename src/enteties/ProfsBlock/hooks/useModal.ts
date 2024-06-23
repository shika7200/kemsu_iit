import { useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDescriptionModalOpen, setDescriptionModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDescriptionClick = () => {
    setDescriptionModalOpen(true);
  };

  const handleCloseDescriptionModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setDescriptionModalOpen(false);
    }
  };

  const closeDescriptionModal = () => {
    setDescriptionModalOpen(false);
  };

  return {
    isModalOpen,
    handleImageClick,
    handleCloseModal,
    closeModal,
    isDescriptionModalOpen,
    handleDescriptionClick,
    handleCloseDescriptionModal,
    closeDescriptionModal
  };
};
