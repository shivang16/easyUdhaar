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
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel
} from '@material-ui/core';

import mockData from './data';
import { StatusBullet } from '../../../../components';
import { dashboard } from '../../../../auth/api-dashboard';
import auth from '../../../../auth/auth-helper';

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

const LendingHistory = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const [orders] = useState(mockData);
  const [myprops, setMyprops] = useState([]);
  const userSession = JSON.parse(auth.getJWT());
  const token = userSession.token;
  
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

  let userData;
  if(myprops)
    userData = myprops.data;


  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        classes="#fff"
        title="Lending History"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Transaction ID</TableCell>
                  <TableCell>Campaign</TableCell>
                  <TableCell sortDirection="desc">
                    <Tooltip
                      enterDelay={300}
                      title="Sort"
                    >
                      <TableSortLabel
                        active
                        direction="desc"
                      >
                        Date
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { userData && userData.map(data => (
                  <TableRow
                    hover
                    key={data.transactionId}
                  >
                    <TableCell>{data.transactionId}</TableCell>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>
                      {moment(data.lendingDate).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell>
                      <div className={classes.statusContainer}>
                        <StatusBullet
                          className={classes.status}
                          color={statusColors[(data.status) ? "repaid" : "pending"]}
                          size="sm"
                        />
                        { (data.status) ? "repaid" : "pending" }
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

LendingHistory.propTypes = {
  className: PropTypes.string
};

export default LendingHistory;
