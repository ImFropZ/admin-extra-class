/// <reference types="cypress" />
import screen from "@testing-library/cypress";

describe("Login", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.findByPlaceholderText(/username/i).type("HelloWorld");
    cy.findByPlaceholderText(/password/i).type("HelloWorld@1");
    cy.get("Button").click();
    cy.url().should("include", "/");
  });
});
