import styled from "styled-components";

export const Container = styled.div`
	width: 100% !important;
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 30px;
	.flex {
		padding: 30px;
		padding-bottom: 0;
		display: flex;
		justify-content: space-between;
	}
	.title {
		color: #7e7d82;
		margin-bottom: 50px;
	}
	.stats {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 0 30px;
		grid-gap: 50px;
		grid-row-gap: 10px;
	}
	.user-box {
		position: relative;
	}

	.user-box input {
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
	.user-box label {
		position: absolute;
		top: 0;
		left: 0;
		padding: 10px 0;
		font-size: 16px;
		color: #292929;
		pointer-events: none;
		transition: 0.5s;
	}

	.user-box input:focus ~ label,
	.user-box input:valid ~ label {
		top: -20px;
		left: 0;
		color: #292929;
		font-size: 12px;
	}

	a {
		position: relative;
		display: inline-block;
		padding: 10px 20px;
		color: #292929;
		font-size: 16px;
		text-decoration: none;
		text-transform: uppercase;
		overflow: hidden;
		transition: 0.5s;
		margin-bottom: 20px;
		margin-top: 20px;
		letter-spacing: 4px;
		border: 1px solid #292929;
		margin-left: 30px;
	}

	a:hover {
		background: #292929;
		color: #fefefe;
		border-radius: 5px;
		box-shadow: 0 0 5px #292929, 0 0 25px #292929, 0 0 50px #292929,
			0 0 100px #292929;
	}

	a span {
		position: absolute;
		display: block;
	}
	.works {
		width: 100%;

		height: fit-content;
		text-align: center;
		border-radius: 5px;
	}
`;
