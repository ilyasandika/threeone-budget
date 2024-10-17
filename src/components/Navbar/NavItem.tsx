import React from 'react';
import {Link} from "react-router-dom";

interface NavItemProps {
    activeImage? : string;
    image: string;
    title: string;
    to: string;
    active?: boolean;
    onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({to, activeImage, image, title, active, onClick }) => {
    return (
	<Link to={to} onClick={onClick} className={`flex items-center px-4 py-2 cursor-pointer rounded-lg ${active ? "bg-primary text-white" : "hover:bg-primary hover:bg-opacity-5"}`}>
	    <img alt="" src={active ? activeImage : image} className={`inline w-5 mr-4`}/>
	    <span className="font-medium">{title}</span>
	</Link>
    );
}

export default NavItem;
