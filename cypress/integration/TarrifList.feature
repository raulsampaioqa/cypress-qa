Feature: Tarrif list

   Scenario: Listar tarifas com status ativo
        Given que estou na tela cadastrar Vigencia da tarifa
        When  desejo pesquisar tarifas do tipo ativo
        And  seleciono aopcao plicar
        Then e listado tarifas do tipo ativo 

        
   Scenario: Listar tarifas com status Inativo
        Given que estou na tela cadastrar Vigencia da tarifa
        When  desejo pesquisar tarifas do tipo Inativo
        And  seleciono opcao aplicar
        Then e listado tarifas do tipo inativo 

        

