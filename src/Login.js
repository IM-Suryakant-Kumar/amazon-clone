import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Login.css";

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const signIn = e => {
		e.preventDefault()

		// some fancy firebase login shittt...
	}
	const register = e => {
		
		// do some fancy firebase register shittt...
	}

	return (
		<div className="login">
			<NavLink to="/">
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20220213013322"
					alt=""
				/>
			</NavLink>

			<div className="login__container">
				<h1>Sign In</h1>

                <form>
                    <label for="email">E-mail</label>
                    <input 
						type="text" 
						id="email" 
						value={email} 
						onChange={e => setEmail(e.target.value)} 
					/>

					<label for="password">Password</label>
					<input 
						type="password" 
						id="password" 
						value={password} 
						onChange={e => setPassword(e.target.value)} 
					/>

					<button 
						type="submit"
						className="login__signin_btn"
						onClick={signIn}
					>Sign In</button>

                </form>

				<p>
					By Signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies notice and our Interest-Based Ads Notice
				</p>

				<button
					className="login__register_btn"
					onClick={register}
				>Create your Amazon account</button>
			</div>
		</div>
	);
};

export default Login;
