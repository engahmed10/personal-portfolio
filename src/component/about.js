import { Link, animateScroll as scroll } from "react-scroll";

const About=()=>{
const scrollToTop = () => {
    scroll.scrollToTop();
  };

    return(
        <div  class="about" >
          <img class="self-img" src='ahmedafandy.png' alt="selfphoto"  />

           <div class="about-card">

                   <h1 style={{"text-align":"center" ,'font-family': 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
                           'font-variant': 'small-caps'}}>ABOUT ME</h1>
                   
                      <p>
                          Trilingual computer engineer and recent software engineering bootcamp graduate 
                        with an international background in software ,hardware and tech support. Solves 
                        challenges by leveraging his experience in tech support, his various programming languages, 
                        and his innate learning agility. Believes in the power of combining analysis with hard
                        work.<br/><br/>
                        Programming skills: Ruby on Rails, Javascript, HTML, CSS, java, SQL,
                        modren javascript libraries React,redux,basic level of: python,C,C++,c,
                        c++,matlab,General IT skills:Linux,Windows,macOS,network,CCNA,
                        Raid·Application support, Hardware, and software upgrades,troubleshooting 
                        and diagnostics, hardware configuration,Windows XP/Vista/8/10/, Technical
                        troubleshooting, Computer maintenance.
                      </p> 
            </div>
            <div  class="div-scroll-about">
              <img class="scroll-logo"
              src="./double-arrow-top.svg"  
              alt="Logo"
              onClick={scrollToTop}
              />
            </div>
         </div>

    )
}

export default About