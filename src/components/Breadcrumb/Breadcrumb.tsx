import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);

    return (
	<nav className="flex items-center">
	    {pathSegments.map((segment, index) => {
		const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
		return (
		    <div key={index} className="flex items-center">
			<span className="mx-2">{index == 0 ?  "" : "/" }</span>
			<Link to={path} className={`${ index == 0 ? "font-semibold" : ""}`}>
			    {segment.charAt(0).toUpperCase() + segment.slice(1)}
			</Link>
		    </div>
		);
	    })}
	</nav>
    );
};

export default Breadcrumb;
