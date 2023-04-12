import allureReporter from "@wdio/allure-reporter";
import loginPage from "../../../pageobjects/login.page";

describe("Login page smoke tests", () => {
  before("Visit login page", async () => {
    await browser.visitAndValidateUrl("/login");
  });
  it("VS-LOG-01-User login with valid credentials", async () => {
    allureReporter.addFeature("Login page - valid submission");
    allureReporter.addDescription("Vivify Scrum user login");
    allureReporter.addSeverity("Critical");
    await loginPage.login({});
  });
});
