import { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';

export const useAuth = () => {
  const { user, login, logout } = useUser();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
 
    const token = localStorage.getItem('token');
    if (token) {
    
      login({ token });
    }
    setIsLoading(false);
  }, [login]);

  return { user, isLoading, login, logout };
};