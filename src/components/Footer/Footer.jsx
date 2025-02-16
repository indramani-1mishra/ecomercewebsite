import { Link } from "react-router-dom";
import './Footer.css';
import { FaCcDiscover, FaCcVisa, FaGift, FaGithub, FaInstagram, FaSquareFacebook, FaToolbox, FaYoutube } from "react-icons/fa6";
import { FaLinkedin, FaQuestionCircle } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

export default function Footer() {
  return (
    <div>
      <div className="upperfooter">
         <div className="leftcontainer">
           <div className="first"> 
                <h3>About Us</h3>
             <ul>
             <li><Link to="/">Contact Us</Link></li>
             <li><Link to="/">About Us</Link></li>
             <li><Link to="/">carries</Link></li>
             <li><Link to="/">flipcart stories</Link></li>
             <li><Link to="/">press</Link></li>
             <li><Link to="/">coprative process</Link></li> 
             </ul>
           </div>
           <div className="first">
           <h3>About Us</h3>
             <ul>
             <li><Link to="/">Contact Us</Link></li>
             <li><Link to="/">About Us</Link></li>
             <li><Link to="/">carries</Link></li>
             <li><Link to="/">flipcart stories</Link></li>
             <li><Link to="/">press</Link></li>
             <li><Link to="/">coprative process</Link></li> 
             </ul>

           </div>
           <div className="first">
           <h3>About Us</h3>
             <ul>
             <li><Link to="/">Contact Us</Link></li>
             <li><Link to="/">About Us</Link></li>
             <li><Link to="/">carries</Link></li>
             <li><Link to="/">flipcart stories</Link></li>
             <li><Link to="/">press</Link></li>
             <li><Link to="/">coprative process</Link></li> 
             </ul>

           </div>
           <div className="first">
           <h3>About Us</h3>
             <ul>
             <li><Link to="/">Contact Us</Link></li>
             <li><Link to="/">About Us</Link></li>
             <li><Link to="/">carries</Link></li>
             <li><Link to="/">flipcart stories</Link></li>
             <li><Link to="/">press</Link></li>
             <li><Link to="/">coprative process</Link></li> 
             </ul>

           </div>
         </div>
         <div className="rightcontainer">
           <div className="rightfirstContainer">
           <div  className="first">
          <h3>mail us</h3>
          <ul>
            <li>Flipkart Internet Private Limited,</li>
            
            <li>Email: support@flipkart.com</li>
            <li>Phone: +91 123 456 7890</li>
          </ul>
          </div>
          <div className="rsecond">
            <h3>Social</h3>
            <ul >
            <li><Link to="/"><FaSquareFacebook className="s" /></Link></li>
            <li><Link to="/"><FaInstagram className="s" /></Link></li>
            <li><Link to="/"><FaLinkedin className="s" /></Link></li>
            <li><Link to="/"><FaGithub  className="s"/></Link></li>
            
            
            
            </ul>
          </div>
           </div>
           <div  className="first">
            <h3>Registered Office Address:</h3>
             <ul>
             <li>Flipkart Internet Private Limited,</li>
             <li>5th Floor, Ground Floor,</li>
             <li>B-1, Sector 63,</li>
             <li>Gurugram-301101, India.</li>
             </ul>
            
           </div>
         </div>
      </div>
      <div className="lowerfooter">
        <ul>
            <li>
                <Link to="/"> <FaToolbox  className="r"/> <span>became a sellor</span></Link>
            </li>
            <li>
                <Link to="/"> <CiStar className="r"/> <span>advertise</span></Link>
            </li>
            <li>
                <Link to="/"> <FaGift className="r"/> <span>gift card</span></Link>
            </li>
            <li>
                <Link to="/"> <FaQuestionCircle className="r" /> <span>help center</span></Link>
            </li>
            <li>
                 <span>© 2007-2025 Flipkart.com</span>
            </li>
            <li >
               <span><FaCcVisa className="visa" /></span> 
                <span><FaCcDiscover /></span>
            </li>
        </ul>
        </div>
  
    </div>
  )
}
