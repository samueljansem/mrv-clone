import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import {
    Home,
    Imoveis,
    Institucional,
    Sustentabilidade,
    Investidores,
    Clientes,
    Inovacao,
    Erro404,
} from '../pages';

const RoutesDefinition: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />} path="/">
                <Route element={<Home />} index />
                <Route element={<Imoveis />} path="imoveis" />
                <Route element={<Institucional />} path="institucional" />
                <Route element={<Sustentabilidade />} path="sustentabilidade" />
                <Route element={<Investidores />} path="investidores" />
                <Route element={<Clientes />} path="clientes" />
                <Route element={<Inovacao />} path="inovacao" />
                <Route path="*" element={<Erro404 />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default RoutesDefinition;
