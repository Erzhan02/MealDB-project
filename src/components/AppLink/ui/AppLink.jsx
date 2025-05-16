import { Link } from 'react-router-dom';
import './AppLink.scss';

const AppLink = ({ to, children, className = '', ...rest }) => {
	const isExternal =
		typeof to === 'string' &&
		(to.startsWith('http://') || to.startsWith('https://'));

	if (isExternal) {
		return (
			<a
				href={to}
				className={`app-link ${className}`}
				target='_blank'
				rel='noopener noreferrer'
				{...rest}
			>
				{children}
			</a>
		);
	}

	return (
		<Link to={to} className={`app-link ${className}`} {...rest}>
			{children}
		</Link>
	);
};

export default AppLink;
