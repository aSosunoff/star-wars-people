/// <reference types="cypress" />

const baseUrl = "http://localhost:3001";

describe("star-wars-people", () => {
  beforeEach(() => {
    cy.visit(baseUrl);

    cy.get(".ant-input-search-with-button").as("searchWrapper");

    cy.get("@searchWrapper").find(".ant-input[type='text']").as("seatchInput");

    cy.get("@searchWrapper").find(".ant-input-search-button").as("seatchButton");

    cy.get(".ant-breadcrumb > span").as("breadcrumbs");
  });

  it("should be breadcrumb home/main before start page", () => {
    cy.get("@breadcrumbs").should("have.length", 2);

    cy.get("@breadcrumbs").first().find(".ant-breadcrumb-link").should("have.text", "Home");

    cy.get("@breadcrumbs").last().find(".ant-breadcrumb-link").should("have.text", "Main");
  });

  it("should be search with button", () => {
    cy.get("@searchWrapper").should("have.length", 1);
  });

  it("should be type text to search item", () => {
    cy.get("@seatchInput").type("luke").should("have.value", "luke");
  });

  it("should be search by text from input", () => {
    cy.get("@seatchInput").type("luke");

    cy.get("@seatchButton").click();

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
  });
});
