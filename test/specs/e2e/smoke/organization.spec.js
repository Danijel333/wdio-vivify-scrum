class Organization {
  get addNewButton() {
    return cy.contains("Add New");
  }

  get addNewOrganization() {
    return cy.contains("Add Organization");
  }

  get organizationNameInput() {
    return cy.get('input[name="name"]');
  }

  get nextButton() {
    return cy.get('button[name="next_btn"]');
  }

  get confirmPassword() {
    return cy.get('input[type="password"]');
  }

  get organizationConfiguration() {
    return cy.get('[data-cy="organization-configuration"]');
  }

  get deleteOrganizationButton() {
    return cy.get(
      'button[class="vs-c-btn vs-c-btn--warning vs-c-btn--spaced"]'
    );
  }

  get deleteOrganizationPasswordInput() {
    return cy.get('div[class="el-input"] input[type="password"]');
  }

  get confirmYourActionTitle() {
    return cy.get('div[class="vs-c-modal__header"] h4');
  }

  get yesButton() {
    return cy.get('button[name="save-btn"]');
  }

  get closeBoardInfoModal() {
    return cy.get('button[name="close-new-board-modal-btn"]');
  }

  get organiztionConfigurationName() {
    return cy.get('[data-vv-as="name"]');
  }

  get updateOrganizationNameButton() {
    return cy.get(
      'div[class="vs-c-settings-section vs-c-settings-section__info"] button[type="submit"]'
    );
  }

  crateOrganization(organizationName) {
    cy.intercept({
      method: "POST",
      url: "**/organizations",
    }).as("createOrganization");
    this.addNewButton.click();
    this.addNewOrganization.click();
    this.nextButton.should("be.disabled");
    this.organizationNameInput.type(organizationName);
    this.nextButton.click();
    this.nextButton.click();
    return cy.wait("@createOrganization").then((intercept) => {
      expect(intercept.response.statusCode).eql(201);
      return intercept.response;
    });
  }

  updateOrganization(newOrganizationName) {
    cy.intercept({
      method: "PUT",
      url: "**/organizations/*",
    }).as("updateOrganization");
    if (this.closeBoardInfoModal) {
      this.closeBoardInfoModal.click();
    }
    this.organizationConfiguration.click();
    this.updateOrganizationNameButton.should("be.disabled");
    this.organiztionConfigurationName.type(newOrganizationName);
    this.updateOrganizationNameButton.click();
    cy.wait("@updateOrganization").then((intercept) => {
      expect(intercept.response.statusCode).eql(200);
    });
  }

  deleteOrganization() {
    cy.intercept({
      method: "POST",
      url: "**/organizations/*",
    }).as("deleteOrganization");
    if (this.closeBoardInfoModal) {
      this.closeBoardInfoModal.click();
    }
    this.organizationConfiguration.click();
    this.deleteOrganizationButton.click();
    this.confirmYourActionTitle.should("have.text", "Confirm Your Action");
    this.yesButton.should("be.disabled");
    this.deleteOrganizationPasswordInput.type(Cypress.env("password"));
    this.yesButton.click();
    cy.wait("@deleteOrganization").then((intercept) => {
      expect(intercept.response.statusCode).eql(201);
    });
  }
}

export default new Organization();
