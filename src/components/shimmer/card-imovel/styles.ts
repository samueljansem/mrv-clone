import styled from 'styled-components';
import { GiElevator, MdDirectionsBike } from '../../../styles/Icons';

const Container = styled.div`
    width: 270px;
    height: 580px;
    background: var(--color-card-detail);
    box-shadow: 1px 1px 10px 1px rgba(1, 1, 1, 0.4);
    transition: all 0.2s ease-in-out;
    border-radius: 15px;
    margin: 0 15px 40px 15px;

    background-image: linear-gradient(-90deg, #f8f8f8 0%, #d3d3d3 50%, #f8f8f8 100%);
    background-size: 400% 400%;
    animation: shimmer 1.2s ease-in-out infinite;

    @keyframes shimmer {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: -135% 0%;
        }
    }

    &:hover {
        transform: scale(1.01);
    }
`;

const ContentWrapper = styled.div`
    overflow: hidden;
    width: 100%;
    height: 544px;
    background: var(--color-white);
    position: relative;
    border-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`;

const CardImage = styled.section`
    max-width: 100%;
    height: 266px;

    background-image: linear-gradient(-90deg, #f8f8f8 0%, #d3d3d3 50%, #f8f8f8 100%);
    background-size: 400% 400%;
    animation: shimmer 1.2s ease-in-out infinite;

    @keyframes shimmer {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: -135% 0%;
        }
    }
`;

const ImageWrapper = styled.div`
    /* position: relative;
  width: 100%;
  height: 266px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 70%, var(--color-black) 105%);
  } */
`;

const StatusWrapper = styled.span`
    position: absolute;
    font-family: 'averta-bold';
    font-size: 14px;
    color: var(--color-background);
    margin: 0 0 15px 15px;
    bottom: 25px;
    z-index: 2;
`;

const QuartosWrapper = styled.span`
    position: absolute;
    font-family: 'averta-bold';
    font-size: 14px;
    color: var(--color-background);
    margin: 0 0px 15px 15px;
    bottom: 0;
    z-index: 2;
`;

const SaibaMais = styled.div`
    bottom: 0;
    height: 30px;
    width: 100%;

    background-image: linear-gradient(-90deg, #f8f8f8 0%, #d3d3d3 50%, #f8f8f8 100%);
    background-size: 400% 400%;
    animation: shimmer 1.2s ease-in-out infinite;

    @keyframes shimmer {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: -135% 0%;
        }
    }
`;

const Classificacao = styled.div`
    background: var(--color-card-detail);
    right: 0;
    top: 0;
    width: 170px;
    height: 21px;
    position: absolute;
    z-index: 2;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 5px;

    background-image: linear-gradient(-90deg, #f8f8f8 0%, #d3d3d3 50%, #f8f8f8 100%);
    background-size: 400% 400%;
    animation: shimmer 1.2s ease-in-out infinite;

    @keyframes shimmer {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: -135% 0%;
        }
    }
`;

const DescricaoWrapper = styled.article`
    padding-left: 15px;
    padding-top: 10px;
    align-items: center;
    margin-bottom: 20px;
`;

const BairroSkeleton = styled.span`
    width: 70px;
    height: 20px;
    display: block;
    margin-bottom: 5px;

    background-image: linear-gradient(-90deg, #f8f8f8 0%, #d3d3d3 50%, #f8f8f8 100%);
    background-size: 400% 400%;
    animation: shimmer 1.2s ease-in-out infinite;

    @keyframes shimmer {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: -135% 0%;
        }
    }
`;

const CidadeSkeleton = styled.span`
    width: 120px;
    height: 20px;
    display: block;
    margin-bottom: 5px;

    background-image: linear-gradient(-90deg, #f8f8f8 0%, #d3d3d3 50%, #f8f8f8 100%);
    background-size: 400% 400%;
    animation: shimmer 1.2s ease-in-out infinite;

    @keyframes shimmer {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: -135% 0%;
        }
    }
`;

const NomeSkeleton = styled.span`
    width: 90px;
    height: 20px;
    display: block;

    background-image: linear-gradient(-90deg, #f8f8f8 0%, #d3d3d3 50%, #f8f8f8 100%);
    background-size: 400% 400%;
    animation: shimmer 1.2s ease-in-out infinite;

    @keyframes shimmer {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: -135% 0%;
        }
    }
`;

const SeloWrapper = styled.div`
    width: 100%;
    padding-left: 15px;
    margin-bottom: 20px;
`;

const SeloSkeleton = styled.span`
    width: 80px;
    height: 20px;
    display: block;
    margin-right: 100%;

    background-image: linear-gradient(-90deg, #f8f8f8 0%, #d3d3d3 50%, #f8f8f8 100%);
    background-size: 400% 400%;
    animation: shimmer 1.2s ease-in-out infinite;

    @keyframes shimmer {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: -135% 0%;
        }
    }
`;

const Diferenciais = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-left: 15px;
`;

const Diferencial = styled.span`
    width: 100%;
    font-size: 15px;
    margin-bottom: 10px;
`;

const Elevador = styled(GiElevator)`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    color: var(--color-gray);
`;

const Bicicletario = styled(MdDirectionsBike)`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    color: var(--color-gray);
`;

const DiferencialSkeleton = styled.span`
    width: 200px;
    height: 20px;
    display: block;

    background-image: linear-gradient(-90deg, #f8f8f8 0%, #d3d3d3 50%, #f8f8f8 100%);
    background-size: 400% 400%;
    animation: shimmer 1.2s ease-in-out infinite;

    @keyframes shimmer {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: -135% 0%;
        }
    }
`;

const Linha = styled.hr`
    margin-top: 3px;
    border-radius: 4px;
    height: 4px;
    width: 50px;

    background-image: linear-gradient(-90deg, #f8f8f8 0%, #d3d3d3 50%, #f8f8f8 100%);
    background-size: 400% 400%;
    animation: shimmer 1.2s ease-in-out infinite;

    @keyframes shimmer {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: -135% 0%;
        }
    }
`;

export {
    Container,
    CardImage,
    SaibaMais,
    ContentWrapper,
    ImageWrapper,
    Classificacao,
    DescricaoWrapper,
    BairroSkeleton,
    CidadeSkeleton,
    NomeSkeleton,
    Diferenciais,
    Diferencial,
    Elevador,
    Bicicletario,
    SeloWrapper,
    SeloSkeleton,
    Linha,
    StatusWrapper,
    QuartosWrapper,
    DiferencialSkeleton,
};
