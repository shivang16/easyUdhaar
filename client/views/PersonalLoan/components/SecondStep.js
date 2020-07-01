import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';
import { Typography, Box } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
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
      Housing,
      Employment_status,
      Saving_accounts,
      Checking_account,
      Credit_amount,
      Duration,
      Purpose,
      Family_members,
      Literate_fam,
      Earning_member,
      Eat_out,
      Nearest_major_city,
      Times_travelled_more_than_100km_in_last_60days,
      Annual_income,
      Monthly_cell_bill,
      Internet_devices,
      Vehicles
    } 
}) => {
		const classes = useStyles();
        return (
          <Fragment>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <TextField
                    className={classes.form}
                    label="Number of Jobs you are currently working"
                    variant="outlined"
                    name="job"
                    placeholder="Job"
                    defaultValue={job}
                    onChange={handleChange('job')}
                    margin="normal"
                    required
                  />{' '}
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <FormControl variant="outlined" required className={classes.form}>
                    <InputLabel>Housing Type</InputLabel>
                    <Select
                      native
                      onChange={handleChange('Housing')}
                      label="Housing"
                      value={Housing}
                    >
                      <option aria-label="None" value="" />
                      <option value="rent">Rent</option>
                      <option value="own">Owned</option>
                      <option value="free">Homeless</option>
                    </Select>
                  </FormControl>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <FormControl variant="outlined" required className={classes.form}>
                    <InputLabel>Employment Status</InputLabel>
                    <Select
                      native
                      onChange={handleChange('Employment_status')}
                      label="Employment_status"
                      value={Employment_status}
                    >
                      <option aria-label="None" value="" />
                      <option value="Employed">Employed</option>
                      <option value="Run a business">Run a business</option>
                      <option value="Unemployed">Unemployed</option>
                    </Select>
                  </FormControl>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <TextField
                    variant="outlined"
                    className={classes.form}
                    label="Savings Accounts"
                    name="Savings_accounts"
                    placeholder="Enter your Savings Account balance"
                    defaultValue={Saving_accounts}
                    onChange={handleChange('Savings_accounts')}
                    margin="normal"
                    required
                  />{' '}
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <TextField
                    variant="outlined"
                    className={classes.form}
                    label="Checking Account"
                    name="Checking_account"
                    placeholder="Enter Balance in your checking account"
                    defaultValue={Checking_account}
                    onChange={handleChange('Checking_account')}
                    margin="normal"
                    required
                  />{' '}
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <TextField
                    variant="outlined"
                    className={classes.form}
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
                    variant="outlined"
                    className={classes.form}
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
              <Grid item xs={12} sm={6}>
                <div className={classes.inner}>
                  {/* <TextField
                   */}

                  {/* <FormControl
                    className={classes.form}
                    variant="outlined"
                    required
                    margin="normal">
                    <InputLabel htmlFor="Purpose">
                      Why do you need a Loan?
                    </InputLabel>
                    <Select value={Purpose} onChange={handleChange('purpose')}>
                      <MenuItem value={'radio/tv'}>Radio/TV</MenuItem>
                      <MenuItem value={'repairs'}>Repairs</MenuItem>
                      <MenuItem value={'education'}>Education</MenuItem>
                      <MenuItem value={'vacation/others'}>
                        Vacation/Others
                      </MenuItem>
                      <MenuItem value={'car'}>Car</MenuItem>
                      <MenuItem value={'domestic_appliances'}>
                        Domestic Appliances
                      </MenuItem>
                    </Select>
                  </FormControl> */}
                  <FormControl variant="outlined" required className={classes.form}>
                    <InputLabel>Why do you need a Loan?</InputLabel>
                    <Select
                      native
                      onChange={handleChange('Purpose')}
                      label="Purpose"
                      value={Purpose}
                    >
                      <option aria-label="None" value="" />
                      <option value="radio">Radio/TV</option>
                      <option value="repairs">Repairs</option>
                      <option value="education">Education</option>
                      <option value="vacation">Vacation</option>
                      <option value="car">Car</option>
                      <option value="domestic_appliances">Domestic Appliances</option>
                    </Select>
                  </FormControl>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <TextField
                    className={classes.form}
                    variant="outlined"
                    label="Family_members"
                    name="Family_members"
                    placeholder="Enter Number of Family Members"
                    defaultValue={Family_members}
                    onChange={handleChange('Family_members')}
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
                    label="Literate Members"
                    name="Literate_fam"
                    placeholder="Enter Number of Literate Family Members"
                    defaultValue={Literate_fam}
                    onChange={handleChange('Literate_fam')}
                    margin="normal"
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <TextField
                    variant="outlined"
                    className={classes.form}
                    label="Earning Members"
                    name="Earning_member"
                    placeholder="Enter Number of Earning members of the family"
                    defaultValue={Earning_member}
                    onChange={handleChange('Earning_member')}
                    margin="normal"
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <TextField
                    variant="outlined"
                    className={classes.form}
                    label="Eat Outs"
                    name="Eat_out"
                    placeholder="Enter Number of Eating Outs in a month"
                    defaultValue={Eat_out}
                    onChange={handleChange('Eat_out')}
                    margin="normal"
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <TextField
                    variant="outlined"
                    className={classes.form}
                    label="Nearest Major City"
                    name="Nearest_major_city"
                    placeholder="Enter Time Taken to reach nearest major city"
                    defaultValue={Nearest_major_city}
                    onChange={handleChange('Nearest_major_city')}
                    margin="normal"
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <TextField
                    variant="outlined"
                    className={classes.form}
                    label="Times travelled more than 100km in last 60 days"
                    name="Times_travelled_more_than_100km_in_last_60days"
                    placeholder="Times travelled more than 100km in last 60 days"
                    defaultValue={
                      Times_travelled_more_than_100km_in_last_60days
                    }
                    onChange={handleChange(
                      'Times_travelled_more_than_100km_in_last_60days'
                    )}
                    margin="normal"
                    required
                  />{' '}
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
                  />{' '}
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <TextField
                    className={classes.form}
                    variant="outlined"
                    label="Monthly Cellphone Bill"
                    name="Monthly_cell_bill"
                    placeholder="Enter your Monthly cellphone bill"
                    defaultValue={Monthly_cell_bill}
                    onChange={handleChange('Monthly_cell_bill')}
                    margin="normal"
                    required
                  />{' '}
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.inner}>
                  <TextField
                    className={classes.form}
                    variant="outlined"
                    label="Internet Devices"
                    name="Internet_devices"
                    placeholder="Enter Number of Internet Devices you Own"
                    defaultValue={Internet_devices}
                    onChange={handleChange('Internet_devices')}
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
                    label="Vehicles Own"
                    name="Vehicles"
                    placeholder="Enter number of vehicles own"
                    defaultValue={Vehicles}
                    onChange={handleChange('Vehicles')}
                    margin="normal"
                    required
                  />
                </div>
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
          </Fragment>
        );
};

export default SecondStep;
