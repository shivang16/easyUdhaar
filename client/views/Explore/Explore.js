import React from 'react';
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
} from '../Dashboard/components';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4)
    }
}));

const Dashboard = () => {
    const classes = useStyles();

    const userSession = JSON.parse(auth.getJWT());
    const role = userSession.user.role;
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
                                text="Credit Amount Funded"
                                amount="10,000"
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
                                percent={12}
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
