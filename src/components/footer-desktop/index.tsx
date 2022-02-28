import React, { useState, useEffect } from 'react';
import {
    Container,
    MrveCo,
    Navegue,
    // Wrapper,
    Links,
    Circle,
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    Linkedin,
    NavegueText,
    ChevronDown,
    Rights,
    LogoWrapper,
    Socials,
    LinksGrid,
    LinkList,
    LinkTitle,
    LinkSpan,
    Separator,
} from './styles';

import { FooterService } from '../../services';
import logo from '../../assets/img/mrveco.webp';

const FooterDesktop: React.FC = () => {
    type Categoria = {
        categoria: string;
        area: string;
        links: Array<string>;
    };

    const [links, setLinks] = useState<Array<Categoria> | null>(null);

    useEffect(() => {
        const rodape = FooterService.ObterRodape();
        setLinks(rodape);
    }, []);

    return (
        <Container>
            <Links>
                <Socials>
                    <Circle>
                        <Facebook />
                    </Circle>
                    <Circle>
                        <Instagram />
                    </Circle>
                    <Circle>
                        <Twitter />
                    </Circle>
                    <Circle>
                        <Youtube />
                    </Circle>
                    <Circle>
                        <Linkedin />
                    </Circle>
                </Socials>
                <LinksGrid>
                    {links?.map((item) => (
                        <LinkList area={item.area}>
                            <LinkTitle>
                                {item.categoria}
                                <Separator />
                            </LinkTitle>
                            {item.links.map((link) => (
                                <LinkSpan>{link}</LinkSpan>
                            ))}
                        </LinkList>
                    ))}
                </LinksGrid>
            </Links>
            <Navegue>
                <NavegueText>Navegue pelo mundo MRV&amp;CO</NavegueText>
                <ChevronDown />
            </Navegue>
            <MrveCo>
                <LogoWrapper>
                    <img
                        src={logo}
                        title="Logo MRV&amp;CO"
                        alt="Logo MRV&amp;CO"
                        width="136px"
                        height="24px"
                    />
                </LogoWrapper>
                <Rights>
                    MRV todos os direitos reservados | Política de privacidade | Código de conduta |
                    Nova marca | Mapa do site
                </Rights>
            </MrveCo>
        </Container>
    );
};

export default FooterDesktop;
