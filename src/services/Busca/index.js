const estados = [
  { value: 1, label: 'Minas Gerais' },
  { value: 2, label: 'São Paulo' },
  { value: 3, label: 'Rio de Janeiro' },
  { value: 4, label: 'Mato Grosso' },
];

const cidades = [
  { value: 1, label: 'Belo Horizonte', idEstado: 1 },
  { value: 2, label: 'Betim', idEstado: 1 },

  { value: 3, label: 'São Paulo', idEstado: 2 },
  { value: 4, label: 'Campinas', idEstado: 2 },

  { value: 5, label: 'Rio de Janeiro', idEstado: 3 },
  { value: 6, label: 'Cabo Frio', idEstado: 3 },

  { value: 7, label: 'Cuiabá', idEstado: 4 },
];

const bairros = [
  { value: 1, label: 'Centro', idCidade: 1 },
  { value: 2, label: 'Savassi', idCidade: 1 },
  { value: 3, label: 'Pampulha', idCidade: 1 },
  { value: 4, label: 'Sagrada Família', idCidade: 1 },

  { value: 5, label: 'Niterói', idCidade: 2 },
  { value: 6, label: 'Ingá', idCidade: 2 },
  { value: 7, label: 'Centro', idCidade: 2 },
  { value: 8, label: 'Angola', idCidade: 2 },

  { value: 9, label: 'Bela Vista', idCidade: 3 },
  { value: 10, label: 'Barra Funda', idCidade: 3 },
  { value: 11, label: 'Alphaville', idCidade: 3 },
  { value: 12, label: 'Ibirapuera', idCidade: 3 },

  { value: 13, label: 'Guanabara', idCidade: 4 },
  { value: 14, label: 'Cambuí', idCidade: 4 },
  { value: 15, label: 'Parque Prado', idCidade: 4 },

  { value: 16, label: 'Lapa', idCidade: 5 },
  { value: 17, label: 'Barra da Tijuca', idCidade: 5 },
  { value: 18, label: 'Bangu', idCidade: 5 },

  { value: 19, label: 'Araçá', idCidade: 6 },
  { value: 20, label: 'Braga', idCidade: 6 },
  { value: 21, label: 'Caminho Verde', idCidade: 6 },

  { value: 22, label: 'Alvorada', idCidade: 7 },
  { value: 23, label: 'Consil', idCidade: 7 },
  { value: 24, label: 'Duque de Caxias', idCidade: 7 },
  { value: 25, label: 'Novo Colorado', idCidade: 7 },
];

function obterEstadosSelect() {
  return estados;
}

function obterCidadesSelect(idEstado = undefined) {
  if (idEstado === undefined) return [];

  return cidades.filter((item) => item.idEstado === idEstado);
}

function obterBairrosSelect(idCidade = undefined) {
  if (idCidade === undefined) return [];

  return bairros.filter((item) => item.idCidade === idCidade);
}

const BuscaService = {
  obterEstadosSelect,
  obterCidadesSelect,
  obterBairrosSelect,
};

export default BuscaService;
