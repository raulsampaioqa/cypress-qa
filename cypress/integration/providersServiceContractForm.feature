Feature: Ficha de Contrato do Provedor de Serviço


    Scenario:(Cenario de sucesso) Listar Ficha de Provedor de Serviço com [Status - CADASTRADO], onde o Fechamento de Tarifas seja: DIARIO e Pagamentos seja: DIARIO e visualizar contrato
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com status CADASTRADO
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ com status CADASTRADO
        And   selecionar o Provedor com status CADASTRADO
        And   clicar na aba “Contratos“
        And   Listar o contrato desejadoes onde o Fechamento de Tarifas seja: DIARIO e Pagamentos seja: DIARIO
        And   selecionar o contrato
        Then  contrato é listado com todas suas informações

    Scenario:(Cenario de sucesso) Listar Ficha de Provedor de Serviço com [Status - APROVADO], onde o Período - Fechamento de Tarifas seja: SEMANAL e Período - Fechamento de Pagamentos seja: SEMANAL e produto APROVADO e visualizar contrato
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com status APROVADO
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ com status APROVADO
        And   selecionar o Provedor com status APROVADO
        And   clicar na aba “Contratos“
        And   Listar o contrato desejadoes onde o Fechamento de Tarifas seja: SEMANAL e Pagamentos seja: SEMANAL
        And   selecionar o contrato com status APROVADO e Fechamento de Tarifas seja: SEMANAL e Pagamentos seja: SEMANAL
        Then  contrato é listado com todas suas informações do contrato

@focus
    Scenario:(Cenario de sucesso) Listar Ficha de Provedor de Serviço com [Status - AGUARDANDO APROVAÇÃO] Cadastrar contrato para um Provedor de Serviço já existente, onde o Período - Fechamento de Tarifas seja: MENSAL e Período - Fechamento de Pagamentos seja: MENSAL e visualizar contrato
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com status AGUARDANDO APROVAÇÃO
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ com status AGUARDANDO APROVAÇÃO
        And   selecionar o Provedor com status AGUARDANDO APROVAÇÃO
        And   clicar na aba “Contratos“
        And   Listar o contrato desejadoes onde o Fechamento de Tarifas seja: MENSAL e Pagamentos seja: MENSAL
        And   selecionar o contrato com status AGUARDANDO APROVAÇÃO e Fechamento de Tarifas seja: MENSAL e Pagamentos seja: MENSAL
        Then  o contrato é listado com todas suas informações do contrato