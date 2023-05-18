Feature: Listar ficha de Contrato do Provedor de Serviço

    Scenario:(Cenario de sucesso) Listar contratos de Cliente com [Status - CADASTRADO]
        Given que estou logado na tela de Pesquisa de Cliente
        When  realizo uma busca pelo campo “CNPJ“ com status CADASTRADO
        And   clico em Aplicar
        And   selecionar o Provedor atraves do CNPJ
        And   clicar na aba “Contratos“
        And   listar contratos com status CADASTRADO e selecionar contrato
        Then  contrato é exibido


    Scenario:(Cenario de sucesso) Listar contratos de Cliente com [Status - AGUARDANDO APROVAÇÃO]
        Given que estou logado na tela de Pesquisa de Provedores
        When  realizo uma busca pelo campo “CNPJ“ com status AGUARDANDO APROVAÇÃO
        And   clico em Aplicar
        And   selecionar o Provedor com status AGUARDANDO APROVAÇÃO
        And   clicar na aba “Contratos“
        Then  listar contratos com status APROVADO e selecionar contrato
        Then  contrato é exibido


    Scenario:(Cenario de sucesso) Listar contratos de Cliente com [Status - APROVADO], Ir na aba "Contratos", "clicar em "Carregar mais", e listar contratos
        Given que estou logado na tela de Pesquisa de Provedores
        When  realizo uma busca pelo campo “CNPJ“ com status APROVADO
        And   clico em Aplicar
        And   selecionar o Provedor com status APROVADO
        And   clicar na aba “Contratos“
        And   clicar em “Carregar mais“
        Then  listar listar contratos com status “APROVADO“,“CADASTRADO“,“AGUARDANDO APROVAÇÃO“
