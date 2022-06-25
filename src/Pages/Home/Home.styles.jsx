import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	padding: 0;
	margin: 0;
	min-height: 100vh;
	background: #fff;
	.login-box {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 400px;
		padding: 40px;
		transform: translate(-50%, -50%);
		background: #f4f4f4;
		box-sizing: border-box;
		box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
		border-radius: 10px;
	}

	.login-box h2 {
		margin: 0 0 30px;
		padding: 0;
		color: #292929;
		text-align: center;
	}

	.login-box .user-box {
		position: relative;
	}

	.login-box .user-box input {
		width: 100%;
		padding: 10px 0;
		font-size: 16px;
		color: #292929;
		margin-bottom: 30px;
		border: none;
		border-bottom: 1px solid #292929;
		outline: none;
		background: transparent !important;
	}
	.login-box .user-box label {
		position: absolute;
		top: 0;
		left: 0;
		padding: 10px 0;
		font-size: 16px;
		color: #292929;
		pointer-events: none;
		transition: 0.5s;
	}

	.login-box .user-box input:focus ~ label,
	.login-box .user-box input:valid ~ label {
		top: -20px;
		left: 0;
		color: #292929;
		font-size: 12px;
	}

	.login-box form a {
		position: relative;
		display: inline-block;
		padding: 10px 20px;
		color: #292929;
		font-size: 16px;
		text-decoration: none;
		text-transform: uppercase;
		overflow: hidden;
		transition: 0.5s;
		margin-top: 40px;
		letter-spacing: 4px;
	}

	.login-box a:hover {
		background: #292929;
		color: #fff;
		border-radius: 5px;
		box-shadow: 0 0 5px #292929, 0 0 25px #292929, 0 0 50px #292929,
			0 0 100px #292929;
	}

	.login-box a span {
		position: absolute;
		display: block;
	}

	.login-box a span:nth-child(1) {
		top: 0;
		left: -100%;
		width: 100%;
		height: 2px;
		background: linear-gradient(90deg, transparent, #292929);
		animation: btn-anim1 1s linear infinite;
	}

	@keyframes btn-anim1 {
		0% {
			left: -100%;
		}
		50%,
		100% {
			left: 100%;
		}
	}

	.login-box a span:nth-child(2) {
		top: -100%;
		right: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(180deg, transparent, #292929);
		animation: btn-anim2 1s linear infinite;
		animation-delay: 0.25s;
	}

	@keyframes btn-anim2 {
		0% {
			top: -100%;
		}
		50%,
		100% {
			top: 100%;
		}
	}

	.login-box a span:nth-child(3) {
		bottom: 0;
		right: -100%;
		width: 100%;
		height: 2px;
		background: linear-gradient(270deg, transparent, #292929);
		animation: btn-anim3 1s linear infinite;
		animation-delay: 0.5s;
	}

	@keyframes btn-anim3 {
		0% {
			right: -100%;
		}
		50%,
		100% {
			right: 100%;
		}
	}

	.login-box a span:nth-child(4) {
		bottom: -100%;
		left: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(360deg, transparent, #292929);
		animation: btn-anim4 1s linear infinite;
		animation-delay: 0.75s;
	}

	@keyframes btn-anim4 {
		0% {
			bottom: -100%;
		}
		50%,
		100% {
			bottom: 100%;
		}
	}
`;
