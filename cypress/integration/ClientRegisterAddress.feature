Feature:  Client Register Address

    Scenario: Cadastrar  novo endereco para cleinte do tipo principal
        Given que estou na tela de cadastro de novos clientes 
        When informar os dados cadastrais e seleciono o tipo principal
        And seleciono  opcao cadastrar
        Then e apresentado  mensagem que novo cliente foi cadastrado

    Scenario: Cadastrar  novo endereco para cliente do tipo cobranca
        Given que estou na tela de cadastro de novos clientes 
        When informar os dados cadastrais e seleciono o tipo cobranca
        And seleciono  opcao cadastrar
        Then e apresentado  mensagem que novo cliente foi cadastrado

    Scenario: Validar msg para cadastro sem selecionar um tipo de endereco
        Given que estou na tela de cadastro de novos clientes 
        When informar os dados cadastrais e nao seleciono nenhum tipo de endereco
        And seleciono opcao cadastrar
        Then e apresentado  mensagem que novo cliente foi cadastrado