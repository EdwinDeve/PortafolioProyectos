import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from "./Views/HomeView";
import ListadoProyectos from "./Views/ProjectsViews/ListadoProyectos";
import DetalleProyecto from "./Views/ProjectsViews/DetalleProyecto";

function App() {
  return (
    <BrowserRouter>
    <br></br>
    <Routes>
      <Route exath path="/" Component={HomeView}/>
      <Route path="/Proyectos" Component={ListadoProyectos}/>
      <Route path="/Detalles" Component={DetalleProyecto}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
