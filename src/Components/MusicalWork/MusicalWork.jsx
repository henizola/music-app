import { useState } from "react";

import MaterialTable from "material-table";

import { composersList, workDetails } from "../../utils/utils";
import MusicalContainer from "./Container.component";
import AddNewWork from "./AddNewMusical";
import AddNewComposor from "./AddNewComposor";

const MusicalWork = () => {
	const [currentStep, setCurrentStep] = useState(0);

	const setStep = (step) => {
		setCurrentStep(step);
	};

	const [composors, setComposors] = useState(composersList);

	const columns = [
		{ title: "Title", field: "title", editable: true },
		{
			title: " Work Category",
			field: "workCategory",
		},
		{
			title: "Composers",
			field: "composers",
		},
	];

	let [data, setData] = useState([
		{
			title: "Dumy 1",
			workCategory: workDetails[0].workCategory,
			composers: `${workDetails[0].composers
				.flatMap(({ givenName }) => givenName)
				.join()}`,
		},
	]);

	const handleAddWork = (newData) => {
		setData([...data, newData]);
	};

	const handleAddComposor = (newData) => {
		setComposors([...composors, newData]);
	};

	const result = workDetails[0].composers;
	console.log("here is your data", result);
	return (
		<MusicalContainer currentStep={currentStep} setStep={setStep}>
			<div>
				<button
					style={{ margin: "50px auto", padding: "15px" }}
					onClick={() => setStep(currentStep + 1)}
				>
					Add Musical Work
				</button>
				<MaterialTable
					title='Musical Work'
					style={{ padding: "30px" }}
					editable={{
						isEditable: (rowData) => rowData.title === "title", // only name(a) rows would be editable
						isEdit: (rowData) => rowData.name === "title",

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
					}}
					columns={columns}
					data={data}
				/>
			</div>
			<AddNewWork
				currentStep={currentStep}
				setStep={setStep}
				composors={composors}
				handleAddWork={handleAddWork}
			/>
			<AddNewComposor
				currentStep={currentStep}
				setStep={setStep}
				composors={composors}
				handleAddComposor={handleAddComposor}
			/>
		</MusicalContainer>
	);
};

export default MusicalWork;
