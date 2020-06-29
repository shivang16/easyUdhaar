import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';;

// Destructure props
const Confirm = ({ handleNext, handleBack, 
    values: 
    { 
        firstName,
        lastName,
        age,
		gender,
        phone,
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
        Value_of_assets, 
    } }) => {
	return (
		<Fragment>
			<List disablePadding>
				<ListItem>
					<ListItemText primary="First Name" secondary={firstName} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Last Name" secondary={lastName} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Age" secondary={age} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Gender" secondary={gender} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="Phone" secondary={phone} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Job" secondary={job} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Checking Account" secondary={Checking_account} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Credit Amount" secondary={Credit_amount} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="Duration" secondary={Duration} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="Annual Income" secondary={Annual_income} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="People Employed" secondary={People_employed} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="Skilled Personnel" secondary={Skilled_personnel} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="Years Running" secondary={Years_running} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="Customer Facing" secondary={Customer_facing} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="Places of operation Owned" secondary={Place_of_operation_owned} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="Cash Transactions" secondary={Cash_transactions} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="Value of Assets" secondary={Value_of_assets} />
				</ListItem>
                
			</List>

			<div style={{ display: 'flex', marginTop: 50, justifyContent: 'flex-end' }}>
				<Button variant="contained" color="default" onClick={handleBack}>
					Back
				</Button>
				<Button style={{ marginLeft: 20 }} variant="contained" color="secondary" onClick={handleNext}>
					Confirm & Continue
				</Button>
			</div>
		</Fragment>
	);
};

export default Confirm;
