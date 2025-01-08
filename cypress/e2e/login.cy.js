describe('Orange HRM login', () => {

    it('Login success', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // site que estamos testando
      cy.get("[name='username']").type('Admin') // colocar nome do usuario de ADMIN (foi utilizado CSS selector para colocar name =username)
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123') // colocar senha admin123
      cy.get('.oxd-button').click() // apertar boton de login
      cy.location('pathname').should('equal','/web/index.php/dashboard/index') // verificar se foi para a pagina correta após o login
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard') // encontrar a palavra dashboard para confirma se apagina esta correta
    })
    it('Login Fail', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get("[name='username']").type('test') // colocado usuario incorreto
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('test') // colocado senha incorreta
      cy.get('.oxd-button').click() // apertat botão login 
      cy.get('.oxd-alert-content > .oxd-text') // verificar msg de erro
    })
  
  })