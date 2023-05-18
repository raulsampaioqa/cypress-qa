Feature: Approve Product


       Scenario: Aprovar cadastro do novo produto do tipo pagamento de contas
              Given que estou na tela de cadatrar novos produtos
              And seleciono a opcao pagamento de contas que desejo aprovar
              When  seleciono opcao aprovar  novo cadastro de produto
              Then e apresentado mensagem que novo produto foi alterado

       Scenario: Aprovar cadastro do novo produto do tipo credito pessoal
              Given que estou na tela de cadatrar novos produtos
              And seleciono a opcao credito pessoal que desejo aprovar
              When  seleciono opcao aprovar  novo cadastro de nproduto
              Then e apresentado mensagem que novo produto foi alterado