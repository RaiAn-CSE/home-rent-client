import "./Login.css";
import loginBanner from "../../images/login-banner.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
// import useToken from '../../hooks/useToken';

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { signIn, loginInWithGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const [loginUserEmail, setLoginUserEmail] = useState('');
  // const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    loginInWithGoogle(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true })
        console.log(from)
      })
      .catch(error => {
        console.error(error)
      })
  }

  // if (token) {
  //   navigate(from, { replace: true });
  // }

  const handleLogin = data => {
    // console.log(data);
    setLoginError('');
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        setLoginUserEmail(data.email);
      })
      .catch(error => {
        console.log(error.message)
        setLoginError(error.message);
      });
  }


  return (
    // <div className='flex justify-center mt-5'>
    //   <div className='w-96 p-7'>
    //     <h2 className='text-xl text-center'>Login</h2>
    //     <form onSubmit={handleSubmit(handleLogin)}>
    //       <div className="form-control w-full max-w-xs">
    //         <label className="label"> <span className="label-text">Email</span></label>
    //         <input type="text"
    //           {...register("email", {
    //             required: "Email Address is required"
    //           })}
    //           className="input input-bordered w-full max-w-xs" />
    //         {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
    //       </div>
    //       <div className="form-control w-full max-w-xs">
    //         <label className="label"> <span className="label-text">Password</span></label>
    //         <input type="password"
    //           {...register("password", {
    //             required: "Password is required",
    //             minLength: { value: 6, message: 'Password must be 6 characters or longer' }
    //           })}
    //           className="input input-bordered w-full max-w-xs" />
    //         <label className="label"> <span className="label-text">Forget Password?</span></label>
    //         {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
    //       </div>
    //       <input className='btn btn-accent w-full' value="Login" type="submit" />
    //       <div>
    //         {loginError && <p className='text-red-600'>{loginError}</p>}
    //       </div>
    //     </form>
    //     <p>Phone Bazaar <Link className='text-secondary' to="/signup">Create new Account</Link></p>
    //     <div className="divider">OR</div>
    //     <button onClick={googleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
    //   </div>
    // </div>
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
                <button onClick={googleSignIn}>
                  <FcGoogle className="me-2 " />
                  Login with Google
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
                    {...register("email", { required: true })}
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
                    {...register("password", { required: true })}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
