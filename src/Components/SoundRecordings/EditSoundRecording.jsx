import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { composerType } from "../../utils/utils";
import { Card } from "../card/card.component";
import { Container } from "./Recording.styles";

const EditSoundRecording = ({
	currentStep,
	setStep,
	rightHolders,
	handleEditRightHolder,
	data,
}) => {
	const [title, setTitle] = useState(data.title);
	const [registrant, setRegistrant] = useState(data.registrant);
	const [musicalCompositionTitle, setMsicalCompositionTitle] = useState(
		data.musicalCompositionTitle
	);
	const [statusOfRecording, setStatusOfRecording] = useState(
		data.statusOfRecording
	);
	const [workCategory, setWorkCategory] = useState(data.workCategory);
	const [iSRC, setISRC] = useState(data.iSRC);
	const [isOriginal, setIsOriginals] = useState(data.isOriginal);
	const [
		isFirstRecordingOfMusicalComposition,
		setIsFirstRecordingOfMusicalComposition,
	] = useState(data.isFirstRecordingOfMusicalComposition);
	const [mediaSubmitted, setMediaSubmitted] = useState(
		data.isFirstRecordingOfMusicalComposition
	);
	const [dateOfRegistration, setDateOfRegistration] = useState(
		data.dateOfRegistration
	);
	const [myRightsholders, setRightsholders] = useState(data.myRightHolders);
	const handleSave = (e) => {
		e.preventDefault();
		setStep(0);

		handleEditRightHolder(
			{
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
				rightsholders: `${myRightsholders
					.flatMap(({ givenName }) => givenName)
					.join()}`,
				myRightholders: myRightsholders,
			},
			data.tableData.id
		);
	};
	return (
		<Container>
			<Card>
				<button className='back' onClick={() => setStep(0)}>
					<BiLeftArrowAlt />
				</button>
				<form className='works' onSubmit={handleSave}>
					<div className='flex'>
						<h4 className='title'>Edit Sound Recording</h4>
					</div>
					<div className='stats'>
						<div className='user-box'>
							<input
								name='title'
								value={title}
								required={true}
								onChange={(e) => setTitle(e.target.value)}
							/>
							<label>Title *</label>
						</div>
						<div className='user-box'>
							<input
								name='registerant'
								value={registrant}
								required
								onChange={(e) => setRegistrant(e.target.value)}
							/>
							<label>Registerant *</label>
						</div>
						<div className='user-box'>
							<input
								name='musicalCompositionTitle'
								required
								value={musicalCompositionTitle}
								onChange={(e) => setMsicalCompositionTitle(e.target.value)}
							/>
							<label>Msical Composition Title *</label>
						</div>
						<div
							className='user-box'
							value={statusOfRecording}
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
								value={workCategory}
								required
								onChange={(e) => setWorkCategory(e.target.value)}
							/>
							<label>Work Category *</label>
						</div>

						<div className='user-box'>
							<input
								name='Isrc'
								required
								value={iSRC}
								onChange={(e) => setISRC(e.target.value)}
							/>
							<label>ISRC *</label>
						</div>

						<div
							value={isOriginal}
							className='user-box'
							onChange={(e) => setIsOriginals(e.target.value)}
						>
							<select name='' id=''>
								<option>True</option>
								<option> False</option>
							</select>
							<label>Is Original</label>
						</div>

						<div
							className='user-box'
							value={isFirstRecordingOfMusicalComposition}
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
								value={mediaSubmitted}
								onChange={(e) => setMediaSubmitted(e.target.value)}
							/>
							<label>Meida Submitted *</label>
						</div>

						<div className='user-box'>
							<input
								name='Date'
								type='date'
								required
								value={dateOfRegistration}
								onChange={(e) => setDateOfRegistration(e.target.value)}
							/>
							<label>Date Of Registration *</label>
						</div>
						<div className='user-box'>
							<Multiselect
								placeholder='Search for Right Holders *'
								options={rightHolders}
								selectedValues={data.myRightHolders}
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

export default EditSoundRecording;
