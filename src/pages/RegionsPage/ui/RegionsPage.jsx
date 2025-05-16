import { getListA } from '@/api/mealsApi';
import Header from '@/components/Header/ui/Header';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegionsPage.scss';

const RegionsPage = () => {
	const [regions, setRegions] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		getListA()
			.then(data => setRegions(data))
			.catch(error => console.error('Ошибка загрузки регионов:', error));
	}, []);

	const handleClick = area => {
		navigate(`/regions/${area}`);
	};

	return (
		<div>
			<Header />
			<div className='regions'>
				{regions.map(reg => (
					<div
						className='region'
						key={reg.strArea}
						onClick={() => handleClick(reg.strArea)}
						style={{ cursor: 'pointer' }}
					>
						<h2>{reg.strArea}</h2>
					</div>
				))}
			</div>
		</div>
	);
};

export default RegionsPage;
