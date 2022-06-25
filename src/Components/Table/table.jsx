import { useState } from "react";

import MaterialTable from "material-table";

function Table() {
	const [data, setData] = useState([
		{ name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
	]);

	const columns = [
		{ title: "Name", field: "name" },
		{ title: "Soyadı", field: "surname" },
		{ title: "Doğum Yılı", field: "birthYear", type: "numeric" },
		{
			title: "Doğum Yeri",
			field: "birthCity",
			lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
		},
	];

	return (
		<div className='App'>
			{/* <Home /> */}
			<MaterialTable
				editable={{
					isEditable: (rowData) => rowData.name === "a", // only name(a) rows would be editable
					isEditHidden: (rowData) => rowData.name === "x",
					isDeletable: (rowData) => rowData.name === "b", // only name(b) rows would be deletable,
					isDeleteHidden: (rowData) => rowData.name === "y",
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
					onRowUpdateCancelled: (rowData) =>
						console.log("Row editing cancelled"),
					onRowAdd: (newData) =>
						new Promise((resolve, reject) => {
							setTimeout(() => {
								/* setData([...data, newData]); */

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
		</div>
	);
}

export default Table;
