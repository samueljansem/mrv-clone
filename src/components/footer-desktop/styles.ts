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

const Links = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 625px;
  background: linear-gradient(45deg, #006b3f, #079d56);
  padding-top: 30px;
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

const Socials = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinksGrid = styled.div`
  display: grid;
  width: 1200px;
  height: 400px;

  grid-template-columns: repeat(6, 200px);
  grid-template-rows: repeat(2, 200px);

  grid-template-areas:
    'CONTATO IMOVEIS INSTITUCIONAL INOVACAO INVESTIDORES  CLIENTES'
    'CONTATO IMOVEIS INSTITUCIONAL SUSTENTABILIDADE INVESTIDORES CLIENTES';
`;

const LinkTitle = styled.span`
  font-size: 20px;
  font-family: 'averta-bold';
  color: var(--color-background);
  width: 100%;
  margin-bottom: 24px;
`;

const LinkSpan = styled.span`
  font-size: 14px;
  font-family: 'averta-bold';
  color: var(--color-background);
  margin-bottom: 10px;
`;

interface Props {
  area: string;
}

const LinkList = styled.div`
  grid-area: ${(p: Props) => p.area};
  color: var(--color-background);
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 5px;
`;

const Separator = styled.hr`
  border-radius: 4px;
  height: 4px;
  width: 50px;
  background: var(--color-white);
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
  padding: 30px 0;
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
  Links,
  Socials,
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
  LinksGrid,
  LinkList,
  LinkTitle,
  LinkSpan,
  Separator,
};
