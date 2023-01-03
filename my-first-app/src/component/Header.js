import logo from './img/logo.svg';
import "./style/header.css"

function Header() {
    return (
        <header className='App-header'>
            <img src={logo} className="App-logo" alt="logo" />
            <strong>Aqua Bank</strong>
            <ul>
                <li>
                    <a href="#">Users</a>
                </li>
                <li>
                    <a href="#">Calculator</a>
                </li>
                <li>
                    <a href="#">Sign In</a>
                </li>
            </ul>
            <form action="search">
                <input type="text" placeholder="Search . . ." />
                <button className='search-btn'>&#128269;</button>
            </form>
        </header>
    )
}

export default Header;