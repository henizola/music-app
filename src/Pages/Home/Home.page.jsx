import React, { useState } from "react";

import { Container } from "./Home.styles";

import Stepper from "../../Components/stepper/Steper.component";
import Dashboard from "../../Components/Dashbaord/Dashboard.component";
import MusicalWork from "../../Components/MusicalWork/MusicalWork";
import Setting from "../../Components/Setting/Setting.component";
import PersonalIdentifiers from "../../Components/PersonalIdentifiers/PersonalIdentifiers.component";
import SoundRecordings from "../../Components/SoundRecordings/SoundRecordings";

const Home = () => {
	const [currentStep, setCurrentStep] = useState(0);

	const setStep = (step) => {
		setCurrentStep(step);
	};

	return (
		<Container>
			<Stepper currentStep={currentStep} setStep={setStep}>
				<MusicalWork />
				<SoundRecordings />
				<Dashboard />
				<PersonalIdentifiers />

				<Setting />
			</Stepper>
		</Container>
	);
};

export default Home;
