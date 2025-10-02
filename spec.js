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
    submitButton: "[type='submit']",
    nationality:".oxd-select-text--arrow",
    submitButton: "[type='submit']",
    clickNationality: ':nth-child(27) > span',
    maritalStatus: ".oxd-select-text--arrow",
    clickMartialStatus:':nth-child(3) > span'
     
  }



    cy.get(selectorsList.driverLicenseNumeber).eq(6).clear().type("1247998997")
    cy.get(selectorsList.licenseExpirydate).eq(0).clear().type("2025-10-10")
    cy.get(selectorsList.dataCloseButton).click()
    cy.get(selectorsList.nationality).eq(0).click()
    cy.get(selectorsList.clickNationality).click()
    cy.get(selectorsList.maritalStatus).eq(1).click()
    cy.get(selectorsList.clickMartialStatus).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', "Successfully Update") // verifica mensagem(escrita) Successfullyupadate apos clicar em salvar, pois nao sabem qual atributo é dessa mensagem
    cy.get('body').should('contain', "Successfully Update"), // verifica mensagem(escrita) Successfullyupadate apos clicar em salvar, pois nao sabem qual atributo é dessa mensagem
    cy.get(selectorsList.nationality).eq(0).click()
    

  })
  it('Login Fail', () => {
    cy.visit('auth/login')
    cy.get(selectorsList.usernameField).type(userData.userfail.username)
    cy.get(selectorsList.passwordField).type(userData.userfail.password)
    cy.get(selectorsList.loginButton).click() 
    cy.get(selectorsList.wrongcredentialAlert)// verifica o alerta que gerou
  })