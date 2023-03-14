import React from 'react';
import { Fragment } from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const Sidebar: React.FC = () => {
  const selectedCategory: string = 'New';
  return (
    <Fragment>
      <Stack
        direction='row'
        sx={{
          overflowY: 'auto',
          height: { sx: 'auto', md: '95%' },
          flexDirection: { md: 'column' },
          scrollbarWidth: 'thin',
          scrollbarColor: 'gray darkgray',
        }}
      >
        {categories.map((category) => (
          <div>
            {category.name === selectedCategory ? (
              <button
                className='font-bold capitalize flex items-center justify-start cursor-pointer bg-transparent outline-none border-none py-2 px-4 my-4 rounded-full transition-all duration-300 hover:bg-red-600 text-white bg-main-color'
                key={category.name}
              >
                <span className='text-white mr-2'>{category.icon}</span>
                <span className='opacity-100'>{category.name}</span>
              </button>
            ) : (
              <button
                className='font-bold capitalize flex items-center justify-start cursor-pointer bg-transparent outline-none border-none py-2 px-4 my-4 rounded-full transition-all duration-300 hover:bg-main-color text-white'
                key={category.name}
              >
                <span className='text-white mr-2'>{category.icon}</span>
                <span className='opacity-80'>{category.name}</span>
              </button>
            )}
          </div>
        ))}
      </Stack>
    </Fragment>
  );
};

export default Sidebar;
