import './Navbar.css';
import logo from '../images/logo.jpg';
import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Passport from './Passport';
import Visas from './Visas';
import Pancard from './Pancard';
import Aboutus from './Aboutus';
import Hero from './Hero';
import Herosectioncopy from './Herosectioncopy';
import { useState } from 'react';
const Navbar = () => {
    const [show, setShow] = useState(false);
    function handleShow() {
        setShow(!show);
    }
    const [showMenu, setShowmenu] = useState(true);
    function handleMenu() {
        setShowmenu(!showMenu);
    }
    return (
        <div className='nav-menu'>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>

            <div className='newtry'>
                <div className='nav-items' onClick={handleShow}  >
                    <nav className={`${showMenu ? 'showMenuProp' : ''}`}>
                        <ul>
                            <li className={` ${show ? 'navItems' : ''}`}>
                                <NavLink className="navtitle nav-content" to="/passport">PASSPORT</NavLink>
                                <i className='fa-solid fa-chevron-down nav-content'></i>

                                {
                                    show &&
                                    <div>
                                        <div className='dropdowns'>
                                            <NavLink to="/passportapply">Passport Apply</NavLink>
                                            <NavLink to="/passportapplyn">Passport Apply-Normal</NavLink>
                                            <NavLink to="/passportapplyt">Passport Apply-Tatkal</NavLink>
                                            <NavLink to="/checkavailability">Check Appointment Availability</NavLink>
                                            <NavLink to="/trackstatus">Track Application Status</NavLink>
                                        </div>
                                        <Routes>
                                            <Route path="/passportapply" element={<div>Passport Apply</div>} />
                                            <Route path="/passportapplyn" element={<div>Passport Apply-Normal</div>} />
                                            <Route path="/passportapplyt" element={<div>Passport Apply-Tatkal</div>} />
                                            <Route path="/checkavailability" element={<div>Check Appointment Availability</div>} />
                                            <Route path="/trackstatus" element={<div>Track Application Status</div>} />
                                        </Routes>
                                    </div>
                                }
                            </li>
                            <li>
                                <NavLink className="navtitle" to="/visas">VISAS</NavLink>
                                <i className='fa-solid fa-chevron-down'></i>
                            </li>
                            <li>
                                <NavLink className="navtitle" to="/pancard">PAN CARD</NavLink>
                                <i className='fa-solid fa-chevron-down'></i>
                            </li>
                            <li>
                                <NavLink className="navtitle" to="/contact">CONTACT US</NavLink>
                                <i className='fa-solid fa-chevron-down'></i>
                            </li>
                            <li>
                                <NavLink className="navtitle" to="/about">ABOUT US</NavLink>
                                <i className='fa-solid fa-chevron-down'></i>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/" element={<Herosectioncopy />}>
                            <Route index element={<Hero />} />
                            <Route path="/passport" element={<Passport />} />
                            <Route path="/visas" element={<Visas />} />
                            <Route path="/pancard" element={<Pancard />} />
                            {/* <Route path="/contact" element={<Contactus />} /> */}
                            <Route path="/about" element={<Aboutus />} />
                        </Route>
                    </Routes>
                    {/* Dropdowns */}
                    {/* {
                    show &&
                    <div>
                        <div className='dropdowns'>
                            <NavLink to="/passportapply">Passport Apply</NavLink>
                            <NavLink to="/passportapplyn">Passport Apply-Normal</NavLink>
                            <NavLink to="/passportapplyt">Passport Apply-Tatkal</NavLink>
                            <NavLink to="/checkavailability">Check Appointment Availability</NavLink>
                            <NavLink to="/trackstatus">Track Application Status</NavLink>
                        </div>
                        <Routes>
                            <Route path="/passportapply" element={<div>Passport Apply</div>} />
                            <Route path="/passportapplyn" element={<div>Passport Apply-Normal</div>} />
                            <Route path="/passportapplyt" element={<div>Passport Apply-Tatkal</div>} />
                            <Route path="/checkavailability" element={<div>Check Appointment Availability</div>} />
                            <Route path="/trackstatus" element={<div>Track Application Status</div>} />
                        </Routes>
                    </div>
                } */}
                </div>

                <button>JOIN NOW</button>
                {/* <div>JOIN NOW</div>  */}

            </div>

            <div className='responsive-menu' onClick={handleMenu}>
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    );
}
export default Navbar;