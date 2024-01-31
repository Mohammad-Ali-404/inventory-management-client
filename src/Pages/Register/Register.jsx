import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='my-10'>
        <div className="flex flex-col sm:max-w-xl max-w-md m p-6 rounded-md sm:p-10 bg-slate-100 mx-auto shadow-md shadow-slate-200">
            <div className="text-center">
                <h1 className="my-3 sm:text-2xl text-xl font-semibold border-b-2 py-2 border-gray-300 w-2/4  mx-auto">SIGN UP / REGISTER</h1>
                <p className="text-lg ">Sign UP to create your account</p>
            </div>
            <form action="" className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label className="block mb-2 text-sm">Your Name</label>
                        <input type="name" name="name" id="name" placeholder="Write Your full name" className="w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Photo Url</label>
                        <input type="photo" name="photoUrl" id="photo" placeholder="Upload your photo url" className="w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div>
                        <div className="mb-2">
                            <label className="text-sm">Password</label>
                        </div>
                        <input type="password" name="password" id="password" placeholder="********" className="w-full px-3 py-2 border rounded-md " />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="button" className="w-full px-8 py-2 font-semibold rounded-md bg-white hover:bg-blue-400 duration-500 border-2 border-blue-400 hover:border-gray-200">Sign Up</button>
                    </div>
                    <p className="px-6 text-base text-center py-4">Have an Account?
                        <Link to='/login' rel="noopener noreferrer" href="#" className="hover:underline ml-1 dark:text-violet-400">Sign In</Link>.
                    </p>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Register;