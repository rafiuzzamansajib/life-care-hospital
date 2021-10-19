import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header';

const Login = () => {
    const { signInUsingGoogle,toggleLogin,handleNameChange,handleEmailChange,handlePasswordChange,handleRegistration, resetPassword,isLogin,error } = useAuth();
    return (
      <>
      <Header></Header>
        <div className='container p-5'>
            <div>
            <form onSubmit={handleRegistration}>
        <h3 className="text-primary text-center">Please {isLogin ? 'Login' : 'Register'}</h3>
        {!isLogin && <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
          </div>
        </div>}
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input onBlur={handleEmailChange} type="email" className="form-control" placeholder="Your Email" id="inputEmail3" required />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
              <label className="form-check-label" htmlFor="gridCheck1">
                Already Registered?
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger">{error}</div>
        <button type="submit" className="btn btn-primary m-2">
          {isLogin ? 'Login' : 'Register'}
        </button>
        <button type="button" onClick={resetPassword} className="btn btn-light border m-2">Reset Password</button>

      </form>
            </div>
            <div className='p-2 mx-4'>
            <button onClick={signInUsingGoogle} className="btn btn-light border"><FontAwesomeIcon  icon={faGoogle}/> Google Sign In</button>
            </div>
        </div>
        </>
    );
};

export default Login;