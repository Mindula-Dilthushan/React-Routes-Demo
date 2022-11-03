import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ScreenOne from "./pages/ScreenOne";
import ScreenTwo from "./pages/ScreenTwo";

const App = () => (
    <Router>
        <Routes>
            <Route path="/one" element={<ScreenOne/>}/>
            <Route path="/two" element={<ScreenTwo/>}/>
        </Routes>
    </Router>
);

export default App;