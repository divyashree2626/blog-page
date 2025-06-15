import React from 'react';
import photo from '../assets/photo.jpg'; 

function Header() {
  return (
    <header className="header">
      <img src={photo} alt="Divyashree" className="profile-img" />
      <h1>Divya's Blog</h1>
      <p>Sharing my journey as a developer and creator ✨</p>
    </header>
  );
}

export default Header;
