import { constants, testData } from "../../data/data.json";
import { randomStringFourDigits } from "../../utils/dataGenerator";
import axios from "axios";
import apiValidation from "../../utils/apiValidation";

class Board {
  async createBoard({
    name = testData.apiNewBoard,
    type = constants.scrumBoard,
    organizationId,
    statusCode = 201,
    token,
    testMessage = "",
  }) {
    return await axios({
      method: "post",
      url: "/boards",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        name: name,
        type: type,
        organization_id: organizationId,
      },
    }).then(async (response) => {
      await apiValidation.validation(response, statusCode, testMessage);
      return response.data.id;
    });
  }
  async getBoardInfo({ boardId, statusCode = 200, token, testMessage = "" }) {
    await axios({
      method: "get",
      url: `/boards/${boardId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(async (response) => {
      await apiValidation.validation(response, statusCode, testMessage);
    });
  }
  async updateBoard({
    boardId,
    name = testData.apiUpdateBoard,
    description = "API board description",
    code = randomStringFourDigits(),
    statusCode = 200,
    token,
    testMessage = "",
  }) {
    await axios({
      method: "put",
      url: `/boards/${boardId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        name: name,
        description: description,
        code: code,
      },
    }).then(async (response) => {
      await apiValidation.validation(response, statusCode, testMessage);
    });
  }
  async deleteBoard({ boardId, statusCode = 200, token, testMessage }) {
    return await axios({
      method: "delete",
      url: `/boards/${boardId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(async (response) => {
      await apiValidation.validation(response, statusCode, testMessage);
    });
  }
}

export default new Board();
