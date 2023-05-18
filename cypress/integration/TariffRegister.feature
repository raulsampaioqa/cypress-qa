Feature: Tariff Register

    Scenario: Cadastrar nova tarifa com calculo do tipo percentual e operacao credito
        Given que estou na tela de cadatrar novas tarifas
        When  informo os campos cadastrais da tela de cadastro de tarifas
        And seleciono opcao cadastrar da tela de cadastro de tarifas
        Then e apresentado mensagem que nova tarifa foi cadastrada

    Scenario: Cadastrar nova tarifa com calculo do tipo percentual e operacao debito
        Given que estou na tela de cadatrar novas tarifas
        When  informo os campos do tipo percetual tarifas operacao debito
        And seleciono opcao cadastrar da tela de cadastro de tarifas
        Then e apresentado mensagem que nova tarifa foi cadastrada

    Scenario: Cadastrar nova tarifa com calculo do tipo valor e operacao credito
        Given que estou na tela de cadatrar novas tarifas
        When  informo os campos do tipo valor e operacao credito
        And seleciono opcao cadastrar da tela de cadastro de tarifas
        Then e apresentado mensagem que nova tarifa foi cadastrada

    Scenario: Cadastrar nova tarifa com calculo do tipo valor e operacao debito
        Given que estou na tela de cadatrar novas tarifas
        When  informo os campos cadastrais  do tipo valor e operacao debito
        And seleciono opcao cadastrar da tela de cadastro de tarifas
        Then e apresentado mensagem que nova tarifa foi cadastrada



