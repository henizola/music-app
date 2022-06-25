import { Container } from "./Home.styles";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<Container>
			<div className='login-box'>
				<h2>Login</h2>
				<form>
					<div className='user-box'>
						<input type='text' name='' required='' />
						<label>Email</label>
					</div>
					<div className='user-box'>
						<input type='password' name='' required='' />
						<label>Password</label>
					</div>
					<Link to='/about'>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Submit
					</Link>
				</form>
			</div>
		</Container>
	);
};

export default Home;
