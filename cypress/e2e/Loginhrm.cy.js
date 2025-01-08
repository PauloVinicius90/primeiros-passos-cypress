
describe('Orange HRM login', () => {

  const selectorsList = {
    usernameField: "[name='username']",   // criando uma varialvel  para caso seja alterado os nomes, para facilitar e não alterar todos um por um,para não repetir os seletores, exemplo : usarname muda para nickname
    passwordField:"[name='password']",
    loginButton:"[type='submit']",
  
  }

  const userdata = {
    userSuccess: {
      username: "Admin",
      password: "admin123"
    },
    userFail:{ 
      username: "test",
      password: "test"
    }
  
  }
  it('Login success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // site que estamos testando
    cy.get(selectorsList.usernameField).type(userdata.userSuccess.username) // colocar nome do usuario de ADMIN (foi utilizado CSS selector para colocar name =username)
    cy.get(selectorsList.passwordField).type(userdata.userSuccess.password) // colocar senha admin123
    cy.get(selectorsList.loginButton).click() // apertar boton de login
    cy.location('pathname').should('equal','/web/index.php/dashboard/index') // verificar se foi para a pagina correta após o login
    cy.get('.orangehrm-upgrade-layout') // encontrar a palavra dashboard para confirma se apagina esta correta
  })
  it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userdata.userFail.username) // colocado usuario incorreto
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.userFail.password) // colocado senha incorreta
    cy.get('.oxd-button').click() // apertat botão login 
    cy.get('.oxd-alert-content > .oxd-text') // verificar msg de erro
  })

})
