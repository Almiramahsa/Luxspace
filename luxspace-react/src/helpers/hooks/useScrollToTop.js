import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useScrollToTop() {
  const navigate = useNavigate();

  useEffect(() => {
    if (navigate.location) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [navigate.location]);
}
