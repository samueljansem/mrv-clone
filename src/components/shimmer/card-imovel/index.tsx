import React from 'react';
import {
    BairroSkeleton,
    CardImage,
    CidadeSkeleton,
    Container,
    ContentWrapper,
    DescricaoWrapper,
    ImageWrapper,
    NomeSkeleton,
    Diferenciais,
    Diferencial,
    SeloWrapper,
    SeloSkeleton,
    DiferencialSkeleton,
} from './styles';

const CardImovelSkeleton: React.FC = () => (
    <Container>
        <ContentWrapper>
            <ImageWrapper>
                <CardImage />
            </ImageWrapper>
            <DescricaoWrapper>
                <BairroSkeleton />
                <CidadeSkeleton />
                <NomeSkeleton />
            </DescricaoWrapper>
            <SeloWrapper>
                <SeloSkeleton />
            </SeloWrapper>
            <Diferenciais>
                <Diferencial>
                    <DiferencialSkeleton />
                </Diferencial>
                <Diferencial>
                    <DiferencialSkeleton />
                </Diferencial>
                <Diferencial>
                    <DiferencialSkeleton />
                </Diferencial>
            </Diferenciais>
        </ContentWrapper>
    </Container>
);

export default CardImovelSkeleton;
