
import React from 'react'
import projects from './data/projects.json'


export default function Projects() {
    return (
        <>
            <div className="container projects my-3" id="projects">
                <h1>PROJECTS</h1>

                <div className="row d-flex justify-content-center align-content-center">
                    {
                        projects.map((data) => {
                            return (
                                <>
                                    <div key={data.id} className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4">
                                        <div className="card bg-dark"
                                            style={{
                                                width: "18rem",
                                                color: "#d1e8e2",
                                                border: "1px solid #D9B08c",
                                                boxShadow: "5px 5px 10px 10px rgb(255, 203, 154, 0.5)"
                                            }}
                                            data-aos="flip-right"
                                            data-aos-duration="1000">

                                            <div className="img d-flex justify-content-center align-content-center p-3">
                                                <img src={`/assets/${data.imageSrc}`} className="card-img-top" alt="project" style={{
                                                    width: "250px",
                                                    height: "200px",
                                                    border: "2px solid #ffcb9a",
                                                    borderRadius: "10px"
                                                }} />
                                            </div>
                                            <div className="card-body text-center">
                                                <h5 className="card-title">{data.title}</h5>
                                                <p className="card-text">{data.description}</p>
                                                <a href={data.source} target="_blank" className="btn" style={{ border: "2px solid #D9B08c", background: "#ffcb9a" }}>Code</a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
