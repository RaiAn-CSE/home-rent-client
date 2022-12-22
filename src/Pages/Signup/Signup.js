import React, { useContext, useState } from "react";
import "../Login/Login.css";
import loginBanner from "../../images/login-banner.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    console.log(data);
    setSignUPError('');
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.log(error)
      });
    navigate('/');
  }

  return (
    <div>
      <div className="login-section  container mt-2">
        <div className="row align-content-center">
          <div className="col-md-7 col-lg-7 col-sm-12 image-container text-center">
            <img src={loginBanner} alt="" />
          </div>
          <div className="col-md-5 col-lg-5 col-sm-12 p-2 ">
            <div className="p-3 login-Form text-center mt-md-0 mt-lg-0 mt-sm-5">
              <div className="login-heading">
                <h4 className="fw-bold me-5 text-start">Welcome to RentUs</h4>
                <p>
                  Have an account? <Link to="/logIn">Login</Link>
                </p>
              </div>
              <div className="text-center">
                <h3 className="fw-bolder">Sign Up</h3>
              </div>
              <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="m-3">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label float-start"
                  >
                    Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your name"
                  />
                  <label
                    for="exampleFormControlInput2"
                    className="form-label float-start"
                  >
                    Email address
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="name@example.com"
                  />
                  <label
                    for="exampleFormControlInput3"
                    className="form-label float-start"
                  >
                    Phone Number
                  </label>
                  <input
                    {...register("number", { required: true })}
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput3"
                    placeholder="Phone"
                  />
                  <label
                    for="inputPassword"
                    className="form-label float-start mt-2"
                  >
                    Password
                  </label>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="password"
                  />
                  <input
                    type="password"
                    className="form-control mt-3"
                    placeholder="Confirm password"
                    id="confirmPassword"
                  />
                  <input
                    type="checkbox"
                    className=" m-3"
                    onclick="myFunction()"
                  />
                  Show Password
                </div>
                <input className="signIn-btn mb-5 login-btn" value='Sign Up' type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
