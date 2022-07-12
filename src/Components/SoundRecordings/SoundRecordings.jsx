import { useState } from "react";

import MaterialTable from "material-table";
import AddNewWork from "./AddNewWork";
import SoundContainer from "./Container.component";
import { work } from "../../utils/recording";
import AddNewRightHolder from "./AddNewRightHolder";
import { rightHolderList } from "../../utils/utils";

function SoundRecordings() {
	const [data, setData] = useState([]);
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
					editable={{
						onRowUpdateCancelled: (rowData) =>
							console.log("Row editing cancelled"),

						onRowUpdate: (newData, oldData) =>
							new Promise((resolve, reject) => {
								setTimeout(() => {
									const dataUpdate = [...newWork];
									const index = oldData.tableData.id;
									console.log("here is the");
									dataUpdate[index] = newData;
									setNewWork([...dataUpdate]);

									resolve();
								}, 1000);
							}),
					}}
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
		</SoundContainer>
	);
}

export default SoundRecordings;
