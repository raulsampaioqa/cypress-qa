Feature: Product List

    Scenario: Listar produtos pagamentos de contas com situacao cadastrado
        Given que estou na tela de cadatrar novos produtos
        When  informo situacao e tipo de produto de pagamento de contas  que quero listar
        And seleciono opcao aplicar
        Then e apresentado listagem dos pagamentos de contas com situacao cadastrado

    Scenario: Listar produtos pagamentos de contas com situacao aprovado
        Given que estou na tela de cadatrar novos produtos
        When  informo situacao e tipo de produto de pagamento de contas aprovados que quero listar
        And seleciono opcao aplicar
        Then e apresentado listagem dos pagamentos de contas com situacao aprovado

    Scenario: Listar produtos pagamentos de contas com situacao cancelado
        Given que estou na tela de cadatrar novos produtos
        When  informo situacao e tipo de produto de pagamento de contas cancelados que quero listar
        And seleciono opcao aplicar
        Then e apresentado listagem dos pagamentos de contas com situacao cancelado

    Scenario: Listar produtos credito pessoal com situacao cadastrado
        Given que estou na tela de cadatrar novos produtos
        When  informo situacao e tipo de produto credito pessoal cadastrados que quero listar
        And seleciono opcao aplicar
        Then e apresentado listagem dos credito pessoal com situacao cadastrado

    Scenario: Listar produtos credito pessoal com situacao aprovado
        Given que estou na tela de cadatrar novos produtos
        When  informo situacao e tipo de produto credito pessoal aprovados que quero listar
        And seleciono opcao aplicar
        Then e apresentado listagem dos credito pessoal com situacao aprovados

    Scenario: Listar produtos credito pessoal com situacao cancelado
        Given que estou na tela de cadatrar novos produtos
        When  informo situacao e tipo de produto credito pessoal cancelados que quero listar
        And seleciono opcao aplicar
        Then e apresentado listagem dos credito pessoal com situacao cancelados

    Scenario: Listar produtos todos os produtos
        Given que estou na tela de cadatrar novos produtos
        When seleciono pesquisar todos os produtos
        Then e exibido listagem de todos os produtos
