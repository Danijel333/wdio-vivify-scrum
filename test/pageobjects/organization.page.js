import { validationMessages } from "../data/data.json";
import { randomStringGenerator } from "../utils/dataGenerator";

class Organization {
  get addNewButton() {
    return $(
      'div[class="vs-c-list__btn el-tooltip vs-c-list-btn--new-workspace"]'
    );
  }
  get addNewOrganization() {
    return $('//span[text()=" Add Organization "]');
  }
  get organizationNameInput() {
    return $('input[name="name"]');
  }
  get nextButton() {
    return $('button[name="next_btn"]');
  }
  get fileUploadArea() {
    return $('[name="file"]');
  }
  get confirmPassword() {
    return $('input[type="password"]');
  }
  get organizationConfiguration() {
    return $('[data-cy="organization-configuration"]');
  }
  get deleteOrganizationButton() {
    return $('button[class="vs-c-btn vs-c-btn--warning vs-c-btn--spaced"]');
  }
  get deleteOrganizationPasswordInput() {
    return $('div[class="el-input"] input[type="password"]');
  }
  get confirmYourActionTitle() {
    return $('div[class="vs-c-modal__header"] h4');
  }
  get yesButton() {
    return $('button[name="save-btn"]');
  }
  get closeBoardInfoModal() {
    return $('button[name="close-new-board-modal-btn"]');
  }
  get organiztionConfigurationName() {
    return $('[data-vv-as="name"]');
  }
  get updateOrganizationNameButton() {
    return $(
      'div[class="vs-c-settings-section vs-c-settings-section__info"] button[type="submit"]'
    );
  }
  get uploadFileButton() {
    return $('[name="save-btn"]');
  }

  async createOrganization(organizationName) {
    await this.addNewButton.click();
    await this.addNewOrganization.click();
    expect(await this.nextButton).toBeDisabled();
    await this.organizationNameInput.setValue(organizationName);
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
  }

  async updateOrganization(newOrganizationName) {
    if ((await this.closeBoardInfoModal).isDisplayedInViewport()) {
      await this.closeBoardInfoModal.click();
    }
    await this.organizationConfiguration.click();
    expect(await this.updateOrganizationNameButton).toBeDisabled();
    await this.organiztionConfigurationName.setValue(newOrganizationName);
    await this.updateOrganizationNameButton.click();
  }

  async deleteOrganization() {
    await this.organizationConfiguration.click();
    await this.deleteOrganizationButton.click();
    await expect(await this.confirmYourActionTitle).toHaveTextContaining(
      validationMessages.confirmAction
    );
    expect(await this.yesButton).toBeDisabled();
    await this.deleteOrganizationPasswordInput.setValue("ovojesifra123");
    await this.yesButton.click();
  }
}

export default new Organization();
