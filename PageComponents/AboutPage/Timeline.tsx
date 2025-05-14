
import React from 'react'


const Timeline = () => {
    const events = [
        {
            title: "Graduated from Tribhuvan University",
            date: "2016-2020",
            description: "Graduated from Tribhuvan University with a Bachelor's degree in Computer Science and Information Technology. Built a strong foundation in algorithms, system design, and database management systems (DBMS) through academic coursework and hands-on projects. Gained practical experience in software development, working with various programming languages and frameworks. Developed problem-solving skills by tackling complex coding challenges and optimizing system performance.",
            // link: null,
            // linkText: "Learn more"
        },
        {
            title: "Worked as a Software Developer at Code IT",
            date: "June 2020 - July 2022",
            description: "Full Stack Developer with a strong backend focus, specializing in Laravel and Vue.js. Led the development of an e-commerce platform and built a room management and booking system for a well-known local hotel chain. Designed and implemented an attendance management and result publishing system for a college, leveraging Laravel for the backend and Vue.js for the frontend. Also worked on various projects using the MERN stack and contributed to developing a real estate platform. Also taught programming languages and web development to students at Code IT.",
            site: "https://codeit.com.np"
        },
        {
            title: "Worked as a Software Developer at Mandala Tech",
            date: "August 2022 - April 2025",
            description: "Developed migration scripts to seamlessly transfer data between system versions. Built a fully functional API for an e-commerce application using Laravel and related technologies. Enhanced the dashboard UI with Laravel Nova and Vue.js, improving user experience. Integrated AWS SES for email notifications with AWS SNS and worked with Elasticsearch for optimized search functionality. Additionally, developed a complete e-commerce website for books using React, Next.js, and related technologies. Implemented multiple payment gateways, including eSewa, Khalti, Fonepay, Connect IPS, and Stripe, ensuring smooth transactions.",
            site: "https://mandalatech.io/"
        },
        {
            title: "Studying at Fanshawe College",
            date: "May 2025 - Present",
            description: "Currently studying a Graduate Certificate course AI & Machine Learning, learning about data analysis, AI, data science and machine learning at Fanshawe College, Canada.",
            site: "https://www.fanshawec.ca/"
        }
    ]

    return (
        <section>
            <h1>The Road So Far</h1>
            <ol className="relative border-s border-text-50 py-2 my-4">
                {
                    events.map((event, index) => (
                        <li className="mb-10 ms-4" key={index}>
                            <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-secondary "></div>
                            <time className="mb-1 text-sm font-normal leading-none text-text/70 ">{event.date}</time>
                            <h3 className="text-lg font-semibold text-text">{event.title}</h3>
                            <p className="my-4 text-base font-normal text-text/70">{event.description}</p>
                            {
                                event.site && (
                                    <a href={event.site} className="inline-flex items-center px-4 py-2 text-sm font-medium text-text bg-secondary/20 border border-text/50 rounded-lg hover:bg-primary/20 focus:z-10 focus:ring-4 focus:outline-none focus:ring-accent ">Website <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg></a>
                                )
                            }
                        </li>
                    ))
                }
            </ol>
        </section>
    )
}

export default Timeline