import { useState } from 'react';
import Title from './components/Title';
import menu from './data';
import Menu from './components/Menu';
import Categories from './components/Categories';

const allCategories = [
	'all',
	...new Set(menu.map((item) => item.category)),
];
function App() {
	const [menuItem, setMenuItem] = useState(menu);
	const [categories, setCategories] = useState(allCategories);
	const filterCategory = (category) => {
		if (category === 'all') {
			setMenuItem(menu);
			return;
		}
		const newItem = menu.filter((item) => item.category === category);
		setMenuItem(newItem);
	};
	return (
		<main className='container  mx-auto mt-[100px]'>
			<section>
				<Title text='Our Menu' />
				<Categories
					categories={categories}
					filterCategory={filterCategory}
				/>
				<Menu items={menuItem} />
			</section>
		</main>
	);
}

export default App;
