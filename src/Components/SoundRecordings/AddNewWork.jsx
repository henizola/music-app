import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { composerType } from "../../utils/utils";
import { Card } from "../card/card.component";
import { Container } from "./Recording.styles";

const AddNewWork = ({ currentStep, setStep, rightHolders, handleAddWork }) => {
	const [title, setTitle] = useState("");
	const [registrant, setRegistrant] = useState("");
	const [musicalCompositionTitle, setMsicalCompositionTitle] = useState("");
	const [statusOfRecording, setStatusOfRecording] = useState("");
	const [workCategory, setWorkCategory] = useState("");
	const [iSRC, setISRC] = useState("");
	const [isOriginal, setIsOriginals] = useState("");
	const [
		isFirstRecordingOfMusicalComposition,
		setIsFirstRecordingOfMusicalComposition,
	] = useState("");
	const [mediaSubmitted, setMediaSubmitted] = useState("");
	const [dateOfRegistration, setDateOfRegistration] = useState(new Date());
	const [rightsholders, setRightsholders] = useState([]);
	const handleSave = (e) => {
		e.preventDefault();
		setStep(currentStep - 1);
		handleAddWork({
			title: title,
			registrant: registrant,
			musicalCompositionTitle: musicalCompositionTitle,
			statusOfRecording: statusOfRecording,
			workCategory: workCategory,
			iSRC: iSRC,
			isOriginal: isOriginal,
			isFirstRecordingOfMusicalComposition:
				isFirstRecordingOfMusicalComposition,
			mediaSubmitted: mediaSubmitted,
			dateOfRegistration: dateOfRegistration,
			rightsholders: `${rightHolders
				.flatMap(({ givenName }) => givenName)
				.join()}`,
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
						<h4 className='title'>Add New Musical Work</h4>
					</div>
					<div className='stats'>
						<div className='user-box'>
							<input
								name='title'
								required={true}
								onChange={(e) => setTitle(e.target.value)}
							/>
							<label>Title *</label>
						</div>
						<div className='user-box'>
							<input
								name='registerant'
								required
								onChange={(e) => setRegistrant(e.target.value)}
							/>
							<label>Registerant *</label>
						</div>
						<div className='user-box'>
							<input
								name='musicalCompositionTitle'
								required
								onChange={(e) => setMsicalCompositionTitle(e.target.value)}
							/>
							<label>Msical Composition Title *</label>
						</div>
						<div
							className='user-box'
							onChange={(e) => setStatusOfRecording(e.target.value)}
						>
							<select name='' id=''>
								<option>Demo</option>
								<option> Commercial Release</option>
							</select>
							<label>Status Of Recording</label>
						</div>

						<div className='user-box'>
							<input
								name='WorkCategory'
								required
								onChange={(e) => setWorkCategory(e.target.value)}
							/>
							<label>Work Category *</label>
						</div>

						<div className='user-box'>
							<input
								name='Isrc'
								required
								onChange={(e) => setISRC(e.target.value)}
							/>
							<label>ISRC *</label>
						</div>

						<div
							className='user-box'
							onChange={(e) => setIsOriginals(e.target.value)}
						>
							<select name='' id=''>
								<option>True</option>
								<option> False</option>
							</select>
							<label>Status Of Recording</label>
						</div>

						<div
							className='user-box'
							onChange={(e) =>
								setIsFirstRecordingOfMusicalComposition(e.target.value)
							}
						>
							<select name='' id=''>
								<option>True</option>
								<option> False</option>
							</select>
							<label>Is First Recording Of Musical Composition</label>
						</div>

						<div className='user-box'>
							<input
								name='media'
								required
								onChange={(e) => setMediaSubmitted(e.target.value)}
							/>
							<label>Meida Submitted *</label>
						</div>

						<div className='user-box'>
							<input
								name='Date'
								type='date'
								required
								onChange={(e) => setDateOfRegistration(e.target.value)}
								value={dateOfRegistration}
							/>
							<label>Date Of Registration *</label>
						</div>
						<div className='user-box'>
							<Multiselect
								placeholder='Search for Right Holders *'
								options={rightHolders}
								// selectedValues={[]}
								onSelect={(e) => setRightsholders(e)}
								onRemove={(e) => setRightsholders(e)} // Function will
								displayValue='givenName'
							/>
						</div>
						<div className='user-box'>
							<button
								className='create'
								onClick={() => setStep(currentStep + 1)}
							>
								Create New Composor
							</button>
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

export default AddNewWork;
