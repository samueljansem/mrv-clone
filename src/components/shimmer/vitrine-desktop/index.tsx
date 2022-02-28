import React from 'react';
import Container from './styles';
import vitrine from '../../../assets/img/vitrine-desktop-2.png';

const VitrineDesktopSkeleton: React.FC = () => (
    <Container>
        <img alt="Vitrine" src={vitrine} />
    </Container>
);

export default VitrineDesktopSkeleton;
