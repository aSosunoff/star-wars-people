/// <reference types="cypress" />

const baseUrl = "http://localhost:3001";

describe("star-wars-people", () => {
  const search = (text: string) =>
    cy.get(".ant-input-search-with-button .ant-input[type='text']").type(text);

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("should be breadcrumb home/main before start page", () => {
    cy.get(".ant-breadcrumb > span").as("breadcrumbs").should("have.length", 2);

    cy.get("@breadcrumbs").first().find(".ant-breadcrumb-link").should("have.text", "Home");
    cy.get("@breadcrumbs").last().find(".ant-breadcrumb-link").should("have.text", "Main");
  });

  /* it("should be search with button", () => {
    cy.get(".ant-input-search-with-button").should("have.length", 1);
  });

  it("should be type text to search item", () => {
    search("luke").should("have.value", "luke");
  });

  it("should be search by text from input", () => {
    search("luke");

    cy.get(".ant-input-search-with-button button").click();

    cy.get("table tbody tr")
      .should("have.length", 1)
      .first()
      .children("td")
      .first()
      .should("have.text", "Luke Skywalker");
  });

  it("should be 10 item on page", () => {
    cy.get("table tbody tr").should("have.length", 10);
  });

  it("should be open and close modal component", () => {
    cy.get("[data-cypress=modal-detail-person]").should("have.length", 0);

    cy.get(
      ".ant-layout table tbody tr:nth-child(1) td [data-cypress=open-modal-person-detail]"
    ).click();

    cy.get("[data-cypress=modal-detail-person] .ant-modal-wrap").should(
      "not.have.attr",
      "style",
      "display: none;"
    );

    cy.get("[data-cypress=modal-detail-person]").find(".ant-modal-close").click();

    cy.get("[data-cypress=modal-detail-person] .ant-modal-wrap").should(
      "have.attr",
      "style",
      "display: none;"
    );
  }); */
});
