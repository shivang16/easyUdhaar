import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';import { values } from 'lodash';
import auth from './../../../auth/auth-helper';
import { business } from './../../../auth/api-businessloan';

// Destructure props
const Confirm = ({ handleNext, handleBack, values }) => {

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = {
			amountExpected: values.Credit_amount || undefined,
			businessIncome: values.Annual_income || undefined,
			employes: values.People_employed || undefined,
			skilledEmployes: values.Skilled_personnel || undefined,
			customerFacingBToB: values.Customer_facing || undefined,
			job: values.job || undefined,
			placeOwned: values.Place_of_operation_owned || undefined,
			yearsRunning: values.Years_running || undefined,
			cashMajority: values.Cash_transactions || undefined,
			assetValue: values.Value_of_assets || undefined,
			age: values.age || undefined,
			duration: values.Duration || undefined,
			checkingAccount: values.Checking_account || undefined,
			goods: values.Supply_of_goods || undefined,

		}
		// console.log(formData);
		const userSession = JSON.parse(auth.getJWT());
		const token = userSession.token;
		// handleNext();
		business(token, formData).then((data) => {
			if(data.error) {
				console.log(data.error);
			} else {
				handleNext();
			}
		})
	}

	return (
		<Fragment>
			<List disablePadding>
				<ListItem>
					<ListItemText primary="First Name" secondary={values.firstName} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Last Name" secondary={values.lastName} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Age" secondary={values.age} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Gender" secondary={values.gender} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="Phone" secondary={values.phone} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Job" secondary={values.job} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Checking Account" secondary={values.Checking_account} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Credit Amount" secondary={values.Credit_amount} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="Duration" secondary={values.Duration} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="Annual Income" secondary={values.Annual_income} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="People Employed" secondary={values.People_employed} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="Skilled Personnel" secondary={values.Skilled_personnel} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="Years Running" secondary={values.Years_running} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="Customer Facing" secondary={values.Customer_facing} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="Places of operation Owned" secondary={values.Place_of_operation_owned} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="Cash Transactions" secondary={values.Cash_transactions} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Supply of goods" secondary={values.Supply_of_goods} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="Value of Assets" secondary={values.Value_of_assets} />
				</ListItem>
                
			</List>

			<div style={{ display: 'flex', marginTop: 50, justifyContent: 'flex-end' }}>
				<Button variant="contained" color="default" onClick={handleBack}>
					Back
				</Button>
				<Button style={{ marginLeft: 20 }} variant="contained" color="secondary" onClick={handleSubmit}>
					Confirm & Continue
				</Button>
			</div>
		</Fragment>
	);
};

export default Confirm;
