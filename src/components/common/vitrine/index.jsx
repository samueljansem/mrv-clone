import React from 'react';

import './Vitrine.css';
import vitrine from '../../../assets/img/vitrine-prontos-para-morar.png';

function Vitrine() {
  return (
    <div className="full">
      <img alt="Prontos para morar" src={vitrine} />
    </div>
  );
}

export default Vitrine;
