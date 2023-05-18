var faker = require('faker')
var faker_cpf = require('gerador-validador-cpf')

export default{

    operador: function (){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var dados = {
            name: `${firstName} ${lastName}`,
            email: 'teste@teste.com',
            senha: "1695646548798",
            rg:"1234567888",
            cpf: faker_cpf.generate(),
            telefone: "1633951973",
            celular: "16991125511"
        }
        return dados
    }
}


