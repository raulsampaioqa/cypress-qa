Feature: Cadastro/alteração/exclusão de endereço do Provedor de Serviço


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


   Scenario: Listar Provedores de Serviços filtrado por o campo “CNPJ“ e visualizar endereco Principal e alterar o Endereço Principal
      Given que estou logado na tela de Pesquisa de Provedores
      And   clico no botao do filtro
      When  realizo uma busca pelo campo “CNPJ“ com tipo Principal
      And   clico em Aplicar
      And   uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida
      And   seleciono um Provedor com status “CNPJ“ e com tipo Principal
      And   visualizar endereco com o tipo Principal
      And   clicar em alterar Endereço
      And   Altera o Endereço
      Then  E clica em salvar


   Scenario: Listar Provedores de Serviços filtrado por o campo “CNPJ“, e alterar o Endereço Cobrança
      Given que estou logado na tela de Pesquisa de Provedores
      And   clico no botao do filtro
      When  realizo uma busca pelo campo “CNPJ“ com tipo de Cobrança
      And   clico em Aplicar
      And   uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida
      And   seleciono um Provedor com status “CNPJ“ e com tipo de Cobrança
      And   visualizar endereco com o tipo Cobrança
      And   clicar em alterar Endereço
      And   Altera o Endereço tipo Cobrança
      Then  E clica em salvar para alterar o endereco


   Scenario: Listar Provedores de Serviços filtrado por o campo “CNPJ“, clicar em "Carregar Mais" e alterar endereço Principal
      Given que estou logado na tela de Pesquisa de Provedores
      And   clico no botao do filtro
      When  realizo uma busca pelo campo “CNPJ“
      And   clico em Aplicar
      And   uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida
      And   seleciono um Provedor com status “CNPJ“
      And   visualizar endereco
      And   clicar em “Carregar Mais“
      And   clicar em alterar Endereço Principal
      And   Altera o Endereço tipo Principal
      Then  E clica em salvar para alterar o endereco Principal


   Scenario: Listar Provedores de Serviços filtrado por o campo “CNPJ“, clicar em "Carregar Mais" e alterar endereço Cobrança
      Given que estou logado na tela de Pesquisa de Provedores
      And   clico no botao do filtro
      When  realizo uma busca pelo campo “CNPJ“
      And   clico em Aplicar
      And   uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida
      And   seleciono um Provedor com status “CNPJ“ com tipo Cobrança
      And   visualizar endereco do tipo Cobrança
      And   clicar em “Carregar Mais“
      And   clicar em alterar Endereço Cobrança
      And   Altera o Endereço tipo Cobrança do Provedor
      Then  E clica em salvar para alterar o endereco Cobrança


Scenario: Listar Provedores de Serviços filtrado por o campo “CNPJ“ e visualizar endereco Principal e excluir
      Given que estou logado na tela de Pesquisa de Provedores
      And   clico no botao do filtro
      When  realizo uma busca pelo campo “CNPJ“ com tipo Principal
      And   clico em Aplicar
      And   uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida
      And   seleciono um Provedor com status “CNPJ“ e com tipo Principal
      And   visualizo endereco com o tipo Principal
      And   clico no botão Exlcuir “Endereco Principal“
      Then  uma mensagem “ndereço excluído com sucesso“ é exibido


Scenario: Listar Provedores de Serviços filtrado por o campo “CNPJ“ e visualizar endereco Cobrança e excluir
      Given que estou logado na tela de Pesquisa de Provedores
      And   clico no botao do filtro
      When  realizo uma busca pelo campo “CNPJ“ com tipo Cobrança
      And   clico em Aplicar
      And   uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida
      And   seleciono um Provedor com status “CNPJ“ e com tipo Cobrança
      And   visualizo endereco com o tipo Cobrança
      And   clico no botão Exlcuir “Endereco Cobrança
      Then  uma mensagem “ndereço excluído com sucesso“ é exibido



   Scenario: Listar Provedores de Serviços filtrado por o campo “CNPJ“, clicar em "Carregar Mais" e Excluir endereço Cobrança
      Given que estou logado na tela de Pesquisa de Provedores
      And   clico no botao do filtro
      When  realizo uma busca pelo campo “CNPJ“
      And   clico em Aplicar
      And   uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida
      And   seleciono um Provedor com status “CNPJ“ com tipo Cobrança
      And   visualizar endereco do tipo Cobrança
      And   clicar em “Carregar Mais“
      And   clicar em Excluir Endereço Cobrança
      Then  E clica em salvar para Excluir o endereco Cobrança


   Scenario: Listar Provedores de Serviços filtrado por o campo “CNPJ“, clicar em "Carregar Mais" e Excluir endereço Principal
      Given que estou logado na tela de Pesquisa de Provedores
      And   clico no botao do filtro
      When  realizo uma busca pelo campo “CNPJ“
      And   clico em Aplicar
      And   uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida
      And   seleciono um Provedor com status “CNPJ“ com tipo Principal
      And   visualizar endereco do tipo Principal
      And   clicar em “Carregar Mais“
      And   clicar em Excluir Endereço Principal
      Then  E clica em salvar para Excluir o endereco Principal
