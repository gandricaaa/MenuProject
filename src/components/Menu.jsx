import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ items }) => {
	return (
		<section className='flex flex-wrap gap-5 md:flex-row flex-col p-[20px]'>
			{items.map((menuItem) => {
				return <MenuItem key={menuItem.id} {...menuItem} />;
			})}
		</section>
	);
};

export default Menu;
