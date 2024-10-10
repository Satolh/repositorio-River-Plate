import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './Style/index.css'
import "./Style/notFoundPage.css"
import "./Style/copas.css"
import "./Style/camisetas.css"
import "./Style/datoPartido.css"
import "./Style/formacion.css"
import "./Style/superClasico.css"

import SuperClasicos from './componentes/SuperClasicos.jsx'
import CamisetasRiver from './componentes/CamisetasRiver.jsx'
import NotFoundPage from './componentes/NotFoundPage.jsx'
import Libertadores from './componentes/Libertadores.jsx'
import CopaArgentina from './componentes/CopaArgentina.jsx'
import Recopas from './componentes/Recopas.jsx'
import CrearFormacion from "./componentes/CrearFormacion.jsx"
import Torneolocal from './componentes/TorneoLocal.jsx'

import PartidosTorneo from './componentes/PartidosTorneo.jsx'
import PartidosLibertadores from './componentes/PartidosLibertadores.jsx'
import PartidosCopaArgentina from './componentes/PartidosCopaArgentina.jsx'
import PartidosSuperClasicos from './componentes/PartidosSuperClasicos.jsx'

import DatoPartidosLibertadores from './componentes/DatoPartidosLibertadores.jsx'
import DatoPartidosCopaArgentina from './componentes/DatoPartidosCopaArgentina.jsx'
import DatoPartidosTorneo from './componentes/DatoPartidosTorneo.jsx'
import DatoPartidosSuperClasico from './componentes/DatoPartidosSuperClasico.jsx'

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "libertadores",
    element: <Libertadores/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "recopas",
    element: <Recopas/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "torneoLocal",
    element: <Torneolocal/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "copaArgentina",
    element: <CopaArgentina/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "camisetas",
    element: <CamisetasRiver/>,
    errorElement: <NotFoundPage/>
  },  {
    path: "superClasicos",
    element: <SuperClasicos/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "partidosLibertadores",
    element: <PartidosLibertadores/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "partidosCopaArgentina",
    element: <PartidosCopaArgentina/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "partidosTorneo",
    element: <PartidosTorneo/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "partidosSuperClasicos",
    element: <PartidosSuperClasicos/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "datoPartidosCopaArgentina",
    element: <DatoPartidosCopaArgentina/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "datoPartidosLibertadores",
    element: <DatoPartidosLibertadores/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "datoPartidosTorneo",
    element: <DatoPartidosTorneo/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "datoSuperClasicos",
    element: <DatoPartidosSuperClasico/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "formacion",
    element: <CrearFormacion/>,
    errorElement: <NotFoundPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
