import { Card } from "../card/card.component";
import { Container } from "./Dashboard.styles";
import { BsMic } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { TiGroupOutline } from "react-icons/ti";
import { CgFileDocument } from "react-icons/cg";
const Dashboard = () => {
	return (
		<Container>
			<Card>
				<div className='works'>
					<div className='mic'>
						<BsMic />
					</div>
					<h4>You don't have any works yet</h4>
					<p>Share your clients musical works to get started.</p>
				</div>
			</Card>{" "}
			<Card>
				<div className='flex'>
					<h4 className='title'>OVERVIEW</h4>
					<button className='button'>view all stats</button>
				</div>
				<div className='stats'>
					<div className='stat'>
						<p>
							<TiGroupOutline />
							Interested Parties
						</p>
						<h1>1</h1>
					</div>
					<div className='stat left'>
						<p>
							<BsMic />
							Works
						</p>
						<h1>0</h1>
					</div>
				</div>
			</Card>
			<Card>
				<div className='flex'>
					<h4 className='title'>CHECKLIST</h4>
					<button className='button'>missing content</button>
				</div>
				<div className='list'>
					<BsPerson />
					<div>
						<h3>Add Profile Picture</h3>
						<p>Add a photo of you for account verification</p>
						<button className='button'>Add Profile</button>
					</div>
				</div>
				<div className='list'>
					<CgFileDocument />
					<div>
						<h3>Add Legal Documents</h3>
						<p>
							Your documents will any be used internally and won't be shared
						</p>
						<button className='button'>Add Documents</button>
					</div>
				</div>
				<div className='list'>
					<BsMic />

					<div>
						<h3>Add Your Musical works</h3>
						<p>Adding your previous work is part of the onboarding process</p>
						<button className='button'>Add Work</button>
					</div>
				</div>
				<div className='list bottom'>
					<TiGroupOutline />
					<div>
						<h3>Add Your Managed Artist</h3>
						<p>Finally add an artist you manage as an Agent.</p>
						<button className='button'>Add Artist</button>
					</div>
				</div>
			</Card>
		</Container>
	);
};

export default Dashboard;
