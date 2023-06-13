import React from 'react';
import EducationDetails from '../EducationDetails/EducationDetails';

const data
    = [
        {
            year: 2020,
            title: "Master of Science in Information Engineering & Computer Science",
            institute: "Rhine-Waal University of Applied Sciences",
            location: "Kamp-Lintfort,Germany",
            details:
                "Collaborate with designers and back-end developers to implement user interfaces,Determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages .Test and debug code to ensure cross-browser compatibility and optimal performance."
        },
        {
            year: 2019,
            title: "Bachelor of Science in Information & Communication Technology",
            institute: "Islamic University,Kushtia,Bangladesh",
            location: "Kushtia,Bangladesh",
            details:
                'Develop and maintain responsive web pages using HTML, CSS, and JavaScript.Broaden web development, team building, and leadership skills.Fixing bugs and errors, designing website layouts, designing email marketing campaigns, and collaborating on different projects.'
        },
        {
            year: 2017,
            title: "Bachelor of Science in Information & Communication Technology",
            institute: "Islamic University,Kushtia,Bangladesh",
            location: "Kushtia,Bangladesh",
            details:
                'Develop and maintain responsive web pages using HTML, CSS, and JavaScript.Broaden web development, team building, and leadership skills.Fixing bugs and errors, designing website layouts, designing email marketing campaigns, and collaborating on different projects.'
        }
    ]

const Education = () => {
    return (
        <div id='education' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center py-4 text-[#001b5e]'>Education</h1>
            {data.map((detail, idx) => (
                <EducationDetails key={idx}
                    year={detail.year}
                    title={detail.title}
                    institute={detail.institute}
                    location={detail.location}
                    details={detail.details}
                />
            ))}
        </div>
    )
}

export default Education