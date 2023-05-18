Feature: Pesquisar Operadores


  Scenario: Solicitar lista de TODOS Operadores
    Given que estou logado na tela de Pesquisa de Operadores
    When clico em pesquisar
    Then uma lista de Operadores é exibida

@focus
  Scenario: Solicitar um operador especifico
    Given que estou logado na tela de Pesquisa de Operadores
    When  digito o Operador e clico em Pesquisar
    Then  operador pesquisado é exibido na tela