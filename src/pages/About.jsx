import React from 'react'
import Navbar from '../Nav_par/Navbar'
import '../Nav_par/NAVbar.css';
import { Link } from 'react-router-dom';
import './Contact.css';
import IMG from './IMG/photoPORTk.jpg';
const About = () => {
  return (
    <>
          <Navbar/>

          <section id="Home">
            <div>
                <p classNameName="aboutContact">
                    Nice To Meet You!<br/>
                    I'm <span id="NameAuthor"className="NameAuthor Link"> K.IRON</span>
                </p>
                <p className="paraAbout">Lorem, ipsum dolor sit amet consectetur 
                    <br/> elit. Accusantium sit aliquam molestiae eius, 
                    <br/>rem velit similique sequi nihil ex. Dolor non 
                    <br/>iusto voluptate sint ipsa possimus delectus!</p>
                    <a className="linkContuntUS Link" href="#contact">Contunt US</a>
            </div>
                <article className="photoPort" >
                    <div>
                        <Link  className="fa-brands fa-facebook" aria-hidden="true" to="https://www.facebook.com/profile.php?id=100064589259326&mibextid=ZbWKwL"></Link>
                        <Link className="fa-brands fa-instagram" aria-hidden="true" to="https://www.instagram.com/kirollousiron/"></Link>
                        <Link className="fa-brands fa-tiktok" aria-hidden="true" to="https://www.tiktok.com/@kirollousiron?_t=8YFuw1ACiNZ&_r=1"></Link>
                    </div>
                </article>
        </section>
        <section>
            <h1 className="heading">
                <span>skills</span>
              </h1>
        <section className="skills" id="skills">
            <article className="itemSkill">
                <h1>
                    personal triner
                </h1>
                <p>
                    3 Years Experiense
                </p>
            </article>
            <article className="itemSkill">
                <h1>
                    ATKFBC
                </h1>
                <p>
                    1 Years Experiense
                </p>
            </article>
            <article className="itemSkill">
                <h1>
                    INIT
                </h1>
                <p>
                    1 Years Experiense
                </p>
            </article>
            <article className="itemSkill">
                <h1>
                    Medicine Ball
                </h1>
                <p>
                    1 Years Experiense
                </p>
            </article>
            <article className="itemSkill">
                <h1>
                    Movement Preparation
                </h1>
                <p>
                    1 Years Experiense
                </p>
            </article>
            <article className="itemSkill">
                <h1>
                    Multidirectional Speed
                </h1>
                <p>
                    1 Years Experiense
                </p>
            </article>
            
        </section>
        </section>
    </>
  )
}

export default About