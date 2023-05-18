Feature: Alterar Operadores


  Scenario: Alterar dados cadastrais de um Operador
    Given que estou logado na tela de Pesquisa de Operadores
    When  digito o Operador e clico em Pesquisar
    And   seleciono o operador exibido e clico no botao Alterar
    And   altero os dados do Operador e clico em Salvar
    Then  uma mensagem de sucesso é exibida


  Scenario: Pesquisar um Operador com status NORMAL e alterar para BLOQUEADO
    Given que estou logado na tela de Pesquisa de Operadores
    When  digito o Operador com status NORMAL e clico em Pesquisar
    And   seleciono o operador exibido e seleciono o botao BLOQUEAR
    Then  uma mensagem de alteração de sucesso é exibida


  Scenario: Pesquisar um Operador com status BLOQUEADO e alterar para APROVAR
    Given que estou logado na tela de Pesquisa de Operadores
    When  digito o Operador com status BLOQUEADO e clico em Pesquisar
    And   seleciono o operador exibido e seleciono o botao APROVADO
    Then  uma mensagem de alteração de sucesso é exibida

  Scenario: Pesquisar um Operador com status AGUARDANDO ATIVAÇÃO e EXCLUIR
    Given que estou logado na tela de Pesquisa de Operadores
    When  digito o Operador com status AGUARDANDO ATIVAÇÃO e clico em Pesquisar
    And   seleciono o operador exibido e seleciono o botao EXCLUIR
    Then  uma mensagem excluida com sucesso é exibida

