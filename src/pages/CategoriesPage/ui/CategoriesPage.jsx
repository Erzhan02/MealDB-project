import { getCategories } from '@/api/mealsApi';
import Header from '@/components/Header/ui/Header';
import { useEffect, useState } from 'react';
import './Categories.scss';

const CategoriesPage = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories()
			.then(data => setCategories(data))
			.catch(error => console.error('Ошибка загрузки категорий:', error));
	}, []);

	return (
		<div>
			<Header />
			<div className='categories'>
				{categories.map(cat => (
					<div className='category' key={cat.idCategory}>
						<img src={cat.strCategoryThumb} alt={cat.strCategory} />
						<h2>{cat.strCategory}</h2>
						<p>{cat.strCategoryDescription.slice(0, 150)}...</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default CategoriesPage;
