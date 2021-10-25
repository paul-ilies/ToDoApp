import React from 'react'
import "./app.scss";
import Footer from './components/footer/Footer';
import Header from './components/header/Header';


const App = ({ children }) => {



    return (
        <div className="container">
            <Header />
            <div className="children">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default App
