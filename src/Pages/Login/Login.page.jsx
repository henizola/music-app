import { Container } from "./Login.styles";
import { Link } from "react-router-dom";
const Login = () => {
	return (
		<Container>
			<div className='login-box'>
				<h2>Login</h2>
				<form>
					<div className='user-box'>
						<input type='password' name='' required='' />
						<label>Email</label>
					</div>
					<div className='user-box'>
						<input type='password' name='' required='' />
						<label>Password</label>
					</div>
					<Link to='/dashboard'>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Login
					</Link>
				</form>
			</div>
		</Container>
	);
};

export default Login;
