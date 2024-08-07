import React from 'react';

const Title = ({ text }) => {
	return (
		<div className='flex justify-center flex-col items-center'>
			<h2 className='text-[48px]'>{text || 'Default Title'}</h2>
			<div className='mt-[8px] w-[150px] h-[0.25rem] bg-yellow-300'></div>
		</div>
	);
};

export default Title;
