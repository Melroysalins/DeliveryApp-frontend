import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/homePage";
import NavBar from "./component/navbar";
import { Suspense, lazy } from "react";
import RestaurantPage from "./pages/restaurantPage";

function App() {
  const RestaurantList = lazy(() => import("./pages/restaurantList"));
  const SpecailOffer = lazy(() => import("./pages/specialOffer"));
  const TrackOrder = lazy(() => import("./pages/trackOrder"));

  return (
    <div className="App">
      <div className="Content">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/restaurantlist"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <RestaurantList />
                </Suspense>
              }
            />
            <Route
              path="/specialoffers"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <SpecailOffer />
                </Suspense>
              }
            />
            <Route
              path="/trackerorder"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <TrackOrder />
                </Suspense>
              }
            />
            <Route path="/restaurant/:_id" element={<RestaurantPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
