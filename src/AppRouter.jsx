import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from './pages/Home';
import ComparativeGraph from './pages/ComparativeGraph'
import ProcessGraph from "./pages/ProcessGraph";
import NotFound from "./pages/NotFound";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/ComparativeGraph" element={<ComparativeGraph />} />
            <Route exact path="/ProcessGraph" element={<ProcessGraph />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
