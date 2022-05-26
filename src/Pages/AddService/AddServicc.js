import axios from 'axios';
import React from 'react';
import { useForm, useFormState } from 'react-hook-form';
import './Addservice.css';

const AddServicc = (props) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post('https://peaceful-tor-51218.herokuapp.com/services', data)
      .then((res) => {
        if (res.data.insertedId) {
          alert('Service Inserted Successfully!!');
          reset();
        }
      });
  };

  return (
    <div className='add-service'>
      <h2 className='heading'>Add a Service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name', { required: true, maxLength: 20 })}
          placeholder='Name'
        />
        <textarea {...register('description')} placeholder='Description' />
        <input type='number' {...register('price')} placeholder='Price' />
        <input {...register('img')} placeholder='Image Url' />

        <input type='submit' />
      </form>
    </div>
  );
};

export default AddServicc;
