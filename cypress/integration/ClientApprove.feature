   Scenario: Validar envio de cliente para aprovacao  sem endereco principal cadastrado
      Given que estou na tela de novos clientes
      When informar o cliente que desejo  aprovar cadastro
      And seleciono  opcao enviar para aprovacao
      Then e apresentado  que endereco principal nao precisa ser cadastrado

   Scenario: Validar envio de cliente para aprovacao com endereco principal cadastrado
      Given que estou na tela de novos clientes
      When informar o cliente que desejo  aprovar cadastro
      And seleciono  opcao enviar para aprovacao
      Then e apresentado  mensagem que cliente foi enviado para aprovacao 
    
        Scenario: Validar envio de cliente para aprovacao com endereco principal cadastrado
      Given que estou na tela de novos clientes
      When informar o cliente que desejo  aprovar cadastro
      And seleciono  opcao enviar para aprovacao
      Then e apresentado  mensagem que cliente foi enviado para aprovacao 

