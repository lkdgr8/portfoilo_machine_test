import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
function Navbar() {
    const [clicked, setClicked] = useState(false);
    return (
        <>
            <div className='fixedposition'>
                    <header className='display-flex'>
                        <div className='title'>
                            <a href='#'><h2>Latesh Kakrai</h2></a>
                            <GiHamburgerMenu className="hamb_icon" onClick={() => setClicked(!clicked)}/>
                        </div>
                        <div className= {clicked ? `update_div display-flex1` : "display-flex1"}>
                            <sapn>
                                <nav>   
                                    <a href='#'><li>Home</li></a>
                                    <a href='#projects'><li>Projects</li></a>
                                    <a href='#blogs'><li>Blogs</li></a>
                                    <a href="#contact"><li>Contact</li></a>
                                </nav>  
                            </sapn>                         
                        </div>
                    </header>
                </div>
        </>
    )
}

export default Navbar