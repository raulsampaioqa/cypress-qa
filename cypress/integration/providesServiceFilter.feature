Feature: Pesquisar Provedores de Serviços


    Scenario: Pesquisar Provedores de Serviços SEM FILTROS
        Given que estou logado na tela de Pesquisa de Operadores
        When clico em buscar no filtro de pesquisa
        Then uma lista de Provedores de Serviços é exibida


    Scenario: Pesquisar Provedores de Serviços com filtro “Situação“ igual “NENHUM“
        Given que estou logado na tela de Pesquisa de Operadores
        And clico no botao do filtro
        When seleciono o filtro “Situação“ igual “NENHUM“
        And  clico em Aplicar
        Then uma lista de Provedores de Serviços é exibida


    Scenario: Pesquisar Provedores de Serviços com filtro “Situação“ igual "CADASTRADO"
        Given que estou logado na tela de Pesquisa de Operadores
        And clico no botao do filtro
        When seleciono o filtro “Situação“ igual “CADASTRADO“
        And  clico em Aplicar
        Then uma lista de Provedores de Serviços com a situação cadastrado é exibida

    Scenario:Pesquisar Provedores de Serviços com filtro “Situação“ igual "AGUARDANDO APROVAÇÃO"
        Given que estou logado na tela de Pesquisa de Operadores
        And clico no botao do filtro
        When seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“
        And  clico em Aplicar
        Then uma lista de Provedores de Serviços com a situação cadastrado é exibida

    Scenario: Pesquisar Provedores de Serviços com filtro “Situação“ igual “APROVADO“
        Given que estou logado na tela de Pesquisa de Operadores
        And clico no botao do filtro
        When seleciono o filtro “Situação“ igual “APROVADO“
        And  clico em Aplicar
        Then uma lista de Provedores de Serviços com a situação APROVADO é exibida


    Scenario:Pesquisar Provedores de Serviços com filtro “Situação“ igual “REJEITADO“
        Given que estou logado na tela de Pesquisa de Operadores
        And clico no botao do filtro
        When seleciono o filtro “Situação“ igual “REJEITADO“
        And  clico em Aplicar
        Then uma lista de Provedores de Serviços com a situação REJEITADO é exibida


    Scenario:Pesquisar Provedores de Serviços com filtro “Situação“ igual “CANCELADO“
        Given que estou logado na tela de Pesquisa de Operadores
        And clico no botao do filtro
        When seleciono o filtro “Situação“ igual “CANCELADO“
        And  clico em Aplicar
        Then uma lista de Provedores de Serviços com a situação CANCELADO é exibida


    Scenario:Pesquisar Provedores de Serviços pelo campo “RAZÃO SOCIAL“
        Given que estou logado na tela de Pesquisa de Operadores
        And clico no botao do filtro
        When realizo uma busca pelo campo “RAZÃO SOCIAL“
        And  clico em Aplicar
        Then uma lista de Provedores de Serviços com a RAZÃO SOCIAL solicitada é exibida


    @focus
    Scenario:Pesquisar Provedores de Serviços filtrado por o campo “CNPJ“
        Given que estou logado na tela de Pesquisa de Operadores
        And clico no botao do filtro
        When realizo uma busca pelo campo “CNPJ“
        And  clico em Aplicar
        Then uma lista de Provedores de Serviços com a CNPJ solicitada é exibida