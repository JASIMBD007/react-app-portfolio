import React from 'react'

const Resume = () => {
    const downloadResume = () => {
        window.open('https://drive.google.com/file/d/1zbldwI9XkwrRTd-dELAHqy9Lu_3Im4ZQ/view?usp=sharing', '_blank');
    };


    return (
        <div>
            <h1 className='text-4xl font-bold text-center py-16 text-[#001b5e]'>Download My Resume</h1>
            <div className="flex justify-center items-center " >
                <button className='bg-[#001b5e] text-gray-100 w-full md:w-auto px-8 py-4 rounded-lg' onClick={downloadResume} >Download</button>
            </div>
        </div>
    );
};

export default Resume;
