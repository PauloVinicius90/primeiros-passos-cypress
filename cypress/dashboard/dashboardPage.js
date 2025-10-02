class DashboardPage {

    selectorslist (){
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid",
        }

        return selectors

    }

    checkDashboradPage() {

        cy.location('pathname').should('equal' , '/web/index.php/dashboard/index' ) //seerve para testar a navegação do usuário e garantir que ele esteja na rota certa depois de uma ação ou seja se a pagina esta indo para o caminho certo URL. EXEMPLO dashbord que foi a pagina direcionada apos o login
        cy.get(this.selectorslist().dashboardGrid).should('be.visible')
    }
}

export default DashboardPage