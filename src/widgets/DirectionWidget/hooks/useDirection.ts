import { useState, useCallback, useEffect } from 'react';
import { fetchDirections } from '../actions';
import { Direction } from '../types';

export const useDirection = () => {
  const [directions, setDirections] = useState<Direction[]>([]);
  const [selectedDirection, setSelectedDirection] = useState<Direction | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchDirectionsCallback = useCallback(async () => {
    const fetchedDirections = await fetchDirections();
    setDirections(fetchedDirections);
  }, []);

  const handleDescriptionClick = useCallback((direction: Direction) => {
    setSelectedDirection(direction);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedDirection(null);
  }, []);

  useEffect(() => {
    fetchDirectionsCallback();
  }, [fetchDirectionsCallback]);

  return {
    directions,
    selectedDirection,
    isModalOpen,
    fetchDirections: fetchDirectionsCallback,
    handleDescriptionClick,
    handleCloseModal,
  };
};
