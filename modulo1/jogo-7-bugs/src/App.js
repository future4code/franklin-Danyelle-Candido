import React from "react";
import Router from "./routes/Router";
import GlobalState from "./global/GlobalState";
import Requirements from "./components/Requirements/Requirements";

const App = () => {
  return (
    <GlobalState>
      <Router />
      <Requirements />
    </GlobalState>
  );
};

/*7 falhas
1-o preço minimo e maximo não trás o valor = tras o valor maior do que eu coloquei
2-ele aceita como email o valou nulo/ não valida email
3- a soma dos produtos esta incorreta
4- nome dos produtos(considerando acento e capitalização)
5-quando eu finalizo a compra e aperto cancelar ele vai pra pagina de confirmar a compra
6-
7-

*/ 


/* Requisitos
Página de produtos
Visualizar produtos
Foto
Nome
Preço
Filtrar por
Valor mínimo
Valor máximo
Nome do produto (desconsiderando capitalização e acentos)
Adicionar produtos ao carrinho
Página do carrinho
Visualizar produtos no carrinho
Produtos iguais devem ser um único item, com a quantidade indicada
Visualizar preço total do carrinho
Deve ser possível finalizar a compra
Coletar email do usuário
Confirmar email digitado e valor final
Informar que informações para pagamento serão enviadas
Limpar carrinho e voltar para página de produtos */

export default App;
