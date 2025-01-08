
describe('Orange HRM login', () => {

  const selectorsList = {
    usernameField: "[name='username']",   // criando uma varialvel  para caso seja alterado os nomes, para facilitar e não alterar todos um por um,para não repetir os seletores, exemplo : usarname muda para nickname
    passwordField:"[name='password']",
    loginButton:"[type='submit']",
    myInfoButtonn:'[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField:"[name='lastName']",
    genericField: ".oxd-input--active",
    dataField: "[placeholder='yyyy-dd-mm']",
    dataCloseButton: '.--close',
    submitButton: "[type='submit']"


    
  
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
  it.only('User Info Update - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login' ) // site que estamos testando
    cy.get(selectorsList.usernameField).type(userdata.userSuccess.username) // colocar nome do usuario de ADMIN (foi utilizado CSS selector para colocar name =username)
    cy.get(selectorsList.passwordField).type(userdata.userSuccess.password) // colocar senha admin123
    cy.get(selectorsList.loginButton).click() // apertar boton de login
    cy.location('pathname').should('equal','/web/index.php/dashboard/index') // verificar se foi para a pagina correta após o login
    cy.get('.orangehrm-upgrade-layout') // encontrar a palavra dashboard para confirma se apagina esta correta
    cy.get(selectorsList.myInfoButtonn).click() 
    cy.get(selectorsList.firstNameField).clear().type('FirstNametest')
    cy.get(selectorsList.lastNameField).clear().type('LastNametest')
    cy.get(selectorsList.genericField).eq(3).clear().type('id12')
    cy.get(selectorsList.genericField).eq(4).clear().type('otheridtest')
    cy.get(selectorsList.genericField).eq(5).clear().type('licensetest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-01-08')
    cy.get(selectorsList.dataCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain','Successfully Updated')
  })
  it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userdata.userFail.username) // colocado usuario incorreto
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.userFail.password) // colocado senha incorreta
    cy.get('.oxd-button').click() // apertat botão login 
    cy.get('.oxd-alert-content > .oxd-text') // verificar msg de erro

  })

})
