import { FaCoins } from "react-icons/fa";
import { useMatch } from "react-router-dom";
import {Arrow, GoHomeLink, Back, NavbarWrapper} from './Styles'


function Navbar() {
    const match = useMatch({
        path: '/'
    },
        '/'
    )

    return ( 
    <>
        <GoHomeLink to='/'>
            <NavbarWrapper>
                    {!match && (
                    <Back >
                        <Arrow />
                    </Back>
                    )}
                    <FaCoins className="icon"/>
                    <h1>Crypto <span>Search</span></h1>
            </NavbarWrapper>
        </GoHomeLink>
    </>
     );
}

export default Navbar;