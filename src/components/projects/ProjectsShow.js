import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 80

  }

});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="space"></div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <h2 className="title_show">
            PROJECT 1 -What the Hell?
          </h2>
          <div className="image">
          {/* <a href="https://imgur.com/kdJqQBr"><img className="image" src="https://i.imgur.com/kdJqQBr.png" title="source: imgur.com" /></a> */}
          </div>
          <h4 className="green_show">jQuery | CSS3 | HTML5 | Babel | Webpack </h4>
           <div className="description">
            <p className="description_text">
            What the hell is an endless flyer game. This app features collisions, key binding, timers, scores and sounds.
            Heroku link: https://nameless-cliffs-17077.herokuapp.com/

            GitHub: https://github.com/Julie-S-Bernal/WDI_PROJECT_1
            </p>
          </div>


        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>

            <h2 className="title_show">
            PROJECT 2 - TeaMood
            </h2>
            <div className="image">
          {/* <a href="https://imgur.com/9ph8Cjw"><img src="https://i.imgur.com/9ph8Cjw.png" title="source: imgur.com" /></a> */}
          </div>
            <h4 className="green_show"> EJS | Express | HTML5 | CSS3 | Mongoose | Morgan | Bluebird | MongoDB | Bootstrap | Bcrypt | Gulp | Nodemon </h4>
            <div className="description">
            <p className="description_text">
             TeaMood is an app that put tea lovers in contact so that they can find together new teas to try.
             This app features login, user authentication, creation of posts, comments and error handlers.
             Heroku link: https://project-2-teas.herokuapp.com/register
             GitHub: https://github.com/Julie-S-Bernal/WDI_PROJECT_2
          </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>

            <h2 className="title_show">
            PROJECT 3 -ExploreMore
            </h2>
            <div className="image">
            {/* <a href="https://imgur.com/tcflYta"><img src="https://i.imgur.com/tcflYta.png" title="source: imgur.com" /></a> */}
            </div>
              <h4 className="green_show"> MEAN | Bulma | HTML5 | CSS3 |  Googlemap API  | Mocha | Chai | Istambul | Bcrypt | Bluebird | Expres | Express-jwt | Mongoose| MongoDB  | Babel | Bower| Cors | Gulp | Husky | Supertest | Morgan | Istambul </h4>
              <div className="description">
            <p className="description_text">
             A MEAN stack application done as a group. We managed to work well as a team by doing pair programming. I coded alone errors handlers, the menu animation, part of the front-end and the styling of the maps.
            Heroku link: https://exploremore-julie.herokuapp.com/
            GitHub: https://github.com/JacieWDI/WDI_GROUP_PROJECT
          </p>
        </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>

            <h2 className="title_show">
            PROJECT 4 - Spare
            </h2>
            <div className="image">
            {/* <a href="https://imgur.com/h3khfkj"><img src="https://i.imgur.com/h3khfkj.png" title="source: imgur.com" /></a> */}
            </div>
            <h4 className="green_show"> MERN | Material-ui| HTML5 | Webpack | CSS3 |  API  | Axios | Bcrypt | Bluebird | Express | JSOn web token| React-dom | Mongoose | MongoDB | Morgan  | Babel | Chai | Mocha | Enzyme | Istambul | Supertest | Sinon | Victory | Moment.js</h4>
            <div className="description">
            <p className="description_text">
              Spare is an app that help the user save money by helping him plan his budget and giving in real time the exchange rates. The user spendings are also recorded and displayed into graphs so he/she can know exactly how much or less he/she has spend in his/her travel.
             This app features an external API, login, registration, authentication, tests, error-handlers, calendars, pickers, real-time data, forms.
            API. Heroku link: https://frozen-cliffs-27123.herokuapp.com/login
            GitHub: https://github.com/Julie-S-Bernal/WDI_PROJECT_4
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <p className="description_text">
            Website
            details upcoming...
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <p className="description_text">
            Wishee
            details upcoming...
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <p className="description_text">
            Bank App
            details upcoming...
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
