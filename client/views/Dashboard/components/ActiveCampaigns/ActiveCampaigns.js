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
import { repay } from './../../../../auth/api-payment';
// import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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
  const [open, setOpen] = React.useState(false);
  const [amountgiven, setAmountgiven] = React.useState(0);
  const [lendDataId, setLendDataId] = React.useState('');
  // const handleClickOpen = () => {
  //   setOpen(true);
  //   dataId
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = event => {
    setAmountgiven(event.target.value);
  }

  // const [orders, setOrders] = useState(mockData);
  // let dataId;
  const [myprops, setMyprops] = useState([]);
  const userSession = JSON.parse(auth.getJWT());
  const token = userSession.token;
  const role = userSession.user.role;

  useEffect(() => {
    dashboard(token).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setMyprops(data);
      }
    });
  }, []);

  const handleRepay = (event) => {
    event.preventDefault();
    const waladata = {
      lendingId: lendDataId,
      amountGiven: Number(amountgiven)
    }
    console.log(waladata);
    // handleClose();
    repay(token, waladata).then((data) => {
      if(data && data.error) {
        console.log(data.error);
      } else {
        console.log(data);
        handleClose();
      }
    });
    
  }

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
                          onClick={() => {
                            setLendDataId(lender.lendingId);
                            setOpen(true);
                          }}
                        >
                          Repay
                        </Button>
                      </div>
                      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send updates
                            occasionally.
                          </DialogContentText>
                          <TextField
                            autoFocus
                            margin="dense"
                            id="amount"
                            label="Enter Amount"
                            fullWidth
                            onChange={handleChange}
                          />
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose} color="primary">
                            Cancel
                          </Button>
                          <Button onClick={handleRepay} color="primary">
                            Make Payment
                          </Button>
                        </DialogActions>
                      </Dialog>
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
