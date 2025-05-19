// Routing.jsx
import { Route, Routes } from "react-router-dom";
import { Apartment } from "./Apartment";
import { Category } from './Category';
import { Card } from "./Card";
import { Login } from "./Login";
import { SignIn } from "./SignIn";
import { City } from "./City";
import { AddCity } from "./AddCity";
import { AddCategory } from './AddCategory';
import { MyApartments } from './MyApartments';
import { AddApartment } from "./AddApartment";
import { UpdateApartment } from "./UpdateApartment";
import { DeleteApartment } from "./DeleteApartment";
import { Home } from "./Home";
import { Details } from "./Details";
// import EmailSender from "./EmailSender";
// import './Routing.css'; // Importing CSS for styling

export const Routing = () => {
    return (
        <Routes>

            <Route path="" element={<Home />} />
            <Route path="AddApartment" element={<AddApartment />} />
            <Route path="DeleteApartment" element={<DeleteApartment />} />
            <Route path="Apartment" element={<Apartment />} >
          
            </Route>
            <Route path="Login" element={<Login />} />
            <Route path="Card/:apartment/:show" element={<Card />} />
            <Route path="SignIn" element={<SignIn />} />
            <Route path="Category" element={<Category />}>
                <Route path="AddCategory" element={<AddCategory />} />
            </Route>
            <Route path="City" element={<City/>}>
                <Route path="AddCity" element={<AddCity />} />
            </Route>
            <Route path="MyApartments" element={<MyApartments />} />
            <Route path="UpdateApartment/:id" element={<UpdateApartment />} />
            <Route path="Details/:id" element={<Details />} />

        </Routes>
    );
};