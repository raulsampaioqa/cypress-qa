Feature: Listar ficha de Contrato do Provedor de Serviço

    Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status - CADASTRADO], onde o Período - Fechamento de Tarifas seja: DIARIO e Período - Fechamento de Pagamentos seja: DIARIO
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com status CADASTRADO
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ com status CADASTRADO
        And   selecionar o Provedor com status CADASTRADO
        And   clicar na aba “Contratos“
        Then  listar contratos com tipo Fechamento de Tarifas seja: DIARIO e Período - Fechamento de Pagamentos seja: DIARIO


    Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status - APROVADO], onde o Período - Fechamento de Tarifas seja: SEMANAL e Período - Fechamento de Pagamentos seja: SEMANAL
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com status APROVADO
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ com status APROVADO
        And   selecionar o Provedor com status APROVADO
        And   clicar na aba “Contratos“
        Then  listar contratos com tipo Fechamento de Tarifas seja: SEMANAL e Período - Fechamento de Pagamentos seja: SEMANAL


    Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status - AGUARDANDO APROVAÇÃO], onde o Período - Fechamento de Tarifas seja: MENSAL e Período - Fechamento de Pagamentos seja: MENSAL
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com status AGUARDANDO APROVAÇÃO
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ com status AGUARDANDO APROVAÇÃO
        And   selecionar o Provedor com status AGUARDANDO APROVAÇÃO
        And   clicar na aba “Contratos“
        Then  listar contratos com tipo Fechamento de Tarifas seja: MENSAL e Período - Fechamento de Pagamentos seja: MENSAL


    Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status - APROVADO], Ir na aba "Contratos", "clicar em "Carregar mais", e listar contratos com status "APROVADO" e "CADASTRADO"
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com status APROVADO
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ com status APROVADO
        And   selecionar o Provedor com status APROVADO
        And   clicar na aba “Contratos“
        And   clicar em “Carregar mais“
        Then  listar listar contratos com status “APROVADO“ e “CADASTRADO“

@focus
    Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status - CADASTRADO], Ir na aba "Contratos", "clicar em "Carregar mais", e listar contratos com status "CADASTRADO"
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com status CADASTRADO
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ com status CADASTRADO
        And   selecionar o Provedor com status CADASTRADO
        And   clicar na aba “Contratos“
        And   clicar em “Carregar mais“
        Then  listar listar contratos com status “CADASTRADO“


