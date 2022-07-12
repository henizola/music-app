import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { workCategory } from "../../utils/utils";
import { Card } from "../card/card.component";
import { Container } from "./Musical.styles";
import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";

const EditMusicalWork = ({
	currentStep,
	setStep,
	composors,
	data,
	handleEditWork,
}) => {
	const [title, setTitle] = useState(data.title);
	const [catagory, setCatagory] = useState(data.workCategory);
	const [myComposors, setMyComposors] = useState(data.composors);

	const handleSave = (e) => {
		e.preventDefault();
		setStep(0);

		handleEditWork(
			{
				title: title,
				workCategory: catagory,
				composers: `${myComposors
					.flatMap(({ givenName }) => givenName)
					.join()}`,
				composorsList: myComposors,
			},
			data.tableData.id
		);
	};

	return (
		<Container>
			<Card>
				<button className='back' onClick={() => setStep(currentStep - 1)}>
					<BiLeftArrowAlt />
				</button>
				<form className='works' onSubmit={handleSave}>
					<div className='flex'>
						<h4 className='title'>Edit Musical Work</h4>
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
							<select
								id=''
								name='catagory'
								value={catagory}
								required={true}
								onChange={(e) => setCatagory(e.target.value)}
							>
								{workCategory.map((catagory) => (
									<option>{catagory}</option>
								))}
							</select>
							<label>Work Category *</label>
						</div>
						<div className='user-box'>
							<Multiselect
								placeholder='Search for Composors *'
								options={composors}
								selectedValues={data.myComposors}
								onSelect={(e) => setMyComposors(e)}
								onRemove={(e) => setMyComposors(e)} // Function will
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

export default EditMusicalWork;
