function ObterTopo() {
  const navs = [
    {
      id: 1,
      name: 'Imóveis à venda',
      pathName: '/imoveis',
    },
    {
      id: 2,
      name: 'Institucional',
      pathName: '/institucional',
    },
    {
      id: 3,
      name: 'Sustentabilidade',
      pathName: '/sustentabilidade',
    },
    {
      id: 4,
      name: 'Investidores',
      pathName: '/investidores',
    },
    {
      id: 5,
      name: 'Clientes',
      pathName: '/clientes',
    },
    {
      id: 6,
      name: 'Inovação',
      pathName: '/inovacao',
    },
  ];

  return navs;
}

const HeaderService = {
  ObterTopo,
};

export default HeaderService;
