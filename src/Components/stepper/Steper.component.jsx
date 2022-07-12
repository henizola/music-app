import React from "react";
import { IoStatsChartSharp } from "react-icons/io5";
import { BiLock } from "react-icons/bi";
import { BsMic } from "react-icons/bs";
import { VscSettingsGear } from "react-icons/vsc";
import { AiOutlineBell } from "react-icons/ai";
import { Contanier } from "./Stepper.styles";

const Stepper = ({ currentStep, children, setStep }) => {
	const steps = [
		"Musical Work",
		"Sound Recordings ",
		"Dashboard",
		"Personal Identifiers",

		"Settings",
	];
	return (
		<Contanier>
			<div className='header'>
				<div className='profile'>
					<div className='avatar-container'>
						<img
							src={require("../../assets/avavtar.jpg")}
							alt='avatar'
							className='avatar'
						/>
					</div>
				</div>
				<div className='nav'>
					{steps.map((step, index) => {
						const isActive = index === currentStep;
						return (
							<button
								key={index}
								onClick={() => setStep(index)}
								className={` tab ${isActive && "active "} `}
							>
								{index === 0 ? (
									<IoStatsChartSharp />
								) : index === 1 ? (
									<BiLock />
								) : index === 2 ? (
									<BsMic />
								) : index === 5 ? (
									<VscSettingsGear />
								) : (
									<AiOutlineBell />
								)}
								{step}
							</button>
						);
					})}
				</div>
			</div>
			<div></div>
			<div className='content'>
				{React.Children.map(children, (child, index) => {
					console.log(child);
					if (index === currentStep) {
						return <div key={index}>{child}</div>;
					} else return null;
				})}
			</div>
		</Contanier>
	);
};

export default Stepper;
