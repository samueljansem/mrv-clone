import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import {
  Home,
  Imoveis,
  Institucional,
  Sustentabilidade,
  Investidores,
  Clientes,
  Inovacao,
} from './pages';

const IMOVEIS_PATHS = [
  '/imoveis',
  '/imoveis/:estado',
  '/imoveis/:estado/:cidade',
  '/imoveis/:estado/:cidade/:regiao',
];

const PRONTOS_PATHS = [
  '/prontos',
  '/prontos/:estado',
  '/prontos/:estado/:cidade',
  '/prontos/:estado/:cidade/:regiao',
];

const OFERTAS_PATHS = [
  '/ofertas',
  '/ofertas/:estado',
  '/ofertas/:estado/:cidade',
  '/ofertas/:estado/:cidade/:regiao',
];

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route component={Home} path="/" exact />
    <Route component={Imoveis} path={IMOVEIS_PATHS} exact />
    <Route component={Imoveis} path={PRONTOS_PATHS} exact />
    <Route component={Imoveis} path={OFERTAS_PATHS} exact />
    <Route component={Institucional} path="/institucional" />
    <Route component={Sustentabilidade} path="/sustentabilidade" />
    <Route component={Investidores} path="/investidores" />
    <Route component={Clientes} path="/clientes" />
    <Route component={Inovacao} path="/inovacao" />
  </BrowserRouter>
);

export default Routes;
