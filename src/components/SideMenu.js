import React, {useState, useEffect} from 'react';
import users from '../Assets/logo/users.png'
import MenuItem from './MenuItem';



/**     
 * @author
 * @function SideMenu
**/

const menuItems = [
    {name: 'Dashboard', to: '/', iconClassName: 'bi bi-laptop' },
    {name: 'Users', to: '/Users', iconClassName: 'bi bi-people' }
]

const SideMenu = (props) => {
    const [inactive, setInactive] =useState(false);

    useEffect(() => {
        props.onCollapse(inactive);
    }, [inactive]);

    return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
        <div className="top-section">
            <div className="logo">
            <div className="avatar">
                <img src={users} alt="users.png" />
                <div className="user-info">
                <h5>@Jember08</h5>
                <p>admin</p>
            </div>
            </div>
            </div>
            <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
            {inactive ? <i class="bi bi-arrow-right-square-fill"></i> : <i class="bi bi-arrow-left-square-fill"></i>}
            </div>
        </div>

        <div className="divider"></div>

        <div className="main-menu">
            <ul>
                {menuItems.map((menuItem, index) => (
                 <MenuItem
                 key={index}  
                 name={menuItem.name}
                 iconClassName={menuItem.iconClassName}
                 onClick={()=> {
                     if(inactive){
                         setInactive(false);
                     }
                 }}
                 />
                ))}
                 {/* <li>
                    <a className="menu-item">
                    <div className="menu-icon">
                    <i class="bi bi-laptop"></i>
                    </div>
                    <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a className="menu-item">
                    <div className="menu-icon">
                    <i class="bi bi-people"></i>
                    </div>
                    <span>Users</span>
                    </a>
                </li>     */}
            </ul>
        </div>
        
    </div>
    )
};

export default SideMenu;

