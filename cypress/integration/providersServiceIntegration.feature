Feature: Cadastro de integração do Provedor de Serviço


    Scenario:(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - CADASTRADO] e criar uma Integração com o tipo de conta: Pagamentos de Contas
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com tipo Principal
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida
        And   selecionar o Provedor desejado
        And   clicar na aba “Integração“
        And   clicar no botão “Novo“
        And   cadastrar uma nova Integração com o tipo de conta: Pagamentos de Contas
        And   clicar no botão “Cadastrar“
        Then  uma mensagem de sucesso é exibida


    Scenario:(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - CADASTRADO] e criar uma Integração com o tipo de conta: Credito Pessoal

        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com tipo Principal
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida
        And   selecionar o Provedor desejado
        And   clicar na aba “Integração“
        And   clicar no botão “Novo“
        And   cadastrar uma nova Integração com o tipo de conta: Credito Pessoal
        And   clicar no botão “Cadastrar“
        Then  uma mensagem de sucesso é exibida

    Scenario:(Cenario de sucesso) [ZEMA] Pesquisar Provedor de Serviço com [Status - APROVADO] e criar uma Integração com o tipo de conta: Pagamentos de Contas
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com status: Aprovado
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ com status: Aprovado
        And   selecionar o Provedor desejado com status: Aprovado
        And   clicar na aba “Integração“
        And   clicar no botão “Novo“
        And   cadastrar uma nova Integração com o tipo de conta: Pagamentos de Contas
        And   clicar no botão “Cadastrar“
        Then  uma mensagem de sucesso é exibida


    Scenario:(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - AGUARDANDO APROVAÇÃO] e criar uma Integração com o tipo de conta: Pagamentos de Contas
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com status: AGUARDANDO APROVAÇÃO
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ com status: AGUARDANDO APROVAÇÃO
        And   selecionar o Provedor desejado com status: AGUARDANDO APROVAÇÃO
        And   clicar na aba “Integração“
        And   clicar no botão “Novo“
        And   cadastrar uma nova Integração com o tipo de conta: Pagamentos de Contas
        And   clicar no botão “Cadastrar“
        Then  uma mensagem de sucesso é exibida

    Scenario:(Cenario de ERRO) Pesquisar Provedor de Serviço com [Status - Cadastrado] ir na aba de Integração, preencher os dados e clicar no botão Cancelar
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com status: Cadastrado
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ com status: Cadastrado
        And   selecionar o Provedor desejado com status: Cadastrado
        And   clicar na aba “Integração“
        And   clicar no botão “Novo“
        And   preenher os campos do cadastro
        And   clicar no botão “Cancelar“
        Then  uma mensagem é exibida
