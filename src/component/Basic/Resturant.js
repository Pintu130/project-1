import React, { useState } from 'react'
import Menu from '../menuApi.js';
import Menucard from './menuCard';
import Navbar from './Navbar.js';

const uniqueList=[
    ...new Set(
        Menu.map((curelem)=>{
            return curelem.category;
        })
    )
]
const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {
        const updatedList = Menu.filter((curelem) => {
            return curelem.category === category;
        });

        setMenuData(updatedList);
    };
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList}/>
            <Menucard menuData={menuData} />
        </>
    )
}

export default Resturant
