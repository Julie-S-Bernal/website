import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { grey } from 'material-ui/colors';
import { Link } from 'react-router-dom';
// import { MenuList, MenuItem } from 'material-ui/Menu';
// import { ListItemIcon, ListItemText } from 'material-ui/List';
// import SendIcon from 'material-ui-icons/Send';
// import DraftsIcon from 'material-ui-icons/Drafts';
// import InboxIcon from 'material-ui-icons/MoveToInbox';

const accent = grey['50'];

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  color: {
    ...grey,
    500: accent
  }
};


function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div class="navbar" className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton className={classes.menuButton} color="default" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Button href="#"color="default">About</Button>
          <Button color="default"> <Link to="/projects">Projects</Link> </Button>
          <Button color="default"><a href="https://www.linkedin.com/in/julie-bernal-jesign/">Linkedin</a></Button>
          <Button color="default"><a href="https://github.com/Julie-S-Bernal">GitHub</a></Button>
        </Toolbar>
        {/* <MenuList>
          <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <SendIcon />
          </ListItemIcon>
          <ListItemText classes={{ text: classes.text }} inset primary="Sent mail" />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText classes={{ text: classes.text }} inset primary="Drafts" />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText classes={{ text: classes.text }} inset primary="Inbox" />
        </MenuItem>
        </MenuList> */}
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
