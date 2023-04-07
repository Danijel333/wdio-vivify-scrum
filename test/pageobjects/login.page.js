import Page from "../pageobjects/page";

class LoginPage extends Page {
  get inputUsername() {
    return $("#username");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
  openUrl() {
    return super.openUrl("login");
  }
}

export default new LoginPage();
