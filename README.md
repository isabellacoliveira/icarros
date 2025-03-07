# Documentação do Sistema - Listagem de Veículos 🚗

Este projeto consiste em uma página desenvolvida com React, onde os veículos são exibidos em uma lista, permitindo ao usuário buscar por marca, visualizar detalhes do vendedor e favoritar veículos. A solução utiliza um arquivo JSON para simular a resposta de uma API, e é projetada de maneira reativa.

## Funcionalidades

### 1. **Busca de Veículos**
- O sistema possui um campo de busca no canto superior direito da página, onde o usuário pode digitar o nome de uma marca.
- Apenas os veículos que correspondem ao texto inserido na busca são exibidos na lista.

### 2. **Modal de Contato**
- Cada veículo na lista tem um botão de "Contato" que, ao ser clicado, abre um modal com as informações de contato do vendedor (nome, telefone e e-mail).

### 3. **Favoritos**
- Ao lado de cada veículo, há um ícone de favorito. 
- O ícone fica vermelho quando o veículo é marcado como favorito.
- A marcação do favorito é feita ao clicar no ícone, e a mudança de estado é refletida na interface de forma reativa.

## Estrutura do Projeto

```plaintext
src/
├── components/
│   ├── carCard.js           # Componente que recebe as propriedades de cada um dos cards de carros
│   ├── carInfo.js           # Componente que renderiza a lista de veículos e os modais
│   ├── cars.js              # Componente para renderizar a lista de carros e que filtra os carros de acordo com a busca realizada
│   ├── favoriteCars.js      # Componente que renderiza apenas os carros selecionados como favoritos
│   ├── navbar.js            # Componente que é o cabeçalho da aplicação
│   └── Modal.js             # Componente para o modal de contato de vendedores dos carros
├── data/
│   └── db.json              # Arquivo JSON com dados simulando a resposta da API
├── App.js                   # Componente principal
└── index.js                 # Arquivo de entrada da aplicação
````

## Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado na sua máquina.
- NPM (ou Yarn) para gerenciamento de pacotes.
- Passos
  
### Clone o repositório:
1) git clone https://github.com/isabellacoliveira/icarros
2) cd veiculos-lista
3) Instale as dependências: npm install
4) Inicie o servidor de desenvolvimento: npm start
5) Acesse a aplicação em http://localhost:3000.

## Melhores Práticas Utilizadas
- **Componentização**: A aplicação foi estruturada em componentes reutilizáveis, como VehicleList, VehicleItem, ContactModal e FavoriteIcon, para tornar o código modular e de fácil manutenção.
- **Estado Local**: Utilização do useState para controlar o estado da busca, favoritos e a exibição do modal.
- **Boas Práticas de UX**: A interação com o modal e o ícone de favoritos é clara e intuitiva, e a busca por marca é feita em tempo real.
- **JSON para Dados**: Utilização de um arquivo JSON (json-server) para simular a resposta de uma API, facilitando a implementação de dados estáticos.

## Possíveis Melhorias
- **Aprimorar a busca**: Implementar um sistema de busca mais complexo, com suporte para múltiplos filtros (por ano, preço, etc.).
- **Persistência dos Favoritos**: Persistir os favoritos do usuário em local storage ou banco de dados para que, ao recarregar a página, os favoritos selecionados ainda apareçam como ativos.
- **Tratamento de Erros**: Adicionar um tratamento de erros mais robusto, caso a API não retorne dados ou haja falhas na requisição.

## Conclusão
Essa solução oferece uma maneira eficiente de listar e interagir com os veículos, com funcionalidades de busca, modal de contato e favoritos, implementadas de forma simples e reativa. A escolha dos componentes, estados e a estrutura modularizada seguem boas práticas de desenvolvimento, oferecendo escalabilidade e facilidade de manutenção.

Link para o Repositório
[GitHub - Veículos Lista](https://github.com/isabellacoliveira/icarros)

