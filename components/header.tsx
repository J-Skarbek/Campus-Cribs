import Link from "next/link";
import Image from "next/image";

export default function Header() {

  return (
    <header className="flex bg-blue-50 justify-center align-center py-4 px-8">
      <div className="flex align-center justify-between w-full max-w-screen-2xl">
        <div className="logo-container">
          {/* <img src="header-logo.png" alt='Campus Cribs Logo'></img> */}
          <Image 
            src='/header-logo.png'
            alt='Campus Cribs Logo - Navigate to Homepage'
            width={150}
            height={75}
            priority
          />
        </div>
        <div className="nav-menu-container flex items-center">
          <nav>
            <ul className="flex gap-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/listings">Listings</Link></li>
              <li><Link href="/login">Login</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}