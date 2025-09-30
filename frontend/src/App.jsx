import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CityList from "./components/cityList/cityList.jsx";
import SpecialFunctions from "./components/specialFunctions/specialFunctions.jsx";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<CityList />} />
                <Route path="/special-functions" element={<SpecialFunctions />} />
            </Routes>
        </div>
    );
}

export default App;
