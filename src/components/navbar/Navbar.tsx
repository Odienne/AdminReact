import "./navbar.scss"


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="logo.svg" alt="logo"/>
                <span>ReactAdmin</span>
            </div>
            <div className="icons">
                <img className="icon" src="search.svg" alt="icon"/>
                <img className="icon" src="app.svg" alt="icon"/>
                <img className="icon" src="expand.svg" alt="icon"/>
                <div className="notifications">
                    <img src="notifications.svg" alt="icon"/>
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="avatar.jpg" alt="icon"/>
                    <span>Jane</span>
                </div>
                <img src="settings.svg" alt="icon"/>
            </div>
        </div>
    )
}
export default Navbar;
