Feature: Delete Tariff

    Scenario: Delete tarifa com calculo do tipo percentual
        Given que estou na tela de cadatrar novas tarifas
        When seleciono opcao deletar exclusão da vigência
        And confirmo delecao da tarifa
        Then e apresentado mensagem que exclusão realizada 

