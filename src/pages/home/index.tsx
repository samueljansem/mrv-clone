import React, { useState } from 'react';
import { VitrineDesktop, VitrineMobile, CardImovel } from '../../components';
import {
    Container,
    DobraImoveis,
    TituloDobraImoveis,
    ListagemImoveis,
    TituloWrapper,
    Wrapper,
    ConhecaMais,
    ButtonWrapper,
} from './styles';

import CardImage from '../../assets/img/example-card.jpg';
import { CardImovelSkeleton } from '../../components/shimmer';

const Home: React.FC = () => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 3000);

    return (
        <Container>
            <VitrineDesktop />
            <VitrineMobile />
            <Wrapper>
                <DobraImoveis>
                    <TituloWrapper>
                        <TituloDobraImoveis>Imóveis à venda em Minas Gerais</TituloDobraImoveis>
                    </TituloWrapper>
                    <ListagemImoveis>
                        {loading ? (
                            <>
                                <CardImovelSkeleton />
                                <CardImovelSkeleton />
                                <CardImovelSkeleton />
                                <CardImovelSkeleton />
                                <CardImovelSkeleton />
                            </>
                        ) : (
                            <>
                                <CardImovel cardImage={CardImage} />
                                <CardImovel cardImage={CardImage} />
                                <CardImovel cardImage={CardImage} />
                                <CardImovel cardImage={CardImage} />
                                <CardImovel cardImage={CardImage} />
                            </>
                        )}
                    </ListagemImoveis>
                    <ButtonWrapper>
                        <ConhecaMais>Conheça mais imóveis</ConhecaMais>
                    </ButtonWrapper>
                </DobraImoveis>
            </Wrapper>
        </Container>
    );
};

export default Home;
