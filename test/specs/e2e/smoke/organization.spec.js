import loginPage from "../../../pageobjects/login.page";
import organizationPage from "../../../pageobjects/organization.page";

describe("Create organization smoke test", () => {
  before("User login", async () => {
    await browser.visitAndValidateUrl("/login");
    await browser.setupInterceptor();
    await loginPage.login({});
  });
  after(async () => {
    await browser.expectRequest(
      "POST",
      "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations",
      201
    );
    await browser.assertExpectedRequestsOnly();
  });
  it("VS-ORG-01-Create organization", async () => {
    await organizationPage.createOrganization("New organization");
  });
  it("VS-ORG-02-Update organization", async () => {
    await organizationPage.updateOrganization("Edited organization");
  });
  it("VS-ORG-03-Delete organization", async () => {
    await browser.refresh();
    await organizationPage.deleteOrganization();
  });
});
