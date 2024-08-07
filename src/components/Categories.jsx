import React from 'react';

const Categories = ({ categories, filterCategory }) => {
	return (
		<div className='flex flex-wrap flex-row  justify-center gap-2 mt-3'>
			{categories.map((category) => {
				return (
					<button
						className='bg-orange-500 px-[8px] py-[4px] rounded-lg text-white hover:bg-yellow-500 transition-all duration-500 cursor-pointer'
						key={category}
						onClick={() => filterCategory(category)}>
						{category}
					</button>
				);
			})}
		</div>
	);
};

export default Categories;
