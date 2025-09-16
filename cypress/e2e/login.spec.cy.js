describe('Orange HRM Tests', () => {

  const selectorsList ={
    usernameField:"[name='username']",
    passwordField:"[name='password']",
    loginButton: "[type='submit']",
    sectionTitletopbar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    wrongcredentialAlert: "[role='alert']"

  }
  it('Login Success', () => { // nome da verificação
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')// acesso a pagina que vai ser testada
    cy.get(selectorsList.usernameField).type("Admin") //colocando onome do usuaario Admin
    cy.get(selectorsList.passwordField).type("admin123") //colocando a senha admin123
    cy.get(selectorsList.loginButton).click() //clicando no botão login
    cy.location('pathname').should('equal' , '/web/index.php/dashboard/index' ) //seerve para testar a navegação do usuário e garantir que ele esteja na rota certa depois de uma ação ou seja se a pagina esta indo para o caminho certo URL. EXEMPLO dashbord que foi a pagina direcionada apos o login
    cy.get(selectorsList.sectionTitletopbar).contains('Dashboard')// verifica a palavra dashbord
  })
  it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type("Test fail")
    cy.get(selectorsList.passwordField).type("fail123")
    cy.get(selectorsList.loginButton).click() 
    cy.get(selectorsList.wrongcredentialAlert)// verifica o alerta que gerou
  })
})