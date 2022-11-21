import React from 'react'
import CartWidget from './CartWidget'
const NavBar = () => {
    return (
        <div className="navbar bg-slate-100 saturate-200 border-double border-b-4 border-t-4 border-violet-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <a className="font-brand normal-case text-green-500 saturate-200 text-4xl accent-purple-700">Electricity</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-sm text-white">
                    <li><a className="font-nav font-semibold">SALE</a></li>
                    <li tabIndex={0}>
                        <a className='font-nav font-semibold'>
                            Productos
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2">
                            <li><a className='font-nav'>Partes de arriba</a></li>
                            <li><a className='font-nav'>Partes de abajo</a></li>
                        </ul>
                    </li>
                    <li><a className='font-nav font-semibold'>Preguntas frecuentes y talles</a></li>
                </ul>
            </div>
            <CartWidget/>
        </div>
    )
}

export default NavBar