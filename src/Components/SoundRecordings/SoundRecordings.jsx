import { useState } from "react";

import MaterialTable from "material-table";
import { Card } from "../card/card.component";
import { Button } from "bootstrap";

function SoundRecordings() {
	const [data, setData] = useState([]);

	const columns = [
		{ title: "Title", field: "title", editable: true },
		{ title: " Registrant", field: " registrant" },
		{ title: "Musical Composition Title", field: "musicTitle" },
		{ title: "Status of Recording", field: "status" },
		{ title: "Work Category", field: "catagory" },
		{ title: "ISRC", field: "isrc" },

		{
			title: "Is Original",
			field: "original",
			lookup: { 34: "True", 63: "False" },
		},
		{
			title: "	Is first recording of musical composition",
			field: "original",
			lookup: { 34: "True", 63: "False" },
		},

		{
			title: " Media Submitted",
			field: "media",
			editComponent: () => (
				<div value='photo'>
					<input
						accept='image/*'
						id='raised-button-file'
						multiple
						type='file'
					/>
				</div>
			),
			render: (rowData) =>
				rowData.photo === undefined ? (
					<img src='http://lorempixels.com/1600/900/nature/'></img>
				) : (
					<img src={rowData.photo} aspectRatio={16 / 9} />
				),
		},
		{ title: " Date of Registration", field: "date" },
		{ title: " Rightsholders", field: "rightHolder" },
	];

	return (
		<MaterialTable
			title='Sound Recordings'
			style={{ marginTop: "100px", padding: "30px" }}
			editable={{
				isEditable: (rowData) => rowData.title === "title", // only name(a) rows would be editable
				isEdit: (rowData) => rowData.name === "x",
				isDeletable: (rowData) => rowData.name === "b", // only name(b) rows would be deletable,
				isDelete: (rowData) => rowData.name === "y",
				onBulkUpdate: (changes) =>
					new Promise((resolve, reject) => {
						setTimeout(() => {
							setData([
								...data,
								{
									name: "Mehmet",
									surname: "Baran",
									birthYear: 1987,
									birthCity: 63,
								},
							]);

							resolve();
						}, 1000);
					}),
				onRowAddCancelled: (rowData) => console.log("Row adding cancelled"),
				onRowUpdateCancelled: (rowData) => console.log("Row editing cancelled"),
				onRowAdd: (newData) =>
					new Promise((resolve, reject) => {
						setTimeout(() => {
							setData([...data, newData]);

							resolve();
						}, 1000);
					}),
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
			data={data}
		/>
	);
}

export default SoundRecordings;
