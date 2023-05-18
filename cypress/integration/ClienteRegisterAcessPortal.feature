Feature: Client Register Acess Portal

    Scenario:  Cadastrar novo operador portal 
        Given que estou na tela de cadastrar novos operadores portal
        When informo os campos referente ao novo operador 
        And seleciono opcao cadatsrar novo operador 
        Then   e apresentado mensagem que novo operador foi cadastrado


    Scenario: Valida campos obrigatorios do cadastro de novo operador
        Given que estou na tela de cadastrar novos operadores portal
        When  nao informo todos campos obrigatorio 
        And seleciono opcao cadatsrar novo operador 
        Then  entao e apresentado mensagem informado que campos sao obrigatorios 