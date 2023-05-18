Feature: Alteração de integração do Provedor de Serviço


    Scenario:(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - CADASTRADO] e excluir a integração do Provedor de Serviços
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com tipo Principal
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida
        And   selecionar o Provedor desejado
        And   clicar na aba “Integração“
        And   exibir a integração de “Pagamentos de Contas“
        And   clicar na imagem de deletar
        And   clicar no botão SIM para confirmar
        Then  uma mensagem Sucesso Integração excluída com sucesso exibida.

    Scenario:(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - APROVADO] e excluir a integração do Provedor de Serviços
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com Status - APROVADO
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços contendo o CNPJ que realizei a busca
        And   selecionar o Provedor desejado com Status - APROVADO
        And   clicar na aba “Integração“
        And   exibir a integração de “Pagamentos de Contas“ com Status - APROVADO
        And   clicar na imagem de deletar para deletar a integração
        And   clicar no botão SIM para confirmar a exclusão
        Then  uma mensagem Sucesso Integração excluída com sucesso exibida.


    Scenario:(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - AGUARDANDO APROVAÇÃO] e excluir a integração do Provedor de Serviços
        Given que estou logado na tela de Pesquisa de Provedores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“ com Status - AGUARDANDO APROVAÇÃO
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços contendo o CNPJ que realizei a busca
        And   selecionar o Provedor desejado com Status - AGUARDANDO APROVAÇÃO
        And   clicar na aba “Integração“
        And   exibir a integração de “Pagamentos de Contas“ com Status - AGUARDANDO APROVAÇÃO
        And   clicar na imagem de deletar para deletar a integração
        And   clicar no botão SIM para confirmar a exclusão
        Then  uma mensagem Sucesso Integração excluída com sucesso exibida.