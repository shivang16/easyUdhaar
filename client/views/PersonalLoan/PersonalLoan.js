import React, { useState, Fragment } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import Confirm from './components/Confirm';
import Success from './components/Success';

// Step titles
const labels = [ 'Personal Information', 'Loan Specific Details', 'Confirmation' ];

const PersonalLoan = () => {
	const [ steps, setSteps ] = useState(0)
	const [ fields, setFields ] = useState({
		firstName: '',
        lastName: '',
        age: '',
		gender: '',
        phone: '',
		job: '',
		Housing: '',
		Saving_accounts: '',
        Checking_account: '',
        Credit_amount: '',
        Duration: '',
        Purpose: '',
        Family_members: '',
        Literate_fam: '',
        Earning_member: '',
        Eat_out: '',
        Nearest_major_city: '',
        Times_travelled_more_than_100km_in_last_60days: '',
		Annual_income: '',
		Monthly_cell_bill: '',
		Internet_devices: '',
		Vehicles: ''
	});

	// Proceed to next step
	const handleNext = () => setSteps(steps + 1);
	// Go back to prev step
    const handleBack = () => setSteps(steps - 1);
    
    const handleChange = input => ({ target: { value } }) => {
		// Set values to the fields
		setFields({
			...fields,
			[input]: value
        })
    }

	const handleSteps = step => {
		switch (step) {
			case 0:
				return (
					<FirstStep
						handleNext={handleNext}
                        values={fields}
                        handleChange={handleChange}
					/>
				)
			case 1:
				return (
					<SecondStep
						handleNext={handleNext}
                        handleBack={handleBack}
                        handleChange={handleChange}
						values={fields}
					/>
				)
			case 2:
				return <Confirm handleNext={handleNext} handleBack={handleBack} values={fields} />
			default:
				break
		}
	}

	// Handle components
	return (
		<Fragment>
			{steps === labels.length ? (
				<Success />
			) : (
				<Fragment>
					<Stepper activeStep={steps} style={{ paddingTop: 30, paddingBottom: 50 }} alternativeLabel>
						{labels.map(label => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					{handleSteps(steps)}
				</Fragment>
			)}
		</Fragment>
	)
}

export default PersonalLoan;
