import styled from 'styled-components';
import {
  FacebookIcon,
  LinkedinIcon,
  YoutubeIcon,
  TwitterIcon,
  InstagramIcon,
  ChevronDownIcon,
} from '../../styles/Icons';

const Container = styled.footer`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Links = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 625px;
  background: linear-gradient(45deg, #006b3f, #079d56);
  padding: 50px;
`;

const Circle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-background);
  margin-left: 10px;
  margin-right: 10px;
`;

const Navegue = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-search);
  height: 75px;
`;

const NavegueText = styled.span`
  font-family: 'averta-bold';
  font-size: 20px;
  color: var(--color-background);
`;

const MrveCo = styled.section`
  padding-top: 30px;
  height: 150px;
  background: var(--color-background);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;
`;

const Rights = styled.span`
  color: #999e9c;
  font-family: 'averta-regular';
  font-size: 16px;
`;

const Facebook = styled(FacebookIcon)`
  width: 25px;
  height: 25px;
  color: var(--color-search);
`;

const Linkedin = styled(LinkedinIcon)`
  width: 25px;
  height: 25px;
  color: var(--color-search);
`;

const Youtube = styled(YoutubeIcon)`
  width: 25px;
  height: 25px;
  color: var(--color-search);
`;

const Twitter = styled(TwitterIcon)`
  width: 25px;
  height: 25px;
  color: var(--color-search);
`;

const Instagram = styled(InstagramIcon)`
  width: 25px;
  height: 25px;
  color: var(--color-search);
`;

const ChevronDown = styled(ChevronDownIcon)`
  margin-left: 12px;
  width: 24px;
  height: 24px;
  color: var(--color-background);
  cursor: pointer;
`;

export {
  Container,
  Wrapper,
  Links,
  Navegue,
  NavegueText,
  MrveCo,
  LogoWrapper,
  Rights,
  Circle,
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
  Instagram,
  ChevronDown,
};
