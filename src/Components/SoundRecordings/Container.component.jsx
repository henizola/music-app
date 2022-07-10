import React from "react";

function SoundContainer({ currentStep, children, setStep }) {
	return (
		<div>
			<div className='content'>
				{React.Children.map(children, (child, index) => {
					console.log(child);
					if (index === currentStep) {
						return <div key={index}>{child}</div>;
					} else return null;
				})}
			</div>
		</div>
	);
}

export default SoundContainer;
