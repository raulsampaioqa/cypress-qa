Feature: autentication

    Scenario: Validar  acesso ao sistema averano com dados validos
        Given  que acessso o sistema acessarSiteAverano
        When   informo os dados de acesso
        Then  sou direcionado para tela de home

    Scenario: Validar  acesso ao sistema averano com dados invalidos
        Given  que acessso o sistema acessarSiteAverano
        When   informo os dados de acesso invalidos
        Then  e exbidos mensagem que dados  acesso estao invalidosn

    Scenario: Validar  acesso ao sistema averano  com email invalido
        Given  que acessso o sistema acessarSiteAverano
        When   informo os dados de acesso com email em braco
        Then  e exibido um alerta que campo email esta invalido

    Scenario: Validar  acesso ao sistema averano com senha em branco
        Given  que acessso o sistema acessarSiteAverano
        When   informo os dados de acesso com senha em branco
        Then  e exibido alerta  que  senha esta em branco
