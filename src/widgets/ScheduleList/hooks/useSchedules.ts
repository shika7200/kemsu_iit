import { useState, useCallback, useEffect } from 'react';
import { fetchSchedules } from '../actions';
import { Schedule } from '../types';

export const useSchedules = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  const fetchSchedulesCallback = useCallback(async () => {
    const fetchedSchedules = await fetchSchedules();
    setSchedules(fetchedSchedules);
  }, []);

  useEffect(() => {
    fetchSchedulesCallback();
  }, [fetchSchedulesCallback]);

  return {
    schedules,
    fetchSchedules: fetchSchedulesCallback,
  };
};
