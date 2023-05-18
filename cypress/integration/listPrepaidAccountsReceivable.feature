Feature: Lista de Contas a Receber Pré-Pago

  Scenario:(CENÁRIO DE ERRO) 1 - Lista de Contas a Receber Pré-Pago selecinando uma data onde a data final tem que ser superior ou igual à data inicial
    Given  que estou na tela de Contas a Receber Pré-Pago
    When   seleciono o filtro
    And   escolher uma data onde a data final tem que ser superior ou igual à data inicial
    And   clicar no botão APLICAR
    Then  uma mensgaem: A data final não pode ser anterior à data inicial

  Scenario: Cenário 2 - Lista de Contas a Receber Pré-Pago sem selecionar nenhum filtro
    Given que estou na tela de Contas a Receber Pré-Pago
    When  clico no botao Pesquisar sem selecionar nenhum filtro
    Then  uma lista é exibida

  Scenario: Cenário 3 - Lista de Contas a Receber Pré-Pago digitando Cód. Doc
    Given que estou na tela de Contas a Receber Pré-Pago
    When  digito Cód. Doc
    And   clico no botao Pesquisar
    Then  uma lista é exibida com o Cód. Doc é exibida

  Scenario: Cenário 4 - Lista de Contas a Receber Pré-Pago selecinando a DATA DE LANÇAMENTO
    Given que estou na tela de Contas a Receber Pré-Pago
    When  seleciono o filtro e no campo DATA DE, selecionar LANÇAMENTO
    And   clicar no botão APLICAR
    Then  uma lista é exibida com tipo de LANÇAMENTO

  Scenario: Cenário 5 - Lista de Contas a Receber Pré-Pago selecinando a DATA DE PAGAMENTO
    Given que estou na tela de Contas a Receber Pré-Pago
    When  seleciono o filtro
    And   no campo DATA DE, selecionar PAGAMENTO
    And   clicar no botão APLICAR
    Then  uma lista é exibida com tipo de PAGAMENTO

  Scenario:  Cenário 6 -Lista de Contas a Receber Pré-Pago selecinando a DATA DE BAIXA
    Given que estou na tela de Contas a Receber Pré-Pago
    When  seleciono o filtro
    And   no campo DATA DE, selecionar BAIXA
    And   clicar no botão APLICAR
    Then  uma lista é exibida com tipo de BAIXA

  Scenario:  Cenário 7 -Lista de Contas a Receber Pré-Pago selecinando a DATA DE VENCIMENTO
    Given que estou na tela de Contas a Receber Pré-Pago
    When  seleciono o filtro
    And   no campo DATA DE, selecionar VENCIMENTO
    And   clicar no botão APLICAR
    Then  uma lista é exibida com tipo de VENCIMENTO

  Scenario:  Cenário 8 -Lista de Contas a Receber Pré-Pago selecinando uma data entre periodos
    Given que estou na tela de Contas a Receber Pré-Pago
    When  seleciono o filtro
    And   escolher uma data entre periodos diferentes
    And   clicar no botão APLICAR
    Then  uma lista é exibida com sucesso

  Scenario:  Cenário 9 -Lista de Contas a Receber Pré-Pago selecinando o campo situação ABERTO
    Given que estou na tela de Contas a Receber Pré-Pago
    When  seleciono o filtro
    And   selecionar campo situação ABERTO
    And   clicar no botão APLICAR
    Then  uma lista é exibida com a situação ABERTO

  Scenario:  Cenário 10 -Lista de Contas a Receber Pré-Pago selecinando a situação CANCELADO
    Given que estou na tela de Contas a Receber Pré-Pago
    When  seleciono o filtro
    And   selecionar campo situação CANCELADO
    And   clicar no botão APLICAR
    Then  uma lista é exibida com a situação CANCELADO

  Scenario: Cenário 11 - Lista de Contas a Receber Pré-Pago selecinando a situação PAGO
    Given que estou na tela de Contas a Receber Pré-Pago
    When  seleciono o filtro
    And   selecionar campo situação PAGO
    And   clicar no botão APLICAR
    Then  uma lista é exibida com a situação PAGO

  Scenario: Cenário 12 -Lista de Contas a Receber Pré-Pago selecinando um cliente desejado
    Given que estou na tela de Contas a Receber Pré-Pago
    When  seleciono o filtro
    And   selecionar um cliente
    And   clicar no botão APLICAR
    Then  uma lista é exibido o cliente desejado

  Scenario: Cenário 13 - Lista de Contas a Receber Pré-Pago selecinando o TIPO CLIENTE - PAGAMENTO DE CONTAS
    Given que estou na tela de Contas a Receber Pré-Pago
    When  seleciono o filtro
    And   selecionar o TIPO CLIENTE - PAGAMENTO DE CONTAS
    And   clicar no botão APLICAR
    Then  uma lista é do TIPO CLIENTE - PAGAMENTO DE CONTAS é exibida

  Scenario: Cenário 14 - Lista de Contas a Receber Pré-Pago selecinando o TIPO CLIENTE - TARIFA DE PAGAMENTO DE CONTAS
    Given que estou na tela de Contas a Receber Pré-Pago
    When  seleciono o filtro
    And   selecionar o TIPO CLIENTE - TARIFA DE PAGAMENTO DE CONTAS
    And   clicar no botão APLICAR
    Then  uma lista é do TIPO CLIENTE - TARIFA DE PAGAMENTO DE CONTAS

  Scenario: Cenário 15 -Lista de Contas a Receber Pré-Pago selecinando o TIPO CLIENTE - PRÉ PAGO
    Given que estou na tela de Contas a Receber Pré-Pago
    When  seleciono o filtro
    And   selecionar o TIPO CLIENTE - PRÉ PAGO
    And   clicar no botão APLICAR
    Then  uma lista é do TIPO CLIENTE - PRÉ PAGO