import React, { useState } from 'react';

const Navbar = ({containerStyles, header, menuOpened}) => {
  const [isActive, setIsActive] = useState("home");
  return (
    <nav className={containerStyles}>
      {
      ['home', 'menu', 'foods', 'contact'].map(link => {
        return (
          <a href={`#${link}`} 
          key={link} 
          onClick={() => setIsActive(link)} 
          className={header || menuOpened ? 
          isActive === link ? "text-secondary pr-5 font-bold":"text-tertiary pr-5" : 
          isActive === link ? "text-tertiary pr-5" :"text-white pr-5"}
        >
          <div>
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </div>
        </a>
        )
      })
      }
    </nav>
  )
}

export default Navbar
