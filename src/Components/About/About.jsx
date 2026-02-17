import React from 'react'
import './About.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'
import { FaGithub } from 'react-icons/fa';

const About = () => {
    return (
        <div id="about" className='about'>
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m a Software Developer passionate about building responsive, user-friendly applications across web and mobile. I work with React, JavaScript, HTML, and CSS to create clean interfaces and smooth user experiences, and I also build with Java and Android Studio (RecyclerView, XML/ConstraintLayout).</p>

                        <p>On the data side, I use SQL with SQLite and SQL Server, writing JOIN queries and implementing CRUD features with strong input validation and error handling. I enjoy solving real problems, writing clean code, and continuously learning—shipping projects with Git/GitHub and modern tooling like Vite.</p>
      
                    </div>
                    <div className="portfolio-section">
                        <h2>See my progress</h2>

                        <a
                            href="https://github.com/Alina201998"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-button"
                        >
                            <FaGithub size={40} />
                        </a>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default About
