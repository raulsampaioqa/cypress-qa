Feature: Cadastro/alteração de Notificação do Cliente

@focus
    Scenario: Cadastrar notificação do Cliente SALDO DISPONIVEL e TRANSAÇÃO NEGADA
        Given que estou na tela de Clientes
        When  realizo a pesquisa por NOME ou NOME FANTASIA DE CLIENTE
        And   clico em BUSCAR
        And   clico no cliente que foi pesquisado
        And   clico na aba NOTIFICACOES
        And   valido se O SALDO DISPONIVEL e TRANSAÇÃO NEGADA POR SALDO INSUFICIENTE esta como INATIVO
        Then  clico para cadastrar o SALDO DISPONIVEL
        And   preencho todos os campos obrigatorios do Cadastro do SALDO DISPONIVEL
        And   clico no botao SALVAR
        And   valido a mensagem de sucesso
        And   clico para cadastrar o TRANSAÇÃO NEGADA POR SALDO INSUFICIENTE
        And   preencho todos os campos obrigatorios do Cadastro da TRANSAÇÃO NEGADA POR SALDO INSUFICIENTE
        And   clico no botao SALVAR
        And   valido a mensagem de sucesso e os demais campos inseridos no cadastro

    Scenario:(Cenário de ERRO) Cadastrar notificação do Cliente SALDO DISPONIVEL sem preencher os campos obrigatorios
        Given que estou na tela de Clientes
        When  realizo a pesquisa por NOME ou NOME FANTASIA DE CLIENTE
        And   clico em BUSCAR
        And   clico no cliente que foi pesquisado
        And   clico na aba NOTIFICACOES
        And   valido se O SALDO DISPONIVEL e TRANSAÇÃO NEGADA POR SALDO INSUFICIENTE esta como INATIVO
        Then  clico para cadastrar o SALDO DISPONIVEL
        And   não preencho os campos obrigatorios do SALDO DISPONIVEL
        And   clico no botao SALVAR
        And   validar mensagem de obrigatoriedade


    Scenario:(Cenário de ERRO) Cadastrar notificação do Cliente TRANSAÇÃO NEGADA sem preencher os campos obrigatorios
        Given que estou na tela de Clientes
        When  realizo a pesquisa por NOME ou NOME FANTASIA DE CLIENTE
        And   clico em BUSCAR
        And   clico no cliente que foi pesquisado
        And   clico na aba NOTIFICACOES
        And   valido se a TRANSAÇÃO NEGADA POR SALDO INSUFICIENTE esta como INATIVO
        Then  clico para cadastrar notificacao Cliente TRANSAÇÃO NEGADA
        And   não preencho os campos obrigatorios do Cliente TRANSAÇÃO NEGADA
        And   clico no botao SALVAR
        And   validar mensagem de obrigatoriedade do Cliente TRANSAÇÃO NEGADA


    Scenario: Alterar notificação do Cliente SALDO DISPONIVEL
        Given que estou na tela de Clientes
        When  realizo a pesquisa por NOME ou NOME FANTASIA DE CLIENTE
        And   clico em BUSCAR
        And   clico no cliente que foi pesquisado
        And   clico na aba NOTIFICACOES
        And   valido se O SALDO DISPONIVEL esta como ATIVO
        Then  clico para alterar o SALDO DISPONIVEL
        And   Altero o campo necessario
        And   clico em SALVAR
        And   valido a mensagem de sucesso e o campo alterado


    Scenario: Alterar notificação do Cliente do TRANSAÇÃO NEGADA
       Given que estou na tela de Clientes
        When  realizo a pesquisa por NOME ou NOME FANTASIA DE CLIENTE
        And   clico em BUSCAR
        And   clico no cliente que foi pesquisado
        And   clico na aba NOTIFICACOES
        And   valido se O TRANSAÇÃO NEGADA esta como ATIVO
        Then  clico para alterar o TRANSAÇÃO NEGADA
        And   altero o campo necessario para TRANSAÇÃO NEGADA
        And   clico em SALVAR
        And   valido a mensagem de sucesso e o campo alterado DO Cliente do TRANSAÇÃO NEGADA