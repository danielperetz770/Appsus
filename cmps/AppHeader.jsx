const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header">
        <Link to="/">
            <img src="/icon/DY-icone-header.svg" className="app-header-icon" alt="" />
        </Link>
        <nav>
            <NavLink to="/"><img src="icon/home-icon.png" alt="" className="note-header-icon" /></NavLink>
            <NavLink to="/about"><img src="icon/about-icon.png" alt="" className="about-header-icon" /></NavLink>
            <NavLink to="/mail"><img src="icon/mail-icon.png" alt="" className="mail-header-icon" /></NavLink>
            <NavLink to="/note"><img src="icon/note-icon.png" alt="" className="note-header-icon" /></NavLink>
        </nav>
    </header>
}
