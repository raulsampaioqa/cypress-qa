Feature:  Cadastro Contas a Receber Pré-Pago

@focus
    Scenario: Cadastrar Contas a Receber Pré-Pago com sucesso e visualizar a Ficha
        Given que estou na tela de Contas a Receber Pré-Pago
        When  clico no botao AÇÕES
        And   clico em NOVO
        And   a tela de Cadastro de Contas a Receber é exibido
        And   preencho todos os campos
        And   clico no botao CADASTRAR
        Then  é exibido uma mensagem de Contas a receber cadastrado com sucesso
        And   ficha de cadastro é exibida com o campo Cliente e o Valor cadastrado


    Scenario:(CENARIO ERRO) Cadastrar Contas a Receber Pré-Pago com vencimento de dias anteriores
        Given que estou na tela de Contas a Receber Pré-Pago
        When  clico no botao AÇÕES
        And   clico em NOVO
        And   a tela de Cadastro de Contas a Receber é exibido
        And   selecionar Cliente
        And   selecionar Data com vencimento de dias anteriores e digitar o valor
        And   clico no botao CADASTRAR
        Then  a mensagem, O Vencimento não pode ser anterior à data atual é exibida


    Scenario:(CENARIO ERRO) Cadastrar Contas a Receber Pré-Pago sem informar o valor
        Given que estou na tela de Contas a Receber Pré-Pago
        When  clico no botao AÇÕES
        And   clico em NOVO
        And   a tela de Cadastro de Contas a Receber é exibido
        And   selecionar Cliente
        And   não digitar valor
        And   selecionar Data do Vencimento
        And   clico no botao CADASTRAR
        Then  uma mensagem de obrigatoriedade é exibida

    Scenario:(CENARIO ERRO) Clicar no botao CADASTRAR sem passar nenhuma informação
        Given que estou na tela de Contas a Receber Pré-Pago
        When  clico no botao AÇÕES
        And   clico em NOVO
        And   a tela de Cadastro de Contas a Receber é exibido
        And   clicar no botao CADASTRAR
        Then  uma mensagem de obrigatoriedade é exibida