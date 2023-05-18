Feature: Cancelar Product


       Scenario: Cancelar cadastro do novo produto do tipo pagamento de contas
              Given que estou na tela de cadatrar novos produtos
              And seleciono a opcao pagamento de contas que desejo cancelar
              When  seleciono opcao cancelar novo cadastro de produto
              Then apresentado mensagem que novo produto foi cancelado

       Scenario: Cancelar cadastro do novo produto do tipo credito pessoal
              Given que estou na tela de cadatrar novos produtos
              And seleciono a opcao credito pessoal que desejo cancelar
              When  seleciono opcao cancelar  novo cadastro de nproduto
              Then apresentado mensagem que novo produto foi cancelado
