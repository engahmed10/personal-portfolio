import Menue from './menue';
import emailjs from 'emailjs-com'
import React,{Component} from 'react'
import FlashMessage from 'react-flash-message';
import { Link, animateScroll as scroll } from "react-scroll";


class  Contact  extends Component {

    state={
        
        name:"",
        email:"",
        subject:"",
        description:"",
        flashMessage:false
    }
scrollToTop = () => {
    scroll.scrollToTop();
  };

    handleChange=(e)=>{

        this.setState({[e.target.name]:e.target.value})
    }

     handleSubmit=(e)=>{

             e.preventDefault();
             const {name,email,subject,description} = this.state

            let  data={
                    
                    name:name,
                    subject:subject,
                    from_email:email,
                    message:description
            
                }

     
            if(data.name && data.subject && data.from_email && data.message){
                emailjs.send(

                    'service_cu8ehqn',
                    'template_bad2ogo',
                    data,
                    'user_gCgWwGkmX0fM8WJqU9i4y'
                 
                   )
              
                   .then((result) => {
                                 console.log(result.text);
                                this.setState({ flashMessage:true})

                            }, (error) => {
                                console.log(error.text);
                            });
               }else{
                   alert('name,email,subject and description cant be empty ')
               }

                    this.setState({
                                name:"",
                                email:"",
                                subject:"",
                                description:""

                     })
                
     }

    render(){

    return(

            <div  class="contact">
              
         
                <div class="contact-card" >
                   <h1  >contact me</h1>
                
                    <form   onSubmit={(e)=>this.handleSubmit(e)} >
                        <label  for="name"> Name</label>
                        <input type="text" name="name" placeholder="Your Name here"  onChange={(e)=>this.handleChange(e)} style={{'margin-left':'50px'}} /><br/>
                        <label  for="email">Email</label>
                        <input type="text" name="email" onChange={(e)=>this.handleChange(e)}  placeholder="Your email here"  style={{'margin-left':'50px'}} /><br/>
                        <label  for="subject">Subject</label>
                        <input type="text" name="subject" onChange={(e)=>this.handleChange(e)}  placeholder=" Subject here"  style={{'margin-left':'45px'}} /><br/>
                        <label id="description-label" for="description" >Description</label>
                        <textarea  name="description" rows="6" cols="20" onChange={(e)=>this.handleChange(e)} 
                         placeholder="Write here"></textarea><br/>
                        <input  class="submit" type="submit" value="send me" />
                         {this.state.flashMessage?
                          <FlashMessage duration={5000}>
                          <strong>Successfully sent !</strong>
                          </FlashMessage>:""
                         }
                        
                    </form>
                 </div>

                 <div class="contact-bar">
                       <ul>
                         <li>
                         <img  style={{'width':'50px','height':'50px'}} src="./finger-touching-tablet-screen.png" />
                         <p style={{'margin-left':'-1em','font-size':'25px' }} >5125905384</p>
                          </li>
                         <li><img style={{'width':'50px','height':'50px'}} src="./home-address.svg" />
                          <p style={{'margin-left':'-6em','font-size':'25px' }}  >Pflugerville,78660,Tx,USA</p>
                         </li>
                       </ul> 
                 </div>

                 <div class="scroll-logo-2">
                        <img   className="img-scroll-contact"
                        src="./double-arrow-top.svg" 

                        alt="Logo"
                        onClick={this.scrollToTop}
                    />

                </div>

            </div>
    )
    }
}

export default Contact