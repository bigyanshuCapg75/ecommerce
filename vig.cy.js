import Practice from "../support/page/VigPage";
const pp=new Practice()


describe('Test Suite',()=>{

    // beforeEach(()=>{


    // })
    before(()=>{
       
        cy.visit('/practice-test-login/')
       // cy.viewport(300,300)  used for specifying screen size 
    })

    it('Verify Success Login',()=>{
        cy.fixture('login.json').then((userData) => {
            const username = userData.username;
            const password = userData.password;

      })
        pp.getUserName(username)
        pp.getUserPassword(password)
        pp.clickSubmit()
        pp.verifySuccessLogin()

    })



    

})