
Feature: Alterar Provedores de Serviços


    Scenario: Pesquisar Provedores de Serviços com filtro “Situação“ igual “CADASTRADO“, cadastro um novo endereço e enviar para “ENVIAR PARA APROVAÇÃO“
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  seleciono o filtro “Situação“ igual “CADASTRADO“
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a situação “CADASTRADO“ é exibida
        And   seleciono um Provedor com status “CADASTRADO“
        And   cadastro um endereço
        And   clico no menu de opções
        Then  Envio para “ENVIAR PARA APROVAÇÃO“

    Scenario: Pesquisar Provedores de Serviços com filtro “Situação“ igual “CADASTRADO“ e enviar para “EXCLUIR“
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  seleciono o filtro “Situação“ igual “CADASTRADO“
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a situação “CADASTRADO“ é exibida
        And   seleciono um Provedor com status “CADASTRADO“
        And   clico no menu de opções
        Then  Envio para “EXCLUIR“

    Scenario: Pesquisar Provedores de Serviços com filtro “Situação“ igual “CADASTRADO“ e enviar para “CANCELAR“
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  seleciono o filtro “Situação“ igual “CADASTRADO“
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a situação “CADASTRADO“ é exibida
        And   seleciono um Provedor com status “CADASTRADO“
        And   clico no menu de opções
        Then  Envio para “CANCELAR“

    Scenario: Pesquisar Provedores de Serviços com filtro “Situação“ igual “CADASTRADO“ e alterar dados cadastrais
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  seleciono o filtro “Situação“ igual “CADASTRADO“
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a situação “CADASTRADO“ é exibida
        And   seleciono um Provedor com status “CADASTRADO“
        And   clico no botao Alterar
        Then  Provedor é alterado

    Scenario: Pesquisar Provedores de Serviços com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e enviar para “EXCLUIR“
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a situação “AGUARDANDO APROVAÇÃO“ é exibida
        And   seleciono um Provedor com status “AGUARDANDO APROVAÇÃO“
        And   clico no menu de opções
        Then  Envio para “EXCLUIR“


    Scenario: Pesquisar Provedores de Serviços com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e enviar para “APROVAR“
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a situação “AGUARDANDO APROVAÇÃO“ é exibida
        And   seleciono um Provedor com status “AGUARDANDO APROVAÇÃO“
        And   clico no menu de opções
        Then  Envio para “APROVAR“


    Scenario: Pesquisar Provedores de Serviços com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e enviar para “REJEITAR“
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a situação “AGUARDANDO APROVAÇÃO“ é exibida
        And   seleciono um Provedor com status “AGUARDANDO APROVAÇÃO“
        And   clico no menu de opções
        Then  Envio para “REJEITAR“

    Scenario: Pesquisar Provedores de Serviços com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e enviar para “CANCELAR“
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a situação “AGUARDANDO APROVAÇÃO“ é exibida
        And   seleciono um Provedor com status “AGUARDANDO APROVAÇÃO“
        And   clico no menu de opções
        Then  Envio para “CANCELAR“

    Scenario: Pesquisar Provedores de Serviços com filtro “Situação“ igual “APROVADO“ e enviar para “BLOQUEAR“
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  seleciono o filtro “Situação“ igual “APROVADO“
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a situação “APROVADO“ é exibida
        And   seleciono um Provedor com status “APROVADO“
        And   clico no menu de opções
        Then  Envio para “BLOQUEAR“

    Scenario: Pesquisar Provedores de Serviços com filtro “Situação“ igual “APROVADO“ e enviar para “EXCLUIR“
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  seleciono o filtro “Situação“ igual “APROVADO“
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a situação “APROVADO“ é exibida
        And   seleciono um Provedor com status “APROVADO“
        And   clico no menu de opções
        Then  Envio para “EXCLUIR“


    Scenario:  Pesquisar Provedores de Serviços com filtro “Situação“ igual “APROVADO“ e enviar para “CANCELAR“
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  seleciono o filtro “Situação“ igual “APROVADO“
        And   clico em Aplicar
        And   uma lista de Provedores de Serviços com a situação “APROVADO“ é exibida
        And   seleciono um Provedor com status “APROVADO“
        And   clico no menu de opções
        Then  Envio para “CANCELAR“


    Scenario: Pesquisar Provedores de Serviços filtrado por o campo “RAZÃO SOCIAL“ e alterar dados cadastrais.
        Given que estou logado na tela de Pesquisa de Operadores
        And clico no botao do filtro
        When realizo uma busca pelo campo “RAZÃO SOCIAL“
        And  clico em Aplicar
        And  uma lista de Provedores de Serviços com a “RAZÃO SOCIAL“ solicitada é exibida
        And   seleciono um Provedor com status “RAZÃO SOCIAL“
        And   clico no botao Alterar
        Then  Nome do Provedor é alterado


    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “CADASTRADO“ e alterar para “CANCELAR“
        Given que estou logado na tela de Pesquisa de Operadores
        And clico no botao do filtro
        When realizo uma busca pelo campo “RAZÃO SOCIAL“
        And seleciono o filtro “Situação“ igual “CADASTRADO“
        And  clico em Aplicar
        And  Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida
        And   seleciono um Provedor com status “RAZÃO SOCIAL“ e “CADASTRADO“ para enviar para cancelar
        And   cadastro um novo endereco
        And   clico no menu de opções
        Then  Envio para “CANCELAR“


    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “CADASTRADO“ e alterar para “EXCLUIR“
        Given que estou logado na tela de Pesquisa de Operadores
        And clico no botao do filtro
        When realizo uma busca pelo campo “RAZÃO SOCIAL“
        And seleciono o filtro “Situação“ igual “CADASTRADO“
        And  clico em Aplicar
        And  Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida
        And   seleciono um Provedor com status “RAZÃO SOCIAL“ e “CADASTRADO“ para enviar para Excluir
        And   cadastro um endereco
        And   clico no menu de opções
        Then  Envio para “EXCLUIR“


    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “CADASTRADO“ e alterar para “AGUARDANDO APROVAÇÃO“
        Given que estou logado na tela de Pesquisa de Operadores
        And clico no botao do filtro
        When realizo uma busca pelo campo “RAZÃO SOCIAL“
        And seleciono o filtro “Situação“ igual “CADASTRADO“
        And  clico em Aplicar
        And  Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida
        And   seleciono um Provedor com status “RAZÃO SOCIAL“ e “CADASTRADO“ para Aguardando pra Aprovacao
        And   cadastro um endereco
        And   clico no menu de opções
        Then  Envio para AGUARDANDO APROVAÇÃO


    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “CADASTRADO“ e alterar para “BLOQUEAR“
        Given que estou logado na tela de Pesquisa de Operadores
        And  clico no botao do filtro
        When realizo uma busca pelo campo “RAZÃO SOCIAL“
        And  seleciono o filtro “Situação“ igual “CADASTRADO“
        And  clico em Aplicar
        And  Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida
        And   seleciono um Provedor com status “RAZÃO SOCIAL“ e “CADASTRADO“ para Bloquear
        And   cadastro um endereco
        And   clico no menu de opções
        Then  Envio o provedor para “BLOQUEAR“


    Scenario:Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “APROVADO“ e alterar para “BLOQUEAR“
        Given que estou logado na tela de Pesquisa de Operadores
        And  clico no botao do filtro
        When realizo uma busca pelo campo “RAZÃO SOCIAL“
        And  seleciono o filtro “Situação“ igual “APROVADO“
        And  clico em Aplicar
        And  Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida
        And   seleciono um Provedor com status “RAZÃO SOCIAL“ e “APROVADO“ para Bloquear
        And   clico no menu de opções
        Then  Envio o provedor para “BLOQUEAR“


    Scenario:Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “APROVADO“ e alterar para “EXCLUIR“
        Given que estou logado na tela de Pesquisa de Operadores
        And  clico no botao do filtro
        When realizo uma busca pelo campo “RAZÃO SOCIAL“
        And  seleciono o filtro “Situação“ igual “APROVADO“
        And  clico em Aplicar
        And  Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida
        And   seleciono um Provedor com status “RAZÃO SOCIAL“ e “APROVADO“ para “EXCLUIR“
        And   clico no menu de opções
        Then  Envio o provedor para “EXCLUIR“


    Scenario:Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “APROVADO“ e alterar para “CANCELAR“
        Given que estou logado na tela de Pesquisa de Operadores
        And  clico no botao do filtro
        When realizo uma busca pelo campo “RAZÃO SOCIAL“
        And  seleciono o filtro “Situação“ igual “APROVADO“
        And  clico em Aplicar
        And  Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida
        And   seleciono um Provedor com status “RAZÃO SOCIAL“ e “APROVADO“ para “CANCELAR“
        And   clico no menu de opções
        Then  Envio o provedor para “CANCELAR“

    Scenario:Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e alterar para “APROVAR“
        Given que estou logado na tela de Pesquisa de Operadores
        And  clico no botao do filtro
        When realizo uma busca pelo campo “RAZÃO SOCIAL“
        And  seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“
        And  clico em Aplicar
        And  Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida
        And   seleciono um Provedor com status “RAZÃO SOCIAL“ e “AGUARDANDO APROVAÇÃO“ para “APROVAR“
        And   clico no menu de opções
        Then  Envio o provedor para “APROVAR“


    Scenario:Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e alterar para “REJEITAR“
        Given que estou logado na tela de Pesquisa de Operadores
        And  clico no botao do filtro
        When realizo uma busca pelo campo “RAZÃO SOCIAL“
        And  seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“
        And  clico em Aplicar
        And  Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida
        And   seleciono um Provedor com status “RAZÃO SOCIAL“ e “AGUARDANDO APROVAÇÃO“ para “REJEITAR“
        And   clico no menu de opções
        Then  Envio o provedor para “REJEITAR“


    Scenario:Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e alterar para “EXCLUIR“
        Given que estou logado na tela de Pesquisa de Operadores
        And  clico no botao do filtro
        When realizo uma busca pelo campo “RAZÃO SOCIAL“
        And  seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“
        And  clico em Aplicar
        And  Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida
        And   seleciono um Provedor com status “RAZÃO SOCIAL“ e “AGUARDANDO APROVAÇÃO“ para “EXCLUIR“
        And   clico no menu de opções
        Then  Envio o provedor para “EXCLUIR“


    Scenario:Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e alterar para “CANCELAR“
        Given que estou logado na tela de Pesquisa de Operadores
        And  clico no botao do filtro
        When realizo uma busca pelo campo “RAZÃO SOCIAL“
        And  seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“
        And  clico em Aplicar
        And  Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida
        And   seleciono um Provedor com status “RAZÃO SOCIAL“ e “AGUARDANDO APROVAÇÃO“ para “CANCELAR“
        And   clico no menu de opções
        Then  Envio o provedor para “CANCELAR“


    Scenario:Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “REJEITADO“ e alterar para “ENVIAR PARA APROVAÇÃO“
        Given que estou logado na tela de Pesquisa de Operadores
        And  clico no botao do filtro
        When realizo uma busca pelo campo “RAZÃO SOCIAL“
        And  seleciono o filtro “Situação“ igual “REJEITADO“
        And  clico em Aplicar
        And  Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida
        And   seleciono um Provedor com status “RAZÃO SOCIAL“ e “REJEITADO“ para “ENVIAR PARA APROVAÇÃO“
        And   clico no menu de opções
        Then  Envio o provedor para “ENVIAR PARA APROVAÇÃO“


    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “REJEITADO“ e alterar para “EXCLUIR“
        Given que estou logado na tela de Pesquisa de Operadores
        And  clico no botao do filtro
        When realizo uma busca pelo campo “RAZÃO SOCIAL“
        And  seleciono o filtro “Situação“ igual “REJEITADO“
        And  clico em Aplicar
        And  Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida
        And   seleciono um Provedor com status “RAZÃO SOCIAL“ e “REJEITADO“ para “EXCLUIR“
        And   clico no menu de opções
        Then  Envio o provedor para “EXCLUIR“


    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “REJEITADO“ e alterar para “CANCELAR“
        Given que estou logado na tela de Pesquisa de Operadores
        And  clico no botao do filtro
        When realizo uma busca pelo campo “RAZÃO SOCIAL“
        And  seleciono o filtro “Situação“ igual “REJEITADO“
        And  clico em Aplicar
        And  Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida
        And   seleciono um Provedor com status “RAZÃO SOCIAL“ e “REJEITADO“ para “CANCELAR“
        And   clico no menu de opções
        Then  Envio o provedor para “CANCELAR“

    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “BLOQUEADO“ e alterar para “DESBLOQUEAR“
        Given que estou logado na tela de Pesquisa de Operadores
        And  clico no botao do filtro
        When realizo uma busca pelo campo “RAZÃO SOCIAL“
        And  seleciono o filtro “Situação“ igual “BLOQUEADO“
        And  clico em Aplicar
        And  Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida
        And   seleciono um Provedor com status “RAZÃO SOCIAL“ e “BLOQUEADO“ para “DESBLOQUEAR“
        And   clico no menu de opções
        Then  Envio o provedor para “DESBLOQUEAR“

    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “BLOQUEADO“ e alterar para “EXCLUIR“
        Given que estou logado na tela de Pesquisa de Operadores
        And  clico no botao do filtro
        When realizo uma busca pelo campo “RAZÃO SOCIAL“
        And  seleciono o filtro “Situação“ igual “BLOQUEADO“
        And  clico em Aplicar
        And  Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida
        And   seleciono um Provedor com status “RAZÃO SOCIAL“ e “BLOQUEADO“ para “EXCLUIR“
        And   clico no menu de opções
        Then  Envio o provedor para “EXCLUIR“


    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “BLOQUEADO“ e alterar para “CANCELAR“
        Given que estou logado na tela de Pesquisa de Operadores
        And  clico no botao do filtro
        When realizo uma busca pelo campo “RAZÃO SOCIAL“
        And  seleciono o filtro “Situação“ igual “BLOQUEADO“
        And  clico em Aplicar
        And  Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida
        And  seleciono um Provedor com status “RAZÃO SOCIAL“ e “BLOQUEADO“ para “CANCELAR“
        And  clico no menu de opções
        Then Envio o provedor para “CANCELAR“

    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “CANCELADO“ e alterar para “EXCLUIR“
        Given que estou logado na tela de Pesquisa de Operadores
        And  clico no botao do filtro
        When realizo uma busca pelo campo “RAZÃO SOCIAL“
        And  seleciono o filtro “Situação“ igual “CANCELADO“
        And  clico em Aplicar
        And  Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida
        And  seleciono um Provedor com status “RAZÃO SOCIAL“ e “CANCELADO“ para “EXCLUIR“
        And  clico no menu de opções
        Then Envio o provedor para “EXCLUIR“


    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “CANCELADO“ e alterar para “REATIVAR“
        Given que estou logado na tela de Pesquisa de Operadores
        And  clico no botao do filtro
        When realizo uma busca pelo campo “RAZÃO SOCIAL“
        And  seleciono o filtro “Situação“ igual “CANCELADO“
        And  clico em Aplicar
        And  Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida
        And  seleciono um Provedor com status “RAZÃO SOCIAL“ e “CANCELADO“ para “REATIVAR“
        And  clico no menu de opções
        Then Envio o provedor para “REATIVAR“

    Scenario: Pesquisar Provedores de Serviços filtrado por o campo “CNPJ“ e alterar dados cadastrais
        Given que estou logado na tela de Pesquisa de Operadores
        And clico no botao do filtro
        When realizo uma busca pelo campo “CNPJ“
        And  clico em Aplicar
        And  uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida
        And   seleciono um Provedor com status “CNPJ“
        And   clico no botao Alterar
        Then  Nome do Provedor é alterado

    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “CADASTRADO“ e alterar para “EXCLUIR“
        Given que estou logado na tela de Pesquisa de Operadores
        And clico no botao do filtro
        When realizo uma busca pelo campo “CNPJ“
        And seleciono o filtro “Situação“ igual “CADASTRADO“
        And  clico em Aplicar
        And  Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida
        And   seleciono um Provedor com status “CNPJ“ e “CADASTRADO“ para enviar para Excluir
        And   cadastro um endereco
        And   clico no menu de opções
        Then  Envio para “EXCLUIR“

    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “CADASTRADO“ e alterar para “CANCELAR“
        Given que estou logado na tela de Pesquisa de Operadores
        And clico no botao do filtro
        When realizo uma busca pelo campo “CNPJ“
        And seleciono o filtro “Situação“ igual “CADASTRADO“
        And  clico em Aplicar
        And  Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida
        And   seleciono um Provedor com status “CNPJ“ e “CADASTRADO“ para enviar para “CANCELAR“
        And   cadastro um endereco
        And   clico no menu de opções
        Then  Envio para “CANCELAR“


    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“com filtro “Situação“ igual “CADASTRADO“ e alterar para “AGUARDANDO APROVAÇÃO“
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“
        And   seleciono o filtro “Situação“ igual “CADASTRADO“
        And   clico em Aplicar
        And   Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida
        And   seleciono um Provedor com status “CNPJ“ e “CADASTRADO“ para enviar para “AGUARDANDO APROVAÇÃO“
        And   cadastro um endereco
        And   clico no menu de opções
        Then  Envio para “AGUARDANDO APROVAÇÃO“

    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “APROVADO“ e alterar para “BLOQUEAR"
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“
        And   seleciono o filtro “Situação“ igual “APROVADO“
        And   clico em Aplicar
        And   Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida
        And   seleciono um Provedor com status “CNPJ“ e “APROVADO“ para enviar para “BLOQUEAR"
        And   clico no menu de opções
        Then  Envio para “BLOQUEAR“

    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “APROVADO“ e alterar para “EXCLUIR"
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“
        And   seleciono o filtro “Situação“ igual “APROVADO“
        And   clico em Aplicar
        And   Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida
        And   seleciono um Provedor com status “CNPJ“ e “APROVADO“ para enviar para “EXCLUIR"
        And   clico no menu de opções
        Then  Envio para “EXCLUIR"

    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “APROVADO“ e alterar para “CANCELAR“
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“
        And   seleciono o filtro “Situação“ igual “APROVADO“
        And   clico em Aplicar
        And   Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida
        And   seleciono um Provedor com status “CNPJ“ e “APROVADO“ para enviar para “CANCELAR“
        And   clico no menu de opções
        Then  Envio para “CANCELAR“

    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e alterar para “APROVAR"
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“
        And   seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“
        And   clico em Aplicar
        And   Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida
        And   seleciono um Provedor com status “CNPJ“ e “AGUARDANDO APROVAÇÃO“ para enviar para “APROVAR"
        And   clico no menu de opções
        Then  Envio para “APROVAR"

    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e alterar para “REJEITAR"
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“
        And   seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“
        And   clico em Aplicar
        And   Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida
        And   seleciono um Provedor com status “CNPJ“ e “AGUARDANDO APROVAÇÃO“ para enviar para “REJEITAR"
        And   clico no menu de opções
        Then  Envio para “REJEITAR"

    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e alterar para “EXCLUIR"
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“
        And   seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“
        And   clico em Aplicar
        And   Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida
        And   seleciono um Provedor com status “CNPJ“ e “AGUARDANDO APROVAÇÃO“ para enviar para “EXCLUIR"
        And   clico no menu de opções
        Then  Envio para “EXCLUIR"

    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e alterar para “CANCELAR"
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“
        And   seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“
        And   clico em Aplicar
        And   Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida
        And   seleciono um Provedor com status “CNPJ“ e “AGUARDANDO APROVAÇÃO“ para enviar para “CANCELAR"
        And   clico no menu de opções
        Then  Envio para “CANCELAR"

    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “REJEITADO“ e alterar para “ENVIAR PARA APROVAÇÃO“
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“
        And   seleciono o filtro “Situação“ igual “REJEITADO“
        And   clico em Aplicar
        And   Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida
        And   seleciono um Provedor com status “CNPJ“ e “REJEITADO“ para enviar para “ENVIAR PARA APROVAÇÃO“
        And   clico no menu de opções
        Then  Envio para “ENVIAR PARA APROVAÇÃO“

    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “REJEITADO“ e alterar para “EXCLUIR“
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“
        And   seleciono o filtro “Situação“ igual “REJEITADO“
        And   clico em Aplicar
        And   Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida
        And   seleciono um Provedor com status “CNPJ“ e “REJEITADO“ para enviar para “EXCLUIR“
        And   clico no menu de opções
        Then  Envio para “EXCLUIR“

    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “REJEITADO“ e alterar para “CANCELAR“
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“
        And   seleciono o filtro “Situação“ igual “REJEITADO“
        And   clico em Aplicar
        And   Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida
        And   seleciono um Provedor com status “CNPJ“ e “REJEITADO“ para enviar para “CANCELAR“
        And   clico no menu de opções
        Then  Envio para “CANCELAR“


    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “BLOQUEADO“ e alterar para “DESBLOQUEAR“
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“
        And   seleciono o filtro “Situação“ igual “BLOQUEADO“
        And   clico em Aplicar
        And   Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida
        And   seleciono um Provedor com status “CNPJ“ e “BLOQUEADO“ para enviar para “DESBLOQUEAR“
        And   clico no menu de opções
        Then  Envio para “DESBLOQUEAR“


    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “BLOQUEADO“ e alterar para “EXCLUIR“
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“
        And   seleciono o filtro “Situação“ igual “BLOQUEADO“
        And   clico em Aplicar
        And   Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida
        And   seleciono um Provedor com status “CNPJ“ e “BLOQUEADO“ para enviar para “EXCLUIR“
        And   clico no menu de opções
        Then  Envio para “EXCLUIR“

    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “BLOQUEADO“ e alterar para “CANCELAR“
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“
        And   seleciono o filtro “Situação“ igual “BLOQUEADO“
        And   clico em Aplicar
        And   Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida
        And   seleciono um Provedor com status “CNPJ“ e “BLOQUEADO“ para enviar para “CANCELAR“
        And   clico no menu de opções
        Then  Envio para “CANCELAR“

    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “CANCELADO“ e alterar para “EXCLUIR“
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“
        And   seleciono o filtro “Situação“ igual “CANCELADO“
        And   clico em Aplicar
        And   Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida
        And   seleciono um Provedor com status “CNPJ“ e “CANCELADO“ para enviar para “EXCLUIR“
        And   clico no menu de opções
        Then  Envio para “EXCLUIR“

@focus
    Scenario: Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “CANCELADO“ e alterar para “REATIVAR“
        Given que estou logado na tela de Pesquisa de Operadores
        And   clico no botao do filtro
        When  realizo uma busca pelo campo “CNPJ“
        And   seleciono o filtro “Situação“ igual “CANCELADO“
        And   clico em Aplicar
        And   Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida
        And   seleciono um Provedor com status “CNPJ“ e “CANCELADO“ para enviar para “REATIVAR“
        And   clico no menu de opções
        Then  Envio para “REATIVAR“