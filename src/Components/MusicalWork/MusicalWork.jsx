import { useState } from "react";

import MaterialTable from "material-table";

import { composersList, workDetails } from "../../utils/utils";
import MusicalContainer from "./Container.component";
import AddNewWork from "./AddNewMusical";
import AddNewComposor from "./AddNewComposor";
import EditMusicalWork from "./EditMusicalWork";

const MusicalWork = () => {
	const [currentStep, setCurrentStep] = useState(0);
	const [dataToEdit, setDataToEdit] = useState(null);

	const setStep = (step) => {
		setCurrentStep(step);
	};

	const [composors, setComposors] = useState(composersList);

	const columns = [
		{ title: "Title", field: "title" },
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
			myComposors: workDetails[0].composers,
		},
	]);

	const handleAddWork = (newData) => {
		setData([...data, newData]);
	};

	const handleEditWork = (newData, index) => {
		console.log("this is recived", newData, index);
		let temp = [...data];
		temp[index] = newData;
		setData([...temp]);
	};

	const handleAddComposor = (newData) => {
		setComposors([...composors, newData]);
	};

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
			<EditMusicalWork
				currentStep={currentStep}
				setStep={setStep}
				composors={composors}
				handleAddComposor={handleAddComposor}
				data={dataToEdit}
				handleEditWork={handleEditWork}
			/>
		</MusicalContainer>
	);
};

export default MusicalWork;
