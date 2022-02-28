import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Links,
    GrAccessibilityIcon,
    GiBrazilFlagIcon,
    GiUsaFlagIcon,
    LinkWrapper,
    FaChevronDownIcon,
    ChevronDownWrapper,
    ImgLogo,
} from './styles';
import logo from '../../assets/img/logo-mrv.webp';
import { HeaderService } from '../../services';

type TopoItem = {
    id: number;
    name: string;
    pathName: string;
};

const Header: React.FC = () => {
    const [topo, setTopo] = useState<Array<TopoItem> | null>(null);

    useEffect(() => {
        const links = HeaderService.ObterTopo();
        setTopo(links);
    }, []);

    return (
        <Container>
            <main>
                <div className="header-logo">
                    <a href="/">
                        <ImgLogo alt="MRV" src={logo} />
                    </a>
                </div>
                <Links className="header-links">
                    {topo?.map((item) => (
                        <LinkWrapper>
                            <Link to={item.pathName}>{item.name}</Link>
                            <ChevronDownWrapper>
                                <FaChevronDownIcon />
                            </ChevronDownWrapper>
                        </LinkWrapper>
                    ))}
                </Links>
                <div>
                    <GiBrazilFlagIcon />
                    <GiUsaFlagIcon />
                    <GrAccessibilityIcon />
                </div>
            </main>
        </Container>
    );
};

export default Header;
