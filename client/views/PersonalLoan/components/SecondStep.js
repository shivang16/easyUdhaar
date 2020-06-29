import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

// Destructure props
const SecondStep = ({ handleNext, handleBack, handleChange,
    values: 
    { 
        job,
		Housing,
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
    
        return (
		<Fragment>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="Job"
						name="job"
                        placeholder="Enter your Job"
                        defaultValue={job}
                        onChange={handleChange('job')}
						margin="normal"
						required
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="Housing"
						name="housing"
                        placeholder="Enter your Housing"
                        defaultValue={Housing}
                        onChange={handleChange('Housing')}
						margin="normal"
						required
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="Savings Accounts"
						name="Savings_accounts"
                        placeholder="Enter your Savings Account balance"
                        defaultValue={Saving_accounts}
                        onChange={handleChange('Savings_accounts')}
						margin="normal"
						required
					/>
				</Grid>
                <Grid item xs={12}>
					<TextField
						fullWidth
						label="Checking Account"
						name="Checking_account"
                        placeholder="Enter Balance in your checking account"
                        defaultValue={Checking_account}
                        onChange={handleChange('Checking_account')}
						margin="normal"
						required
					/>
				</Grid>
                <Grid item xs={12}>
					<TextField
						fullWidth
						label="Credit Amount"
						name="Credit_amount"
                        placeholder="Enter amount to be credited"
                        defaultValue={Credit_amount}
                        onChange={handleChange('Credit_amount')}
						margin="normal"
						required
					/>
				</Grid>
                <Grid item xs={12}>
					<TextField
						fullWidth
						label="Duration"
						name="Duration"
                        placeholder="Enter duration of the campaign"
                        defaultValue={Duration}
                        onChange={handleChange('Duration')}
						margin="normal"
						required
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth required margin="normal">
						<InputLabel htmlFor="Purpose">Why do you need a Loan?</InputLabel>
						<Select value={Purpose} onChange={handleChange('purpose')}>
							<MenuItem value={'radio/tv'}>Radio/TV</MenuItem>
							<MenuItem value={'repairs'}>Repairs</MenuItem>
							<MenuItem value={'education'}>Education</MenuItem>
							<MenuItem value={'vacation/others'}>Vacation/Others</MenuItem>
							<MenuItem value={'car'}>Car</MenuItem>
							<MenuItem value={'domestic_appliances'}>Domestic Appliances</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="Family_members"
						name="Family_members"
                        placeholder="Enter Number of Family Members"
                        defaultValue={Family_members}
                        onChange={handleChange('Family_members')}
						margin="normal"
						required
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="Literate Members"
						name="Literate_fam"
                        placeholder="Enter Number of Literate Family Members"
                        defaultValue={Literate_fam}
                        onChange={handleChange('Literate_fam')}
						margin="normal"
						required
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="Earning Members"
						name="Earning_member"
                        placeholder="Enter Number of Earning members of the family"
                        defaultValue={Earning_member}
                        onChange={handleChange('Earning_member')}
						margin="normal"
						required
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="Eat Outs"
						name="Eat_out"
                        placeholder="Enter Number of Eating Outs in a month"
                        defaultValue={Eat_out}
                        onChange={handleChange('Eat_out')}
						margin="normal"
						required
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="Nearest Major City"
						name="Nearest_major_city"
                        placeholder="Enter Time Taken to reach nearest major city"
                        defaultValue={Nearest_major_city}
                        onChange={handleChange('Nearest_major_city')}
						margin="normal"
						required
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="Times travelled more than 100km in last 60 days"
						name="Times_travelled_more_than_100km_in_last_60days"
                        placeholder="Times travelled more than 100km in last 60 days"
                        defaultValue={Times_travelled_more_than_100km_in_last_60days}
                        onChange={handleChange('Times_travelled_more_than_100km_in_last_60days')}
						margin="normal"
						required
					/>
				</Grid>
                <Grid item xs={12}>
					<TextField
						fullWidth
						label="Annual Income"
						name="Annual_income"
                        placeholder="Enter your Annual Income"
                        defaultValue={Annual_income}
                        onChange={handleChange('Annual_income')}
						margin="normal"
						required
					/>
				</Grid>
                <Grid item xs={12}>
					<TextField
						fullWidth
						label="Monthly Cellphone Bill"
						name="Monthly_cell_bill"
                        placeholder="Enter your Monthly cellphone bill"
                        defaultValue={Monthly_cell_bill}
                        onChange={handleChange('Monthly_cell_bill')}
						margin="normal"
						required
					/>
				</Grid>
                <Grid item xs={12}>
					<TextField
						fullWidth
						label="Internet Devices"
						name="Internet_devices"
                        placeholder="Enter Number of Internet Devices you Own"
                        defaultValue={Internet_devices}
                        onChange={handleChange('Internet_devices')}
						margin="normal"
						required
					/>
				</Grid>
                <Grid item xs={12}>
					<TextField
						fullWidth
						label="Vehicles Own"
						name="Vehicles"
                        placeholder="Enter number of vehicles own"
                        defaultValue={Vehicles}
                        onChange={handleChange('Vehicles')}
						margin="normal"
						required
					/>
				</Grid>
			</Grid>
			<div style={{ display: 'flex', marginTop: 50, justifyContent: 'flex-end' }}>
				<Button variant="contained" color="default" onClick={handleBack} style={{ marginRight: 20 }}>
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
