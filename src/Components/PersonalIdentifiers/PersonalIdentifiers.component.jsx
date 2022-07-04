import { Card } from "../card/card.component";
import { Container } from "./PersonalIdentifiers.styles";
import { BsMic } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { TiGroupOutline } from "react-icons/ti";
import { CgFileDocument } from "react-icons/cg";
import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

const PersonalIdentifiers = () => {
	const [state, setState] = React.useState({
		ipi: true,
		iswc: false,
		isrc: false,
		ipn: false,
		isni: false,
	});

	const handleChange = (event) => {
		setState({
			...state,
			[event.target.name]: event.target.checked,
		});
	};

	const { ipi, iswc, isrc, ipn, isni } = state;
	return (
		<Container>
			<Card>
				<div className='works'>
					<div className='grid'>
						<FormGroup style={{ display: "flex" }}>
							<FormControlLabel
								control={
									<Checkbox checked={ipi} onChange={handleChange} name='ipi' />
								}
								label='IPI'
							/>
							<FormHelperText style={{ fontSize: "16px" }}>
								123456789
							</FormHelperText>
						</FormGroup>
						<FormGroup style={{ display: "flex" }}>
							<FormControlLabel
								control={
									<Checkbox
										checked={iswc}
										onChange={handleChange}
										name='iswc'
									/>
								}
								label='ISWC'
							/>
							<FormHelperText style={{ fontSize: "16px" }}>
								Pending
							</FormHelperText>
						</FormGroup>
						<FormGroup style={{ display: "flex" }}>
							<FormControlLabel
								control={
									<Checkbox
										checked={isrc}
										onChange={handleChange}
										name='isrc'
									/>
								}
								label='ISRC'
							/>
						</FormGroup>
						<FormGroup style={{ display: "flex" }}>
							<FormControlLabel
								control={
									<Checkbox checked={ipn} onChange={handleChange} name='ipn' />
								}
								label='IPN'
							/>
						</FormGroup>
						<FormGroup style={{ display: "flex" }}>
							<FormControlLabel
								control={
									<Checkbox
										checked={isni}
										onChange={handleChange}
										name='isni'
									/>
								}
								label='ISNI'
							/>
							<FormHelperText
								style={{ fontSize: "16px" }}
								style={{ fontSize: "16px" }}
							>
								Pending
							</FormHelperText>
						</FormGroup>
						<Link to='#'>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							Save
						</Link>
					</div>
				</div>
			</Card>
		</Container>
	);
};

export default PersonalIdentifiers;
