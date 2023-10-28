import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.json';


export const Sidebar = () => {
    const[active, setActive] = useState(1);
    return (
        <div className='sidebar d-flex justify-content-between flex-column bg-primary text-white py-3 ps-3 pe-5 vh-100'>
            <div>
                <a href='' className='p-3 text-decoration-none text-white'>
                    <i className='me-3 fs-4'>😊</i>
                    <span className='fs-4'>
                        <strong>
                        Usuario
                        </strong>
                    </span>
                </a>
                <hr className='text-white mt-2' />
                <ul className='nav nav-pills flex-column mt-3 text-white'>
                    <li className={active  ===1 ? 'active nav-item' : "nav-item"} onClick={e => setActive(1)}>
                        <span href='' className='p-3'>
                            <i className='me-3 fs-4'>😊</i>
                            <span className='fs-4'><strong>Home</strong></span>
                        </span>    
                    </li>
                    <li className={active  ===2 ? 'active nav-item' : "nav-item"} onClick={e => setActive(2)}>
                        <span href='' className='p-3'>
                            <i className='me-3 fs-4'>😊</i>
                            <span className='fs-4'><strong>Habitos</strong></span>
                        </span>
                    </li>
                    <li className={active  ===3 ? 'active nav-item' : "nav-item"} onClick={e => setActive(3)}>
                        <span href='' className='p-3'>
                            <i className='me-3 fs-4'>😊</i> 
                            <span className='fs-4'><strong>Favoritos</strong></span>
                        </span>
                    </li>
                    <li className={active  ===4 ? 'active nav-item' : "nav-item"} onClick={e => setActive(4)}>
                        <span href='' className='p-3'>
                            <i className='me-3 fs-4'>😊</i>
                            <span className='fs-4'><strong>Configuracion</strong></span>
                        </span>
                    </li>

                </ul>
            </div>
            <div>
                <hr className='text-white' />
                <div>
                    <a href='' className='p-3  text-decoration-none text-white'>
                        <i className='me-3 fs-4'>😊</i>
                        <span className='fs-4'>
                            <strong>
                            Log out 
                            </strong>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};