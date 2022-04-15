import { useDishColors } from '../../states';
import * as S from './styles';

interface CallToActionProps {}

export const CallToAction = ({}: CallToActionProps) => {
  const colors = useDishColors();
  return (
    <S.Container>
      <S.Title color={colors.spotlight}>Delicious</S.Title>
      <S.SubTitle>Quench the Hunger</S.SubTitle>
      <S.Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet ipsum, auctor quis sagittis felis risus, a
        odio. Amet ante nulla sem mauris. Sollicitudin ultrices enim quam.
      </S.Description>
      <S.ButtonCallToAction color={colors.spotlight}>Quench Now</S.ButtonCallToAction>
    </S.Container>
  );
};
