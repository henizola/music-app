import "./App.css";

import Home from "./Pages/Home/Home.page";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login.page";
import CreatePassword from "./Pages/CreatePassword/CreatePassword.page";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<CreatePassword />}></Route>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/dashboard' element={<Home />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
