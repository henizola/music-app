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
	}
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 20px;
		padding: 30px 30px;
	}

	.works {
		width: 100%;
		border: 2px solid #18253a !important;
		height: fit-content;
		text-align: center;
		border-radius: 5px;
	}
	a {
		position: relative;
		display: inline-block;
		padding: 10px 30px;

		color: #292929;
		font-size: 16px;
		text-decoration: none;
		text-transform: uppercase;
		overflow: hidden;
		transition: 0.5s;
		/* margin-bottom: 20px; */
		margin-top: 20px;
		letter-spacing: 4px;
		border: 1px solid #292929;
		width: fit-content;
		height: fit-content;
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
`;
