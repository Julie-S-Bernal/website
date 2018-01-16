import React    from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';



// import backImage from '/images/website.svg';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  }

});

class ProjectsIndex extends React.Component {
  render() {

    return (

      <div>
        <Grid container spacing={24} >
          <div class="top"></div>
        </Grid>
        <Grid container spacing={24} >
          <Grid justify="center" item xs={2} sm={2} md={2} lg={2} xl={2}>
          </Grid>
          <Grid justify="center" item xs={8} sm={8} md={8} lg={8} xl={8}>
            {/* <div class="circle-text"> */}
            <div class="text_box">
            <a href="https://imgur.com/zCX1a7b"><img class="portrait" src="https://i.imgur.com/zCX1a7b.png" title="source: imgur.com" /></a>
            </div>
          {/* </div> */}

          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          </Grid>
          <Grid justify="center" item xs={2} sm={2} md={2} lg={2} xl={2}>
          </Grid>
          <Grid justify="center" item xs={8} sm={8} md={8} lg={8} xl={8}>
            <div class="text_box">
              <p class="text">Hello</p>
              <p class="text">I am a <em class="green">Junior Web Developer</em></p>
              <p class="text"> I am interested in both <em class="pink">Front End</em> and <em class="pink">Full Stack </em> roles.</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
          <section id="main">
          <h1 class="about">ABOUT ME</h1>
        I always loved technology and for a long time, I thought that I would not fit into the programming world. As a result, I studied Art and International Relations but I never really found my place there. <br></br> At my previous internship, I was put in charge to revamp the intranet and I felt limited due to my lack of knowledge in coding. I took this as a learning opportunity and decided to learn CSS and HTML so that I could improve the design of these pages. that's when I realised that coding was definetely for me!
        I took the Web Development Immersive course at General Assembly and I am extremely happy with my choice. <br></br>
        GA taught me how to understand code and how its different components interact with each other. I am now capable to do Express, MEAN and MEARN stack application. I especially love React and I am currently learning python.<br></br><em class="green">I am looking forward to my future coding job,</em> as I will learn more and encounter new challenges!
         </section>
         </Grid>
         <div class="overlay">
         </div>
        </Grid>
      {/* <img src={require('./images/me.jpg')} /> */}



      </div>

    );
  }
}


export default ProjectsIndex;
