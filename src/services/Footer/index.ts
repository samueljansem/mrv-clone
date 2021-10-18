type Categoria = {
  categoria: string;
  area: string;
  links: Array<string>;
};

function ObterRodape(): Array<Categoria> {
  const rodape = [
    {
      categoria: 'Contato',
      area: 'CONTATO',
      links: [
        'Fale conosco',
        'Fale com um corretor',
        'Trabalhe conosco',
        'Agente dos sonhos',
        'Lojas e escritórios',
        'Compramos terrenos',
        'Fornecedores',
        'Ex-colaborador MRV',
      ],
    },
    {
      categoria: 'Imóveis a venda',
      area: 'IMOVEIS',
      links: [
        'Buscar imóveis MRV',
        'Chat 24 horas',
        'Financiamento',
        'Casa Verde e Amarela',
        'Simulador de subsídio',
        'Como usar seu FGTS',
        'Usar Carta de Crédito',
        'Brasileiros no Exterior',
        'Imóveis prontos',
        'Ofertas',
        'Lojas',
      ],
    },
    {
      categoria: 'Institucional',
      area: 'INSTITUCIONAL',
      links: [
        'Site Institucional',
        'Por que a MRV?',
        'MRV em números',
        'Sala de Imprensa',
        'Programa de Integridade',
        'Portas Abertas MRV',
        'MRV Decora',
        'Blog da MRV',
        'Habitability',
      ],
    },
    {
      categoria: 'Inovação',
      area: 'INOVACAO',
      links: ['Desafios', 'Parcerias', 'Reconhecimento', 'Notícias'],
    },
    {
      categoria: 'Sustentabilidade',
      area: 'SUSTENTABILIDADE',
      links: [
        'Site de Sustentabilidade MRV',
        'Ações Sustentáveis',
        'Instituto MRV',
        'Relatório de Sustentabilidade',
      ],
    },
    {
      categoria: 'Investidores',
      area: 'INVESTIDORES',
      links: [
        'Portal de RI',
        'Fatos Relevantes',
        'Apresentações',
        'Estatuto e Políticas',
        'Estratégias e Produtos',
        'Diretoria e Conselho',
        'Agenda de RI',
        'Central de Resultados',
        'Ratings &amp; Covenants',
      ],
    },
    {
      categoria: 'Clientes',
      area: 'CLIENTES',
      links: [
        'Portal de Relacionamento',
        'Boleto',
        'Assistência Técnica',
        'Negociar Minhas Parcelas',
        'Indicação Premiada',
        'Clube de Vantagens',
        'Acabamentos',
        'MRV Responde',
        'Conexão MRV',
      ],
    },
  ];

  return rodape;
}

const FooterService = {
  ObterRodape,
};

export default FooterService;
