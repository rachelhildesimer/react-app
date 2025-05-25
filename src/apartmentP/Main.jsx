// Main.jsx
import { BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./Apartment";
import { Login } from "./Login";
import { Nav } from "./Nav";
import { Routing } from "./Routing";
import { Provider } from "react-redux";
import myStore from "./redux/Store";
// import './Main.css'; // Importing CSS for styling

export const Main = () => {
    return (
        <Provider store={myStore}>
            <BrowserRouter>
                <Nav />
                <Routing />
            </BrowserRouter>
        </Provider>
    );
};