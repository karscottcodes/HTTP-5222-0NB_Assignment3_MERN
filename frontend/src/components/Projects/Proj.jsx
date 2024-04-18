import { useState, useEffect } from "react";

export default function Proj() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/projects"
        );
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    getProjects();
  }, []);

  useEffect(() => {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    const handleClickNext = () => {
      let items = document.querySelectorAll('.item');
      document.querySelector('.slide').appendChild(items[0]);
    };

    const handleClickPrev = () => {
      let items = document.querySelectorAll('.item');
      document.querySelector('.slide').prepend(items[items.length - 1]);
    };

    next.addEventListener('click', handleClickNext);
    prev.addEventListener('click', handleClickPrev);

    return () => {
      next.removeEventListener('click', handleClickNext);
      prev.removeEventListener('click', handleClickPrev);
    };
  }, []);


  return (
    <div className="carousel-container">
      <div className="slide">
        {/* Item Start */}
        {projects.map((project, index) => (
          <div key={index} className="item" style={{ backgroundImage: `url(${project.img_url})` }}>
            <div className="content">
              <div className="title">
                {project.title}
              </div>
              <div className="info">
                {project.description}
              </div>
              <button className="hero-btn">More Details</button>
            </div>
          </div>
        ))}
      </div>
      <div className="btn-wrapper">
        <button className="prev"><i className="fa-solid fa-angle-left"></i></button>
        <button className="next"><i className="fa-solid fa-angle-right"></i></button>
      </div>
    </div>
  );
}
