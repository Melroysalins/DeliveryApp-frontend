import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/homePage";
import NavBar from "./component/navbar";
// import asynhandler from ".../../../../../admindashboard/backend/"

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
