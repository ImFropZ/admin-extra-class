/// <reference types="cypress" />
import screen from "@testing-library/cypress";

describe("Login And Navigate", () => {
  it("Login", () => {
    cy.visit("http://localhost:3000/");
    cy.findByPlaceholderText(/username/i).type("HelloWorld");
    cy.findByPlaceholderText(/password/i).type("HelloWorld@1");
    cy.get("Button").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
    // cy.get(".header_dropDown__Ct0ua").click();
    cy.get(".header_dropDown_props__Mxt1A").should("be.visible");
  });

  it("Navigate", () => {
    cy.get(".header_teacher__8q-vY > a").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/teacher");
    cy.get(".header_course__1h4PO > a").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/course");
    cy.get(".header_student__CyWjY > a").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/student");
    cy.get(".header_class__HjrLR > a").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/classroom");
    cy.get(".header_user__UmFTn > a").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/user");
    cy.get(".header_dashboard__k8DgS > a").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });
});
