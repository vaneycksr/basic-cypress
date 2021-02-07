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
    it("Interagindo com checkboxes", ()=> {
        cy.get("#friend").check();
        cy.get("#publication").check();
        cy.get("#friend").uncheck();
    });


    it("valida o título 'TICKETBOX' no header",() =>{
        cy.get("header h1").should("contain","TICKETBOX");

    });

    it("Verifica e-mail INVÁLIDO",() =>{

        cy.get("#email")
            .as("email") // da um apelido para o elemento email para poder ser reutilizado
            .type("email-gmail.com");

        //verifica se existe essa classe de erro em específico
        cy.get("#email.invalid").should("exist");

        cy.get("@email") // com o @ retorna o alias que foi criado com esse nome
            .clear() // limpa o valor do campo
            .type("email@gmail.com");

        cy.get("#email.invalid").should("not.exist");
    });

    it.only("Preenchendo todo formulário e depois resetando",()=>{

        const firstName = "Van Eyck";
        const lastName = "Rosas";
        const fullName = `${firstName} ${lastName}`;

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("teste@gmail.com");
        cy.get("#ticket-quantity").select("2");
        cy.get("#vip").check();
        cy.get("#friend").check();
        cy.get("#requests").type("hamburguer");

        // verificar texto de acordo com as informações passadas acima
        cy.get(".agreement p").should(
            "contain",
            `I, ${fullName}, wish to buy 2 VIP tickets.`
        );

        cy.get("#agree").click();
        cy.get("#signature").type(fullName);

        // valida que o botão está habilitado
        cy.get("button[type='submit']")
            .as("submitButton")
            .should("not.be.disabled");


        // clica no botão para limpar todos os campos do formulário
        cy.get("button[type='reset']").click();

        // valida que o campo de submeter o formulário está desabilitado pois os campos estão vazios
        cy.get("@submitButton").should("be.disabled");
    });

});