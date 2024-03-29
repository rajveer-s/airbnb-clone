import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./Pages/IndexPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<IndexPage />}/>
      <Route path="/login" element={<LoginPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
