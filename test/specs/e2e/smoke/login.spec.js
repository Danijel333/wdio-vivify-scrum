import loginPage from "../../../pageobjects/login.page";

describe("Login page smoke tests", () => {
  before("Visit login page", async () => {
    await browser.url("/login");
    await browser.validatePageUrl("login");
  });
  it("VS-LOG-01-User login with valid credentials", async () => {
    await loginPage.login({});
  });
});
