describe('Title Validation', () => {

    beforeEach(()=>{cy.visit('https://imdaadh.github.io/React_Test_Automation_GithubActions/')}) 

    it('Go to currect url', () => {
      cy.visit('https://imdaadh.github.io/React_Test_Automation_GithubActions')
  
    })
  
    //negative testcase but should pass
    it('verify negative-positive1', () => {
      cy.title().should('not.eq',"Nike123")
    })
  
    //positive test case
    it('verify negative-positive2', () => {
      cy.title().should('eq',"Nike")
    })

  })