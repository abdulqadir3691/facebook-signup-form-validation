import React, { useState } from "react";
import "./signup.css";
import Logo from "../../assets/facebook.svg";
import "bootstrap/dist/css/bootstrap.css";

const Signup = () => {

  const [firstName, setFirstName] = useState('');
  const [firstNameMessage, setFirstNameMessage] = useState('Enter your first name')
  const [showFirstNameError, setShowFirstNameError] = useState(false);

  const [surName, setSurName] = useState('');
  const [surNameMessage, setSurNameMessage] = useState('Enter your surname')

  const [showSurNameError, setShowSurNameError] = useState(false);

  const [userEmail, setUserEmail] = useState('');
  const [userEmailMessage, setuserEmailMessage] = useState('Enter your email')
  const [showUserEmailError, setShowUserEmailError] = useState(false);



  const [userPassword, setUserPassword] = useState('');
  const [userPasswordMessage, setUserPasswordMessage] = useState('Enter your password')
  const [showUserPasswordError, setShowUserPasswordError] = useState(false);


  

  const firstNameHandler = (e) => {  
    setFirstName(e.target.value);
    if(firstName!==''){
      // setShowFirstNameError(false)
      setFirstNameMessage("Looks Good!")
    }
  };

   const surNameHandler = (e) => { 
    setSurName(e.target.value);
    if(surName!==''){
      // setShowSurNameError(false)
      setSurNameMessage("Looks Good!")
    }
  };
  const userEmailHandler = (e) => {
    setUserEmail(e.target.value);
    if(userEmail!==''){
      setuserEmailMessage("Looks Good!")
    }
  }

  const userPasswordHandler = (e) => {
    setUserPassword(e.target.value)
    if(userPassword!==''){
      setUserPasswordMessage('Looks Good!')
    }
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
     if(firstName===''){
        setShowFirstNameError(true)
     }
     if(surName===''){
      setShowSurNameError(true)
     }
     if(userEmail===''){
      setShowUserEmailError(true)
     }
     if(userPassword===''){
      setShowUserPasswordError(true)
     }
  }

 
  return (
    <div className="full-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="text-center">
              <img className="img-fluid logo" src={Logo} alt="" />
            </div>
            <div className="form px-5">
              <h2 className="text-center first_title pt-2 fw-bold">Create a new account</h2>
              <p className="text-center">It's quick and easy</p>
              <hr />
              <form class="row" onSubmit={formSubmitHandler} >
                
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control "
                    id= 'first-name'
                    placeholder="First name"
                    value={firstName}
                    onChange={firstNameHandler}
                   
                  />
                 {showFirstNameError && <p className={`${firstNameMessage==='Looks Good!' ? "text-success":'text-danger'} fw-bold`}>{firstNameMessage}</p>}
                </div>
                <div class="col-md-6">
                 <input
                    type="text"
                    class="form-control sur-name"
                  
                    placeholder="First name"
                    value={surName}
                    onChange={surNameHandler}
                   
                  />
                  {showSurNameError && <p className={`${surNameMessage==='Looks Good!' ? "text-success":'text-danger'} fw-bold`}>{surNameMessage}</p>}
                </div>
                <div class="col-12">
                  <input
                    type="text"
                    class="form-control mt-2"
                    value={userEmail}
                    onChange={userEmailHandler}
                    placeholder="Mobile number or Email address"
                  />
                  {showUserEmailError && <p className={`${userEmailMessage==='Looks Good!' ? "text-success":'text-danger'} fw-bold`}>{userEmailMessage}</p>}
                </div>
                <div class="col-12">
                  <input
                    type="text"
                    class="form-control mt-2"
                    value={userPassword}
                    onChange={userPasswordHandler}
                    placeholder="New password"
                  />
                   {showUserPasswordError && <p className={`${userPasswordMessage==='Looks Good!' ? "text-success":'text-danger'} fw-bold`}>{userPasswordMessage}</p>}
                </div>
                <p className="sub_title_4 pt-2">
                  People who use our service may have uploaded your contact
                  information to Facebook. 
                 <a href="#">Learn more.</a> 
                </p>
                <p className="sub_title_4 a">
                  By clicking Sign Up, you agree to our <a href="#">Terms,Privacy Policy</a> 
                  and <a href="#"> Cookies</a> Policy. You may receive SMS notifications from us
                  and can opt out at any time.
                </p>

                <div class="col-12 text-center">
                  <button type="submit" class="rounded px-5 py-1 submit align-items-center justify-content-center">
                    Sign Up
                  </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
