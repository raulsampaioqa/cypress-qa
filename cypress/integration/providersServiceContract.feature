Feature: Cadastro/alteração/ficha de Contrato do Provedor de Serviço


    Scenario:(Cenario de sucesso)[Status - CADASTRADO] Cadastrar contrato para um Provedor de Serviço já existente, onde o Período - Fechamento de Tarifas seja: DIARIO e Período - Fechamento de Pagamentos seja: DIARIO
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com tipo Principal
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida
        And   selecionar o Provedor desejado
        And   clicar na aba “Contratos“
        And   clicar no botao “NOVO“
        And   preencher os campos de Cadastro
        And   selecionar o Período - Fechamento de Tarifas: DIARIO
        And   selecionar o Período - Fechamento de Pagamentos: DIARIO
        And   clicar no botao “PROXIMO“
        And   clicar no botao “FINALIZAR“
        Then  uma mensagem “Contrato cadastrado com sucesso“ é exibida


    Scenario:(Cenario de sucesso)[Status - CADASTRADO] Cadastrar contrato para um Provedor de Serviço já existente, onde o Período - Fechamento de Tarifas seja: SEMANAL e Período - Fechamento de Pagamentos seja: SEMANAL
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida
        And   selecionar o Provedor desejado
        And   clicar na aba “Contratos“
        And   clicar no botao “NOVO“
        And   preencher os campos de Cadastro
        And   selecionar o Período - Fechamento de Tarifas: SEMANAL
        And   selecionar o Período - Fechamento de Pagamentos: SEMANAL
        And   clicar no botao “PROXIMO“
        And   clicar no botao “FINALIZAR“
        Then  uma mensagem “Contrato cadastrado com sucesso“ é exibida


    Scenario:(Cenario de sucesso) [Status - CADASTRADO] Cadastrar contrato para um Provedor de Serviço já existente, onde o Período - Fechamento de Tarifas seja: MENSAL e Período - Fechamento de Pagamentos seja: MENSAL
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida
        And   selecionar o Provedor desejado
        And   clicar na aba “Contratos“
        And   clicar no botao “NOVO“
        And   preencher os campos de Cadastro
        And   selecionar o Período - Fechamento de Tarifas: MENSAL
        And   selecionar o Período - Fechamento de Pagamentos: MENSAL
        And   clicar no botao “PROXIMO“
        And   clicar no botao “FINALIZAR“
        Then  uma mensagem “Contrato cadastrado com sucesso“ é exibida


    Scenario:(Cenario de sucesso) [Status - APROVADO] Cadastrar contrato para um Provedor de Serviço já existente, onde o Período - Fechamento de Tarifas seja: DIARIO e Período - Fechamento de Pagamentos seja: DIARIO
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com status Aprovado
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ com status Aprovado
        And   selecionar o Provedor com status Aprovado
        And   clicar na aba “Contratos“
        And   clicar no botao “NOVO“
        And   preencher os campos de Cadastro
        And   selecionar o Período - Fechamento de Tarifas: DIARIO
        And   selecionar o Período - Fechamento de Pagamentos: DIARIO
        And   clicar no botao “PROXIMO“
        And   clicar no botao “FINALIZAR“
        Then  uma mensagem “Contrato cadastrado com sucesso“ é exibida


    Scenario:(Cenario de sucesso) [Status - AGUARDANDO APROVAÇÃO] Cadastrar contrato para um Provedor de Serviço já existente, onde o Período - Fechamento de Tarifas seja: MENSAL e Período - Fechamento de Pagamentos seja: MENSAL
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com status AGUARDANDO APROVAÇÃO
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ com status AGUARDANDO APROVAÇÃO
        And   selecionar o Provedor com status AGUARDANDO APROVAÇÃO
        And   clicar na aba “Contratos“
        And   clicar no botao “NOVO“
        And   preencher os campos de Cadastro
        And   selecionar o Período - Fechamento de Tarifas: MENSAL
        And   selecionar o Período - Fechamento de Pagamentos: MENSAL
        And   clicar no botao “PROXIMO“
        And   clicar no botao “FINALIZAR“
        Then  uma mensagem “Contrato cadastrado com sucesso“ é exibida

