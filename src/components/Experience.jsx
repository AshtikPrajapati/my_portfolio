
import React from 'react'
import experience from './data/experience.json'

export default function Experience() {
    return (
        <>
            <div className="container ex" id="experience">
                <h1>EXPERIENCE</h1>

                {
                    experience.map((data) => {
                        return (
                            <>
                                <div key={data.id} className="ex-items text-center my-5"
                                    data-aos="zoom-in"
                                    data-aos-duration="1000">

                                    <div className="left mx-4">
                                        <img src={`/assets/${data.imageSrc}`} alt="company" style={{ width: "135px", height: "55px" }} />
                                    </div>

                                    <div className="right">
                                        <h2>{data.role}</h2>
                                        <h4>
                                            <span style={{ color: "#ffcb9a" }}>{data.startDate}{" || "}{data.endDate}</span>
                                            {" "}
                                            <span style={{ color: "#D9B08c" }}>{data.location}</span>
                                        </h4>
                                        <h5 style={{ color: "#D9B08c" }}>{data.experiences[1]}</h5>
                                        <h5 style={{ color: "#D9B08c" }}>{data.experiences[0]}</h5>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
