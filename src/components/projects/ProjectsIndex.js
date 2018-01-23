import React    from 'react';
import Grid from 'material-ui/Grid';
import profilepic from '../../images/profilepic.png';
import Button from 'material-ui/Button';
import project1 from '../../images/project1.png';
import project2 from '../../images/project2a.png';
import project3 from '../../images/project3a.png';
import project4 from '../../images/project4b.png';

// import backImage from '/images/website.svg';



class ProjectsIndex extends React.Component {
  render() {

    return (

      <div>

        <Grid container spacing={0} >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
            <div className="text_box">
              <img with='100%' height='100%' className="portrait" src={profilepic}></img>
            </div>
          </Grid>

          <Grid container spacing={0} >
            <Grid justify="center" item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="text_box">
                <h1 className="name">Julie Bernal</h1>
                <p className="text"><em className="green">Junior Web Developer</em></p>
                <p className="interest"><em className="pink">Front End / Full Stack </em> </p>
                <p className="interest"><em className="pink">Looking for a job </em> </p>
                <hr className="hori"></hr>
                <Button className="button" raised color="accent"> <a className="button-name" href="mailto:julies.bernal@gmail.com" target="_top">Contact me</a> </Button>
                <Button className="button" raised color="accent"> <a className="button-name" href="https://github.com/Julie-S-Bernal" target="_top">GitHub</a> </Button>

              </div>
            </Grid>
          </Grid>
          <Grid container spacing={0} >
            <Grid justify="center" item xs={12} sm={12} md={12} lg={12} xl={12}>
              <section id="main">
                <h1 className="about">ABOUT ME</h1>
                <p className= "about-text">
                  I just completed a 3 month Web Development Immersive boot camp at General Assembly where I was taught Restful, MEAN and MERN stacks applications.
                  I am currently learning Python, reinforcing my current coding skills and working on an app.</p>
                <p className= "about-text">
                  I became a coder enthusiast after completing a communication internship at Oak Foundation where I had the chance to revamp the front end of the intranet as well as to assist in the construction of their new website. Previously I studied Art and International Relations which allow me to approach coding with a different mind.</p>
                <p className= "about-text">
                  In the near future, I intend to combine my 3 backgrounds to become a full stack developer, using creativity, design, and programming to find the best-fitted solutions for companies.</p>
              </section>

            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <hr className="hori"></hr>
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

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="vertical"> <h1 className="projects"> Latest <br></br>Projetcs</h1>
              </div>
            </Grid>
            <Grid container spacing={0}>

              <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
                <h2 className="title">
                    Game -What the Hell?
                </h2>
                <div className="game_container">
                  <img className="image" src={project1}></img>
                </div>
                <div className="tech-container">
                  <h4 className="tech">jQuery | CSS3 | HTML5 | Babel | Webpack </h4>
                </div>
                <div className="description">
                  <div className="t-align">
                    <p className="description_text">
                    What the hell is an endless flyer game. This app features collisions, key binding, timers, scores and sounds.
                    </p>
                  </div>
                  <div className="b-align">
                    <Button className="link-button" raised color="accent"> <a className="button-name"  href="https://nameless-cliffs-17077.herokuapp.com"> Heroku </a></Button>
                    <Button className="link-button" raised color="accent"> <a className="button-name"  href="https://github.com/Julie-S-Bernal/WDI_PROJECT_1"> GitHub </a></Button>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>

                <h2 className="title">
                    Wesite- TeaMood
                </h2>
                <div className="website_container">
                  <img className="image" src={project2}></img>
                </div>
                <div className="tech-container">
                  <h4 className="tech"> EJS | Express | HTML5 | CSS3 | Mongoose | Morgan | Bluebird | MongoDB | Bootstrap | Bcrypt | Gulp | Nodemon </h4>
                </div>
                <div className="description">
                  <p className="description_text">
                     TeaMood is an app that put tea lovers in contact so that they can find together new teas to try.
                     This app features login, user authentication, creation of posts, comments and error handlers.S
                  </p>
                  <div className="b-align">
                    <Button className="link-button" raised color="accent"><a className="button-name" href="https://project-2-teas.herokuapp.com/register"> Heroku </a></Button>
                    <Button className="link-button" raised color="accent"><a className="button-name" href="https://github.com/Julie-S-Bernal/WDI_PROJECT_2"> GitHub</a></Button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>

                <h2 className="title">
                    App -ExploreMore
                </h2>
                <div className="app_container">
                  <img className="image" src={project3}></img>
                </div>
                <div className="tech-container">
                  <h4 className="tech"> MEAN | Bulma | HTML5 | CSS3 |  Googlemap API  | Mocha | Chai | Istambul | Bcrypt | Bluebird | Expres | Express-jwt | Mongoose| MongoDB  | Babel | Bower| Cors | Gulp | Husky | Supertest | Morgan | Istambul </h4>
                </div>
                <div className="description">
                  <p className="description_text">
                     A MEAN stack application done as a group. We managed to work well as a team by doing pair programming. I coded alone errors handlers, the menu animation, part of the front-end and the styling of the maps.
                  </p>
                  <div className="b-align">
                    <Button className="link-button" raised color="accent"><a className="button-name"  href="https://exploremore-julie.herokuapp.com/"> Heroku </a></Button>
                    <Button className="link-button" raised color="accent"><a className="button-name" href="https://github.com/JacieWDI/WDI_GROUP_PROJECT"> GitHub </a></Button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>

                <h2 className="title">
                    Phone App- Spare
                </h2>
                <div className="phone_container">
                  <img className="image" src={project4}></img>
                </div>
                <div className="tech-container">
                  <h4 className="tech"> MERN | Material-ui| HTML5 | Webpack | CSS3 |  API  | Axios | Bcrypt | Bluebird | Express | JSOn web token| React-dom | Mongoose | MongoDB | Morgan  | Babel | Chai | Mocha | Enzyme | Istambul | Supertest | Sinon | Victory | Moment.js</h4>
                </div>
                <div className="description">
                  <p className="description_text">
                      Spare is an app that help the user save money by helping him plan his budget and giving in real time the exchange rates. The user spendings are also recorded and displayed into graphs so he/she can know exactly how much or less he/she has spend in his/her travel.
                     This app features an external API, login, registration, authentication, tests, error-handlers, calendars, pickers, real-time data, forms.
                  </p>
                  <div className="b-align">
                    <Button className="link-button" raised color="accent"> <a className="button-name" href="https://frozen-cliffs-27123.herokuapp.com/login"> Heroku </a></Button>
                    <Button className="link-button" raised color="accent"> <a className="button-name"  href="https://github.com/Julie-S-Bernal/WDI_PROJECT_4"> GitHub </a></Button>
                  </div>



                </div>
              </Grid>


            </Grid>


          </Grid>

          <div className="overlay" >
          </div>
        </Grid>


      </div>

    );
  }
}


export default ProjectsIndex;
