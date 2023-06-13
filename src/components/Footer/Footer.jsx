import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto flex justify-center items-center">
                <div className="mr-4">
                    <a
                        href="https://github.com/JASIMBD007"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400"
                    >
                        <FaGithub size={24} />
                    </a>
                </div>
                <div className="mr-4">
                    <a
                        href="https://www.linkedin.com/in/jasim-uddin92/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>
                <div className="mr-4">
                    <a
                        href="https://twitter.com/your-twitter-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400"
                    >
                        <FaTwitter size={24} />
                    </a>
                </div>
                <div className='mr-4'>
                    <a
                        href="https://www.youtube.com/channel/UCkO7YMH7Ykm5Zccxy4lqUsg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400"
                    >
                        <FaYoutube size={24} />
                    </a>
                </div>
                <div className="mr-4">
                    <a
                        href="https://www.facebook.com/jasim.ice.iu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400"
                    >
                        <FaFacebookF size={24} />
                    </a>
                </div>
                <div >
                    <a
                        href="https://www.instagram.com/jasim_uddin_92/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400"
                    >
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>
            <div className="text-center text-white mt-2 bg-primary p-2 " >
                <p><small>Copyright Jasim Uddin &copy; {year}</small></p>
            </div>
        </footer>
    );
};

export default Footer;
