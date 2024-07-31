import "./Content.css";
import React from "react";
import { Routes, Route } from "react-router-dom"; 
 
import Home from "../../views/examples/Home";
import About from "../../views/examples/About";
import Param from "../../views/examples/Param";
import NotFound from "../../views/examples/NotFound";
import UseState from "../../views/examples/UseState";
import UseEffect from "../../views/examples/UseEffect";
import UseRef from "../../views/examples/UseRef";
import UseMemo from "../../views/examples/UseMemo";
import UseCallback from "../../views/examples/UseCallback";
import UseContext from "../../views/examples/UseContext";
 
const Content = props => (
  <main className="Content">
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/param/:id" element={<Param />} />
      <Route path="/useState" element={<UseState />} />
      <Route path="/useEffect" element={<UseEffect />} />
      <Route path="/useRef" element={<UseRef />} />
      <Route path="/useMemo" element={<UseMemo />} />
      <Route path="/useCallback" element={<UseCallback />} />
      <Route path="/useContext" element={<UseContext />} />
      <Route path="/" exact element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
);
 
export default Content;
