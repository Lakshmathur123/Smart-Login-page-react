import React from 'react';
import { useForm } from 'react-hook-form';

function SignUp() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="signUpForm">
      <div className="input-group">
        <label htmlFor="signUpEmail">
          <img src="/public/email.png" alt="email icon" />
        </label>
        <input
          type="email"
          id="signUpEmail"
          {...register('email', { required: true })}
          placeholder="Email Address"
        />
        {/* <span className="checkmark">&#10003;</span> */}
      </div>
      <div className="input-group">
        <label htmlFor="signUpPassword">
          <img src="/public/lock.png" alt="password icon" />
        </label>
        <input
          type="password"
          id="signUpPassword"
          {...register('password', { required: true })}
          placeholder="Password"
        />
      </div>
      <button type="submit" className="continue-btn">Sign Up</button>
    </form>
  );
}

export default SignUp;
