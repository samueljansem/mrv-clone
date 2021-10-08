function ObterRodape() {
  const rodape = [
    {
      name: 'Imóveis à venda',
      pathName: '/imoveis',
    },
    {
      name: 'Institucional',
      pathName: '/institucional',
    },
    {
      name: 'Sustentabilidade',
      pathName: '/sustentabilidade',
    },
    {
      name: 'Investidores',
      pathName: '/investidores',
    },
    {
      name: 'Clientes',
      pathName: '/clientes',
    },
    {
      name: 'Inovacao',
      pathName: '/inovacao',
    },
  ];

  return rodape;
}

const FooterService = {
  ObterRodape,
};

export default FooterService;
