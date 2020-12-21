import Menue from './menue';

const About=()=>{

    return(
        <div  class="about" style={{"background-color":"white","display":"grid"}}>
            <Menue />
           <div class="about-container">
             
              <section style={{'padding':'13em'}}>
               <h1 style={{"text-align":"center"}}>ABOUT ME</h1>
                 <p  style={{'word-spacing': 'normal','width':'40%','margin-left':'19em','text-align': 'left'}}>Full stack we developer
                    ,i have expereice with Ruby on Rails,javascript,HTML,CSS,java,python,
                    c,c++,and modren javascript libraries React,redux,basic level of:python,C,C++,
                    matlab,omnet++,General IT skills: Linux, Windows,macOS,network,CCNA,Raid,·Application
                    support, Hardware, and software upgrades,troubleshooting and diagnostics,hardware configuration,
                    Windows XP/Vista/8/10/, Technical troubleshooting, Computer maintenance.
                </p>
              </section>
               <img   style={{'width':'20vw','height':'40vh','position':'relative','bottom':'500px','left':'10%'}} src='ahmedafandy.png' alt="selfphoto"  />

             </div>
        </div>
    )
}

export default About