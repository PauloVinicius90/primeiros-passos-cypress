describe('Orange HRM Tests', () => {
  it('Login Success', () => { // nome da verificação
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')// acesso a pagina que vai ser testada
    cy.get("[name='username']").type("Admin") //colocando onome do usuaario Admin
    cy.get("[name='password']").type("admin123") //colocando a senha admin123
    cy.get('.oxd-button').click() //clicando no botão login
    cy.location('pathname').should('equal' , '/web/index.php/dashboard/index' ) //seerve para testar a navegação do usuário e garantir que ele esteja na rota certa depois de uma ação ou seja se a pagina esta indo para o caminho certo URL. EXEMPLO dashbord que foi a pagina direcionada apos o login
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')// verifica a palavra dashbord
  })
  it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type("Test fail")
    cy.get("[name='password']").type("fail123")
    cy.get('.oxd-button').click() 
    cy.get('.oxd-alert')// verifica o alerta que gerou
  })
})