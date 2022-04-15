import { createReState, createReStateSelect, createReStateDispatch, createGetReState } from '@raulpesilva/re-state';

export interface Dish {
  id: number;
  imageUrl: string;
  description: string;
}
export type Dishes = Dish[];

export const DISHES = 'dishes';
export const dishesInitialValue = [] as Dishes;

export const useDishes = createReState<Dishes>(DISHES, dishesInitialValue);
export const useDishesSelect = createReStateSelect<Dishes>(DISHES);
export const dispatchDishes = createReStateDispatch<Dishes>(DISHES);
export const getDishes = createGetReState<Dishes>(DISHES);
export const resetDishes = () => dispatchDishes(dishesInitialValue);

export const populateDishes = async () => {
  const dishes: Dishes = [
    {
      id: 1,
      imageUrl: (await import('../../assets/images/dish1.png')).default,
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 2,
      imageUrl: (await import('../../assets/images/dish2.png')).default,
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 3,
      imageUrl: (await import('../../assets/images/dish3.png')).default,
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 4,
      imageUrl: (await import('../../assets/images/dish4.png')).default,
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 5,
      imageUrl: (await import('../../assets/images/dish5.png')).default,
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 6,
      imageUrl: (await import('../../assets/images/dish1.png')).default,
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 7,
      imageUrl: (await import('../../assets/images/dish2.png')).default,
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 8,
      imageUrl: (await import('../../assets/images/dish3.png')).default,
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 9,
      imageUrl: (await import('../../assets/images/dish4.png')).default,
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 10,
      imageUrl: (await import('../../assets/images/dish5.png')).default,
      description: 'Lorem ipsum dolor sit amet',
    },
  ];
  dispatchDishes(dishes);
};
