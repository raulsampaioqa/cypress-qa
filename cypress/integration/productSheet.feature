Feature: Product Sheet 


    Scenario: Exibir produto pagamento de contas 
        Given que estou na tela de cadatrar novos produtos
        When seleciono pesquisar produtos pagamento de contas 
        And seleciona o produto de pagamento de contas que desejo visualizar
        Then e exibido  ficha do produto de pagamento de contas selecionado

    Scenario: Exibir produto credito pessoal 
        Given que estou na tela de cadatrar novos produtos
        When seleciono pesquisar produtos credito pessoal
        And seleciona o produto credito pessoal que desejo visualizar
        Then e exibido  ficha do produto de credito pessoal selecionado