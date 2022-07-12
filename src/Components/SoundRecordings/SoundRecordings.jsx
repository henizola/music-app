import { useState } from "react";

import MaterialTable from "material-table";
import AddNewWork from "./AddNewWork";
import SoundContainer from "./Container.component";

import AddNewRightHolder from "./AddNewRightHolder";
import { rightHolderList, work } from "../../utils/utils";
import EditSoundRecording from "./EditSoundRecording";

function SoundRecordings() {
	const [dataToEdit, setDataToEdit] = useState(null);
	const [currentStep, setCurrentStep] = useState(0);

	const setStep = (step) => {
		setCurrentStep(step);
	};

	const [newWork, setNewWork] = useState(work);
	const [rightHolders, setRightHolders] = useState(rightHolderList);

	const handleAddWork = (newData) => {
		setNewWork([...newWork, newData]);
	};

	const handleAddRightHolder = (newData) => {
		setRightHolders([...rightHolders, newData]);
	};

	const columns = [
		{ title: "Title", field: "title" },
		{ title: " Registrant", field: "registrant" },
		{ title: "Musical Composition Title", field: "musicalCompositionTitle" },
		{ title: "Status of Recording", field: "statusOfRecording" },
		{ title: "Work Category", field: "workCategory" },
		{ title: "ISRC", field: "iSRC" },

		{ title: "Is Original", field: "isOriginal" },
		{
			title: "	Is first recording of musical composition",
			field: "isFirstRecordingOfMusicalComposition",
		},

		{ title: " Media Submitted", field: "mediaSubmitted" },
		{ title: " Date of Registration", field: "dateOfRegistration" },
		{ title: " Rightsholders", field: "rightsholders" },
	];

	const handleEditRightHolder = (newData, index) => {
		let temp = [...newWork];
		temp[index] = newData;
		setNewWork([...temp]);
	};

	return (
		<SoundContainer currentStep={currentStep} setStep={setStep}>
			<div>
				<button
					style={{ margin: "50px auto", padding: "15px" }}
					onClick={() => setStep(currentStep + 1)}
				>
					Add Recording
				</button>
				<MaterialTable
					title='Sound Recordings'
					style={{ padding: "30px" }}
					actions={[
						{
							icon: "edit",
							tooltip: "Edit data",
							onClick: (event, rowData) => {
								setStep(currentStep + 3);
								setDataToEdit(rowData);
							},
						},
					]}
					columns={columns}
					data={newWork}
				/>
			</div>
			<AddNewWork
				currentStep={currentStep}
				setStep={setStep}
				handleAddWork={handleAddWork}
				rightHolders={rightHolders}
			/>
			<AddNewRightHolder
				currentStep={currentStep}
				setStep={setStep}
				handleAddRightHolder={handleAddRightHolder}
				rightHolders={rightHolders}
			/>
			<EditSoundRecording
				currentStep={currentStep}
				setStep={setStep}
				handleEditRightHolder={handleEditRightHolder}
				rightHolders={rightHolders}
				data={dataToEdit}
			/>
		</SoundContainer>
	);
}

export default SoundRecordings;
