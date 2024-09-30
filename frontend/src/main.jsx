import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import { AuthContextProvider } from './context/AuthContext';
import { SocketContextProvider } from './context/SocketContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { BrowserRouter } from "react-router-dom";
// import { AuthContextProvider } from "./context/AuthContext.jsx";
// import { SocketContextProvider } from "./context/SocketContext.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
// 	<React.StrictMode>
// 		<BrowserRouter>
// 			<AuthContextProvider>
// 				<SocketContextProvider>
// 					<App />
// 				</SocketContextProvider>
// 			</AuthContextProvider>
// 		</BrowserRouter>
// 	</React.StrictMode>
// );

