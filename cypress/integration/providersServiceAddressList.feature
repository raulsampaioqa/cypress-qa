
Feature: Lista de endereço do Provedor de Serviço



 Scenario: Pesquisar Provedores de Serviços filtrado por o campo “CNPJ“, clicar em "Carregar Mais" e visualizar endereco Principal e Cobrança
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida
        And   seleciono um Provedor com status “CNPJ“
        And   visualizar endereco
        And   clicar em “Carregar Mais“
        Then   e visualizar endereco do tipo Principal e Cobranca


 Scenario: Pesquisar Provedores de Serviços filtrado por o campo “CNPJ“ e visualizar endereco Principal
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com tipo Principal
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida
        And   seleciono um Provedor com status “CNPJ“ e com tipo Principal
        And   visualizar endereco com o tipo Principal
        Then  e visualizar endereco do tipo Principal


 Scenario: Pesquisar Provedores de Serviços filtrado por o campo “CNPJ“ e visualizar endereco Cobrança
       Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com tipo Cobranca
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida
        And   seleciono um Provedor com status “CNPJ“ e com tipo Cobranca
        And   visualizar endereco com o tipo Cobrança
        Then  e visualizar endereco do tipo Cobrança
