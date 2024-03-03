import React, { useState } from "react";
import "./useform.css";
import { useForm } from "react-hook-form";

const UseForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [formData, setFormData] = useState({});

  const onSubmit = (data) => {
    console.log(data);
    setFormData(data);
  };

  return (
    <div>
      <div className="form-outline">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Registration form</h3>
          <div className="all-fields">
            <div className="form-fields">
              <label>username</label>
              <input
                className="input-field"
                type="text"
                placeholder="username"
                name="username"
                // ref={register({ required: "Username is required" })}
              />
              {/* <p>{errors.username && errors.username.message}</p> */}
            </div>

            <div className="form-fields">
              <label>email</label>
              <input
                className="input-field"
                type="email"
                placeholder="email"
                name="email"
                // ref={register({ required: "Email is required" })}
              />
              {/* <p>{errors.email && errors.email.message}</p> */}
            </div>

            <div className="form-fields">
              <label>password</label>
              <input
                className="input-field"
                type="password"
                placeholder="password"
                name="password"
                // ref={register({ required: "Password is required" })}
              />
              {/* <p>{errors.password && errors.password.message}</p> */}
            </div>
            <input className="input-btn" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UseForm;
