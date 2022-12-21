import React, { useState } from "react";
import "./Login.css";
import loginBanner from "../../images/login-banner.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const handleLogin = data => {
    console.log(data);
  }


  return (
    <div>
      <div className="login-section container mt-2">
        <div className="row align-content-center">
          <div className="col-md-7 col-lg-7 col-sm-12 image-container text-center">
            <img src={loginBanner} alt="" />
          </div>
          <div className="col-md-5 col-lg-5 col-sm-12 p-2 ">
            <div className="  p-4  login-Form text-center mt-md-0 mt-lg-0 mt-sm-5">
              <div className="login-heading">
                <h4 className="fw-bold me-3 text-start">Welcome to RentUs</h4>
                <p>
                  Don't have an account? <Link to="/signUp">SignUp</Link>
                </p>
              </div>
              <div className="text-center">
                <h3 className="fw-bolder">Login</h3>
              </div>
              <div className="d-flex justify-content-center">
                <button>
                  <a
                    className="text-decoration-none login-google p-4"
                    href={{}}
                  >
                    <FcGoogle className="me-2 " />
                    Login with Google
                  </a>
                </button>
                <a className="text-decoration-none mx-2" href={{}}>
                  <FaFacebook />
                </a>
              </div>
              <form onSubmit={handleSubmit(handleLogin)}>
                <div className="m-3">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label float-start"
                  >
                    Email address
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                  <label
                    for="inputPassword"
                    className="form-label float-start mt-2"
                  >
                    Password
                  </label>
                  <input
                    {...register("password")}
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    id="inputPassword"
                  />
                  <input
                    type="checkbox"
                    className=" m-3"
                    onclick="myFunction()"
                  />
                  Show Password
                </div>
                <input className="login-btn mb-5" value='login' type="submit" />
              </form>
              <button className="login-btn mb-5">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
