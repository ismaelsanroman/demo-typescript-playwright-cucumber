import { When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import { TextBoxPage } from "../pages/textbox_page";

When("interactúa con el formulario de registro", async function (dataTable) {
    if (!this.page) throw new Error("Error: 'page' no ha sido inicializada.");
    const textBoxPage = new TextBoxPage(this.page);

    for (const row of dataTable.rows()) {
        await textBoxPage.fillTextBox(row[0], row[1], row[2], row[3]);
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await textBoxPage.submitForm();
    }
});

Then("el formulario es enviado correctamente", async function () {
    if (!this.page) throw new Error("Error: 'page' no ha sido inicializada.");
    const textBoxPage = new TextBoxPage(this.page);
    
    await this.page.waitForTimeout(2000); // Espera antes de la validación
    await textBoxPage.validateFormSubmission();
});
