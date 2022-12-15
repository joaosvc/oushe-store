
# Oushe Store

Um projetinho simples a pedido da escola, uma loja online simples e interativa!


## Funcionalidades

- Validação dos campos 
- Criação de perfil completo 
- Alteração de perfil 
- Alteração de nome de usuário dentre outras informações 
- Maneira simples e rápida de adicionar um produto 
## Instalação

Importação do banco de dados XAMPP

```bash
  1° Crie um banco de dados chamado oushe-store e em seguida selecione-o
```
```bash
  Clique no botão importa e selecione o arquivo oushe-store.sql
```

## Funcões

No arquivo JavaScript MainPage.js, tem um exemplo de como adiciona um produto!!! \
por padrão criei um for que gerar varios produtos identicos... \
aqui está um exemplo de como criar um produto: 

```bash
import CardProduct from './card/card-product.js';

let card = new CardProduct();
card.setImage("Image URL");
card.setImageAlt("Mensagem que ira aparecer ao passar o mouse na imagem ou se ela não for carregada!");
card.setTitle("Título do Anúncio");
card.setPriceSymbol("R$");
card.setPriceWhole("Preço sem os centavos");
card.setPriceDecimals("Centavos");
card.setPriceOffscreen("Preço completo");
card.setParcels("Mensagem de parcela");
card.setRemaining("Quantidade:");
card.setRemainingCount("13");
```

Exemplo na pratica:
```bash
let card = new CardProduct();
card.setImage("https://m.media-amazon.com/images/I/71Dh+NR7ivL._AC_UL320_.jpg");
card.setImageAlt("Apple iPhone 11 (64 GB) Verde");
card.setTitle("Apple iPhone 11 (64 GB) Verde");
card.setPriceSymbol("R$");
card.setPriceWhole("4.732");
card.setPriceDecimals("63");
card.setPriceOffscreen("R$ 4.999,00");
card.setParcels("Em até 10x de R$ 473,29 sem juros");
card.setRemaining("Quantidade:");
card.setRemainingCount("13");
```

## 🚀 Github
Meu Repositório https://github.com/joaosvc \
Repositório do Projeto https://github.com/joaosvc/oushe-store
