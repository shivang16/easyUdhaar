import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { dashboard } from './../../auth/api-dashboard';
import auth from './../../auth/auth-helper';

import {
  AmountLent,
  AmountBorrowed,
  TasksProgress,
  LendingHistory,
  TotalRewards,
  ActiveCampaigns,
  TotalCampaigns
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  const [myprops, setMyprops] = useState([]);
  const userSession = JSON.parse(auth.getJWT());
  const token = userSession.token;
  const role = userSession.user.role;
  
  // console.log(myprops);

  useEffect(() => {
    dashboard(token).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setMyprops(data);
      }
    });
  }, []);
  
  let percent;
  if(myprops !== [])
    percent = (myprops.totalAmountRecived / myprops.totalAmountLend) * 100 ;
  // console.log(userSession.user.name);

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        {
          !role && (
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <AmountLent />
            </Grid>
          )
        }
        {
          !role && (
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <TotalCampaigns />
            </Grid>
          )
        }
        {
          role && (
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <AmountBorrowed
                text="Credit Amount Expected"
                amount="24,000"
              />
            </Grid>
          )
        }
        {
          role && (
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <AmountBorrowed
                text="Credit Amount received"
              amount="760.45"
              // iscash = {false}
              />
            </Grid>
          )
        }
        {
          role && (
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <TasksProgress
              text="Your Campaign Progress"
              percent={70}
               />
            </Grid>
          )
        }
        {
          role && (
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <AmountBorrowed
                text="Amount Repaid"
                amount="5,000"
              />
            </Grid>
          )
        }
        {
          !role && (
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <TasksProgress
              text="Return on Investment"
              percent = {percent.toPrecision(2)}
               />
            </Grid>
          )
        }
        {
          !role && (
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <TotalRewards />
            </Grid>
          )
        }
        {
          role && (
            <Grid
            item
            lg={12}
            md={12}
            xl={9}
            xs={12}
          >
            <ActiveCampaigns />
          </Grid>
          )
        }
        {
          !role && (
            <Grid
              item
              lg={12}
              md={12}
              xl={9}
              xs={12}
            >
              <LendingHistory />
            </Grid>
          )
        }
      </Grid>
    </div>
  );
};

export default Dashboard;
