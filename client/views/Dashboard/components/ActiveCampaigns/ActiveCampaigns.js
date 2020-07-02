import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel
} from '@material-ui/core';
// import {theme} from '.';

import mockData from './data';
import auth from './../../../../auth/auth-helper';
import { dashboard } from './../../../../auth/api-dashboard';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end',
    backgroundColor: 'white'
  },
  table:{
    color: 'blue',
  }
}));

const statusColors = {
  repaid: 'success',
  pending: 'danger'
};

const ActiveCampaigns = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [orders, setOrders] = useState(mockData);

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

  let lenderData;
  if(myprops.returnObject) {
    lenderData = myprops.returnObject.campaignLenders.campaignId;
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}>
      <CardHeader
        classes="#fff"
        title="Current Active Campaign"
        subtitle = "Personal"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Lender ID</TableCell>
                    <TableCell>Amount Given</TableCell>
                    <TableCell>Amount Pending</TableCell>
                  <TableCell sortDirection="desc">
                    <Tooltip
                      enterDelay={300}
                      title="Sort"
                    >
                      <TableSortLabel
                        active
                        direction="desc"
                      >
                          Due Date
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { lenderData && lenderData.map(lender => (
                  <TableRow
                    hover
                    key={lender.lendingId}
                  >
                    <TableCell>{lender.lendingId}</TableCell>
                    <TableCell>{lender.amountGiven}</TableCell>
                    <TableCell>{lender.amountPending}</TableCell>
                    <TableCell>
                      {lender.dueDate}
                    </TableCell>
                    <TableCell>
                      <div className={classes.statusContainer}>
                        <Button
                          color="blue"
                          variant="outlined"
                        >
                          Repay
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
    </Card>

  );
};

ActiveCampaigns.propTypes = {
  className: PropTypes.string
};

export default ActiveCampaigns;
