# 🧪 Demo Automation Testing con TypeScript, Playwright y Cucumber

## 📌 Descripción
Este proyecto automatiza la interacción con la página [DemoQA](https://demoqa.com/) utilizando **Playwright** y **Cucumber** (BDD con TypeScript). Además, se generan reportes de pruebas para visualizar los resultados de manera gráfica.

---

## 🚀 Tecnologías utilizadas

🔹 **TypeScript** (Lenguaje principal)  
🔹 **Cucumber** (Framework BDD)  
🔹 **Playwright** (Automatización del navegador)  
🔹 **Cucumber HTML Reporter** (Reportes visuales)  

---

## 📂 Estructura del proyecto
```
📦 demo-typescript-playwright-cucumber
├── 📂 features              # Escenarios de prueba en Gherkin
│   ├── demoqa_textbox.feature
├── 📂 step-definitions      # Implementación de los steps en TypeScript
│   ├── demoqa_steps.ts
│   ├── textbox_steps.ts
├── 📂 pages                 # Page Object Model (POM) para las páginas
│   ├── textbox_page.ts
├── 📂 reports               # Resultados y reportes de pruebas
│   ├── cucumber-report.json
│   ├── cucumber-report.html
├── 📂 node_modules          # Dependencias instaladas (npm install)
├── cucumber.js              # Configuración de Cucumber
├── package.json             # Dependencias y scripts del proyecto
├── tsconfig.json            # Configuración de TypeScript
├── playwright.config.ts     # Configuración de Playwright
```

---

## ⚙️ Instalación
### 🔹 1. Clonar el repositorio
```sh
git clone https://github.com/usuario/demo-typescript-playwright-cucumber.git
cd demo-typescript-playwright-cucumber
```

### 🔹 2. Instalar dependencias
```sh
npm install
```

### 🔹 3. Instalar los navegadores de Playwright
```sh
npx playwright install
```

---

## 🏃‍♂️ Ejecución de las pruebas
### 🔹 1. Ejecutar los tests con Cucumber y Playwright
```sh
npm test
```

### 🔹 2. Generar un reporte JSON y HTML
```sh
npm run test:report
```

### 🔹 3. Abrir el reporte en el navegador
```sh
npx cucumber-html-reporter --theme bootstrap --jsonFile=reports/cucumber-report.json --output=reports/cucumber-report.html
```

Si esto no funciona, abre manualmente `reports/cucumber-report.html`.

---

## ✨ Ejemplo de Escenario
Archivo: **`features/demoqa_textbox.feature`**
```gherkin
Feature: Rellenamos el formulario de TextBox

  Scenario: Rellenamos el formulario de TextBox con datos válidos
    Given el usuario está en la página de "https://demoqa.com/"
    And clicamos sobre el apartado "Elements"
    And nos dirigimos a "Text Box"
    When interactúa con el formulario de registro
      | full_name       | email              | current_address  | permanent_address |
      | Ismael Sanromán | isanroman@sdet.com | Calle SDET, 1    | Calle prueba, 2   |
    Then el formulario es enviado correctamente
```

---

## 📌 Notas importantes
1️⃣ **Asegúrate de instalar Playwright correctamente**
   ```sh
   npx playwright install --with-deps
   ```

2️⃣ Si el reporte de Cucumber no se abre correctamente, intenta regenerarlo:
   ```sh
   rm -rf reports/cucumber-report.json
   npm run test:report
   ```

3️⃣ **Configuración de ejecución en modo headless:** Si deseas ejecutar las pruebas en modo **headless** (sin interfaz gráfica), modifica `playwright.config.ts`:
   ```typescript
   use: { headless: true }
   ```

---

## 📌 Contacto
[📧 Email](mailto:tuemail@ejemplo.com)  
[🤖 GitHub:](https://github.com/usuario)

