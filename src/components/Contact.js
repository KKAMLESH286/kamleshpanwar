
import React, { useState } from "react";
import axios from "axios";
import { notify } from "../utility";
export const ContactUrl = `${process.env.REACT_APP_API_HIRE_URL}`


export default function Contact() {

    const [Ename, setName] = useState("");
    const [Eemail, setEmail] = useState("");
    const [Emessage, setMessage] = useState("");
    const [value, setValue] = useState({
        name: "",
        email: "",
        message: ""
    });
    const handleClick = (e) => {
        if (e === "name") {
            setName(e.target.value);
        }
        if (e === "email") {
            setEmail(e.target.value);
        }
        if (e === "message") {
            setMessage(e.target.value);
        }
    }



    const dataPostSubmit = async (e) => {
        e.preventDefault();
        let response = await axios.post("https://thingproxy.freeboard.io/fetch/https://personalmail-cloudfn-howdwtbzhq-de.a.run.app",
            {
                name: e.target[0].value,
                email: e.target[1].value,
                message: e.target[2].value
            }, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        });
        if(response.status === 200) {
            notify();
        }
    }
    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109753.96638613446!2d76.70928089713796!3d30.723700648708373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1651066103090!5m2!1sen!2sin"

                    />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">

                            </h2>
                            <p className="mt-1">
                                Chandigarh, India
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-green-400 leading-relaxed">
                                kkamlesh286@gmail.com
                            </a>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">+91 82788 84761</p>
                        </div>
                    </div>
                </div>
                <form
                    onSubmit={dataPostSubmit}
                    netlify
                    name="contact"
                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Hire Me
                    </h2>
                    <p className="leading-relaxed mb-5">
                        Feel free to drop a message if you want to transform your idea into reality.
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                        </label>
                        <input
                            onChange={handleClick}
                            type="text"
                            id="name"
                            defaultValue=""
                            name="name"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            onChange={handleClick}
                            type="email"
                            defaultValue=""
                            id="email"
                            name="email"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            onChange={handleClick}
                            id="message"
                            defaultValue=""
                            name="message"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}