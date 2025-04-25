import React from "react";
import MenuItem from "./MenuItem";

const precos = {
  GeladoDeMaracujá: 75.0,
  banoffe: 60.0,
  Cheesecake: 85.0,
  DeliciaDeAbacaxi: 75.0,
  Guirlanda: 35.0,
  BoxBrownie: 55.0,
  Docinhos: 20.0,
  DocinhosEmArvore: 25.0,
};

function Menu({ pedido, onQuantidadeChange }) {
  return (
    <div className="menu-container">
      {Object.keys(precos).map((key) => {
        const nomeFormatado = key
          .replace(/([A-Z])/g, " $1")
          .replace(/\b\w/g, (c) => c.toUpperCase());
        const quantidade = pedido[key]?.quantidade || 0;

        return (
          <MenuItem
            key={key}
            nome={nomeFormatado}
            preco={precos[key]}
            imagem={`imagens/${key}.png`}
            quantidade={quantidade}
            onQuantidadeChange={(qtd) => onQuantidadeChange(key, precos[key], qtd)}
          />
        );
      })}
    </div>
  );
}

export default Menu;