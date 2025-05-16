const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

export async function searchMealsByName(name) {
	const res = await fetch(`${BASE_URL}search.php?s=${name}`);
	const data = await res.json();
	return data.meals || [];
}

export async function searchMealsByFirstLetter(letter) {
	const res = await fetch(`${BASE_URL}search.php?f=${letter}`);
	const data = await res.json();
	return data.meals || [];
}

export async function getMealById(id) {
	const res = await fetch(`${BASE_URL}lookup.php?i=${id}`);
	const data = await res.json();
	return data.meals ? data.meals[0] : null;
}

export async function getRandomMeal() {
	const res = await fetch(`${BASE_URL}random.php`);
	const data = await res.json();
	return data.meals ? data.meals[0] : null;
}

export async function getCategories() {
	const res = await fetch(`${BASE_URL}categories.php`);
	const data = await res.json();
	return data.categories || [];
}

export async function filterByIngredient(ingredient) {
	const res = await fetch(`${BASE_URL}filter.php?i=${ingredient}`);
	const data = await res.json();
	return data.meals || [];
}

export async function filterByCategory(category) {
	const res = await fetch(`${BASE_URL}filter.php?c=${category}`);
	const data = await res.json();
	return data.meals || [];
}

export async function filterByArea(area) {
	const res = await fetch(`${BASE_URL}filter.php?a=${area}`);
	const data = await res.json();
	return data.meals || [];
}

export async function getListC() {
	const res = await fetch(`${BASE_URL}list.php?c=list`);
	const data = await res.json();
	return data.meals || [];
}

export async function getListA() {
	const res = await fetch(`${BASE_URL}list.php?a=list`);
	const data = await res.json();
	return data.meals || [];
}

export async function getListI() {
	const res = await fetch(`${BASE_URL}list.php?i=list`);
	const data = await res.json();
	return data.meals || [];
}

export function extractIngredients(meal) {
	const ingredients = [];

	for (let i = 1; i <= 20; i++) {
		const ing = meal[`strIngredient${i}`];
		const meas = meal[`strMeasure${i}`];

		if (ing && ing.trim()) {
			ingredients.push({
				ingredient: ing.trim(),
				measure: meas?.trim() || '',
			});
		}
	}

	return ingredients;
}
