import { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../context';



const Navbar = () => {
    const context = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4';


    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-slate-300 shadow-lg'>
            <ul className='flex  items-center  gap-3'>
                <li className='font-semibold text-lg flex items-center'>
                    <NavLink to='/' className='flex items-center'>
                        <img className='w-6 h-6' src="https://www.svgrepo.com/show/530489/shopping.svg" alt="logo de Shopi" />
                        <span className='ml-2'>Shopi</span>                       
                    </NavLink>
                </li>
                <li>
                    
                    <NavLink
                        to='/'
                        onClick={() => context.setSearchByCategory('')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/mens-clothing'
                        onClick={() => context.setSearchByCategory(`men's clothing`)}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Men's Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/womens-clothing'
                        onClick={() => context.setSearchByCategory(`women's clothing`)}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Women's Clothing 
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        onClick={() => context.setSearchByCategory(`electronics`)}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/jewelry'
                        onClick={() => context.setSearchByCategory(`jewelery`)}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Jewelry
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/other'
                        onClick={() => context.setSearchByCategory(`other`)}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Other
                    </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-3'>
                <li className='text-black/50'>
                    juan@gmail.com
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex pl-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <div className='pl-1'>
                        {context.count}
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
