import React, { Fragment } from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';
import { SidebarProps } from '../interfaces/category';

const Sidebar: React.FC<SidebarProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <Fragment>
      <Stack
        direction='row'
        sx={{
          overflowY: 'auto',
          height: { sx: 'auto', md: '95%' },
          flexDirection: { md: 'column' },
        }}
      >
        {categories.map((category) => (
          <button
            className='font-bold capitalize flex items-center justify-start cursor-pointer bg-transparent outline-none border-none py-2 px-4 my-4 rounded-full transition-all duration-300 text-white'
            onClick={() => setSelectedCategory(category.name)}
            style={{
              background:
                category.name === selectedCategory ? '#FC1503' : undefined,
              color: 'white',
            }}
            key={category.name}
          >
            <span
              style={{
                color: category.name === selectedCategory ? 'white' : 'red',
                marginRight: '15px',
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                opacity: category.name === selectedCategory ? '1' : '0.8',
              }}
            >
              {category.name}
            </span>
          </button>
        ))}
      </Stack>
    </Fragment>
  );
};

export default Sidebar;
