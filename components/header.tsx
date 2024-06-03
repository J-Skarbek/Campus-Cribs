export default function Header() {

  return (
    <header className="flex">
      <div className="logo-container">
        <img src="header-logo.png" alt='Campus Cribs Logo'></img>
      </div>
      <div className="nav-menu-container">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Listings</li>
            <li>Whatever</li>
          </ul>
        </nav>
      </div>

    </header>
  )
}