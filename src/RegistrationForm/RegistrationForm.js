import React from 'react';
import './RegistrationForm.css';
import { useForm } from 'react-hook-form';

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
    },
  });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          {...register('username', { required: 'This is a required field.' })}
          type="text"
          id="username"
        />
      </div>
      <p className="error-message">{errors.username?.message}</p>

      <div className="form-group">
        <label htmlFor="fullname">Full Name:</label>
        <input
          type="text"
          id="fullname"
          {...register('fullname', { required: 'This is a required field.' })}
        />
      </div>
      <p className="error-message">{errors.fullname?.message}</p>

      <div className="form-group">
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          {...register('phone', {
            required: 'This is a required field.',
            minLength: {
              value: 11,
              message: 'Phone Number Can not be less then 11 digits',
            },
          })}
        />
      </div>
      <p className="error-message">{errors.phone?.message}</p>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register('email', { required: 'This is a required field.' })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="country">Country:</label>
        <select id="country" {...register('country', { required: true })}>
          <option value="">Select a country</option>
          <option value="USA">United States of America</option>
          <option value="Canada">Canada</option>
          <option value="UK">United Kingdom</option>
          <option value="Australia">Australia</option>
          <option value="Japan">Japan</option>
          <option value="China">China</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
