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
          <img src="/public/email.png" alt="email icon" />
        </label>
        <input
          type="email"
          id="signInEmail"
          {...register('email', { required: true })}
          placeholder="Email Address"
        />
        {/* <span className="checkmark">&#10003;</span> */}
      </div>
      <button type="submit" className="continue-btn">Continue</button>
    </form>
  );
}

export default SignIn;
