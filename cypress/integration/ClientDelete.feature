    Scenario: Validar  exclusao do cadastro de um  cliente
        Given que estou na tela de novos clientes
        When informar o cliente que desejo  excluir o cadastro
        And seleciono  opcao excluir na tela de cadastro
        And e apresentado  mensagem para confirmar exclusao
        Then e apresentado mensagem informado que cliente foi excluido
