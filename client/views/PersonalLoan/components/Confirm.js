import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import auth from '../../../auth/auth-helper';
import { personal } from '../../../auth/api-businessloan';
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
    } }) => {

		const handleSubmit = (event) => {
			event.preventDefault();
			const formData = {
				amountExpected: Credit_amount || undefined,
				eatOut: Eat_out || undefined,
				nearestMajorCity: Nearest_major_city || undefined,
				annualIncome: Annual_income || undefined,
				checkingAccount: Checking_account || undefined,
				savingAccount: "120000" || undefined,
				jobStatus: job || undefined,
				lastTravel: Times_travelled_more_than_100km_in_last_60days || undefined,
				vechicles: Vehicles || undefined,
				age: age || undefined,
				sex: gender || undefined,
				houseType: Housing || undefined,
				cellBill: Monthly_cell_bill || undefined,
				familyMembers: Family_members || undefined,
				earningMembers: Earning_member || undefined,
				duration: Duration || undefined,
				internetDevices: Internet_devices || undefined,
				literateAdults: Literate_fam || undefined,
				cibilScore: "876",
				purpose: Purpose || undefined
			}
			// console.log(formData);
			const userSession = JSON.parse(auth.getJWT());
			const token = userSession.token;
			// handleNext();
			personal(token, formData).then((data) => {
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
					<ListItemText primary="Housing" secondary={Housing} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Savings Account" secondary={Saving_accounts} />
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
					<ListItemText primary="Purpose" secondary={Purpose} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Family_members" secondary={Family_members} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Literate family members" secondary={Literate_fam} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Earning members" secondary={Earning_member} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Eat Outs" secondary={Eat_out} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Nearest Major city" secondary={Nearest_major_city} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Times travelled more than 100kms in last 60 days" secondary={Times_travelled_more_than_100km_in_last_60days} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="Annual Income" secondary={Annual_income} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="Monthly Cellphone bill" secondary={Monthly_cell_bill} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="Internet Devices" secondary={Internet_devices} />
				</ListItem>

                <Divider />

				<ListItem>
					<ListItemText primary="Vehicles" secondary={Vehicles} />
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
