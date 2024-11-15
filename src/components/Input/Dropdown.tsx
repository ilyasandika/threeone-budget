import { useState } from 'react';

interface Item {
    id: number;
    name: string;
}

interface DropdownProps {
    items: Item[];
    placeholder: string;
    onClick: (id: number, item: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({items, placeholder, onClick}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const toggleDropdown = () => {
	setIsOpen(!isOpen);
    };

    const handleSelectItem = (id: number, item: string) => {
	setSelectedItem(item);
	onClick(id, item)
	setIsOpen(false);
    };

    return (
	<div className="relative inline-block text-sm text-left w-36">
	    <button
		onClick={toggleDropdown}
		    className="w-full flex justify-between items-center border bg-white py-2 px-4 rounded-lg font-medium focus:outline-none"
	    >
		<span className="truncate">
		    {selectedItem || placeholder}
		</span>

		<svg
		    className={`w-5 h-5 transition-transform ${
			isOpen ? 'rotate-180' : 'rotate-0'
		    }`}
		    xmlns="http://www.w3.org/2000/svg"
		    viewBox="0 0 20 20"
		    fill="currentColor"
		>
		    <path
			fillRule="evenodd"
			d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0l-4.24-4.24a.75.75 0 01.02-1.06z"
			clipRule="evenodd"
		    />
		</svg>
	    </button>

	    {isOpen && (
		<ul className="absolute left-0 mt-2 bg-white border rounded-lg shadow z-10">
		    {items.map((item: Item, index: number) => (
			<li
			    key={index}
			    className="cursor-pointer hover:bg-gray-100 px-4 py-2 font-medium"
			    onClick={() => handleSelectItem(item.id, item.name)}
			>
			    {item.name}
			</li>
		    ))}
		</ul>
	    )}
	</div>
    );
};

export default Dropdown;
