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
          <Grid justify="center" item xs={2} sm={2} md={2} lg={2} xl={2}>
          </Grid>
          <Grid justify="center" item xs={8} sm={8} md={8} lg={8} xl={8}>
            <div class="circle-text">

            </div>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
        </Grid>
        <Grid justify="center" item xs={2} sm={2} md={2} lg={2} xl={2}>
        </Grid>
        <Grid justify="center" item xs={8} sm={8} md={8} lg={8} xl={8}>
            <p class="text">Hello</p>
            <p class="text">I m a Junior Developer</p>
          </Grid>
        </Grid>
      </div>

    );
  }
}

export default ProjectsIndex;
