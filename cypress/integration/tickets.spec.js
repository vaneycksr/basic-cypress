/// <reference types="cypress" />

// descrevendo a suite
describe("Tickets", () =>{

    // acessa a pagina
   beforeEach(()=> cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"))
   

    // teste
    it("tem o título 'TICKETBOX' no header",() =>{} )

});