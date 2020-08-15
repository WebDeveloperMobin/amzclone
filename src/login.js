import React,{Component,useState} from "react";
import {Link,useHistory} from "react-router-dom";
import "./login.css";
import {auth} from "./firebase";

function Login(){
    // to navigate into another page
    const history=useHistory();

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const login=(event)=>{
        event.preventDefault(); // this stops the refresh of the js DOM.

        auth.signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                // logged in and redirect into hme page
                history.push("/");
            })
            .catch((e)=>alert(e.message))
    }

    const register=(event)=>{
        event.preventDefault();
         
        auth.signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                // logged in and redirect into hme page
                history.push("/");
            })
            .catch((e)=>alert(e.message))
    }

    return(
        <div className="login">
           <Link to='/'>
                <img
                  className="login_logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                  alt=""
                />
            </Link>

            {/* create a Login Container */}

            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                <h5>E-mail</h5>
                    <input value={email} 
                          onChange={event=>setEmail(event.target.value)}
                          type="email"/>

                    <h5>Password</h5>
                    <input value={password} 
                        onChange={event=>setPassword(event.target.value)}
                        type="password"/>

                    <button onClick={login} type="submit" className="login_signInButton">Sign in</button>
                </form>

                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. 
                </p>

                <button onClick={register} className="login_registerButton">Create you Amazon account</button>
            </div>
        </div>
    )
}

export default Login;
