import { Link, animateScroll as scroll } from "react-scroll";

import React,{Component} from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

class Work extends Component {


state={
  pics:[]
}

componentDidMount() {
     fetch("https://picsum.photos/v2/list?page=2&limit=100")
      .then(res=>res.json())
        .then(data=> {
                   this.setState({
                     pics:data
                   })
            })
                         
}

 scrollToTop = () => {
    scroll.scrollToTop();
  }

  images=()=>{

      return this.state.pics.map(element => {
         return    element.download_url
    })
  }

  render(){
    return(
        <div class="work">
          <h1 style={{'text-align':'center','margin':'3em' ,'position':'relative','top':'60px'}}>Projects</h1>
            <div  class="projects">
                 <div>
                          
                        <div class="project-card">
                            <a href="https://github.com/engahmed10/bookstore-frontend"  target="_blank"> <img style={{'width':'20px','height':'20px','position':'relative','top':'3em','left':'2em'}} src="./iconfinder_github_273178.png" alt="github" /> </a>
                            <a href="https://engahmed10.github.io/final_project_using_redux-react_and_rails_api" target="_blank"> <img style={{'width':'20px','height':'20px',
                            'position':'relative','top':'3em','left':'15em','background-color':'silver'}} 
                          src="./blogIcon.svg" alt="blog" /> </a>
                            <video width="250" height="180"  controls>
                                <source src="bookstorereact.mp4" type="video/mp4" />
                            </video>
                             <h6>Book Store project</h6>
                        </div>

                        <div class="project-card">
                          <a href="https://github.com/engahmed10/tech-course" target="_blank"> <img style={{'width':'20px','height':'20px','position':'relative','top':'3em','left':'2em'}} src="./iconfinder_github_273178.png" alt="github" /> </a>
                          <a href="https://engahmed10.github.io/rails_course_mangement" target="_blank"> <img style={{'width':'20px','height':'20px','position':'relative','top':'3em','left':'15em','background-color':'silver'}} 
                          src="./blogIcon.svg" alt="blog" /> </a>
                          <video width="250" height="180"   controls>
                              <source src="tech-course.mp4" type="video/mp4" />
                          </video>
                            <h6>Rails Tech Course Project</h6>
                        </div>

                        <div class="project-card">
                          <a href="https://github.com/engahmed10/sinatra-medical-history"  target="_blank"> <img style={{'width':'20px','height':'20px','position':'relative','top':'3em','left':'2em'}} src="./iconfinder_github_273178.png" alt="github" /> </a>
                          <a href="https://engahmed10.github.io/sinatra_medical_history" target="_blank"> <img style={{'width':'20px','height':'20px','position':'relative','top':'3em','left':'15em','background-color':'silver'}} 
                          src="./blogIcon.svg" alt="blog" /> </a>
                          <video width="250" height="180"   controls>
                              <source src="medical-history.mp4" type="video/mp4" />
                          </video>
                            <h6>Sinatra medical history project</h6>
                        </div>

                        <div class="project-card">
                           <a href="https://github.com/engahmed10/js-rs-travelguide "target="_blank">
                            <img style={{'width':'20px','height':'20px','position':'relative','top':'3em','left':'2em'}} src="./iconfinder_github_273178.png" alt="github" /></a>
                          <a href="https://engahmed10.github.io/javascript_rails_travel_project" target="_blank"> 
                          <img style={{'width':'20px','height':'20px','position':'relative','top':'3em','left':'15em','background-color':'silver'}} 
                          src="./blogIcon.svg" alt="blog" /> </a>
                          <video width="250" height="180"   controls>
                              <source src="js-rs-travel.mp4" type="video/mp4" />
                          </video>
                            <h6>Javascript Travel Guide project</h6>
                        </div>
                       

                        <div class="project-card">
                            <a href="https://github.com/engahmed10/besthotels"  target="_blank"> <img style={{'width':'20px','height':'20px','position':'relative','top':'3em','left':'2em'}} src="./iconfinder_github_273178.png" alt="github" /> </a>
                            <a href="https://engahmed10.github.io/command_line_interface_project" 
                            target="_blank"> <img style={{'width':'20px','height':'20px','position':'relative','top':'3em','left':'15em','background-color':'silver'}} 
                            src="./blogIcon.svg" alt="blog" /> </a>
                            <video width="250" height="180"   controls>
                                <source src="CLI.mp4" type="video/mp4" />
                            </video>
                             <h6>ClI Ruby beest hotels project</h6>
                        </div>

                        <div class="project-card">
                      
                            <video width="250" height="180"  controls>
                                <source src="clijava.mp4" type="video/mp4" />
                            </video>
                             <h6>ClI Java program</h6>
                        </div>
                    
              
                 </div>
             
            </div>
             <div>
                
             
             </div>  
            
            <div class="div-scroll-work">
              <img
            src="./double-arrow-top.svg" 
            className="scroll-logo-3"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          </div >
                <div class="pic">
                 <div className="slide-container" >
                    <Slide  style={{'width':'700px',"margin-left":"20em"}}>  
                    { this.images().map(el=> 
                        <div className="each-slide">
                          <div style={{'backgroundImage': `url(${el})`}}>
                            <span>  <img src={el} 
                                style={{'height':'400px','width':'700px'}}
                                alt="p"/>
                            </span>
                          </div>
                        </div>
                    )}
                    </Slide>
                  </div>  
                  </div>
  
                      
        </div>
       
    )
    }
}

export default Work