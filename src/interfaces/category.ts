import { ReactElement } from 'react';

export interface Category {
  name: string;
  icon: ReactElement;
}

export interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}
