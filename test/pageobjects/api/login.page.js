import axios from "axios";
import apiValidation from "../../utils/apiValidation";
class Login {
  async userLogin({
    email = "pera@peric.com",
    password = "ovojesifra123",
    statusCode = 200,
    testMessage = "",
  }) {
    return await axios({
      method: "POST",
      url: "/login",
      data: {
        email: email,
        password: password,
      },
    }).then(async (response) => {
      await apiValidation.validation(response, statusCode, testMessage);
      return response.data.token;
    });
  }
}

export default new Login();
