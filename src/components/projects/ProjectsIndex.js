import React    from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

class ProjectsIndex extends React.Component {
  render() {

    return (

      <div>
        <Grid container spacing={24} >
          <Grid justify="center" item xs={8} sm={8} md={8} lg={8} xl={8}>
            <h1>
              <em class="planet left">""</em>
            </h1>
            <div class="circle-text">

            </div>
            <p class="text">Hello</p>
            <p class="text">I m a Junior Developer</p>
            </Grid>
            <Grid item xs={10} sm={8} md={8} lg={8} xl={8}>
            <p class="interest">I am interested in both <b>Front End</b> and <b>Full Stack</b> roles</p>
          </Grid>
        </Grid>
      </div>

    );
  }
}

export default ProjectsIndex;
