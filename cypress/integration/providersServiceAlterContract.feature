Feature: Alteração Contrato do Provedor de Serviço

    Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status - CADASTRADO], onde o Fechamento de Tarifas seja: DIARIO e Pagamentos seja: DIARIO e alterar contrato

        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com status CADASTRADO
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ com status CADASTRADO
        And   selecionar o Provedor com status CADASTRADO
        And   clicar na aba “Contratos“
        And   Listar o contrato desejadoes onde o Fechamento de Tarifas seja: DIARIO e Pagamentos seja: DIARIO
        And   selecionar o contrato
        And   clicar em Alterar
        And   realizar a alteração e “FINALIZAR“
        Then  contrato alterado com sucesso


    Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status - APROVADO], onde o Período - Fechamento de Tarifas seja: SEMANAL e Período - Fechamento de Pagamentos seja: SEMANAL e produto APROVADO. Alterar fechamento de Semanal para Diario
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com status APROVADO
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ com status APROVADO
        And   selecionar o Provedor com status APROVADO
        And   clicar na aba “Contratos“
        And   Listar o contrato desejadoes onde o Fechamento de Tarifas seja: SEMANAL e Pagamentos seja: SEMANAL
        And   selecionar o contrato com status do produto APROVADO
        And   clicar em Alterar do produto APROVADO
        And   realizar a alteração e “FINALIZAR“ o contrato com alteração
        Then  contrato alterado com sucesso

@focus
    Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status - AGUARDANDO APROVAÇÃO], onde o Período - Fechamento de Tarifas seja: MENSAL e Período - Fechamento de Pagamentos seja: MENSAL
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com status AGUARDANDO APROVAÇÃO
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ com status AGUARDANDO APROVAÇÃO
        And   selecionar o Provedor com status AGUARDANDO APROVAÇÃO
        And   clicar na aba “Contratos“
        And   Listar o contrato desejadoes onde o Fechamento de Tarifas seja: MENSAL e Pagamentos seja: MENSAL
        And   selecionar o contrato
        And   clicar em Alterar do produto AGUARDANDO APROVAÇÃO
        And   realizar a alteração e “FINALIZAR“ o contrato
        Then  contrato alterado com sucesso