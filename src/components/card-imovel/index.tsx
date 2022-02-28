import React from 'react';
import {
    Bairro,
    CardImage,
    Cidade,
    Container,
    ContentWrapper,
    DescricaoWrapper,
    ImageWrapper,
    SaibaMais,
    Nome,
    Diferenciais,
    Diferencial,
    Elevador,
    Bicicletario,
    Lazer,
    Classificacao,
    SeloWrapper,
    Selo,
    Linha,
    StatusWrapper,
    QuartosWrapper,
} from './styles';

interface Props {
    cardImage: string;
}

const CardImovel: React.FC<Props> = ({ cardImage }) => (
    <Container>
        <ContentWrapper>
            <Classificacao>Casa Verde e Amarela</Classificacao>
            <ImageWrapper>
                <QuartosWrapper>
                    2 quartos <Linha />
                </QuartosWrapper>
                <StatusWrapper>Lançamento</StatusWrapper>
                <CardImage alt="Imóvel" src={cardImage} />
            </ImageWrapper>
            <DescricaoWrapper>
                <Bairro>São Gabriel</Bairro>
                <Cidade>Belo Horizonte/MG</Cidade>
                <Nome>Plaza Cartagena</Nome>
            </DescricaoWrapper>
            <SeloWrapper>
                <Selo>Lazer equipado</Selo>
                <Linha />
            </SeloWrapper>
            <Diferenciais>
                <Diferencial>
                    <Elevador />
                    Elevador
                </Diferencial>
                <Diferencial>
                    <Bicicletario />
                    Bicicletário
                </Diferencial>
                <Diferencial>
                    <Lazer />
                    Área de lazer
                </Diferencial>
            </Diferenciais>
        </ContentWrapper>
        <SaibaMais>Saiba Mais</SaibaMais>
    </Container>
);

export default CardImovel;
