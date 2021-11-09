/// <reference types="cypress" />

const baseUrl = "http://localhost:3001";

const LukeSkywalker = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "https://swapi.dev/api/planets/1/",
  films: [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/6/",
  ],
  species: [],
  vehicles: ["https://swapi.dev/api/vehicles/14/", "https://swapi.dev/api/vehicles/30/"],
  starships: ["https://swapi.dev/api/starships/12/", "https://swapi.dev/api/starships/22/"],
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
  url: "https://swapi.dev/api/people/1/",
};

describe("star-wars-people", () => {
  beforeEach(() => {
    cy.visit(baseUrl);

    cy.get(".ant-input-search-with-button").as("searchWrapper");

    cy.get("@searchWrapper").find(".ant-input[type='text']").as("seatchInput");

    cy.get("@searchWrapper").find(".ant-input-search-button").as("seatchButton");

    cy.get(".ant-breadcrumb > span").as("breadcrumbs");
  });

  it("should fetch to people api", () => {
    cy.intercept("GET", "https://swapi.dev/api/people/").as("getPeople");
    cy.visit(baseUrl);
    cy.wait("@getPeople").its("response.statusCode").should("eq", 200);
  });

  it("should fetch to people api and return 10 items", () => {
    cy.intercept("GET", "https://swapi.dev/api/people/").as("getPeople");
    cy.visit(baseUrl);
    cy.wait("@getPeople").its("response.body.results").should("have.length", 10);
  });

  it("should fetch to people", () => {
    cy.intercept("GET", "https://swapi.dev/api/people/", {
      results: [LukeSkywalker],
    }).as("getPeople");

    cy.visit(baseUrl);

    cy.wait("@getPeople").its("response.body.results").should("have.length", 1);
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

  it("should be go to new page of detail person and return main page", () => {
    cy.intercept("GET", "https://swapi.dev/api/people/", {
      results: [LukeSkywalker],
    }).as("getPeople");

    cy.visit(baseUrl);

    cy.get("table tbody tr:nth-child(1) td [data-cypress=open-page-person-detail]").click();

    cy.url().should("include", `people-detail/1`);

    cy.get(".ant-menu-root").contains("People").click();
  });

  it("should be caused 1 time fetch for a few identical api", () => {
    const spyRequest = cy.spy().as("spyRequest");

    cy.intercept({ method: "GET", url: "https://swapi.dev/api/people/" }, (req) => {
      spyRequest();
      return {
        results: [LukeSkywalker],
      };
    }).as("getPeople");

    cy.visit(baseUrl);

    cy.get(
      ".ant-layout table tbody tr:nth-child(1) td [data-cypress=open-modal-person-detail]"
    ).click();

    cy.get("[data-cypress=modal-detail-person]").find(".ant-modal-close").click();

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    /* cy.wait(5000); */

    cy.get(
      ".ant-layout table tbody tr:nth-child(1) td [data-cypress=open-modal-person-detail]"
    ).click();

    cy.get("@spyRequest").its("callCount").should("eq", 1);
  });
});
