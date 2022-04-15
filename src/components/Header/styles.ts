import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { FiLock } from 'react-icons/fi';

export const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 6.25rem;
  z-index: 10;
`;

export const LogoType = styled(LinkRouter)`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: ${(props) => props.theme.colors.dark};
  display: flex;
  align-items: center;
  text-decoration: none;
  & > svg {
    margin-right: 1em;
  }
`;

export const Nav = styled.nav`
  display: flex;
  margin-left: 17vw;
`;

export const Links = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const LinkItem = styled.li`
  & + li {
    margin-left: 4rem;
  }
`;

export const Link = styled(LinkRouter)`
  color: ${(props) => props.theme.colors.dark};
  text-decoration: none;
`;

export const LockIcon = styled(FiLock)`
  font-size: 18px;
  margin-left: auto;
`;
