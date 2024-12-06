import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const CreatePage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const requestData = { data: data };
      const response = await axios.post('http://localhost:1337/api/master-vegs', requestData, { // Include JWT in headers
          headers: {
              Authorization: `Bearer ${localStorage.getItem('jwt')}`
          }
      });
      alert('Vegetable created:', response.data);
      reset(); 
     
    } catch (error) {
      console.error('Error creating vegetable:', error.response ? error.response.data : error.message);
      
    }
  };

  return (
    <div>
      <h1>Create Vegetable</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" {...register('name', { required: 'Name is required' })} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        {/* Color */}
        <div>
          <label htmlFor="color">Color:</label>
          <input type="text" id="color" {...register('color', { required: 'Color is required' })} />
          {errors.color && <p>{errors.color.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" {...register('description')} />
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" {...register('price', { required: 'Price is required', min: 0 })} />
          {errors.price && <p>{errors.price.message}</p>}
        </div>

         {/* Seasonality */}
         <div>
          <label htmlFor="seasonality">Seasonality:</label>
          <input type="text" id="seasonality" {...register('seasonality', { required: 'Seasonality is required' })} />
          {errors.seasonality && <p>{errors.seasonality.message}</p>}
        </div>


        {/* Calories */}
        <div>
          <label htmlFor="calories">Calories:</label>
          <input type="number" step={0.1} id="calories" {...register('calories', { required: 'Calories is required', min: 0 })} />
          {errors.calories && <p>{errors.calories.message}</p>}
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreatePage;

