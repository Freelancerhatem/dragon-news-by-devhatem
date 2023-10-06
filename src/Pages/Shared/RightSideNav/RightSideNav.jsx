import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import Qzone1 from '../../../assets/qZone1.png'
import Qzone2 from '../../../assets/qZone2.png'
import Qzone3 from '../../../assets/qZone3.png'
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import {  signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import auth from '../../../firebase.config';

const facebookprovider = new FacebookAuthProvider();
const RightSideNav = () => {
    const handlefb =()=>{
        signInWithPopup(auth,facebookprovider)
        .then(res=>console.log(res.user))
        .catch(err=>console.log(err.message))
    }
    // const {facbookLogin} = useContext(AuthContext)

    // const handleFbLogin=()=>{
    //     facbookLogin()
    //     .then(res=>console.log(res))
    //     .catch(error=>console.log(error.message))
    // }
    return (
        <div className='p-4'>
            <h1 className='text-center'>Login with</h1>
            <button className='btn btn-outline w-full mt-1'>
            <FcGoogle></FcGoogle>
            Google
            </button>
            <button className='btn btn-outline w-full mt-1' onClick={handlefb}>
            <FaFacebook></FaFacebook>
            Facebook
            </button>
            <div>
                <h1 className='text-center'>find us on</h1>
                <div className='flex flex-col'>
                    <button className='btn btn-outline w-full  mt-1'>facebook</button>
                    <button className='btn btn-outline w-full mt-1'>twitter</button>
                    <button className='btn btn-outline w-full mt-1'>linkedin</button>
                </div>
                <div>
                   <img src={Qzone1} alt="" />
                   <img src={Qzone2} alt="" />
                   <img src={Qzone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;
