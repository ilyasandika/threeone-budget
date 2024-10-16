import React from 'react';
import {Link} from "react-router-dom";

interface NavItemProps {
    activeImage? : string;
    image: string;
    title: string;
    to: string;
    active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({to, activeImage, image, title, active }) => {
    return (
	<Link to={to} className={`flex items-center px-4 py-2 cursor-pointer rounded-lg ${active ? "bg-sky-950 text-white" : "hover:bg-sky-950 hover:bg-opacity-5"}`}>
	    <img alt="" src={active ? activeImage : image} className={`inline mr-4`}/>
	    <span className="font-medium">{title}</span>
	</Link>
    );
}

export default NavItem;
