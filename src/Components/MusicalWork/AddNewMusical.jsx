import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { workCategory } from "../../utils/utils";
import { Card } from "../card/card.component";
import { Container } from "./Musical.styles";
import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";

const AddNewWork = ({ currentStep, setStep, composors, handleAddWork }) => {
	const [title, setTitle] = useState("");
	const [catagory, setCatagory] = useState(workCategory[0]);
	const [myComposors, setMyComposors] = useState([]);

	const handleSave = (e) => {
		e.preventDefault();
		setStep(currentStep - 1);
		handleAddWork({
			title: title,
			workCategory: catagory,
			composers: `${myComposors.flatMap(({ givenName }) => givenName).join()}`,
		});
	};

	return (
		<Container>
			<Card>
				<button className='back' onClick={() => setStep(currentStep - 1)}>
					<BiLeftArrowAlt />
				</button>
				<form className='works' onSubmit={handleSave}>
					<div className='flex'>
						<h4 className='title'>Add New Musical Work</h4>
					</div>
					<div className='stats'>
						<div className='user-box'>
							<input
								name='title'
								required={true}
								onChange={(e) => setTitle(e.target.value)}
							/>
							<label>Title *</label>
						</div>
						<div className='user-box'>
							<select
								id=''
								name='catagory'
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
								// selectedValues={[]}
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

export default AddNewWork;
