class LoginPage {
  get inputEmail() {
    return $('input[name="email"]');
  }
  get inputPassword() {
    return $('input[name="password"]');
  }
  get btnLogin() {
    return $('button[type="submit"]');
  }

  async login({ username = "pera@peric.com", password = "ovojesifra123" }) {
    await this.inputEmail.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
    expect(browser).toHaveUrlContaining("my-organizations");
  }
}

export default new LoginPage();
