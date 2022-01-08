import React, {useState} from "react"




function Nav(){
    const [showMenu, setShowMenu] = useState(false)
    return(
        <nav className="nav">
             <button onClick={()=>setShowMenu(prevState=>!prevState)} className="menu-btn">Menu</button>
             
                 
                 {showMenu && (
                    <ul className="list">
                        <li className="item">Maintenence Checklist</li>
                        <li className="item">QC is out</li>
                    </ul>

                 )}
                 
            
             
        </nav>
    )
    
}

export default Nav