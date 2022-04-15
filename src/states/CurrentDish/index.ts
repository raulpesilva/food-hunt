import {
  createReState,
  createReStateSelect,
  createReStateDispatch,
  createGetReState,
  useReStateSelector,
} from '@raulpesilva/re-state';
import { Selector } from '@raulpesilva/re-state/types/react/types';
import { Colors } from '../../theme';
import { Dishes } from '../Dishes';

export type CurrentDish = number;
interface Store {
  currentDish: CurrentDish;
  dishes: Dishes;
}

interface SelectedColors {
  spotlight: keyof Colors;
  background: keyof Colors;
}

export const CURRENT_DISH = 'currentDish';
export const CurrentDishInitialValue = 0;

createReState<CurrentDish>(CURRENT_DISH, CurrentDishInitialValue);
export const useCurrentDishSelect = createReStateSelect<CurrentDish>(CURRENT_DISH);
export const dispatchCurrentDish = createReStateDispatch<CurrentDish>(CURRENT_DISH);
export const getCurrentDish = createGetReState<CurrentDish>(CURRENT_DISH);
export const resetCurrentDish = () => dispatchCurrentDish(CurrentDishInitialValue);

export const nextDish = () => dispatchCurrentDish((prev) => prev + 1);
export const prevDish = () => dispatchCurrentDish((prev) => prev - 1);

export const colorSelector: Selector<Store, SelectedColors> = ({ currentDish }) => {
  if (currentDish % 2 === 0) return { spotlight: 'primary', background: 'accent1' };
  return { spotlight: 'secondary', background: 'accent2' };
};

export const useDishColors = () => useReStateSelector(colorSelector);

export const currentDishSelector: Selector<Store, number> = ({ currentDish, dishes }) => {
  if (currentDish < 0) return dishes.length + (currentDish % (dishes.length - 1));
  return currentDish % dishes.length;
};

export const useCurrentDish = () => useReStateSelector(currentDishSelector);
