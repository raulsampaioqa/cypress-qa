Feature: Fluxo de ativação de Contrato do Provedor de Serviço

Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status-APROVADO], onde o status do contrato esteja com status CADASTRADO e enviar para CANCELAR
                Given que estou logado na tela de Pesquisa de Provedores
                When  realizo uma busca pelo campo “CNPJ“ com “Status - APROVADO“
                And   clico em PESQUISAR
                And   o Provedor com “Status - APROVADO“ é exibido
                And   clico no Provedor de Serviço com “Status - APROVADO“, onde o status do contrato esteja com status CADASTRADO
                And   clico na aba CONTRATOS
                And   clico no contrato com status CADASTRADO
                And   clico na opção 3 pontos do menu
                And   envio para CANCELAR
                Then  uma mensagem é exibida

Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status-APROVADO], onde o status do contrato esteja com status CADASTRADO e enviar para ENVIAR PARA APROVAÇÃO
                Given que estou logado na tela de Pesquisa de Provedores
                When  realizo uma busca pelo campo “CNPJ“ com “Status - APROVADO“
                And   clico em PESQUISAR
                And   o Provedor com “Status - APROVADO“ é exibido
                And   clico no Provedor de Serviço com “Status - APROVADO“, onde o status do contrato esteja com status CADASTRADO
                And   clico na aba CONTRATOS
                And   clico no contrato com status CADASTRADO para ser enviado para ENVIAR PARA APROVAÇÃO
                And   clico na opção 3 pontos do menu
                And   envio para ENVIAR PARA APROVAÇÃO
                Then  uma mensagem é exibida

Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status-APROVADO], onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO e enviar para CANCELAR
                Given que estou logado na tela de Pesquisa de Provedores
                When  realizo uma busca pelo campo “CNPJ“ com “Status - APROVADO“ onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO
                And   clico em PESQUISAR
                And   o Provedor com “Status - APROVADO“ desejado é exibido
                And   clico no Provedor de Serviço com “Status - APROVADO“ pesquisado, onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO
                And   clico na aba CONTRATOS
                And   clico no contrato com status AGUARDANDO APROVAÇÃO para ser enviado para CANCELAR
                And   clico na opção 3 pontos do menu para ser enviado para CANCELAR
                And   envio para CANCELAR
                Then  uma mensagem é exibida

@focus
Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status-APROVADO], onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO e enviar para REJEITAR
                Given que estou logado na tela de Pesquisa de Provedores
                When  realizo uma busca pelo campo “CNPJ“ com “Status - APROVADO“ onde o contrato esteja com status AGUARDANDO APROVAÇÃO
                And   clico em PESQUISAR
                And   o Provedor com “Status - APROVADO“ desejado é exibido
                And   clico no Provedor de Serviço com “Status - APROVADO“ pesquisado, onde contrato esteja com status AGUARDANDO APROVAÇÃO
                And   clico na aba CONTRATOS
                And   clico no contrato com status AGUARDANDO APROVAÇÃO para ser enviado para REJEITAR
                And   clico na opção 3 pontos do menu para ser enviado para REJEITAR
                And   envio para REJEITAR
                Then  uma mensagem é exibida

Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status-APROVADO], onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO e enviar para APROVAR
                Given que estou logado na tela de Pesquisa de Provedores
                When  realizo uma busca pelo campo “CNPJ“ com “Status - APROVADO“ onde o contrato esteja com status AGUARDANDO APROVAÇÃO e enviar para APROVAR
                And   clico em PESQUISAR
                And   o Provedor com “Status - APROVADO“ desejado é exibido
                And   clico no Provedor de Serviço com “Status - APROVADO“ pesquisado, onde contrato esteja com status AGUARDANDO APROVAÇÃO e enviar para APROVAR
                And   clico na aba CONTRATOS
                And   clico no contrato com status AGUARDANDO APROVAÇÃO para ser enviado para APROVAR
                And   clico na opção 3 pontos do menu para ser enviado para APROVAR
                And   envio para APROVAR
                Then  uma mensagem é exibida

@focus
Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status-APROVADO], onde o status do contrato esteja com status REJEITADO e enviar para CANCELAR
                Given que estou logado na tela de Pesquisa de Provedores
                When  realizo uma busca pelo campo “CNPJ“ com “Status - APROVADO“ onde o contrato esteja com status REJEITADO e enviar para CANCELAR
                And   clico em PESQUISAR
                And   o Provedor com “Status - APROVADO“ desejado é exibido
                And   clico no Provedor de Serviço com “Status - APROVADO“ pesquisado, onde contrato esteja com status REJEITADO e enviar para CANCELAR
                And   clico na aba CONTRATOS
                And   clico no contrato com status REJEITADO para ser enviado para CANCELAR
                And   clico na opção 3 pontos do menu para ser enviado para CANCELAR
                And   envio para CANCELAR
                Then  uma mensagem de sucesso é exibida

@focus
Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status-APROVADO], onde o status do contrato esteja com status REJEITADO e enviar para ENVIAR PARA APROVAÇÃO
                Given que estou logado na tela de Pesquisa de Provedores
                When  realizo uma busca pelo campo “CNPJ“ com “Status - APROVADO“ onde o contrato esteja com status REJEITADO e enviar para ENVIAR PARA APROVAÇÃO
                And   clico em PESQUISAR
                And   o Provedor com “Status - APROVADO“ desejado é exibido
                And   clico no Provedor de Serviço com “Status - APROVADO“ pesquisado, onde contrato esteja com status REJEITADO e enviar para ENVIAR PARA APROVAÇÃO
                And   clico em aba CONTRATOS
                And   clico no contrato com status REJEITADO para ser enviado para ENVIAR PARA APROVAÇÃO
                And   clico na opção 3 pontos do menu para ser enviado para ENVIAR PARA APROVAÇÃO
                And   envio para ENVIAR PARA APROVAÇÃO
                Then  uma mensagem que o contrato foi enviado com sucesso é exibida

@focus
Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status-APROVADO], onde o status do contrato esteja com status APROVADO e enviar para CANCELAR
                Given que estou logado na tela de Pesquisa de Provedores
                When  realizo uma busca pelo campo “CNPJ“ com “Status - APROVADO“ onde o contrato esteja com status APROVADO e enviar para CANCELAR
                And   clico em PESQUISAR
                And   o Provedor com “Status - APROVADO“ desejado é exibido
                And   clico no Provedor de Serviço com “Status - APROVADO“ pesquisado, onde contrato esteja com status APROVADO e enviar para CANCELAR
                And   clico em aba CONTRATOS
                And   clico no contrato com status APROVADO para ser enviado para CANCELAR
                And   clico na opção 3 pontos do menu para ser enviado para CANCELAR
                And   envio para CANCELAR
                Then  uma mensagem que o contrato do Provedor foi enviado com sucesso é exibida
@focus
Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status-APROVADO], onde o status do contrato esteja com status CANCELADO
                Given que estou logado na tela de Pesquisa de Provedores
                When  realizo uma busca pelo campo “CNPJ“ com “Status - APROVADO“ onde o contrato esteja com status CANCELADO
                And   clico em PESQUISAR
                And   o Provedor com “Status - APROVADO“ desejado é exibido
                And   clico no Provedor de Serviço com “Status - APROVADO“ pesquisado, onde contrato esteja com status CANCELADO
                And   clico em aba CONTRATOS
                And   clico no contrato com status CANCELADO
                Then  Nenhuma opção de envio deve ser exibida