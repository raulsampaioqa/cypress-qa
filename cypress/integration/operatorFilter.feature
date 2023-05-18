Feature: Filtro pesquisa de Operadores


  Scenario: Realizar uma pesquisa atraves do filtro de Operadores com a situação NORMAL
    Given que estou logado na tela de Pesquisa de Operadores
    When clico no botao do filtro
    And  seleciono a lista de Situacao NORMAL e clico no botao Aplicar
    Then uma lista de Operadores é exibida



  Scenario: Realizar uma pesquisa atraves do filtro de Operadores com a situação BLOQUEADO
    Given que estou logado na tela de Pesquisa de Operadores
    When clico no botao do filtro
    And  seleciono a lista de Situacao BLOQUEADO e clico no botao Aplicar
    Then uma lista de Operadores é exibida


   Scenario: Realizar uma pesquisa atraves do filtro de Operadores com a situação AGUARDANDO ATIVAÇÃO
    Given que estou logado na tela de Pesquisa de Operadores
    When clico no botao do filtro
    And  seleciono a lista de Situacao AGUARDANDO ATIVACAO e clico no botao Aplicar
    Then uma lista de Operadores é exibida