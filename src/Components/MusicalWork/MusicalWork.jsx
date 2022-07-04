import { useState } from "react";

import MaterialTable from "material-table";
import { Card } from "../card/card.component";
import { Button } from "bootstrap";

function MusicalWork() {
	const [data, setData] = useState([]);

	const columns = [
		{ title: "Title", field: "title", editable: true },
		{
			title: " Work Category",
			field: "workCategory",
			lookup: {
				34: "Music Composition",
				63: "Sound Recording",
				73: "Performance",
			},
		},
		{
			title: "Composers",
			field: "composers",
			detailPanelType: "multiple",
			lookup: {
				34: "Jone ",
				63: "DOE",
				73: "Test",
			},
		},
	];

	return (
		<MaterialTable
			title='Musical Work'
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

export default MusicalWork;
