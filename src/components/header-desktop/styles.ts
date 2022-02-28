import styled from 'styled-components';
import { FaChevronDown, GiBrazilFlag, GiUsaFlag, MdAccessibility } from '../../styles/Icons';

const Container = styled.header`
    background: var(--color-white);
    padding: 0 15px;
    width: 100%;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    z-index: 500;

    display: none;

    @media (min-width: 1180px) {
        display: flex;
    }

    > main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 0 17%;
        height: 100%auto;
        overflow: hidden;
    }
`;

const ImgLogo = styled.img``;

const GrAccessibilityIcon = styled(MdAccessibility)`
    color: var(--color-black);
    margin-left: 10px;
    width: 18px;
    height: 18px;
`;

const GiBrazilFlagIcon = styled(GiBrazilFlag)`
    color: var(--color-black);
    border: 1px solid var(--color-black);
    width: 26px;
    height: 18px;
`;

const GiUsaFlagIcon = styled(GiUsaFlag)`
    color: var(--color-black);
    margin-left: 10px;
    width: 18px;
    height: 18px;
`;

const FaChevronDownIcon = styled(FaChevronDown)`
    color: var(--color-search);
    font-size: 18px;
`;

const ChevronDownWrapper = styled.div`
    margin-top: 3px;
    margin-left: 5px;
    align-items: center;
    display: flex;
`;

const LinkWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0px 17px;

    > a {
        color: var(--color-search);
        font-weight: bold;
        text-decoration: none;
        align-items: center;
        justify-content: space-evenly;
        font-family: 'averta-bold';
        font-weight: 300;
    }
`;

const Links = styled.div`
    display: flex;
    color: var(--color-search);
    font-weight: bold;
    text-decoration: none;
    align-items: center;
    justify-content: space-evenly;
    font-family: 'averta-bold';
    font-weight: 300;
`;

export {
    Container,
    Links,
    GrAccessibilityIcon,
    GiBrazilFlagIcon,
    GiUsaFlagIcon,
    FaChevronDownIcon,
    LinkWrapper,
    ChevronDownWrapper,
    ImgLogo,
};
