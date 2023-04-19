import loginPage from "../../pageobjects/api/login.page";
import organizationPage from "../../pageobjects/api/organization.page";
import boardPage from "../../pageobjects/api/board.page";

describe("Board API CRUD smoke tests", () => {
  let token;
  let organizationID;
  let boardID;
  before(async () => {
    await loginPage
      .userLogin({ testMessage: "VS-BRDAS-User login" })
      .then(async (tokenData) => {
        token = tokenData;
        await organizationPage
          .createOrganization({
            token: tokenData,
            testMessage: "VS-BRDAS-Create organization",
          })
          .then((organizationData) => {
            organizationID = organizationData;
          });
      });
  });
  it("VS-BRDAS-01-Create board with valid data", async () => {
    await boardPage
      .createBoard({
        token: token,
        organizationId: organizationID,
        testMessage: "VS-BRDAS-01-Create board with valid data",
      })
      .then((boardData) => {
        boardID = boardData;
      });
  });
  it("VS-BRDAS-02-Get board info", async () => {
    await boardPage.getBoardInfo({
      token: token,
      boardId: boardID,
      testMessage: "VS-BRDAS-02-Get board info",
    });
  });
  it("VS-BRDAS-03-Update board", async () => {
    await boardPage.updateBoard({
      boardId: boardID,
      token: token,
      testMessage: "VS-BRDAS-03-Update board",
    });
  });
  it("VS-BRDAS-04-Delete board", async () => {
    await boardPage.deleteBoard({
      boardId: boardID,
      token: token,
      testMessage: "VS-BRDAS-04-Delete board",
    });
  });
});
