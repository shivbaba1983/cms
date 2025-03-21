import React, { Component } from "react";
import ComplexHeader from './components/ComplexHeader';
import { Routes, Route } from 'react-router-dom';
import Home from "./home/home"
import Attraction from "./attraction/attraction";
import Facility from "./facility/facility"
import MainLayout from "./main-layout/MainLayout";
import './CMSRoute.scss';


const CMSRoute = () => {
    const Mega_Menu = [
        { id: 1, name: 'Home', url: '/cms/home' },
        { id: 2, name: 'Attraction', url: '/cms/attraction' },
        { id: 3, name: 'Facility', url: '/cms/facility' }
    ]
    

    return (

        <div>
            <ComplexHeader />
            <div className='complex-main-route-section'>
                {/* <nav className='tab-list'>
                    <ul className="cms-meganav-section">
                       {
                        Mega_Menu.map((link)=>(
                            <li key={link.id} className="meganav-sublist">
                                <a href={link.url}>{link.name}</a>
                            </li>
                        ))}                      

                    </ul>                    
                </nav> */}
                <div className='tab-list'>
                    {/* <div className='link-button'><a href='/cms/home'>Home</a></div>
                    <div className='link-button'><a href='/cms/attraction'>Attraction</a></div>
                    <div className='link-button'> <a href='/cms/facility'>Facility</a></div> */}
                </div>

            </div>

            <Routes>
                <Route path="*" element={<MainLayout />} />
                {/* <Route path="/cms/home" element={<Home />} />
                <Route path="/cms/attraction" element={<Attraction />} />
                <Route path="/cms/facility" element={<Facility />} /> */}
            </Routes>
        </div>
    )
}

export default CMSRoute;