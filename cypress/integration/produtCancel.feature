
Feature: Cancel product

    Scenario: Cancelar cadastro do novo produto do tipo pagamento de contas
        Given que estou na tela de cadatrar novos produtos
        And seleciono a opcao credito pessoal
        When  informo os campos do novo produto do tipo credito pessoal
        Then   e apresentado mensagem que novo  produto  do tipo credito pessoal foi cadastrado


    Scenario: Cancelar cadastro do novo produto do tipo pcredito pessoal
        Given que estou na tela de cadatrar novos produtos
        And seleciono a opcao credito pessoal
        When  informo os campos do novo produto do tipo credito pessoal
        Then   e apresentado mensagem que novo  produto  do tipo credito pessoal foi cadastrado