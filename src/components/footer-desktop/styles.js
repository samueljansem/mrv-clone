import styled from 'styled-components';
import {
  FacebookIcon,
  LinkedinIcon,
  YoutubeIcon,
  TwitterIcon,
  InstagramIcon,
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
  background: var(--color-search);
  height: 75px;
`;

const MrveCo = styled.section`
  height: 150px;
  background: var(--color-background);
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

export {
  Container,
  Wrapper,
  Links,
  Navegue,
  MrveCo,
  Circle,
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
  Instagram,
};
