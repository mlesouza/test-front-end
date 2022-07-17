# `Teste de Front-End Linx`

### Informações

Para facilitar a criação desta aplicação de teste foi utilizada o scaffolding [generator-angm](https://github.com/newaeonweb/generator-angm).

### Como Rodar o projeto.

Faça o clone do projeto:

```
 git clone https://github.com/mlesouza/test-front-end.git
```

Para rodar o projeto é necessário que você tenha o nodeJS instalado em sua máquina:

```
 npm install
 npm install -g grunt-cli
 npm start
```

#### Critérios de aceite

#### Sobre

Sua solução deve consumir dados da [Open Brewery DB](https://www.openbrewerydb.org/).

A solução consiste em duas páginas:

-   Home, [brewery-home.pdf](brewery-home.pdf), que contem uma listagem de cervejarias.
-   Detalhes, [brewery-detail.pdf](brewery-detail.pdf), que exibe detalhes de uma cervejaria.

#### Essenciais

-   [ ] Fidelidade do layout.
-   [ ] Responsividade, o layout está apenas na versão desktop, então sinta-se livre para tratar a versão mobile como achar melhor.
-   [ ] Componentes reutilizáveis.
-   [ ] Paginação para as 3 primeiras páginas apenas.
-   [ ] Filtro por `brewery_type`, deve ser persistido entre navegações, exceto quando houver reload da página.
-   [ ] Para o Google Maps deve abrir a localização com um "pin".
-   [ ] Acessibilidade, queremos ver um mínimo de acessibilidade. Navegação por teclado, semântica, etc...

#### Desejáveis

-   [ ] Testes unitários
-   [ ] Performance 80+ no [Lighthouse](https://web.dev)
-   [ ] Acessibilidade 90+ no [Lighthouse](https://web.dev)

#### Bônus

-   [ ] Testes end-to-end
-   [ ] Deploy da solução
-   [ ] Cobertura de testes 100%
