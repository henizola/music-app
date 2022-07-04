import { Container } from "./CreatePassword.styles";
import { Link } from "react-router-dom";
const CreatePassword = () => {
	return (
		<Container>
			<div className='login-box'>
				<h2>Wellcome</h2>
				<form>
					<div className='user-box'>
						<input type='password' name='' required='' />
						<label>New Password</label>
					</div>
					<div className='user-box'>
						<input type='password' name='' required='' />
						<label>Confirm Password</label>
					</div>
					<Link to='/dashboard'>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Save Password
					</Link>
				</form>
			</div>
		</Container>
	);
};

export default CreatePassword;
