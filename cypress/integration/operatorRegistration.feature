Feature: Cadastrar produto


  Scenario: Validar cadastro de um novo Operador
    Given que estou logado na tela de Cadastro de Operadores
    When preencho todos os dados de um novo Operador
    Then uma mensagem de Operador cadastrado com sucesso é exibido


   Scenario: Validar cadastro de um novo Operador e Aprovar
    Given que estou logado na tela de Cadastro de Operadores
    When preencho todos os dados de um novo Operador e realizo o cadastro com sucesso
    Then o operador é aprovado com sucesso


  Scenario: Validar cadastro de um novo Operador e Excluir
    Given que estou logado na tela de Cadastro de Operadores
    When preencho todos os dados de um novo Operador e realizo o cadastro com sucesso
    Then o operador é cancelado


  Scenario: Selecionar o botao Cancelar da tela de Operador
    Given que estou logado na tela de Cadastro de Operadores
    When preencho todos os dados de um novo Operador e seleciono o botao Cancelar
    Then sou redirecionado para tela de pesquisa de Operadores


  Scenario: Cadastrar um Operador com um EMAIL ja cadastrado
     Given que estou logado na tela de Cadastro de Operadores
     When preencho o formulario com um EMAIL ja cadastrado
     Then uma mensagem de erro de duplicidade e exibido


  Scenario: Cadastrar um Operador com um CPF ja cadastrado
     Given que estou logado na tela de Cadastro de Operadores
     When preencho o formulario com um CPF ja cadastrado
     Then uma mensagem de erro de duplicidade e exibido


  Scenario: Cadastrar um novo Operador e um endereço
    Given que estou logado na tela de Cadastro de Operadores
    When preencho todos os dados de um novo Operador e seleciono o botao Cadastrar
    Then uma mensagem de Operador cadastrado com sucesso é exibido
    And  seleciono o botao novo
    And cadastro um novo endereco para o Operador

  Scenario: Validar cadastro de um novo Operador e Excluir
    Given que estou logado na tela de Cadastro de Operadores
    When preencho todos os dados de um novo Operador e realizo o cadastro com sucesso
    Then o operador é cancelado


