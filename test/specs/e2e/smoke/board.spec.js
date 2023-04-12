import loginPage from "../../../pageobjects/login.page";
import board from "../../../pageobjects/board.page";

describe("Create board smoke test", async () => {
  before("User login", async () => {
    await browser.visitAndValidateUrl("/login");
    await loginPage.login({});
  });
  it("VS-BRD-01-Create scrum board", async () => {
    await board.createBoard({});
  });
  it("VS-BRD-02-Create kanban board", async () => {
    await browser.refresh();
    await board.createBoard({ boardName: "kanban board", scrumType: false });
  });
});
