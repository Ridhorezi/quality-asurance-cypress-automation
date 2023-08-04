describe("Post create user petstore", () => {
  it("Create a user - POST", () => {
    let body = {
      id: 12345,
      username: Cypress.env("username"),
      firstname: "Ridho",
      lastname: "Suhaebi Arrowi",
      email: "test@test.com",
      password: Cypress.env("password"),
      phone: "62812121212",
      userStatus: 1,
    };
    console.log(body);
    cy.request("POST", "/user", body).as("createUser");
    cy.get("@createUser").then((createUserRequest) => {
      expect(createUserRequest.status).to.equal(200);
    });
  });
});
