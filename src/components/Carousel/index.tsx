import { Dishes } from '../../states';
import { Color } from '../../theme';
import * as S from './styles';

interface CarouselProps {
  items: Dishes;
  color: Color;
  position: number;
}

export const Carousel = ({ items, position, color }: CarouselProps) => {
  return (
    <S.Container color={color} position={position} totalItems={items.length}>
      {items.map((item, index) => (
        <S.Item
          color={color}
          key={item.id}
          alt={item.description}
          position={index}
          totalItems={items.length}
          src={item.imageUrl}
        />
      ))}
    </S.Container>
  );
};
