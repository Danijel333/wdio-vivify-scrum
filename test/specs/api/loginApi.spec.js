import loginPage from "../../pageobjects/api/login.page";

describe("User API login smoke test", () => {
  it("VS-LOGAS-01-User API login with valid credentials", async () => {
    await loginPage.userLogin({
      testMessage: "VS-LOGA-01-User API login with valid credentials",
    });
  });
});
