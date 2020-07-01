import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography, Button } from '@material-ui/core';
import auth from './../../../../../../auth/auth-helper'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const userSession = JSON.parse(auth.getJWT());

  const user = {
    name: userSession.user.name,
    avatar: '/images/avatars/avatar_11.png'
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        className={classes.avatar}
        component={RouterLink}
        src={user.avatar}
        to="/settings"
      />
      <Typography
        className={classes.name}
        variant="h3"
      >
        {user.name}
      </Typography>
      <Button variant="outlined">
      <div style={{padding:"5px"}}>
          <Typography variant="body2">Credit Score</Typography>
        </div>
      <Typography variant="h2">777</Typography>
      </Button>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
