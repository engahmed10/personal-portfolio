import Menue from './menue';
import FootBar from './footbar'
const Work=()=>{

    return(
        <div>
          <Menue /> 
          <h1 style={{'text-align':'center','margin':'3em'}}>Bootcamp Projects</h1>
            <div  class="projects">
                 <div>
                          
                        <div class="project-card">
                            <a href="https://github.com/engahmed10/bookstore-frontend"  target="_blank"> <img style={{'width':'20px','height':'20px','position':'relative','top':'3em','left':'2em'}} src="./iconfinder_github_273178.png" alt="github" /> </a>
                            <video width="320" height="240" controls>
                                <source src="bookstorereact.mp4" type="video/mp4" />
                            </video>
                             <h6>Book Store project</h6>
                        </div>

                        <div class="project-card">
                          <a href="https://github.com/engahmed10/tech-course" target="_blank"> <img style={{'width':'20px','height':'20px','position':'relative','top':'3em','left':'2em'}} src="./iconfinder_github_273178.png" alt="github" /> </a>
                          <video width="320" height="240" controls>
                              <source src="tech-course.mp4" type="video/mp4" />
                          </video>
                            <h6>Rails Tech Course Project</h6>
                        </div>

                        <div class="project-card">
                          <a href="https://github.com/engahmed10/sinatra-medical-history"  target="_blank"> <img style={{'width':'20px','height':'20px','position':'relative','top':'3em','left':'2em'}} src="./iconfinder_github_273178.png" alt="github" /> </a>
                          <video width="320" height="240" controls>
                              <source src="medical-history.mp4" type="video/mp4" />
                          </video>
                            <h6>Sinatra medical history project</h6>
                        </div>

                        <div class="project-card">
                           <a href="https://github.com/engahmed10/js-rs-travelguide "target="_blank"> <img style={{'width':'20px','height':'20px','position':'relative','top':'3em','left':'2em'}} 
                          src="./iconfinder_github_273178.png" alt="github" /> </a>
                          <video width="320" height="240" controls>
                              <source src="js-rs-travel.mp4" type="video/mp4" />
                          </video>
                            <h6>Javascript Travel Guide project</h6>
                        </div>
                       

                        <div class="project-card">
                            <a href="https://github.com/engahmed10/besthotels"  target="_blank"> <img style={{'width':'20px','height':'20px','position':'relative','top':'3em','left':'2em'}} src="./iconfinder_github_273178.png" alt="github" /> </a>
                            <video width="320" height="240" controls>
                                <source src="https://cs252.clideo.com/p/pDPby5epxucJXOPTvAPvkQ/8890e0a993227d4ab8297fc46038f33f/zoom-0_fTIkL2Y4_Pxey.mp4" type="video/mp4" />
                            </video>
                             <h6>ClI beest hotels project</h6>
                        </div>
                      
              
                 </div>
             
            </div>
          <FootBar/>
        </div>
    )
}

export default Work