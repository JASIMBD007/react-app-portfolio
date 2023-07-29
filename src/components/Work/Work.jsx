import React from 'react';
import WorkItem from '../WorkItem/WorkItem';

const data
    = [
        {
            year: 2022,
            title: "Working Student",
            company: "Ballsportdirekt GmbH & Co KG.",
            duration: "1 Year",
            details:
                "Collaborating with the development team to understand project requirements, designing and implementing user interfaces using React components, and ensuring the seamless integration of frontend functionalities with backend systems also involved in optimizing application performance, conducting code reviews, and troubleshooting any issues that arise."
        },
        {
            year: 2019,
            title: "Junior Front-End Developer",
            company: "ICE Innovation Lab",
            duration: "2 Years",
            details:
                "Collaborated with designers and back-end developers to implement user interfaces,Determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages .Test and debug code to ensure cross-browser compatibility and optimal performance.Making of User Interface for IoT."
        },
        {
            year: 2016,
            title: "Internship",
            company: "ICE Innovation Lab",
            duration: '6 Months',
            details:
                'Developing and maintaining responsive web pages using HTML, CSS, and JavaScript,Bootstrap.Broaden web development, team building, and leadership skills.Fixing bugs and errors, designing website layouts, designing email marketing campaigns, and collaborating on different projects.'
        }
    ]

const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-2'>
            <h1 className='text-4xl font-bold text-center py-4 text-[#001b5e]'>Work</h1>
            {data.map((item, idx) => (
                <WorkItem key={idx}
                    year={item.year}
                    title={item.title}
                    company={item.company}
                    duration={item.duration}
                    details={item.details}
                />
            ))}
        </div>
    );
};

export default Work