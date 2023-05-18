Feature: Alterar Clientes


    Scenario: Alterar dados cadastrais de um Cliente através de uma busca pelo campo de busca com status CADASTRADO
        Given que estou logado na tela de Pesquisa de Cliente
        When  digito o Cliente e clico em Pesquisar
        And   seleciono o Cliente exibido e clico no botao Alterar
        And   altero os dados do Cliente e clico em Salvar
        Then  uma mensagem de sucesso é exibida


    Scenario: Alterar dados cadastrais de um Cliente através de uma busca por CNPJ/CPF
        Given que estou na tela de novos clientes
        When  seleciono o filtro
        And   digito o CNPJ e CPF
        And   seleciono o botão pesquisar
        And   seleciono o Cliente exibido e clico no botao Alterar
        And   altero os dados do Cliente e clico em Salvar
        Then  uma mensagem de sucesso é exibida


    Scenario: Alterar dados cadastrais de um Cliente com status AGUARDANDO APROVAÇÃO
        Given que estou na tela de novos clientes
        When  seleciono o filtro
        And   seleciono o tipo de situação com status aguardando aprovacao
        And   seleciono o botão Aplicar
        And   seleciono o Cliente exibido e clico no botao Alterar
        And   altero os dados do Cliente e clico em Salvar
        Then  uma mensagem de sucesso é exibida

    Scenario: Alterar dados cadastrais de um Cliente com status APROVADO
        Given que estou na tela de novos clientes
        When  seleciono o filtro
        And   seleciono o tipo de situação com status aprovado
        And   seleciono o botão Aplicar
        And   seleciono o Cliente exibido e clico no botao Alterar
        And   altero os dados do Cliente e clico em Salvar
        Then  uma mensagem de sucesso é exibida

    Scenario: Alterar dados cadastrais de um Cliente com status REJEITADO
        Given que estou na tela de novos clientes
        When  seleciono o filtro
        And   seleciono o tipo de situação com status Rejeitado
        And   seleciono o botão pesquisar
        And   seleciono o Cliente exibido e clico no botao Alterar
        And   altero os dados do Cliente e clico em Salvar
        Then  uma mensagem de sucesso é exibida

    Scenario: Alterar dados cadastrais de um Cliente com status BLOQUEADO
        Given que estou na tela de novos clientes
        When  seleciono o filtro
        And   seleciono o tipo de situação com status Bloqueado
        And   seleciono o botão pesquisar
        And   seleciono o Cliente exibido e clico no botao Alterar
        And   altero os dados do Cliente e clico em Salvar
        Then  uma mensagem de sucesso é exibida

    Scenario: Alterar dados cadastrais de um Cliente com status CANCELADO
        Given que estou na tela de novos clientes
        When  seleciono o filtro
        And   seleciono o tipo de situação com status Cancelado
        And   seleciono o botão pesquisar
        And   seleciono o Cliente exibido e clico no botao Alterar
        And   altero os dados do Cliente e clico em Salvar
        Then  uma mensagem de sucesso é exibida



