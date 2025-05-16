import { filterByArea } from '@/api/mealsApi';
import Header from '@/components/Header/ui/Header';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './RegionsMealsPage.scss';

const RegionMealsPage = () => {
	const { area } = useParams();
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		filterByArea(area).then(setMeals).catch(console.error);
	}, [area]);

	return (
		<div>
			<Header />
			<h1>Блюда региона: {area}</h1>
			<div className='meals'>
				{meals.map(meal => (
					<div key={meal.idMeal} className='meal-card'>
						<img src={meal.strMealThumb} alt={meal.strMeal} />
						<h3>{meal.strMeal}</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default RegionMealsPage;
