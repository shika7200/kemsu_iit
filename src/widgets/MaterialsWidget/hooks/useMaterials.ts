import { useState, useCallback } from 'react';
import { fetchMaterials } from '../actions';
import { Material } from '../types';

export const useMaterials = () => {
  const [materials, setMaterials] = useState<Material[]>([]);

  const fetchMaterialsCallback = useCallback(async () => {
    const fetchedMaterials = await fetchMaterials();
    setMaterials(fetchedMaterials);
  }, []);

  return {
    materials,
    fetchMaterials: fetchMaterialsCallback,
  };
};
