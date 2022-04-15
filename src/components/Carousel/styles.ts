import styled from 'styled-components';
import { ColorsProp } from '../../theme';

export const CAROUSEL_WIDTH = 80;
export const CAROUSEL_ITEM_SIZE = 100;
export const CAROUSEL_HALF_ITEM_SIZE = CAROUSEL_ITEM_SIZE / 2;

interface PositionProps extends ColorsProp {
  position: number;
  totalItems: number;
}

const calcTurns = ({ position, totalItems }: PositionProps) => position * (1 / totalItems);

export const Container = styled.div<PositionProps>`
  width: ${CAROUSEL_WIDTH}vh;
  height: ${CAROUSEL_WIDTH}vh;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed ${({ theme, color }) => theme.colors[color ?? 'primary']};
  position: relative;
  transform: rotate(-${calcTurns}turn);
  transition-duration: 0.3s;
  box-sizing: border-box;
`;

export const Item = styled.img.attrs({ defer: true })<PositionProps>`
  position: absolute;
  top: -${CAROUSEL_HALF_ITEM_SIZE}px;
  left: calc(50% - ${CAROUSEL_HALF_ITEM_SIZE}px);
  width: ${CAROUSEL_ITEM_SIZE}px;
  height: ${CAROUSEL_ITEM_SIZE}px;
  transform: rotate(${calcTurns}turn);
  transform-origin: center calc(${CAROUSEL_WIDTH / 2}vh + ${CAROUSEL_HALF_ITEM_SIZE}px);
`;
