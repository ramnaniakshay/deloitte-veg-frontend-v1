
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
   
    localStorage.removeItem('jwt');
    
    navigate('/login');
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Logout;
