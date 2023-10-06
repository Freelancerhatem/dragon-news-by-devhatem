import { Link, NavLink } from "react-router-dom";
import profile from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
  const{logout,user} = useContext(AuthContext)
    
  const navLinks =
    <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>
        
    </>
    
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-end">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul className="flex gap-3">
       {navLinks}
      </ul>
    </div>
  </div>
  
  <div className="navbar-end ">
          <img src={profile} className="w-10 mr-2"/>
          {
           !user ? <Link to='/login'><button className="btn">Login</button></Link>  :
           <div className="flex items-center gap-2"><button className="btn" onClick={logout}>Logout</button> <p>{user.email}</p></div>
          }
  </div>
</div>
        </div>
    );
};

export default Navbar;