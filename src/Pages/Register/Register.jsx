import React, { useContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import { AuthContext } from '../../Providers/AuthProvider';
import { useForm } from 'react-hook-form';

const Register = () => {
    const {register, handleSubmit, reset} = useForm()
    const {createUser, updateUserProfile} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const onSubmit = (data) => {
        createUser(data.email, data.password)
          .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
              .then(() => {
                const savedUser = { name: data.name, email: data.email, photo: data.photoURL };
                axiosSecure.post('/users', savedUser)
                  .then((response) => {
                    // Handle the response here
                    if (response.data.insertedId) {
                      reset();
                      Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User created successfully.',
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    }
                  })
                  .catch((error) => {
                    // Handle errors here
                    console.error('Error creating user:', error);
                  });
              })
              .catch((error) => console.log(error));
          });
      };
    return (
        <div className='my-10'>
            <HelmetProvider>
                <Helmet>
                    <title>Register</title>
                </Helmet>
            </HelmetProvider>
           
        <div className="flex flex-col sm:max-w-xl max-w-md m p-6 rounded-md sm:p-10 bg-slate-100 mx-auto shadow-md shadow-slate-200">
            <div className="text-center">
                <h1 className="my-3 sm:text-2xl text-xl font-semibold border-b-2 py-2 border-gray-300 w-2/4  mx-auto">SIGN UP / REGISTER</h1>
                <p className="text-lg ">Sign UP to create your account</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} action="" className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label className="block mb-2 text-sm">Your Name</label>
                        <input type="name" {...register("name", { required: true })} id="name" placeholder="Write Your full name" className="w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Email address</label>
                        <input type="email" {...register("email", { required: true })} id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Photo Url</label>
                        <input type="photo" {...register("photoURL")}  id="photo" placeholder="Upload your photo url" className="w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div>
                        <div className="mb-2">
                            <label className="text-sm">Password</label>
                        </div>
                        <input type="password"  {...register("password")} name="password" id="password" placeholder="********" className="w-full px-3 py-2 border rounded-md " />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-2 font-semibold rounded-md bg-white hover:bg-blue-400 duration-500 border-2 border-blue-400 hover:border-gray-200">Sign Up</button>
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