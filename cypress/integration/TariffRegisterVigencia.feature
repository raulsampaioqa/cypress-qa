Feature: Tarrif  register vigencia

    Scenario: Cadastrar novo Vigência da Tarifa
        Given que estou na tela cadastrar Vigencia da tarifa
        When  informo osdados cadastrais
        And seleciono opcao cadastrar
        Then e apresentado mensagem que nova vigência da tarifa cadastrada 



    Scenario: Cadastrar nova tarifa com calculo do tipo valor
        Given que estou na tela de cadatrar novas tarifas
        When  informo os campos cadastrais  da tela de tarifas
        And seleciono opcao cadastrar da teka de tarifas
        Then e apresentado mensagem que nova tarifa foi cadastrada

