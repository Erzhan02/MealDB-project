import { searchMealsByName } from '@/api/mealsApi';
import Header from '@/components/Header/ui/Header';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './SearchPage.scss';

const SearchPage = () => {
	const [searchParams] = useSearchParams();
	const query = searchParams.get('query');
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		if (query) {
			searchMealsByName(query).then(setMeals);
		}
	}, [query]);

	return (
		<div>
			<Header />
			<h2>Результаты для: "{query}"</h2>
			{meals.length > 0 ? (
				<div className='searches'>
					{meals.map(meal => (
						<div className='search' key={meal.idMeal}>
							<img src={meal.strMealThumb} alt={meal.strTags} />
							<h2>{meal.strMeal}</h2>
							<p>{meal.strInstructions.slice(0, 150)}...</p>
						</div>
					))}
				</div>
			) : (
				<p>Ничего не найдено.</p>
			)}
		</div>
	);
};

export default SearchPage;
