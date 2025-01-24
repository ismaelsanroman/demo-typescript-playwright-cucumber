import { Given, When } from "@cucumber/cucumber";
import { chromium } from "playwright";
import { TextBoxPage } from "../pages/textbox_page";

Given("el usuario está en la página de {string}", { timeout: 20000 }, async function (url: string) {
    const browser = await chromium.launch();
    this.page = await browser.newPage(); // Guardamos en `this.page`
    await this.page.goto(url, { timeout: 15000 });
    await this.page.waitForLoadState("networkidle");
    this.textBoxPage = new TextBoxPage(this.page); // Guardamos también el Page Object
});

When("clicamos sobre el apartado {string}", async function (menu: string) {
    await this.page.click(`text=${menu}`);
});

When("nos dirigimos a {string}", async function (option: string) {
    const optionsMap: Record<string, string> = {
        "text box": "#item-0",
        "check box": "#item-1",
        "radio button": "#item-2"
    };

    if (!optionsMap[option.toLowerCase()]) {
        throw new Error(`Opción no válida: ${option}`);
    }

    await this.page.click(optionsMap[option.toLowerCase()]);
});
