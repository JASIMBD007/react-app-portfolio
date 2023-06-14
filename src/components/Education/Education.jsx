import React from 'react';
import EducationDetails from '../EducationDetails/EducationDetails';

const data
    = [
        {
            year: "2020 - Present",
            title: "Master of Science in Information Engineering & Computer Science",
            institute: "Rhine-Waal University of Applied Sciences",
            location: "Kamp-Lintfort,Germany",
            details:
                "I have successfully completed all the coursework for my Master of Science in Information Engineering & Computer Science at Rhine-Waal University of Applied Sciences. Currently, I am in the final stages of completing my master's thesis.During my studies, I gained a comprehensive understanding of various aspects of information engineering and computer science. The program provided me with a strong foundation in areas such as software development, data analysis, machine learning, and network security."
        },
        {
            year: 2019,
            title: "Masters of Science in Information & Communication Technology",
            institute: "Islamic University,Kushtia,Bangladesh",
            location: "Kushtia,Bangladesh",
            details:
                'Islamic University, known for its academic excellence, is likely to offer a rigorous curriculum that combines theoretical concepts with practical applications. Faculty members with expertise in the field are expected to guide students through coursework, research projects, and possibly industry collaborations.The program may also emphasize the development of critical thinking, problem-solving skills, and the ability to undertake independent research. Graduates of the Master of Science in Information & Communication Technology can pursue various career paths, including roles in software development, IT management, research and development, consulting, academia, and more.'
        },
        {
            year: 2017,
            title: "Bachelor of Science in Information & Communication Technology",
            institute: "Islamic University,Kushtia,Bangladesh",
            location: "Kushtia,Bangladesh",
            details:
                'The Bachelor of Science in Information & Communication Technology (ICT) at Islamic University in Kushtia, Bangladesh, is a dynamic and comprehensive undergraduate program that prepares students for careers in the rapidly evolving field of ICT. The program aims to develop a strong foundation in information technology, computer science, and communication systems. Throughout the four-year program, students gain theoretical knowledge and practical skills in areas such as programming, database management, network administration, software engineering, web development, and multimedia technologies. They also explore emerging topics like artificial intelligence, cloud computing, and internet of things (IoT).'
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