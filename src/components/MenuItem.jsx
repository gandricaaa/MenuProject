import React from 'react';

const MenuItem = ({ title, price, img, desc }) => {
	return (
		<article className='container  mx-auto w-[700px] bg-slate-200'>
			<img
				className=' w-full h-[500px] object-center'
				src={img}
				alt={desc}
			/>
			<div className='p-[10px]'>
				<header className='flex justify-center items-center gap-3 mt-2'>
					<h5 className='text-[24px] text-center'>{title}</h5>
					<span className='bg-yellow-400 p-[3px] text-white rounded-md'>
						${price}
					</span>
				</header>
				<p className='text-[16px] text-center text-slate-400'>
					{desc}
				</p>
			</div>
		</article>
	);
};

export default MenuItem;
