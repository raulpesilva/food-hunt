import * as S from './styles';
import { ReactComponent as Logo } from '../../assets/svgs/food-hunt-logo.svg';

interface HeaderProps {}
export const Header = ({}: HeaderProps) => {
  return (
    <S.Container>
      <S.LogoType to="/">
        <Logo />
        Food Hunt
      </S.LogoType>
      <S.Nav>
        <S.Links>
          <S.LinkItem>
            <S.Link to="/">Breakfast</S.Link>
          </S.LinkItem>
          <S.LinkItem>
            <S.Link to="/">Launch</S.Link>
          </S.LinkItem>
          <S.LinkItem>
            <S.Link to="/">Dinner</S.Link>
          </S.LinkItem>
        </S.Links>
      </S.Nav>
      <S.LockIcon />
    </S.Container>
  );
};
