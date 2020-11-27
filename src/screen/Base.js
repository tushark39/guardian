import React from 'react'
import Footer from '../helper/Main/Footer';
import Header from "../helper/Main/Header";
export const Base = ({children}) => {
    return(
        <div>
            <Header />
    {children}
    <Footer/>
        </div>
    )
}   