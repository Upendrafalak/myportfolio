import './About.css';
import Dp from '../../media/profile.png';
const About = ()=>{
    return(
        <div className="about">
            
            <img src={Dp} className="profile" alt="me" ></img>
            {/* height="600" width="300" style = {{margin:"40px"}} */}
            <p className="me-top"><b>About</b></p>
            <p className='me'><span className="wave/">
        <p><strong>UPENDRA FALAK</strong></p>   
        </span></p>

            <p className="me">
         
            I'm a Frontend Web Developer <br/> <br/>
            👉 I'm in the third year pursuing Bachelors of Engineering in Information Technology.<br/>  
            🔭 I'm skilled and proficient in Web Development and technologies like React JS, <br/>
           Javascript, Java, Python, C, C++.<br/>
            🤔 Learning AI and ML, Backend Development.<br/>
            </p>
        </div>
    );


}
export default About;