import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BsTelephoneFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Login = () => {
    return (
        <div className='my-10'>
             <HelmetProvider>
                <Helmet>
                    <title>Login</title>
                </Helmet>
            </HelmetProvider>
            <div className="flex flex-col sm:max-w-xl max-w-md m p-6 rounded-md sm:p-10 bg-slate-100 mx-auto shadow-md shadow-slate-200">
                <div className="text-center">
                    <h1 className="my-3 sm:text-3xl text-2xl font-semibold border-b-2 py-2 border-gray-300 w-2/4  mx-auto">SIGN IN / LOGIN</h1>
                    <p className="text-lg ">Sign in to access your account</p>
                </div>
                <div className='flex justify-center gap-6 pt-8'>
                    <button className='flex items-center gap-1 text-xl bg-[#3d84e0] text-white py-2 px-6 rounded-md'><FaFacebookF className='text-2xl'/>Facebook</button>
                    <button className='flex items-center gap-1 text-xl bg-[#e0793d] text-white py-2 px-6 rounded-md'><FaGoogle className='text-2xl'/>Google</button>
                </div>
                <p className='my-5 pt-2 mx-auto font-medium text-xl'>OR</p>
                <form action="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline ">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="********" className="w-full px-3 py-2 border rounded-md " />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="button" className="w-full px-8 py-2 font-semibold rounded-md bg-white hover:bg-blue-400 duration-500 border-2 border-blue-400 hover:border-gray-200">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center py-4">Don't have an account yet?
                            <Link to='/register' rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Sign up</Link>.
                        </p>
                    </div>
                </form>
                <p className='mx-auto font-medium text-xl'>OR</p>
                <div className='mx-auto'>
                    <button className='flex items-center gap-1 text-base bg-[#2b2a2ac7] text-white py-2 my-4 px-6 rounded-md'><FiGithub className='text-xl'/>Sign in with Github</button>
                    <button className='flex items-center gap-1 text-base bg-[#2fb651] text-white py-2 px-6 rounded-md'><BsTelephoneFill className='text-xl'/>Sign in with phone</button>
                </div>
                <p className='pt-2 mx-auto text-xs w-3/5 text-center mt-4'>By continuing, you are indicating that you accept our Terms of Service and Privacy Policy.
</p>
            </div>
        </div>
    );
};

export default Login;