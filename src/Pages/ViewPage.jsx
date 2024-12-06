import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewPage = () => {
    const [vegetables, setVegetables] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVegetables = async () => {
            const jwtToken = localStorage.getItem('jwt');
            try {
                const response = await axios.get('http://localhost:1337/api/master-vegs',{
                    headers: {
                        Authorization: `Bearer ${jwtToken}`, // Include JWT in header
                    },
                });
                console.log(response.data.data)
                setVegetables(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching vegetables:', error);
                setError(error.message); // Set error message for display
                setLoading(false);
            }
        };

        fetchVegetables();
    }, []);



  if (loading) {
    return <div>Loading vegetables...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; // Display the error message
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
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

};

export default ViewPage;
