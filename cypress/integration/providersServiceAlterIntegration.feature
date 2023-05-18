Feature: Alteração de integração do Provedor de Serviço


        Scenario:(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - CADASTRADO] e alterar a integração do Provedor de Serviços
                Given que estou logado na tela de Pesquisa de Provedores
                And   clico no botao do filtro
                When  realizo uma busca pelo campo “CNPJ“ com tipo Principal
                And   clico em Aplicar
                And   uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida
                And   selecionar o Provedor desejado
                And   clicar na aba “Integração“
                And   exibir a integração de “Pagamentos de Contas“
                And   clicar em Editar
                And   alterar integração do Provedor de Serviços
                And   clicar no botao SALVAR
                Then  uma mensagem de Sucesso é exibida.

        Scenario:(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - APROVADO] e listar uma Integração com o tipo de conta: Pagamentos de Contas
                Given que estou logado na tela de Pesquisa de Provedores
                And   clico no botao do filtro
                When  realizo uma busca pelo campo “CNPJ“ com Status - APROVADO
                And   clico em Aplicar
                And   uma lista de Provedores de Serviços contendo o CNPJ que realizei a busca
                And   selecionar o Provedor desejado com Status - APROVADO
                And   clicar na aba “Integração“
                And   exibir a integração de “Pagamentos de Contas“ com Status - APROVADO
                And   clicar em Editar
                And   alterar integração do Provedor de Serviços com Status - APROVADO
                And   clicar no botao SALVAR
                Then  uma mensagem de Sucesso dizendo que o Provedor foi alterado, é exibida.


        Scenario:(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - AGUARDANDO APROVAÇÃO] e listar uma Integração com o tipo de conta: Pagamentos de Contas
                Given que estou logado na tela de Pesquisa de Provedores
                And   clico no botao do filtro
                When  realizo uma busca pelo campo “CNPJ“ com Status - AGUARDANDO APROVAÇÃO
                And   clico em Aplicar
                And   uma lista de Provedores de Serviços contendo o CNPJ que realizei a busca
                And   selecionar o Provedor desejado com Status - AGUARDANDO APROVAÇÃO
                And   clicar na aba “Integração“
                And   exibir a integração de “Pagamentos de Contas“ com Status - AGUARDANDO APROVAÇÃO
                And   clicar em Editar
                And   alterar integração do Provedor de Serviços com Status - AGUARDANDO APROVAÇÃO
                And   clicar no botao SALVAR
                Then  uma mensagem de Sucesso dizendo que o Provedor foi alterado, é exibida.