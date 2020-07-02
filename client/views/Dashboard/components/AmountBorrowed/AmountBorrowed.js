import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/Money';
import auth from './../../../../auth/auth-helper';
import { dashboard } from './../../../../auth/api-dashboard';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  }
}));

const AmountBorrowed = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const myText = props.text;
  const myAmount = props.amount;
  const iscash =true;

  // const [myprops, setMyprops] = useState([]);
  // const userSession = JSON.parse(auth.getJWT());
  // const token = userSession.token;
  
  // console.log(myprops);

  // useEffect(() => {
  //   dashboard(token).then((data) => {
  //     if (data && data.error) {
  //       console.log(data.error);
  //     } else {
  //       setMyprops(data);
  //     }
  //   });
  // }, []);


  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            {iscash&&(
              <div>
              <Typography
          
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              {myText}
            </Typography>
            
            <Typography variant="h3"><p>&#x20B9; {myAmount}</p></Typography>
            </div>
            )}
            {!iscash && (<div><Typography
            
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              {myText}
            </Typography>

              <Typography variant="h3"><p>{myAmount}</p></Typography>
            </div>
            )}
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <MoneyIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

AmountBorrowed.propTypes = {
  className: PropTypes.string
};

export default AmountBorrowed;
