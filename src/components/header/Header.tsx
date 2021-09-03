import React, {FC} from "react";
import classes from "./Header.module.css"
import { NavLink} from 'react-router-dom'
import {HeaderContainerPropsType} from "./HeaderContainer";


const Header: FC<HeaderContainerPropsType> = props => {
    const {
        login,
        isAuth,
        logout
    } = props
    return (
        <header className={classes.header}>
            <img src="https://i1.u-mama.ru/111/87b/b3d/3f034929b4556f4a747ca0fd40c29f08.jpg" alt="animated-boy"/>
            <div className={classes.loginBlock}>
                {isAuth
                    ? <div className={classes.loginBlock}>
                        {login}
                        <button onClick={logout}>logout</button>
                    </div>
                    :
                    <NavLink to='/login'>Login</NavLink>
                }
            </div>
        </header>
    )
};
export default Header;

// {isAuth
//     ? login
//     : <MemoryRouter>
//         <NavLink to='/login'>Login</NavLink>
//     </MemoryRouter>
// }