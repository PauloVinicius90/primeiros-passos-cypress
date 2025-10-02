import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../dashboard/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'



const loginPage = new LoginPage()
const dashboardPage = new DashboardPage ()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

const selectorsList = {
    
    
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


  it.only('User Info Update - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboradPage()
    menuPage.acessMyInfo()
   // cy.get(selectorsList.usernameField).type(userData.userSuccess.username) //colocando onome do usuaario Admin
    //cy.get(selectorsList.passwordField).type(userData.userSuccess.password) //colocando a senha admin123
    //cy.get(selectorsList.loginButton).click() //clicando no botão login
    
    //cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')// verifica a palavra dashbord
    //cy.get(selectorsList.dashboardGrid)// verifica a palavra dashbord
    //cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstName).clear().type("Paulo")
    cy.get(selectorsList.middleName).clear().type("Vinicius")
    cy.get(selectorsList.lastName).clear().type("Silva")
    cy.get(selectorsList.nickName).eq(3).clear().type("Paulotest")
    cy.get(selectorsList.employeeId).eq(4).clear().type("Gonçalves")
    cy.get(selectorsList.otherId).eq(5).clear().type("25036541")
    cy.get(selectorsList.driverLicenseNumeber).eq(6).clear().type("1247998997")
    cy.get(selectorsList.licenseExpirydate).eq(0).clear().type("2025-10-10")
    cy.get(selectorsList.dataCloseButton).click()
    cy.get(selectorsList.nationality).eq(0).click()
    cy.get(selectorsList.clickNationality).click()
    cy.get(selectorsList.maritalStatus).eq(1).click()
    cy.get(selectorsList.clickMartialStatus).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', "Successfully Update"), // verifica mensagem(escrita) Successfullyupadate apos clicar em salvar, pois nao sabem qual atributo é dessa mensagem
    cy.get(selectorsList.nationality).eq(0).click()

  })




  it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click() 
    cy.get(selectorsList.wrongcredentialAlert)// verifica o alerta que gerou
  })
})
  
