import CategoriesPage from '@/pages/CategoriesPage/ui/CategoriesPage';
import HomePage from '@/pages/HomePage/ui/HomePage';
import RegionMealsPage from '@/pages/RegionsMealsPage/ui/RegionsMealsPage';
import RegionsPage from '@/pages/RegionsPage/ui/RegionsPage';
import SearchPage from '@/pages/SearchPage/ui/SearchPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/categories' element={<CategoriesPage />} />
			<Route path='/regions' element={<RegionsPage />} />
			<Route path='/regions/:area' element={<RegionMealsPage />} />
			<Route path='/categories' element={<CategoriesPage />} />
			<Route path='/search' element={<SearchPage />} />
		</Routes>
	);
};

export default App;
