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
	.stats {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 0 30px;
	}
	.left {
		padding-left: 100px;
		border-left: 2px solid #18253a !important;
	}
	.works {
		width: 100%;
		border: 2px solid #18253a !important;
		height: fit-content;
		text-align: center;
		padding-bottom: 40px;
		border-radius: 5px;
	}
	.mic {
		width: fit-content;
		border-radius: 100%;
		padding: 20px;
		margin: 50px auto;
		margin-bottom: 10px;
		background-color: #f4f4f4;
		svg {
			font-size: 30px;
			margin: 0 auto;
		}
	}
	.list {
		margin: 30px;
		padding: 30px;
		display: grid;
		grid-template-columns: 50px 1fr;
		grid-gap: 30px;
		border-bottom: 2px solid #18253a !important;
		svg {
			font-size: 30px;
			margin-top: 25px;
		}
	}
	.bottom {
		border-bottom: none !important;
		padding-bottom: 0;
	}
	table {
		font-size: 30px !important;
	}
`;
