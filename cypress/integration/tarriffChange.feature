Feature: Tarriff Change


   Scenario: Alterar tarifas com status ativo
        Given que estou na tela de cadatrar novas tarifas
        When altero as informacoes da tarifa com status ativo
        And seleciona opcao salvar na tela de cadastro de tarifas 
        Then e apresentadoa mensagem que tarifa  foi alterada

        
   Scenario: Alterar tarifas com status Inativo
        Given que estou na tela de cadatrar novas tarifas
        When altero as informacoes da tarifa com status inativo 
        And seleciona opcao salvar na tela de cadastro de tarifas 
        Then e apresentadoa mensagem que tarifa  foi alterada

        