Feature:  Client Register

    Scenario: Validar novo cliente com CNPJ
        Given que estou na tela de novos clientes
        When informar os dados cadastrais  com  tipo de documento cnpj
        And seleciono  opcao cadastrar
        Then e apresentado  mensagem que cliente  foi cadastrado


    Scenario: Validar cadastro de endereco principal do cliente 
        Given que estou na tela de novos clientes
        When informar o cliente que desejo  cadastar endereco 
        And seleciono  opcao no aba enderecos 
        And  inform os dados principais da tela de cadastro 
         Then e apreentado mensagem que endereco foi cadastrado com sucesso


    Scenario: Validar novo cliente com CPF
        Given que estou na tela de novos clientes
        When informar os dados cadastrais  com  tipo de documento cpf
        And seleciono  opcao cadastrar
        Then e apresentado  mensagem que cliente foi cadastrado


    Scenario: Validar cadastro de contrato com cliente
        Given que estou na tela de novos clientes
        When informar o cliente que desejo  cadastar endereco 
        And seleciono  opcao no aba enderecos 
        And  inform os dados principais da tela de cadastro 
        Then e apreentado mensagem que endereco foi cadastrado com sucesso
 



