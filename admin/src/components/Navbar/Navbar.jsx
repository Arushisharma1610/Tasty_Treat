// import React from 'react'
// import {admin_assets} from '../../admin_assets/assets'

// const Navbar = () => {
//   return (
//     <div className='navbar'>
//         <img className='logo' src={admin_assets.logo} alt='' />
//         <img className='profile' src={admin_assets.progile_image} alt='' />
//     </div>
//   )
// }

// export default Navbar

import React from 'react';
import { assets } from '../../admin_assets/assets';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
        <img className='logo-img' src={assets.logo} alt='Logo' />
        <h4>Tasty Treat</h4>
        </div>
        <img className='profile' src={assets.profile_image} alt='Profile' />
    </div>
  );
}

export default Navbar;