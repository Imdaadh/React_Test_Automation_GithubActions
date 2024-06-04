describe('Featured Products Length', () => {

    //Callback
    beforeEach(()=>{cy.visit('http://localhost:5173/')}) 

    it('4 Popular Products', () => {

        cy.get('[data-test]').should('have.length',4)
    
    })


  })
