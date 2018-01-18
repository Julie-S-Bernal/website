import React    from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import profilepic from '../../images/profilepic.png';


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
          <div className="top"></div>
        </Grid>
        <Grid container spacing={24} >
          <Grid container justify="center" item xs={2} sm={2} md={2} lg={2} xl={2}>
          </Grid>
          <Grid container justify="center" item xs={8} sm={8} md={8} lg={8} xl={8}>
            {/* <div className="circle-text"> */}
            <div className="text_box">
               <img with='100%' height='100%' className="portrait" src={profilepic}></img>
            {/* <a href="https://imgur.com/zCX1a7b"><img className="portrait" src="https://i.imgur.com/zCX1a7b.png" title="source: imgur.com" /></a> */}
            </div>
          {/* </div> */}

          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          </Grid>
          <Grid container justify="center" item xs={2} sm={2} md={2} lg={2} xl={2}>
          </Grid>
          <Grid container justify="center" item xs={8} sm={8} md={8} lg={8} xl={8}>
            <div className="text_box">
              <h1 className="name">Julie Bernal</h1>
              <p className="text"><em className="green">Junior Web Developer</em></p>
              <p className="interest"> I am interested in  <em className="pink">Front End</em> and <em className="pink">Full Stack </em> roles.</p>
              <hr className="hori"></hr>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
          <section id="main">
          <h1 className="about">ABOUT ME</h1>
        I always loved technology and for a long time, I thought that I would not fit into the programming world. As a result, I studied Art and International Relations but I never really found my place there. <br></br> At my previous internship, I was put in charge to revamp the intranet and I felt limited due to my lack of knowledge in coding. I took this as a learning opportunity and decided to learn CSS and HTML so that I could improve the design of these pages. that s when I realised that coding was definetely for me!
        I took the Web Development Immersive course at General Assembly and I am extremely happy with my choice. <br></br>
        GA taught me how to understand code and how its different components interact with each other. I am now capable to do Express, MEAN and MEARN stack application. I especially love React and I am currently learning python.<br></br><em className="forward">I am looking forward to my future coding job!</em>
         </section>

         </Grid>
         <Grid container justify="center" item xs={2} sm={2} md={2} lg={2} xl={2}>
         </Grid>
         <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
           <hr className="hori"></hr>
         </Grid>
         <Grid container justify="center" item xs={2} sm={2} md={2} lg={2} xl={2}>
         </Grid>
         <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
           <section id="skills">
             <h1 className="about">SKILLS</h1>
              <i className="devicon devicon-angularjs-plain"></i>
              <i className="devicon devicon-atom-original"></i>
              <i className="devicon devicon-visualstudio-plain"></i>
              <i className="devicon devicon-webstorm-plain"></i>
              <i className="devicon devicon-apple-original"></i>
              <i className="devicon devicon-babel-plain"></i>
              <i className="devicon devicon-bootstrap-plain"></i>
              <i className="devicon devicon-sass-original"></i>
              <i className="devicon devicon-css3-plain"></i>
              <i className="devicon devicon-express-original"></i>
              <i className="devicon devicon-git-plain"></i>
              <i className="devicon devicon-github-plain-wordmark"></i>
              <i className="devicon devicon-gulp-plain"></i>
              <i className="devicon devicon-heroku-line-wordmark"></i>
              <i className="devicon devicon-html5-plain"></i>
              <i className="devicon devicon-jquery-plain-wordmark"></i>
              <i className="devicon devicon-javascript-plain"></i>
              <i className="devicon devicon-mocha-plain"></i>
              <i className="devicon devicon-mongodb-plain-wordmark"></i>
              <i className="devicon devicon-nodejs-plain"></i>
              <i className="devicon devicon-postgresql-plain"></i>
              <i className="devicon devicon-python-plain"></i>
              <i className="devicon devicon-react-original"></i>
              <i className="devicon devicon-rails-plain"></i>
              <i className="devicon devicon-ruby-plain"></i>
              <i className="devicon devicon-webpack-plain"></i>
              <i className="devicon devicon-illustrator-plain"></i>
              <i className="devicon devicon-photoshop-plain"></i>
              <i className="devicon devicon-slack-plain"></i>
              <i className="devicon devicon-trello-plain"></i>

             </section>
             </Grid>
             <section id="skills">
             <Grid  item xs={3} sm={6} md={3} lg={3} xl={3}>
               <div className="image_test"></div>
             </Grid>
             <Grid item xs={3} sm={6} md={3} lg={3} xl={3}>
                <div className="image_test"></div>
             </Grid>
             <Grid item xs={3} sm={6} md={3} lg={3} xl={3}>
                <div className="image_test"></div>
             </Grid>
             <Grid item xs={3} sm={6} md={3} lg={3} xl={3}>
                <div className="image_test"></div>
             </Grid>
           </section>
         <div className="overlay" >
         </div>
        </Grid>



      </div>

    );
  }
}


export default ProjectsIndex;
