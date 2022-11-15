import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div>
                <NavLink to="/">
                    Home
                </NavLink>
            </div>
            <div>
                <NavLink to="/recommend">
                    Recommend
                </NavLink>
            </div>
            <div>
                <NavLink to="/search">
                    Search
                </NavLink>
            </div>
            <div>
                <NavLink to="/mypage">
                    MyPage
                </NavLink>
            </div>
        </nav>
    );
};

export default Nav;