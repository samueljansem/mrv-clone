function ObterVitrines() {
  const vitrines = [
    {
      description: 'Imóveis à venda',
      src: '/imoveis',
    },
    {
      description: 'Institucional',
      src: '/institucional',
    },
    {
      description: 'Sustentabilidade',
      src: '/sustentabilidade',
    },
    {
      description: 'Investidores',
      src: '/investidores',
    },
    {
      description: 'Clientes',
      src: '/clientes',
    },
    {
      description: 'Inovacao',
      src: '/inovacao',
    },
  ];

  return vitrines;
}

const VitrineService = {
  ObterVitrines,
};

export default VitrineService;
