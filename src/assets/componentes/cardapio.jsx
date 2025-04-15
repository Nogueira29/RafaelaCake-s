import React from "react";

const itens = [

    { Nome: "Gelado de Maracujá", Preco: 75.0, imagem: "/public/imagens/maracuja.jpg" },
    { Nome: "Banoffe", Preco: 60.0, imagem: "./public/imagens/banoffe.jpg" },
    { Nome: "Cheesecake", Preco: 85.0, imagem: "/public/imagens/che.jpg" },
    { Nome: "Delícia de abacaxi", Preco: 75.0, imagem: "/public/imagens/Delicia de abacaxi.jpg" },
    { Nome: "Brownie", Preco: 55.0, imagem: "/public/imagens/novobro.jpg" },
    { Nome: "Guirlanda", Preco: 7.0, imagem: "/public/imagens/guirlanda.jpg" },
    { Nome: "Docinhos em Árvore", Preco: 25.0, imagem: "/public/imagens/Arvore.jpg" },
    { Nome: "Docinhos", Preco: 20.0, imagem: "/public/imagens/Docinhos.jpg" },
    
];

function Cardapio(){
    return(
      <div class= "menu-container">
            {itens.map((item, index) => (
                <div key={index} className="menu-item">
                    <h3> {item.Nome}   </h3>
                    <p>R$ {item.Preco.toFixed(2)} </p>
                    <img src={item.imagem} className="menu-item img"></img>
                    <input type="number" className="quantidade-input" placeholder="qtde." />
                </div>
            ))
            }
      </div>  
    )
}

export default Cardapio;