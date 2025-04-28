import { useEffect, useState } from 'react';
import { useEvents } from '../context/EventContext';

export const useFetchEvents = () => {
  const { events, addEvent, updateEvent, deleteEvent } = useEvents();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return { events, loading, error, addEvent, updateEvent, deleteEvent };
};