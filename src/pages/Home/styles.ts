import { motion } from 'framer-motion';
import { lighten } from 'polished';
import { FiArrowDown } from 'react-icons/fi';
import styled from 'styled-components';
import { CAROUSEL_ITEM_SIZE, CAROUSEL_HALF_ITEM_SIZE, CAROUSEL_WIDTH } from '../../components/Carousel/styles';
import { ColorsProp } from '../../theme/colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  box-sizing: border-box;
  position: relative;
`;

export const Ellipse = styled.div<ColorsProp>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme, color }) => theme.colors[color ?? 'accent1']};
  display: flex;
  transition-duration: 250ms;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  z-index: -1;
  border-radius: 50%;
`;

export const EllipseWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: max(80vw, 100vh);
  height: max(80vw, 100vh);
  transform: translateY(-60%);
  border-radius: 50%;
  right: -10vw;
  top: 0;
`;

export const Content = styled.main`
  flex: 1;
  display: flex;
  padding-left: 6.25rem;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const WrapperDishes = styled.div`
  width: calc(${CAROUSEL_WIDTH}vh + ${CAROUSEL_ITEM_SIZE}px);
  height: calc(${CAROUSEL_WIDTH / 2}vh + ${CAROUSEL_HALF_ITEM_SIZE}px);
  padding-top: ${CAROUSEL_HALF_ITEM_SIZE}px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  z-index: 10;
  user-select: none;
  position: relative;
`;

const variants = {
  visible: { scale: 1, y: '50%' },
  hidden: { scale: 0, y: '50%' },
};

export const DishHighlight = styled(motion.img).attrs({
  variants,
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
  transition: { duration: 0.3 },
})`
  position: absolute;
  width: ${CAROUSEL_WIDTH / 2}vh;
  height: ${CAROUSEL_WIDTH / 2}vh;
  bottom: 0;
`;

export const CarouselButton = styled.button<ColorsProp>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme, color }) => theme.colors[color ?? 'primary']};
  transform: translateY(100%);
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 250ms;
  margin-right: calc(${CAROUSEL_WIDTH / 2}vh - ${CAROUSEL_HALF_ITEM_SIZE - 20}px);
  margin-left: 0;
  & + button {
    margin-right: 0;
    margin-left: calc(${CAROUSEL_WIDTH / 2}vh - ${CAROUSEL_HALF_ITEM_SIZE - 20}px);
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme, color }) => lighten(0.05, theme.colors[color ?? 'primary'])};
  }
`;

export const ArrowDown = styled(FiArrowDown)`
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
`;
