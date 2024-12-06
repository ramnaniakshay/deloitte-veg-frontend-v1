import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const DeletePage = () => {
    const [vegetables, setVegetables] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchVegetables = async () => {
            const jwtToken = localStorage.getItem('jwt');
            try {
                const response = await axios.get('http://localhost:1337/api/master-vegs',{
                    headers: {
                        Authorization: `Bearer ${jwtToken}`, 
                    },
                });
                setVegetables(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching vegetables:', error);
                setError(error.message); 
                setLoading(false);
            }
        };

        fetchVegetables();
    }, []);

    const handleDelete = async (documentId) => {
        if (window.confirm('Are you sure you want to delete this vegetable?')) {
            try {
                setLoading(true); 

                const jwtToken = localStorage.getItem('jwt');
                await axios.delete(`http://localhost:1337/api/master-vegs/${documentId}`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    },
                });

                setVegetables(prevVegetables => prevVegetables.filter(vegetable => vegetable.documentId !== documentId));
                setLoading(false); 
              
            } catch (error) {
                console.error('Error deleting vegetable:', error);
                setError('Failed to delete vegetable. Please try again.');
                setLoading(false); 

            }
        }
    };

  if (loading) {
    return <div>Loading vegetables...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }


  return (
    <div>
        <h2>Vegetables</h2>
         <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Seasonality</th>
                    <th>Calories</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {vegetables.map(vegetable => (
                    <tr key={vegetable.id}>
                        <td>{vegetable.name}</td>
                        <td>{vegetable.color}</td>
                        <td>{vegetable.description}</td>
                        <td>{vegetable.price}</td>
                        <td>{vegetable.seasonality}</td>
                        <td>{vegetable.calories}</td>
                        <td>
                            <button onClick={() => handleDelete(vegetable.documentId)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

};

export default DeletePage;
