Feature:  Client Register contrato

    Scenario: Cadastrar novo contrato do cliente periodo fechamento diario
        Given que estou na tela de cadastro de novos clientes 
        When informar os dados cadastrais e seleciono o tipo principal
        And seleciono  opcao cadastrar
        Then e apresentado  mensagem que novo cliente foi cadastrado

    Scenario: Cadastrar novo contrato do cliente periodo fechamento semanal
        Given que estou na tela de cadastro de novos clientes 
        When informar os dados cadastrais e seleciono o tipo principal
        And seleciono  opcao cadastrar
        Then e apresentado  mensagem que novo cliente foi cadastrado

    Scenario: Cadastrar novo contrato do cliente periodo fechamento mensal
        Given que estou na tela de cadastro de novos clientes 
        When informar os dados cadastrais e seleciono o tipo principal
        And seleciono  opcao cadastrar
        Then e apresentado  mensagem que novo cliente foi cadastrado