import { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { composerType } from "../../utils/utils";
import { Card } from "../card/card.component";
import { Container } from "./Musical.styles";

const AddNewComposor = ({
	currentStep,
	setStep,

	handleAddComposor,
}) => {
	const [givenName, setGivenName] = useState("");
	const [otherName, setOtherName] = useState("");
	const [newComposerType, setComposerType] = useState("");
	const [cmoAffiliation, setCmoAffiliation] = useState("");
	const [isni, setIsni] = useState("");
	const [shares, SetShares] = useState("");
	const handleSave = (e) => {
		e.preventDefault();
		setStep(currentStep - 1);
		handleAddComposor({
			givenName: givenName,
			otherName: otherName,
			composerType: newComposerType,
			shares: shares,
			isni: isni,
			cmoAffiliation: cmoAffiliation,
		});
	};
	return (
		<Container>
			<Card>
				<button className='back' onClick={() => setStep(currentStep - 1)}>
					<BiLeftArrowAlt />
				</button>
				<form className='works' onSubmit={handleSave}>
					<div className='flex'>
						<h4 className='title'>Add New Composor</h4>
					</div>
					<div className='stats'>
						<div className='user-box'>
							<input
								name='givenName'
								required={true}
								onChange={(e) => setGivenName(e.target.value)}
							/>
							<label>Given Name *</label>
						</div>
						<div className='user-box'>
							<input name='' required='' />
							<label>Other Name(s) *</label>
						</div>
						<div className='user-box'>
							<select name='' id=''>
								{composerType.map((cat) => (
									<option>{cat}</option>
								))}
							</select>
							<label>Work Category</label>
						</div>

						<div className='user-box'>
							<input name='' required='' />
							<label>CMO Affiliation</label>
						</div>
						<div className='user-box'>
							<input name='' required='' />
							<label>ISNI *</label>
						</div>
						<div className='user-box'>
							<input name='' required='' />
							<label>Shares</label>
						</div>
					</div>
					<button className='button' type='submit'>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Save
					</button>
				</form>
			</Card>
		</Container>
	);
};

export default AddNewComposor;
