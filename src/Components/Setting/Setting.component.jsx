import { Link } from "react-router-dom";
import { Card } from "../card/card.component";
import { Container } from "./Setting.styles";
const Setting = () => {
	return (
		<Container>
			<Card>
				<div className='works'>
					<div className='flex'>
						<h4 className='title'>Personal Information</h4>
					</div>
					<div className='stats'>
						<div className='user-box'>
							<input name='' required='' />
							<label>First Name</label>
						</div>
						<div className='user-box'>
							<input name='' required='' />
							<label>Last Name</label>
						</div>
						<div className='user-box'>
							<input name='' required='' />
							<label>Email</label>
						</div>
						<div className='user-box'>
							<input type='date' name='' required='' />
							<label>Date Of Birth</label>
						</div>
					</div>
					<Link to='#'>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Save Changes
					</Link>
				</div>
			</Card>
			<Card>
				<div className='works'>
					<div className='flex'>
						<h4 className='title'>Reset Password</h4>
					</div>
					<div className='stats'>
						<div className='user-box'>
							<input name='' required='' />
							<label>Old Password</label>
						</div>
						<div></div>
						<div className='user-box'>
							<input name='' required='' />
							<label>New Password</label>
						</div>
						<div className='user-box'>
							<input name='' required='' />
							<label>Confirm Password</label>
						</div>
					</div>
					<Link to='#'>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Save Changes
					</Link>
				</div>
			</Card>
		</Container>
	);
};

export default Setting;
