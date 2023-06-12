import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover' src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NDE0MTcxOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Jasim Uddin</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Front-End Developer',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Coder',
                                2000,
                                'Tech Enthisiastic',
                                2000,
                            ]}
                            wrapper="div"
                            // speed={50}
                            cursor={true}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaTwitter className='cusor-pointer' size={20} />
                        <FaFacebookF className='cusor-pointer' size={20} />
                        <FaInstagram className='cusor-pointer' size={20} />
                        <FaLinkedinIn className='cusor-pointer' size={20} />
                        <FaGithub className='cusor-pointer' size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main