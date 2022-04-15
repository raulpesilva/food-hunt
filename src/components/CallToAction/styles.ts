import { motion } from 'framer-motion';
import { lighten } from 'polished';
import styled from 'styled-components';
import { Colors } from '../../theme';

interface ColorsProp {
  color: keyof Colors;
}

const variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -20 },
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;

export const Title = styled(motion.h1).attrs({
  variants,
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
  transition: { duration: 0.3 },
})<ColorsProp>`
  font-weight: 500;
  font-size: 48px;
  line-height: 72px;
  color: ${({ theme, color }) => theme.colors[color ?? 'primary']};
`;

export const SubTitle = styled(motion.h2).attrs({
  variants,
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
  transition: { duration: 0.3, delay: 0.1 },
})`
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: ${(props) => props.theme.colors.dark};
`;

export const Description = styled(motion.p).attrs({
  variants,
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
  transition: { duration: 0.3, delay: 0.2 },
})`
  margin-top: 0.375rem;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${(props) => props.theme.colors.dark};
  width: 24em;
`;

export const ButtonCallToAction = styled(motion.button).attrs({
  variants,
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
  transition: { duration: 0.3, delay: 0.3 },
})<ColorsProp>`
  background-color: ${({ theme, color }) => theme.colors[color ?? 'primary']};
  color: ${(props) => props.theme.colors.white};
  height: 50px;
  padding: 0 2em;
  font-size: 14px;
  font-weight: 700;
  border-radius: 50px;
  align-self: flex-start;
  margin-top: 2rem;
  border: none;
  transition-duration: 250ms;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme, color }) => lighten(0.05, theme.colors[color ?? 'primary'])};
  }
`;
