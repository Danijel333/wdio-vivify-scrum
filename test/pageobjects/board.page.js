class Board {
  get addNewButton() {
    return $(
      'div[class="vs-c-list__btn el-tooltip vs-c-list-btn--new-workspace"]'
    );
  }
  get addNewBoardButton() {
    return $('//span[text()=" Add Board "]');
  }
  get openDropDownMenu() {
    return $('[class="el-input__inner"]');
  }
  get selectItemFromDropDown() {
    return $$(".el-scrollbar__view .el-select-dropdown__item");
  }
  get boardNameInput() {
    return $('input[name="name"]');
  }
  get nextButton() {
    return $('button[name="next_btn"]');
  }
  get radioTypeScrum() {
    return $('span[name="type_scrum"]');
  }
  get radioTypeKanban() {
    return $('span[name="type_kanban"]');
  }
  get fileUploadArea() {
    return $('[name="file"]');
  }
  get uploadFileButton() {
    return $('[name="save-btn"]');
  }

  async createBoard({ boardName = "Scrum board", scrumType = true }) {
    await this.addNewButton.click();
    await this.addNewBoardButton.click();
    expect(await this.nextButton).toBeDisabled();
    await this.openDropDownMenu.click();
    await this.selectItemFromDropDown[0].waitForDisplayed();
    await this.selectItemFromDropDown[0].click();
    await this.boardNameInput.setValue(boardName);
    await this.nextButton.click();
    expect(await this.nextButton).toBeDisabled();
    scrumType
      ? await this.radioTypeScrum.click()
      : await this.radioTypeKanban.click();
    await this.nextButton.click();
    await this.nextButton.click();
    await browser.execute(() => {
      document
        .getElementsByName("file")[0]
        .setAttribute("style", "display: block");
    });
    (await this.fileUploadArea).waitForDisplayed();
    await this.fileUploadArea.setValue(
      await browser.uploadFile("test/data/fileToUpload.jpeg")
    );
    await this.uploadFileButton.click();
    await this.nextButton.click();
    await this.nextButton.click();
    await browser.expe;
  }
}

export default new Board();
