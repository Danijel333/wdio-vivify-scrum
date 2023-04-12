import loginPage from "../../../pageobjects/login.page";
import organizationPage from "../../../pageobjects/organization.page";

describe("Create organization smoke test", () => {
  before("User login", async () => {
    await browser.visitAndValidateUrl("/login");
    await loginPage.login({});
  });
  it("VS-ORG-01-Create organization", async () => {
    await organizationPage.crateOrganization();
  });
  it("VS-ORG-02-Update organization", async () => {
    await organizationPage.updateOrganization();
  });
  it("VS-ORG-03-Delete organization", async () => {
    await browser.refresh();
    await organizationPage.deleteOrganization();
  });
});
