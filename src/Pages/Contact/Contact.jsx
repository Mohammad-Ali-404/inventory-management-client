import React from 'react';
import Container from '../Shared/Container/Container';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Contact = () => {
    return (
        <div className='py-10'>
            <HelmetProvider>
                <Helmet>
                    <title>Contact</title>
                </Helmet>
            </HelmetProvider>
            <Container>
                <div className='sm:max-w-5xl border mx-auto py-10'>
                    <div className='text-center'>
                        <h1 className='sm:text-3xl font-semibold'>Service Support Request</h1>
                        <p className='sm:text-lg sm:w-6/12 mx-auto pt-4'>Please fill out the following form with details We will review your request and follow up with you as soon as possible.</p>
                    </div>
                    <div className='max-w-screen-2xl py-20 px-14'>
                            <form> 
                                <div className='sm:flex gap-4'>
                                    <div className="mb-4 w-full">
                                    <label  className="block mb-1 ml-1 text-lg font-medium">Full Name<span className='text-red-600'>*</span></label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="user_name"
                                            className="mt-1 p-2 w-full  focus:outline-none focus:border-gray-900 border-b border-gray-500"
                                            placeholder="Enter Your Full Name"
                                        />
                                    </div>
                                    <div className="mb-4 w-full ">
                                    <label  className="block mb-1 ml-1 text-lg font-medium">Email Address<span className='text-red-600'>*</span></label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="user_email"
                                            className="mt-1 p-2 w-full  focus:outline-none focus:border-gray-900 border-b border-gray-500"
                                            placeholder="Enter Your Email Address"
                                        />
                                    </div>
                                </div>
                                <div className='sm:flex gap-4'>
                                        <div className="mb-4 w-full ">
                                        <label  className="block mb-1 ml-1 text-lg font-medium">Phone Number<span className='text-red-600'>*</span></label>
                                            <input
                                                type="text"
                                                id="phone"
                                                name="user_phone"
                                                className="mt-1 p-2 w-full  focus:outline-none focus:border-gray-900 border-b border-gray-500"
                                                placeholder="Enter Your Phone Number"
                                            />
                                        </div>
                                        <div className="mb-4 w-full ">
                                        <label  className="block mb-1 ml-1 text-lg font-medium">Invoice No.<span className='text-red-600'>*</span></label>
                                            <input
                                                type="text"
                                                id="invoice"
                                                name="invoice"
                                                className="mt-1 p-2 w-full  focus:outline-none focus:border-gray-900 border-b border-gray-500"
                                                placeholder="Invoice No."
                                            />
                                        </div>
                                </div>
                                <div className="mb-4 w-full ">
                                        <label  className="block mb-1 ml-1 text-lg font-medium">Subject<span className='text-red-600'>*</span></label>
                                            <input
                                                type="text"
                                                id="Subject"
                                                name="subject"
                                                className="mt-1 p-2 w-full  focus:outline-none focus:border-gray-900 border-b border-gray-500"
                                                placeholder="type Your Problem Subject"
                                            />
                                        </div>
                                <div className='pb-4'>
                                    <label  className="block mb-1 ml-1 text-lg font-medium">Details<span className='text-red-600'>*</span></label>
                                    <textarea 
                                        id="message"
                                        name="message"
                                        placeholder='Write your problem Details'
                                        className="mt-1 p-2 w-full  focus:outline-none focus:border-gray-900 border-b border-gray-500"
                                        rows="3">
                                    </textarea>
                                </div>
                                <button className='bg-gradient-to-t from-[#6eb5df] to-[#29acb6aa] btn btn-md text-base' type="submit">Submit Now</button>
                            </form>
                        </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;