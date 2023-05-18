Feature: Cadastrar Provedores de Serviços


  Scenario: Validar cadastro de um novo Provedores de Serviços
    Given que estou logado na tela de Provedores de Serviços
    When preencho todos os dados de um novo Provedores de Serviços
    Then uma mensagem de Provedores de Serviços cadastrado com sucesso é exibido

  Scenario: Na tela de cadastro de um novo Provedores de Serviços, clicar no botão cancelar
    Given que estou logado na tela de Provedores de Serviços
    When  clico no botao cancelar
    Then  a pagina é redirecionada para tela de pesquisa

  Scenario: Cadastrar um novo Provedores de Serviços com um CPNJ ja cadastrado
    Given que estou logado na tela de Provedores de Serviços
    When preencho o formulario com um CPNJ ja cadastrado
    Then uma mensagem de erro de duplicidade e exibido

@focus
  Scenario: Cadastrar um novo “Provedores de Serviços”, cadastrar um ”Endereço” Principal
    Given que estou logado na tela de Provedores de Serviços
    When Preencho todos os dados e cadastro um novo Provedor
    And  Acesso a aba de endereco
    And  Cadatro um novo endereco
    And  E clico em Aprovar
    Then uma mensagem de Provedores de Serviços cadastrado com sucesso é exibido


 Scenario: Cadastrar um novo “Provedores de Serviços”, cadastrar um ”Endereço” Cobrança
    Given que estou logado na tela de Provedores de Serviços
    When Preencho todos os dados e cadastro um novo Provedor
    And  Acesso a aba de endereco para cadastrar um novo endereço
    And  Cadatro um novo endereco com tipo cobrança
    And  E clico em Aprovar
    Then uma mensagem de Provedores de Serviços cadastrado com sucesso é exibido


 Scenario: Cadastrar um novo “Provedores de Serviços”, cadastrar um ”Endereço” Cobrança e Principal
    Given que estou logado na tela de Provedores de Serviços
    When Preencho todos os dados e cadastro um novo Provedor
    And  Acesso a aba de endereco para cadastrar um novo endereço Cobrança e Principal
    And  Cadatro um novo endereco com tipo do tipo Cobrança
    And  E clico em Aprovar com tipo Cobrança
    And  Cadatro um novo endereco com tipo do tipo Principal
    And  E clico em Aprovar com tipo Principal
    Then uma mensagem de Provedores de Serviços cadastrado com sucesso é exibido


  Scenario: Cadastrar um novo “Provedores de Serviços”, cadastrar um ”Endereço” e enviar para "ENVIAR PARA APROVAÇÃO“
    Given que estou logado na tela de Provedores de Serviços
    And Preencho todos os dados e cadastro um novo Provedor de Serviços
    And  Acesso a aba de endereco
    And  Cadatro um novo endereco
    And  E clico em Aprovar
    And  Uma mensagem de Provedores de Serviços cadastrado com sucesso é exibido
    When clico no menu opção
    Then Envio o Provedor criado para APROVAÇÃO


  Scenario: Cadastrar um novo “Provedores de Serviços”, cadastrar um ”Endereço”, enviar para "AGUARDANDO APROVAÇÃO“ e "APROVAR"
    Given que estou logado na tela de Provedores de Serviços
    And Preencho todos os dados e cadastro um novo Provedor de Serviços
    And  Acesso a aba de endereco
    And  Cadatro um novo endereco
    And  E clico em Aprovar
    And  Uma mensagem de Provedores de Serviços cadastrado com sucesso é exibido
    When clico no menu opção
    And Envio o Provedor criado para APROVAÇÃO
    And clico no menu opção para fazer um novo envio
    Then Envio para APROVAR


   Scenario:Cadastrar um novo “Provedores de Serviços”, enviar para “EXCLUIR“
    Given que estou logado na tela de Provedores de Serviços
    And Preencho todos os dados e cadastro um novo Provedor
    When clico no menu opção
    And  clico em EXCLUIR
    Then uma mensagem de Provedores de Serviços excluido com sucesso é exibido


   Scenario:Cadastrar um novo “Provedores de Serviços”, enviar para "CANCELAR"
    Given que estou logado na tela de Provedores de Serviços
    And Preencho todos os dados e cadastro um novo Provedor
    When clico no menu opção
    And  clico em CANCELAR
    Then uma mensagem de Provedores de Serviços cancelado com sucesso é exibido


  Scenario: Cadastrar um novo “Provedores de Serviços”, cadastrar um ”Endereço”, enviar para "AGUARDANDO APROVAÇÃO“ e "REJEITAR"
    Given que estou logado na tela de Provedores de Serviços
    And Preencho todos os dados e cadastro um novo Provedor de Serviços
    And  Acesso a aba de endereco
    And  Cadatro um novo endereco
    And  E clico em Aprovar
    And  Uma mensagem de Provedores de Serviços cadastrado com sucesso é exibido
    When clico no menu opção
    And Envio o Provedor criado para APROVAÇÃO
    And clico no menu opção para fazer um novo envio
    Then Envio para REJEITAR


  Scenario: Cadastrar um novo “Provedores de Serviços”, cadastrar um ”Endereço” e “AGUARDANDO APROVAÇÃO“ e “EXCLUIR“
   Given que estou logado na tela de Provedores de Serviços
    And Preencho todos os dados e cadastro um novo Provedor de Serviços
    And  Acesso a aba de endereco
    And  Cadatro um novo endereco
    And  E clico em Aprovar
    And  Uma mensagem de Provedores de Serviços cadastrado com sucesso é exibido
    When clico no menu opção
    And Envio o Provedor criado para APROVAÇÃO
    And clico no menu opção para fazer um novo envio
    Then Envio para EXCLUIR


  Scenario: Cadastrar um novo “Provedores de Serviços”, cadastrar um ”Endereço” e “AGUARDANDO APROVAÇÃO“ e "CANCELAR"
   Given que estou logado na tela de Provedores de Serviços
    And Preencho todos os dados e cadastro um novo Provedor de Serviços
    And  Acesso a aba de endereco
    And  Cadatro um novo endereco
    And  E clico em Aprovar
    And  Uma mensagem de Provedores de Serviços cadastrado com sucesso é exibido
    When clico no menu opção
    And Envio o Provedor criado para APROVAÇÃO
    And clico no menu opção para fazer um novo envio
    Then Envio para CANCELAR