import { testData } from "../../data/data.json";
import axios from "axios";
import apiValidation from "../../utils/apiValidation";

class Organization {
  async createOrganization({
    name = testData.apiNewOrganization,
    statusCode = 201,
    testMessage = "",
    token,
  }) {
    return await axios({
      method: "post",
      url: "/organizations",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        name: name,
      },
    })
      .then(async (response) => {
        await apiValidation.validation(response, statusCode, testMessage);
        return response.data.id;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async getOrganizationInfo({
    organizationId = "",
    statusCode = 200,
    token,
    testMessage = "",
  }) {
    return await axios({
      method: "get",
      url: `/organizations/${organizationId}/boards-data`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(async (response) => {
      await apiValidation.validation(response, statusCode, testMessage);
      return response.data;
    });
  }
  async updateOrganization({
    name = testData.apiUpdateOrganization,
    organizationId = "",
    statusCode = 200,
    token,
    testMessage = "",
  }) {
    return await axios({
      method: "put",
      url: `/organizations/${organizationId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        name: name,
      },
    }).then(async (response) => {
      await apiValidation.validation(response, statusCode, testMessage);
      return response.body;
    });
  }
  async deleteOrganization({
    passwordOrEmail = "ovojesifra123",
    organizationId = "",
    statusCode = 201,
    token = "",
    testMessage,
  }) {
    return await axios({
      method: "post",
      url: `organizations/${organizationId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        passwordOrEmail: passwordOrEmail,
      },
    }).then(async (response) => {
      await apiValidation.validation(response, statusCode, testMessage);
      console.log(response.data);
    });
  }
}

export default new Organization();
