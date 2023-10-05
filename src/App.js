import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from "./Views/HomeView";
import ListadoProyectos from "./Views/ProjectsViews/ListadoProyectos";

function App() {
  return (
    <BrowserRouter>
    <br></br>
    <Routes>
      <Route exath path="/" Component={HomeView}/>
      <Route exath path="/Proyectos" Component={ListadoProyectos}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
