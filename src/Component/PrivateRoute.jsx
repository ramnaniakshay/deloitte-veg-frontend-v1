
import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = ({ element }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const checkAuthentication = async () => {
      const jwtToken = localStorage.getItem('jwt');
      if (!jwtToken) {
        setAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        await axios.get(`http://localhost:1337/api/users/me`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        setAuthenticated(true);
      } catch {
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, [location]);

  if (loading) return <div>Loading...</div>;

  return authenticated ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
