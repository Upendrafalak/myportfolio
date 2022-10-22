import Tom from '../../media/Tom.png';
import Robot from '../../media/robots.png';
import ML from '../../media/ML.png';
import './Card.css';
import GH from '../../media/github.png';
import Tilt from 'react-tilt'
import Sign from '../../media/sign language.jpg'
import msg from '../../media/messaging.jpg'
import railway from '../../media/railway.png'
import crypto from '../../media/crypto.png'
import project from '../../media/project.jpg'


const Card = () =>{
    return(
        <div>
            <h1 className="title" style={{marginTop:"50px" ,marginLeft:"100px" }}><b>Projects</b></h1>
    <div className="project-cards" id = "project">
            
            <div className="card" >
                <img src={msg} alt="Avatar" style={{width:300 , height:400}} />
                <div className="container">
                <h4><b>Meet Up</b></h4>
                <p>Chat Application <br />
               Interact with people sharing common interest.<br />
                </p>
                    <div className="center">
                        <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
                    <div className="Tilt-inner">
                    <a href="https://github.com/Upendrafalak/Meet-Up"  target="_blank" rel="noreferrer noopener">
                            <img src={GH} alt="github" />

                        </a> 
                        </div>
                    </Tilt>

                        </div>
                    
                </div>
                </div>


            <div className="card" >
           
            <img src={railway} alt="Avatar" style={{width:300 , height:400}} />
            <div className="container">
            <h4><b>Railway Reservation System</b></h4>
            <p>Ticket Booking website made using HTML, CSS, PHP, MySQL. </p>
                <div className="center">
                <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
               <div className="Tilt-inner">
               <a href="https://github.com/Upendrafalak/vrctc"  target="_blank" rel="noreferrer noopener">
                    <img src={GH} alt="github" />

                </a> 
                </div>
               </Tilt>

                </div>
 

            </div>
                
            
            </div>
    
           
           <div className="card" >
           
           <img src={crypto} alt="Avatar" style={{width:300 , height:400}} />
           <div className="container">
           <h4><b>Crypto Tracker</b></h4>
           <p>1.Live Updates about various cryptocurrencies<br/>
               2. Real time value updation  
            </p>
               <div className="center">
               <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
              <div className="Tilt-inner">
              <a href="https://github.com/Upendrafalak/Crypto-Tracker-Python"  target="_blank" rel="noreferrer noopener">
                   <img src={GH} alt="github" />

               </a> 
               </div>
              </Tilt>

               </div>


           </div>
               
           
           </div> 

         <div className="card" >
         <img src={project} alt="Avatar" style={{width:300 , height:400}} />
         <div className="container">
         <h4><b>Project Showcase</b></h4>
         <p>List of all the projects of a particular student</p>
            <div className="center">
                <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
               <div className="Tilt-inner">
               <a href="https://github.com/Upendrafalak/Project_Showcase"  target="_blank" rel="noreferrer noopener">
                    <img src={GH} alt="github" />

                </a> 
                </div>
               </Tilt>

                </div>
            
         </div>
         </div>

    </div>
</div>
    );
}

export default Card;