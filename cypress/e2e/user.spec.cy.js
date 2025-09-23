import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorsList ={
    usernameField:"[name='username']",
    passwordField:"[name='password']",
    loginButton: "[type='submit']",
    sectionTitletopbar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongcredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstName: "[name='firstName']",
    middleName:"[name='middleName']",
    lastName: "[name='lastName']",
    nickName: ".oxd-input--active",
    employeeId:".oxd-input--active",
    otherId: ".oxd-input--active",
    driverLicenseNumeber: ".oxd-input--active",
    licenseExpirydate: "[placeholder='yyyy-dd-mm']",
    dataCloseButton: '.--close',
    submitButton: "[type='submit']"


    

  }

  it.only('User Info Update -Success', () => { // nome da verificação only na frente é que vai so realizar esse teste
    cy.visit('/auth/login')// acesso a pagina que vai ser testada
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username) //colocando onome do usuaario Admin
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password) //colocando a senha admin123
    cy.get(selectorsList.loginButton).click() //clicando no botão login
    cy.location('pathname').should('equal' , '/web/index.php/dashboard/index' ) //seerve para testar a navegação do usuário e garantir que ele esteja na rota certa depois de uma ação ou seja se a pagina esta indo para o caminho certo URL. EXEMPLO dashbord que foi a pagina direcionada apos o login
    cy.get(selectorsList.dashboardGrid)// verifica a palavra dashbord
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstName).clear().type("Paulo")
    cy.get(selectorsList.middleName).clear().type("Vinicius")
    cy.get(selectorsList.lastName).clear().type("Silva")
    cy.get(selectorsList.nickName).eq(3).clear().type("Paulotest")
    cy.get(selectorsList.employeeId).eq(4).clear().type("Gonçalves")
    cy.get(selectorsList.otherId).eq(5).clear().type("25036541")
    cy.get(selectorsList.driverLicenseNumeber).eq(6).clear().type("1247998997")
    cy.get(selectorsList.licenseExpirydate).eq(0).clear().type("2025-10-10")
    cy.get(selectorsList.dataCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', "Successfully Update") // verifica mensagem(escrita) Successfullyupadate apos clicar em salvar, pois nao sabem qual atributo é dessa mensagem

  })
  it('Login Fail', () => {
    cy.visit('auth/login')
    cy.get(selectorsList.usernameField).type(userData.userfail.username)
    cy.get(selectorsList.passwordField).type(userData.userfail.password)
    cy.get(selectorsList.loginButton).click() 
    cy.get(selectorsList.wrongcredentialAlert)// verifica o alerta que gerou
  })
})