import { AnimatePresence } from 'framer-motion';
import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CallToAction, Carousel, Header } from '../../components';
import {
  currentDishSelector,
  dispatchCurrentDish,
  populateDishes,
  useCurrentDish,
  useDishColors,
  useDishesSelect,
} from '../../states';
import * as S from './styles';

interface HomeProps {}
export const Home = ({}: HomeProps) => {
  const { dishId } = useParams();
  const navigate = useNavigate();
  const currentDish = useCurrentDish();
  const dishes = useDishesSelect();
  const colors = useDishColors();

  useEffect(() => {
    populateDishes();
  }, []);

  useEffect(() => {
    if (dishId) dispatchCurrentDish(Number(dishId));
    if (!dishId) dispatchCurrentDish(0);
  }, [dishId]);

  const highlightedDish = useMemo(() => dishes[currentDish], [currentDish, dishes]);

  const handlePrev = () => navigate(`/${currentDishSelector({ dishes, currentDish: currentDish - 1 })}`);
  const handleNext = () => navigate(`/${currentDishSelector({ dishes, currentDish: currentDish + 1 })}`);

  return (
    <S.Container>
      <Header />
      <S.EllipseWrapper>
        <S.Ellipse color={colors.background}>
          <S.WrapperDishes>
            <Carousel items={dishes} position={currentDish} color={colors.spotlight} />
          </S.WrapperDishes>
        </S.Ellipse>
        <AnimatePresence>
          {!!highlightedDish && (
            <S.DishHighlight
              key={highlightedDish.id}
              alt={highlightedDish.description}
              src={highlightedDish.imageUrl}
            />
          )}
        </AnimatePresence>
        <S.CarouselButton aria-label="previous dish" color={colors.spotlight} onClick={handlePrev}>
          <S.ArrowDown />
        </S.CarouselButton>
        <S.CarouselButton aria-label="next dish" color={colors.spotlight} onClick={handleNext}>
          <S.ArrowDown />
        </S.CarouselButton>
      </S.EllipseWrapper>
      <S.Content>
        <CallToAction />
      </S.Content>
    </S.Container>
  );
};
