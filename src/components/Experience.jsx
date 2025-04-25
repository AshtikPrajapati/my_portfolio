import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import experience from './data/experience.json'

export default function Experience() {
    useEffect(() => {
        AOS.init({ once: true })  // initialize AOS once on component mount
    }, [])

    return (
        <section className="container ex" id="experience">
            <h1>EXPERIENCE</h1>

            {experience.map((data) => (
                <div key={data.id} className="ex-items text-center"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                >
                    <div className="left mx-4">
                        <img
                            src={`/assets/${data.imageSrc}`}
                            alt={data.company ? `${data.company} logo` : 'company logo'}
                            // style={{ width: "135px", height: "55px" }}
                            onError={(e) => { e.target.src = "/assets/default.png" }}
                        />
                    </div>

                    <div className="right">
                        <h2>{data.role}</h2>
                        <h4>
                            <span style={{ color: "#ffcb9a" }}>{data.startDate} || {data.endDate}</span>{" "}
                            <span style={{ color: "#D9B08c" }}>{data.location}</span>
                        </h4>
                        {data.experiences.map((item, idx) => (
                            <h5 key={idx}>{item}</h5>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}
