import React from 'react';
import {Route, Routes} from "react-router-dom";
import Market from "./Market";
import Header from "../shared/ui/Header";

const Routing = () => {
    return (
        <>
          <div className="container">
              <Routes>
                  <Route path={"/"} element={<Market/>}/>
              </Routes>
          </div>
        </>
    );
};

export default Routing;