Feature:  Client List


    Scenario: Realizar uma busca de um cliente atraves de uma pesquisa
        Given que estou na tela de novos clientes
        When seleciono o cliente desejado
        Then e apresentado cliente desejado

    Scenario: Listar Clientes
        Given que estou na tela de novos clientes
        When seleciono opcao aplicar
        Then e apresentado cliente cadastrado

    Scenario: Listar clientes com status CADASTRADO
        Given que estou na tela de novos clientes
        When  seleciono o filtro
        And   seleciono o tipo de situação com status cadastrado
        And   seleciono o botão pesquisar cliente com status cadastrado
        Then  é apresentado uma lista de cliente com status cadastrado


    Scenario: Listar clientes com status AGUARDANDO APROVAÇÃO
        Given que estou na tela de novos clientes
        When  seleciono o filtro
        And   seleciono o tipo de situação com status aguardando aprovacao
        And   seleciono o botão pesquisar cliente com status aguardando aprovacao
        Then  é apresentado uma lista de cliente com status aguardando aprovacao


    Scenario: Listar clientes com status APROVADO
        Given que estou na tela de novos clientes
        When  seleciono o filtro
        And   seleciono o tipo de situação com status aprovado
        And   seleciono o botão pesquisar cliente com status aprovado
        Then  é apresentado uma lista de cliente com status aprovado

    Scenario: Listar clientes com status REJEITADO
        Given que estou na tela de novos clientes
        When  seleciono o filtro
        And   seleciono o tipo de situação com status Rejeitado
        And   seleciono o botão pesquisar cliente com status Rejeitado
        Then  é apresentado uma lista de cliente com status Rejeitado

    Scenario: Listar clientes com status BLOQUEADO
        Given que estou na tela de novos clientes
        When  seleciono o filtro
        And   seleciono o tipo de situação com status Bloqueado
        And   seleciono o botão pesquisar cliente com status Bloqueado
        Then  é apresentado uma lista de cliente com status Bloqueado


    Scenario: Listar clientes com status CANCELADO
        Given que estou na tela de novos clientes
        When  seleciono o filtro
        And   seleciono o tipo de situação com status Cancelado
        And   seleciono o botão pesquisar cliente com status Cancelado
        Then  é apresentado uma lista de cliente com status Cancelado




