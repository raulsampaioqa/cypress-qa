Feature: Listagem de integração do Provedor de Serviço

    Scenario:(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - CADASTRADO] e listar Integração com o tipo de conta: Pagamentos de Contas
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com tipo Principal
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida
        And   selecionar o Provedor desejado
        And   clicar na aba “Integração“
        Then  Exibir a integração de “Pagamentos de Contas“

    Scenario:(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - CADASTRADO] e listar Integração com o tipo de conta: Credito Pessoal
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com tipo Principal
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida
        And   selecionar o Provedor desejado
        And   clicar na aba “Integração“
        And   clicar em “Carregar Mais“
        Then  Exibir a integração de “Credito Pessoal“

    Scenario:(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - APROVADO] e listar uma Integração com o tipo de conta: Pagamentos de Contas
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com o status - APROVADO
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ com o status - APROVADO
        And   selecionar o Provedor desejado com o status - APROVADO
        And   clicar na aba “Integração“
        Then  Exibir a integração de “Pagamentos de Contas“

    Scenario:(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - AGUARDANDO APROVAÇÃO] e listar uma Integração com o tipo de conta: Pagamentos de Contas
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com o status - AGUARDANDO APROVAÇÃO
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ com o status - AGUARDANDO APROVAÇÃO
        And   selecionar o Provedor desejado com o status - AGUARDANDO APROVAÇÃO
        And   clicar na aba “Integração“
        Then  Exibir a integração de “Pagamentos de Contas“