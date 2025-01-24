import { Page } from "@playwright/test";

export class TextBoxPage {
    private page: Page;
    private fullNameInput = "#userName";
    private emailInput = "#userEmail";
    private currentAddressInput = "#currentAddress";
    private permanentAddressInput = "#permanentAddress";
    private submitButton = "#submit";
    private resultName = "#name";
    private resultEmail = "#email";
    private resultCurrentAddress = "#currentAddress";
    private resultPermanentAddress = "#permanentAddress";

    constructor(page: Page) {
        this.page = page;
    }

    async fillTextBox(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
        await this.page.fill(this.fullNameInput, fullName);
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.currentAddressInput, currentAddress);
        await this.page.fill(this.permanentAddressInput, permanentAddress);
    }

    async submitForm() {
        await this.page.click(this.submitButton);
        await this.page.waitForTimeout(2000);
    }

    async validateFormSubmission() {
        await this.page.waitForSelector(this.resultName, { timeout: 5000 });

        const expectedValues = {
            fullName: await this.page.textContent(this.resultName),
            email: await this.page.textContent(this.resultEmail),
            currentAddress: await this.page.textContent(this.resultCurrentAddress),
            permanentAddress: await this.page.textContent(this.resultPermanentAddress),
        };

        if (!expectedValues.fullName || !expectedValues.email || 
            !expectedValues.currentAddress || !expectedValues.permanentAddress) {
            throw new Error("Error: No se encontraron valores en los campos de resultado.");
        }
    }
}
