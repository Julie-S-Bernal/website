import React             from 'react';

import { Route, Switch } from 'react-router-dom';
import ProjectsIndex from '../projects/ProjectsIndex';
// import ProjectsShow  from  '../projects/ProjectsShow';
// import ProtectedRoute from './ProtectedRoute';

const Routes = () => {
  return (

    <Switch>
      <Route exact path="/" component={ProjectsIndex} />
      {/* <Route path="/projects" component={ProjectsShow} /> */}
    </Switch>

  );
};

export default Routes;
