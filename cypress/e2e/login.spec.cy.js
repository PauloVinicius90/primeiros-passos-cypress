import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorsList ={
    usernameField:"[name='username']",
    passwordField:"[name='password']",
    loginButton: "[type='submit']",
    sectionTitletopbar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongcredentialAlert: "[role='alert']"
    

  }

  it('Login Success', () => { // nome da verificação
    cy.visit('/auth/login')// acesso a pagina que vai ser testada
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username) //colocando onome do usuaario Admin
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password) //colocando a senha admin123
    cy.get(selectorsList.loginButton).click() //clicando no botão login
    cy.location('pathname').should('equal' , '/web/index.php/dashboard/index' ) //seerve para testar a navegação do usuário e garantir que ele esteja na rota certa depois de uma ação ou seja se a pagina esta indo para o caminho certo URL. EXEMPLO dashbord que foi a pagina direcionada apos o login
    cy.get(selectorsList.dashboardGrid)// verifica a palavra dashbord
  })
  it('Login Fail', () => {
    cy.visit('auth/login')
    cy.get(selectorsList.usernameField).type(userData.userfail.username)
    cy.get(selectorsList.passwordField).type(userData.userfail.password)
    cy.get(selectorsList.loginButton).click() 
    cy.get(selectorsList.wrongcredentialAlert)// verifica o alerta que gerou
  })
})