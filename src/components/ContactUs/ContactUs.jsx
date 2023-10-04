import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <div className='lg:w-[75%] mx-auto  lg:flex justify-between items-center p-6 md:p-6 lg:p-0 md:mt-20 lg:mt-20'>
                    <div className='text-center md:text-center lg:text-center mb-5'>
                        <h1 className='text-5xl'>জাকারিয়া শিক্ষা নিকেতন </h1>
                        <h2 className='text-3xl'>স্থাপিতঃ ১৯৮৪ খ্রিঃ</h2>
                        <p className='text-2xl'>উপজেলাঃ কয়রা,জেলাঃ খুলনা</p>
                    </div>
                    <form action="" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5'>
                        <div>
                            <label htmlFor="" className='block text-xl mb-2'>Your Name</label>
                            <input className='w-full md:w-full lg:w-96 p-3 md:py-4 lg:p-3  border border-blue-500 focus:outline-1 focus:outline-blue-500 shadow-lg rounded-lg' type="name" name='name' placeholder='Your Name' />
                        </div>
                        <div>
                            <label htmlFor="" className='block text-xl mb-2'>Your Email</label>
                            <input className='w-full md:w-full lg:w-96 p-3 md:py-4 lg:p-3  border border-blue-500 focus:outline-1 focus:outline-blue-500 shadow-lg rounded-lg' type="email" name='email' placeholder='example@gmail.com' />
                        </div>
                        <div className='md:col-span-2 lg:col-auto'>
                            <label htmlFor="" className='block text-xl mb-2'>Subject</label>
                            <input className='w-full md:w-full lg:w-96 p-3 md:py-4 lg:p-3  border border-blue-500 focus:outline-1 focus:outline-blue-500 shadow-lg rounded-lg' type="text" name='subject' placeholder='Your Subject' />
                        </div>
                        <div className='md:col-span-2 lg:col-auto'>
                            <label htmlFor="" className='block text-xl mb-2'>Your Message</label>
                            <textarea className='w-full md:w-full lg:w-96 p-3 md:py-4 lg:p-3  border border-blue-500 focus:outline-1 focus:outline-blue-500 shadow-lg rounded-lg h-32' type="text" name='message' placeholder='Message...' />
                        </div>
                        <button className='md:col-span-2 lg:col-auto w-full md:w-full lg:w-96 bg-blue-500 p-3 text-lg text-white rounded-lg hover:bg-blue-600  hover:shadow-lg duration-300 active:scale-95 animate-pulse hover:animate-none' type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;