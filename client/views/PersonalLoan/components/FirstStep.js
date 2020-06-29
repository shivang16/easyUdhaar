import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

// Destructure props
const FirstStep = ({
    handleNext,
    handleChange,
	values: { firstName, lastName, age, gender, phone }
}) => {

	return (
		<Fragment>
			<Grid container spacing={2} noValidate>
				<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						label="First Name"
						name="firstName"
						placeholder="Your first name"
                        defaultValue={firstName}
                        onChange={handleChange('firstName')}
						margin="normal"
						required
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						label="Last Name"
						name="lastName"
						placeholder="Your last name"
                        defaultValue={lastName}
                        onChange={handleChange('lastName')}
						margin="normal"
						required
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						label="Age"
						name="age"
						placeholder="Your Age"
						type="number"
                        defaultValue={age}
                        onChange={handleChange('age')}
						margin="normal"
						required
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth required margin="normal">
						<InputLabel htmlFor="gender">Gender</InputLabel>
						<Select value={gender} onChange={handleChange('gender')}>
							<MenuItem value={'Male'}>Male</MenuItem>
							<MenuItem value={'Female'}>Female</MenuItem>
						</Select>
					</FormControl>
				</Grid>

                <Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						label="Phone"
						name="phone"
						placeholder="Your Phone Number"
                        defaultValue={phone}
                        onChange={handleChange('phone')}
						margin="normal"
						required
					/>
				</Grid>
			</Grid>
			<div style={{ display: 'flex', marginTop: 50, justifyContent: 'flex-end' }}>
				<Button variant="contained" color="primary" onClick={handleNext}>
					Next
				</Button>
			</div>
		</Fragment>
	);
};

export default FirstStep;
