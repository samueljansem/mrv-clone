import React from 'react';
import './Busca.css';

function Busca() {
  function makeSelected(e) {
    e.preventDefault();
    const el = e.target;

    if (el.hasAttribute('selected')) el.removeAttribute('selected');
    else el.setAttribute('selected', '');
  }

  return (
    <section className="busca-imoveis">
      <div>
        <input id="selected-box" type="text" disabled />
        <span>↓</span>
      </div>
      <select id="multiple-select" multiple className="custom-select">
        <option onMouseDown={makeSelected} value="1">
          1
        </option>
        <option onMouseDown={makeSelected} value="2">
          2
        </option>
        <option onMouseDown={makeSelected} value="3">
          3
        </option>
      </select>
    </section>
  );
}

export default Busca;
