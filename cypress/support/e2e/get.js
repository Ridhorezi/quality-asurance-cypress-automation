describe("Get API inventory petstore", () => {
  it("Get store inventory - GET", () => {
    cy.request("/store/inventory").as("getInventory");
    cy.get("@getInventory").then((inventoryRequest) => {
      expect(inventoryRequest.status).to.equal(200);
    });
  });
});
