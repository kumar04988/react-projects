import React, { useEffect, useState } from "react";
import "./NormalValidform.scss";
import { useForm } from "react-hook-form";

const Form = () => {
  // const { register, handleSubmit, errors } = useForm();
  const initialFormData={
    username: "",
    email: "",
    password: "",
  }
  const [formData, setFormData] = useState(initialFormData);
  const [signed, setSigned] = useState(false);
  const [formError, setFormError] = useState({});

  // const onSubmit =(data)=>{
  //   console.log(data)
  // }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const formErr = validate();
    setFormError(formErr);
  }, [formData]);

  const validate = () => {
    const errors = {};
    const { username, email, password } = formData;
    console.log("username", username);
    if (!username) {
      errors.username = "username should not be empty";
    }
    if (!email) {
      errors.email = "email should not be empty";
    }
    if (!password) {
      errors.password = "password should not be empty";
    } else if (password.length < 4) {
      errors.password = "password length should be greater than 3";
    } else if (password.length > 10) {
      errors.password = "password length should not exceed 10 characters";
    }

    return errors;
  };

  console.log("formError", formError);

  const submitHandler = (e) => {
    e.preventDefault();
    const formErr = validate(formData);
    console.log("formErr", formErr);
    setFormError(formErr);
    if (Object.keys(formError).length === 0) {
      setSigned(true);
    }
    console.log("formData", formData);
  };


  const signOutHandler=()=>{
    setFormData(initialFormData)
    setSigned(false)

  }

  return (
    <div className="form-wrapper1">
      <div className="form-outline">
        <form onSubmit={submitHandler}>
          <h3>Registration form</h3>
          <div className="all-fields">
            <div className="form-fields">
              <label>username</label>
              <input
                className="input-field"
                type="text"
                value={formData.username}
                placeholder="username"
                name="username"
                onChange={handleChange}
              />
              <p>
                {formError.username ? <div>*{formError.username}</div> : ""}
              </p>
            </div>

            <div className="form-fields">
              <label>email</label>
              <input
                className="input-field"
                type="email"
                value={formData.email}
                placeholder="email"
                name="email"
                onChange={handleChange}
              />
              <p>{formError.email ? <div>*{formError.email}</div> : ""}</p>
            </div>

            <div className="form-fields">
              <label>password</label>
              <input
                className="input-field"
                type="password"
                value={formData.password}
                placeholder="password"
                name="password"
                onChange={handleChange}
              />
              <p>
                {formError.password ? <div>*{formError.password}</div> : ""}
              </p>
            </div>
            <input className="input-btn" type="submit" />
          </div>
        </form>
      </div>

      <center>
        <div style={{ "margin-top": "30px" }}>
          userName:{formData.username},<br />
          email:{formData.email},<br />
          password:{formData.password}
          <br />
        </div>
        {signed ? (
          <div>
            <button className="" onClick={()=>signOutHandler()}>Signed out</button>
          </div>
        ):
        (
          <div>
            <button className="">Sign up</button>
          </div>
        )}
      </center>
    </div>
  );
};

export default Form;
