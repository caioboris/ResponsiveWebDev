import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Bloco de rotas
import { createBrowserRoute, RouterProvider } from 'react-router-dom';
import EditarProdutos from './routes/EditarProdutos.jsx';
import Home from './routes/Home.jsx';
import Produtos from './routes/Produtos.jsx';
import Error404 from './routes/Error404.jsx';


//Bloco de rota


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
