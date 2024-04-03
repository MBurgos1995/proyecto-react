import React from 'react';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting="Bienvenido a nuestra tienda de indumentaria masculina" />
        </div>
    );
};

export default App;
