import React, { useEffect, useState } from 'react'
import "./Navbar.css"
const Navbar = () => {

    const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <div className="logo">cred.ai</div>
        <ul className="nav-links">
            <li><a href="#">crednews</a></li>
            <li><a href="#">about cred.ai</a></li>
            <li><img width={"30%"} src="https://wsrv.nl/?url=cred.ai/wp-content/uploads/2021/03/whitesignup2.png" alt="Image"/></li>
        </ul>
    </nav>
  )
}

export default Navbar
