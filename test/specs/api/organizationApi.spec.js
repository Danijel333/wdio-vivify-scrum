import loginPage from "../../pageobjects/api/login.page";
import organizationPage from "../../pageobjects/api/organization.page";

describe("Organization API CRUD smoke tests ", () => {
  let token;
  let organizationID;
  before(async () => {
    await loginPage
      .userLogin({ testMessage: "VS-ORGA-User login" })
      .then((tokenData) => {
        token = tokenData;
      });
  });
  it("VS-ORGAS-01-Create organization with valid data", async () => {
    await organizationPage
      .createOrganization({
        token: token,
        testMessage: "VS-ORGA-01-Create organization with valid data",
      })
      .then((organizationData) => {
        organizationID = organizationData;
      });
  });
  it("VS-ORGAS-02-Get organization data", async () => {
    await organizationPage.getOrganizationInfo({
      organizationId: organizationID,
      token: token,
      testMessage: "VS-ORGAS-02-Get organization data",
    });
  });
  it("VS-ORGAS-03-Update organization data", async () => {
    await organizationPage.updateOrganization({
      organizationId: organizationID,
      token: token,
      testMessage: "VS-ORGAS-03-Update organization data",
    });
  });
  it("VS-ORGAS-04-Delete organization ", async () => {
    await organizationPage.updateOrganization({
      organizationId: organizationID,
      token: token,
      testMessage: "VS-ORGAS-04-Delete organization ",
    });
  });
});
