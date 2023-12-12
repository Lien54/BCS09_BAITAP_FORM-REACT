import { Route, Routes } from "react-router-dom";
import Template from "./Template/Template";
import Form from "./Components/Form/Form";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Template />}>
          <Route element={<Form />} path="/"></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
