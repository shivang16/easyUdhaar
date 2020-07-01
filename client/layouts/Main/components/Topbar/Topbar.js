import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Hidden, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import InputIcon from '@material-ui/icons/Input';
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import auth from './../../../../auth/auth-helper';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    backgroundColor: theme.palette.primary
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  borrowButton: {
    marginLeft: theme.spacing(1),
    backgroundColor: "#afd1f0",
    textColor:'black',
    padding: theme.spacing(1)
  }
}));

const Topbar = ({ history }, props) => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <Typography
          gutterBottom
          variant="h2"
          color="inherit"
        >
          💳easyUdhaar
        </Typography>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <Button className={classes.borrowButton} variant="outlined" onClick={handleClick}>
            Create Campaign
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to="/business-loan">
              <MenuItem onClick={handleClose}>Business Loan</MenuItem>
            </Link>
            <Link to="/personal-loan">
              <MenuItem onClick={handleClose}>Personal Loan</MenuItem>
            </Link>
          </Menu>
          <Button color="inherit">About Us</Button>
          <IconButton
            className={classes.signOutButton}
            color="inherit"
            onClick={() => { auth.clearJWT(() => history.push('/sign-in')) }}
          >
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default withRouter(Topbar);
