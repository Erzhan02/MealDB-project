import AppInput from '@/components/AppInput/ui/AppInput';
import AppLink from '@/components/AppLink/ui/AppLink';
import Logo from '@icons/logo.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';

const Header = () => {
	const [searchValue, setSearchValue] = useState('');
	const navigate = useNavigate();

	const handleKeyDown = e => {
		if (e.key === 'Enter' && searchValue.trim()) {
			navigate(`/search?query=${encodeURIComponent(searchValue.trim())}`);
			setSearchValue('');
		}
	};

	return (
		<header className='header'>
			<AppLink to={'/'}>
				<img src={Logo} alt='' width={50} height={50} />
			</AppLink>
			<nav className='nav'>
				<ul>
					<li>
						<AppLink to={'/categories'}>Категории</AppLink>
					</li>
					<li>
						<AppLink to={'/regions'}>Регионы</AppLink>
					</li>
				</ul>
			</nav>
			<AppInput
				type='text'
				placeholder='Поиск...'
				value={searchValue}
				onChange={e => setSearchValue(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
		</header>
	);
};

export default Header;
