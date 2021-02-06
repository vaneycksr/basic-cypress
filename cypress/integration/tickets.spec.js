/// <reference types="cypress" />

// descrevendo a suite
describe("Tickets", () =>{

    // acessa a página
   beforeEach(()=> cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"))
   
    // preenchendo todos os campos do tipo texto
    // para executar apenas um teste, colocar: it.only()
    it("Preenchendo todos so campos do tipo texto", () => {

        const firstName = "Van Eyck";
        const lastName = "Rosas";

        // get() identificando elemento através do css selector
        // type() digita no elemento
        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("teste@gmail.com");
        cy.get("#requests").type("hamburguer");

        // concatena o valor das variáveis
        cy.get("#signature").type(`${firstName} ${lastName}`);
    });

    // interagir com select
    it("Interagindo com select, selecionando dois tickets", () => {
        cy.get("#ticket-quantity").select("2");
    });

    // interagindo com radio button
    it("interagindo com radio buttons", () => {
        cy.get("#vip").check();
    });

    // Interagindo com checkboxes
    it.only("Interagindo com checkboxes", ()=> {
        cy.get("#friend").check();
        cy.get("#publication").check();
        cy.get("#friend").uncheck();
    });


    // teste
    it("tem o título 'TICKETBOX' no header",() =>{} );

});