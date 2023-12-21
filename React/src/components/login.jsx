import React, { useState } from "react";
import axios from 'axios'
import Navbar from "./navbar";

const Login = (updateState) => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const login = async () => {
    console.log("email", email),
    console.log("password", password)
    const {data} = await axios.post("http://localhost:3000/auth/login",
    {
        email,
        password
    })
    console.log("login response", data)
    if(data.error){
        return alert("Invalid Credentials")
    }
    return alert("Succesfully logged in")
}

  return (
    <div>
        <Navbar/>
        <div className="flex">
            <img src={window.location.origin + '/login.png'} 
            className="bg-[#efebea] max-h-screen"/>
            <div className="flex flex-col min-h-screen overflow-hidden w-screen bg-[#efebea]">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 text-bold">
                   Login
                </h1>   
                {/* <form className="mt-6"> */}
                    <div className="mb-2">
                        <label
                            // for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e)=>{
                                setEmail(e.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            // for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e)=>{
                                setPassword(e.target.value)
                            }}
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button 
                        disabled= {!(email && password)}
                        onClick={()=>{login()}}
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 focus: outline-none"
                        
                        >
                            Login
                        </button>
                    </div>
                {/* </form> */}

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <span
                        className="font-medium text-purple-600 hover:underline cursor-pointer"
                        onClick={()=>{
                            void updateState.updateState(false);
                        }}
                    >
                        Sign up
                    </span>
                </p>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Login;