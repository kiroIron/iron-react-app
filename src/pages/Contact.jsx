import React from 'react'
import Navbar from '../Nav_par/Navbar'
import '../Nav_par/NAVbar.css';
import { Form } from 'react-router-dom';
import './Contact.css';
import { FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
        <Navbar/>
        <section id="contact">
  
            <h1 className="section-header">Contact</h1>
            
            <div className="contact-wrapper">
            
            
              
              <Form id="contact-form" className="form-horizontal" role="Form">
                 
                <div className="form-group">
                  <div className="col-sm-12">
                    <input type="text" className="form-control" id="name" placeholder="NAME" name="name" value="" required/>
                  </div>
                </div>
          
                <div className="form-group">
                  <div className="col-sm-12">
                    <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" value="" required/>
                  </div>
                </div>
          
                <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
                
                <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                  <div className="alt-send-button">
                    <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
                  </div>
                
                </button>
                
              </Form>
              
            
              
                <div className="direct-contact-container">
          
                  <ul className="contact-list">
                    <li className="list-item">  <span className="contact-text place">egypt , cairo</span></li>
                    
                    <li className="list-item">  <span className="contact-text phone"> <Link to="tel:01270450967" title="Give me a call">(012) 7045-0967</Link></span></li>
                    
                    <li className="list-item"> <span className="contact-text gmail"><Link to="mailto:samykirollous@gamil.com" title="Send me an email">samykirollous@gamil.com</Link></span></li>
                    
                  </ul>
          
                  <hr/>
                  <ul className="social-media-list">
                    <li><Link to="https://www.tiktok.com/@kirollousiron?_t=8YFuw1ACiNZ&_r=1" target="_blank" className="contact-icon"> <FaTiktok />

                    </Link>
                    </li>
                    <li><Link to="https://youtube.com/@kirolloussamy4593" target="_blank" className="contact-icon">
                      </Link>
                    </li>
                    <li><Link to="https://www.facebook.com/profile.php?id=100064589259326&mibextid=ZbWKwL" target="_blank" className="contact-icon">
                      </Link>
                    </li>
                    <li><Link to="https://www.instagram.com/kirollousiron/" target="_blank" className="contact-icon">
                      </Link>
                    </li>       
                  </ul>

                  <hr/>
          
                  <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED 
        <span id="author">IRON</span>
                  </div>
          
                </div>
              
            </div>
            
          </section>  
            
    </>
  )
}

export default Contact