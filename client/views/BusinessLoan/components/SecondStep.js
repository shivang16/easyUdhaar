import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { Typography, Box } from '@material-ui/core';
import {Row, Col} from 'react-bootstrap';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl'


const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  button: {
    padding: '20px'
  },
  inner: {
    //   variant:'outlined',
    minWidth: 200,
    justifyContent: 'flex-end',
    paddingLeft: '40px'
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
  table: {
    // flex: 'center',
    flexDirection: 'row',
    height: '1000px'
  },
  box: {
    alignItems: 'center'
  },
  inner: {
    //   variant:'outlined',
    minWidth: 800,
    justifyContent: 'center',
    paddingLeft: '40px'
  },
  form: {
    minWidth: '1000px'
  }
}));


// Destructure props
const SecondStep = ({ handleNext, handleBack, handleChange,
    values: 
    { 
        job,
        Checking_account,
        Credit_amount,
        Duration, 
        Annual_income,
        People_employed, 
        Skilled_personnel, 
        Years_running, 
        Customer_facing, 
        Place_of_operation_owned, 
        Cash_transactions,
        Supply_of_goods, 
        Value_of_assets 
    } 
}) => {
		const classes =useStyles();
        return (
          <Box className={classes.box}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <TextField
                    className={classes.form}
                    label="Job"
                    variant="outlined"
                    name="job"
                    placeholder="Enter your Job"
                    defaultValue={job}
                    onChange={handleChange('job')}
                    margin="normal"
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <TextField
                    className={classes.form}
                    variant="outlined"
                    label="Checking account"
                    name="Checking_account"
                    placeholder="Enter Balance in your checking account"
                    defaultValue={Checking_account}
                    onChange={handleChange('Checking_account')}
                    margin="normal"
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <TextField
                    className={classes.form}
                    variant="outlined"
                    label="Credit Amount"
                    name="Credit_amount"
                    placeholder="Enter amount to be credited"
                    defaultValue={Credit_amount}
                    onChange={handleChange('Credit_amount')}
                    margin="normal"
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <TextField
                    className={classes.form}
                    variant="outlined"
                    label="Duration"
                    name="Duration"
                    placeholder="Enter duration of the campaign"
                    defaultValue={Duration}
                    onChange={handleChange('Duration')}
                    margin="normal"
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <TextField
                    className={classes.form}
                    variant="outlined"
                    label="Annual Income"
                    name="Annual_income"
                    placeholder="Enter your Annual Income"
                    defaultValue={Annual_income}
                    onChange={handleChange('Annual_income')}
                    margin="normal"
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <TextField
                    className={classes.form}
                    variant="outlined"
                    label="People Employed"
                    name="People_employed"
                    placeholder="Enter Number of people employed"
                    defaultValue={People_employed}
                    onChange={handleChange('People_employed')}
                    margin="normal"
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <TextField
                    className={classes.form}
                    label="Number of Skilled Personnel"
                    variant="outlined"
                    name="Skilled_personnel"
                    placeholder="Enter Skilled personnel"
                    defaultValue={Skilled_personnel}
                    onChange={handleChange('Skilled_personnel')}
                    margin="normal"
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <TextField
                    className={classes.form}
                    label="Years Running"
                    variant="outlined"
                    name="Years_running"
                    placeholder="Enter Years Running"
                    defaultValue={Years_running}
                    onChange={handleChange('Years_running')}
                    margin="normal"
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <FormControl variant="outlined" required className={classes.form}>
                    <InputLabel htmlFor="outlined-age-native-simple">Is your business customer facing?</InputLabel>
                    <Select
                      native
                      onChange={handleChange('Customer_facing')}
                      label="Is your business customer facing?"
                      inputProps={{
                        name: 'Customer_facing',
                        id: 'outlined-age-native-simple',
                      }}
                      value={Customer_facing}
                    >
                      <option aria-label="None" value="" />
                      <option value={1}>Yes</option>
                      <option value={0}>No</option>
                    </Select>
                  </FormControl>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <FormControl variant="outlined" required className={classes.form}>
                    <InputLabel htmlFor="outlined-age-native-simple">Is Place of operation owned?</InputLabel>
                    <Select
                      native
                      onChange={handleChange('Place_of_operation_owned')}
                      label="Place_of_operation_owned"
                      inputProps={{
                        name: 'Place_of_operation_owned',
                        id: 'outlined-age-native-simple',
                      }}
                      value={Place_of_operation_owned}
                    >
                      <option aria-label="None" value="" />
                      <option value={true}>Yes</option>
                      <option value={false}>No</option>
                    </Select>
                  </FormControl>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <FormControl variant="outlined" required className={classes.form}>
                    <InputLabel htmlFor="outlined-age-native-simple">Do most of your transactions happen in cash?</InputLabel>
                    <Select
                      native
                      onChange={handleChange('Cash_transactions')}
                      label="Do most of your transactions happen in cash?"
                      inputProps={{
                        name: 'Cash_transactions',
                        id: 'outlined-age-native-simple',
                      }}
                      value={Cash_transactions}
                    >
                      <option aria-label="None" value="" />
                      <option value={true}>Yes</option>
                      <option value={false}>No</option>
                    </Select>
                  </FormControl>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <FormControl variant="outlined" required className={classes.form}>
                    <InputLabel htmlFor="outlined-age-native-simple">Do you require supply of goods?</InputLabel>
                    <Select
                      native
                      onChange={handleChange('Supply_of_goods')}
                      label="Do you require supply of goods?"
                      inputProps={{
                        name: 'Supply_of_goods',
                        id: 'outlined-age-native-simple',
                      }}
                      value={Supply_of_goods}
                    >
                      <option aria-label="None" value="" />
                      <option value={true}>Yes</option>
                      <option value={false}>No</option>
                    </Select>
                  </FormControl>
                </div>
              </Grid>
              <Grid item xs={12}>
                <Row>
                  <div className={classes.inner}>
                    <TextField
                      className={classes.form}
                      variant="outlined"
                      label="Value of assets owned by your business"
                      name="Value_of_assets"
                      placeholder="Enter Value of your assets"
                      defaultValue={Value_of_assets}
                      onChange={handleChange('Value_of_assets')}
                      margin="normal"
                      required 
                    />
                  </div>
                </Row>
              </Grid>
            </Grid>
            <div
              style={{
                display: 'flex',
                marginTop: 50,
                justifyContent: 'flex-end'
              }}>
              <Button
                variant="contained"
                color="default"
                onClick={handleBack}
                style={{ marginRight: 20 }}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                Next
              </Button>
            </div>
          </Box>
        );
};

export default SecondStep;
