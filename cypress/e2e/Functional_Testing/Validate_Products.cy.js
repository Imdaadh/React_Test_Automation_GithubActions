describe('Featured Products Length', () => {

    //Callback
    beforeEach(()=>{cy.visit('https://imdaadh.github.io/React_Test_Automation_GithubActions/')}) 

    it('4 Popular Products', () => {

        cy.get('[data-test]').should('have.length',4)
    
    })


  })
