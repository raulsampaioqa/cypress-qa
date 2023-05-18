   Feature: Bloqueio de cadastro de cliente 
   
   Scenario: Validar bloqueio de cadastro de cliente 
      Given que estou na tela de novos clientes
      When informar seleciono opcao bloqqueio cadastro de cliente 
      And seleciono  opcao enviar para aprovacao
      Then e apresentado  que endereco principal nao precisa ser cadastrado