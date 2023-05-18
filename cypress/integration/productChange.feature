 Feature: Product change
 
 Scenario: Alterar produto  do tipo pagamentos de contas
        Given que estou na tela de cadatrar novos produtos
        And seleciono a opcao pagamento de contas que desejo alterar
        When altero os campos do novo produto do tipo pagamento de contas
        Then e apresentado mensagem que novo  produto  do tipo pagamento foi alterado

    Scenario: Alterar produto  do tipo credito pessoal
        Given que estou na tela de cadatrar novos produtos
        And seleciono a opcao credito pessoal que desejo alterar
        When altero os campos do novo produto  do tipo credito pessoal
        Then e apresentado mensagem que novo  produto  do tipo credito foi alterado