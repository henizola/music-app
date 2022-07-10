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
						isEditable: (rowData) => rowData.title === "title", // only name(a) rows would be editable
						isEdit: (rowData) => rowData.name === "x",
						isDeletable: (rowData) => rowData.name === "b", // only name(b) rows would be deletable,
						isDelete: (rowData) => rowData.name === "y",

						onRowAddCancelled: (rowData) => console.log("Row adding cancelled"),
						onRowUpdateCancelled: (rowData) =>
							console.log("Row editing cancelled"),

						onRowUpdate: (newData, oldData) =>
							new Promise((resolve, reject) => {
								setTimeout(() => {
									const dataUpdate = [...data];
									const index = oldData.tableData.id;
									dataUpdate[index] = newData;
									setData([...dataUpdate]);

									resolve();
								}, 1000);
							}),
						onRowDelete: (oldData) =>
							new Promise((resolve, reject) => {
								setTimeout(() => {
									const dataDelete = [...data];
									const index = oldData.tableData.id;
									dataDelete.splice(index, 1);
									setData([...dataDelete]);

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
