import styled from "styled-components";

export const Contanier = styled.div`
	max-width: 100%;
	width: 100%;
	height: fit-content;
	display: grid;
	grid-template-columns: 300px 1fr;
	grid-gap: 50px;
	margin: 0px auto;
	margin-right: 50px;

	.header {
		height: 100%;
		position: fixed;
		top: 100px;
		button {
			color: #fefefe !important;
		}
	}

	.nav {
		display: flex;
		flex-direction: column;
		color: #fefefe;
		width: 100%;
		text-align: left;
	}
	.tab {
		font-size: 18px;
		font-weight: 200;
		min-width: 50px;
		text-align: center;
		background-color: transparent;
		border: none;
		padding: 12px 25px;
		margin: 0px;

		text-align: left;
		margin-top: 5px;
	}
	.avatar-container {
		background-color: #d1d1d3;
		border-radius: 100%;
		padding: 10px;
		width: 100px;
		height: 100px;
		margin-left: 50%;
		transform: translateX(-50%);
		margin-bottom: 50px;
	}
	.avatar {
		width: 70px;
		border-radius: 50px;
		margin-left: 50%;
		margin-top: 7%;
		transform: translateX(-50%);
	}
	.active {
		background-color: #eeeeee;

		border-radius: 3px;
	}
	.tab.active {
		color: #000 !important;
	}
	.content {
		max-width: 100%;
		width: 100%;

		overflow: scroll;
		.button {
			width: auto;
			height: 30px;
			padding: 0px 20px;
			border: none;
			border-radius: 20px;
			background-color: #f4f4f4;
			margin-top: 15px;
			color: #7e7d82;
		}
	}
`;
