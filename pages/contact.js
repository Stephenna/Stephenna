import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Navbar from './components/Navbar';
import Spots from './components/layout';
import Return from './return';
function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");
  if (state.succeeded) {
      return <Return />
  }
  return (
    <div>
        <Navbar />
        <Spots/>
        <div className=" contact-form min-h-full flex items-center justify-center flex justify-content align-items: center w-screen h-screen">
            <div className="bg-white w-4/5 p-4 rounded-md flex flex-row items-center justify-around shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
                <form  className="w-full max-w-sm" onSubmit={handleSubmit}>
                <p className=" block text-gray-700  text-2xl text-center m-5 font-light">Shoot me an email!</p>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name" >
                            Full Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input 
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name"
                            type="text"
                            name="name" />
                             <ValidationError 
                                prefix="Name" 
                                field="Name"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email" >
                            Email
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input 
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name"
                            type="email"
                            name="email" />
                             <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="message" >
                            Message
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <textarea
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            id="message"
                            name="message" />
                            <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center ">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button className="shadow bg-purple-500  hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" disabled={state.submitting}>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
                {/* <div className="line"></div> */}
            </div>        
        </div>
    </div>
  );
}
export default ContactForm;
