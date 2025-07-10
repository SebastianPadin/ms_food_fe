import { test } from '@playwright/test';

test('Prueba simplificada de agregar registro de producción de huevos', async ({ page }) => {
  const startTime = performance.now();
  const clicks: string[] = [];

  const logClick = (element: string): void => {
    clicks.push(element);
    console.log(`Clic en: ${element}`);
  };

  // 1. Ir a la página
  await page.goto('http://localhost:4200/Modulo-Galpon/Producción de huevos', { timeout: 60000 });

  // 2. Abrir el modal
  const abrirModalButton = page.locator('button.bg-green-500:has-text("Agregar Producción")');
  await abrirModalButton.waitFor({ state: 'visible', timeout: 30000 });
  await abrirModalButton.click();
  logClick('Abrir Modal Agregar Producción');

  // Esperar a que el modal esté visible (asegurar que esté abierto)
  const modal = page.locator('div:has(h3:has-text("Nuevo Registro de Producción"))');
  await modal.waitFor({ state: 'visible', timeout: 10000 });

  // 3. Llenar el formulario
  await page.fill('#quantityEggs', '120');
  logClick('Cantidad de Huevos');

  await page.fill('#eggsKilo', '18');
  logClick('Huevos por kilo');

  await page.fill('#priceKilo', '6.5');
  logClick('Precio por kilo');

  const fechaActual = new Date().toISOString().split('T')[0]; // yyyy-mm-dd
  await page.fill('#registrationDate', fechaActual);
  logClick('Fecha de registro');

  // 4. Enviar el formulario
  const enviarFormularioButton = page.locator('button[type="submit"]:has-text("Guardar")');
  await enviarFormularioButton.waitFor({ state: 'visible', timeout: 10000 });
  await enviarFormularioButton.click();
  logClick('Guardar');

  // 5. Finalizar test
  const endTime = performance.now();
  const duration = (endTime - startTime) / 1000;

  console.log(`✅ El test tardó ${duration.toFixed(2)} segundos.`);
  console.log(`🖱️ Total de clics realizados: ${clicks.length}`);
});
