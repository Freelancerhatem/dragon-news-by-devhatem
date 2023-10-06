
import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <p>Journalism without fear and favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;