Feature: Fluxo de alteração de senha de operador logado

    Scenario:(CENARIO DE SUCESSO) Realizar fluxo de alteração de senha de operador logado com tipo de força de senha MUITO FORTE e FORTE
        Given que estou logado na tela de Pesquisa de Operadores
        When  clico no botão de configuração de operador logado
        And   clico em senha
        And   digito a senha atual no campo SENHA ATUAL
        And   digito uma nova senha no campo NOVA SENHA
        And   digito a confirmação de senha no campo CONFIRMAR NOVA SENHA
        And   valido operador campo FORÇA DE SENHA
        And   clico no botao SALVAR
        Then  a senha é alterada com sucesso

    Scenario:(CENARIO DE ERRO) Realizar fluxo de alteração de senha de operador logado com tipo de força de senha MUITO FRACA
        Given que estou logado na tela de Pesquisa de Operadores
        When  clico no botão de configuração de operador logado
        And   clico em senha
        And   digito a senha atual no campo SENHA ATUAL
        And   digito uma nova senha no campo NOVA SENHA com tipo de força de senha MUITO FRACA
        And   digito a confirmação de senha no campo CONFIRMAR NOVA SENHA com tipo de força de senha MUITO FRACA
        And   valido operador campo de força de senha MUITO FRACA
        And   clico no botao SALVAR
        Then  a senha não é alterada

    Scenario:(CENARIO DE ERRO) Realizar fluxo de alteração de senha de operador logado e digitar a NOVA SENHA diferente da CONFIRMAR NOVA SENHA
        Given que estou logado na tela de Pesquisa de Operadores
        When  clico no botão de configuração de operador logado
        And   clico em senha
        And   digito a senha atual no campo SENHA ATUAL
        And   digito uma nova senha no campo NOVA SENHA
        And   digito no campo CONFIRMAR NOVA SENHA uma senha DIFERENTE da NOVA SENHA
        And   clico no botao SALVAR
        Then  uma mensagem as senhas não correspondem é exibida

    Scenario:(CENARIO DE ERRO) Realizar fluxo de alteração de senha de operador logado e digitar a SENHA ATUAL errada
        Given que estou logado na tela de Pesquisa de Operadores
        When  clico no botão de configuração de operador logado
        And   clico em senha
        And   digito a senha atual no campo SENHA ATUAL ERRADA
        And   digito uma nova senha no campo NOVA SENHA
        And   digito a confirmação de senha no campo CONFIRMAR NOVA SENHA
        And   valido operador campo FORÇA DE SENHA
        And   clico no botao SALVAR
        Then  a mensagem Credenciais não alteradas é exibida




