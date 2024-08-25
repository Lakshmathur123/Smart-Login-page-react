import React from 'react';
import { useForm } from 'react-hook-form';

function SignIn() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="signInForm">
      <div className="input-group">
        <label htmlFor="signInEmail">
          <img src="/public/images/email.png" alt="email icon" />
        </label>
        <input
          type="email"
          id="signInEmail"
          {...register('email', { required: true })}
          placeholder="Email Address / Username"
        />
        {/* <span className="checkmark">&#10003;</span> */}
      </div>
      <div className="input-group">
        <label htmlFor="signUpPassword">
          <img src="/public/images/lock.png" alt="password icon" />
        </label>
        <input
          type="password"
          id="signUpPassword"
          {...register('password', { required: true })}
          placeholder="Password"
        />
      </div>
      <button type="submit" className="continue-btn">Continue</button>
    </form>
  );
}

export default SignIn;
