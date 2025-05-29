
import { NominillasInterData } from "../Pages/NominillasInterPage/NominillasInter-page.data";
import { NominillasInterMethods } from "../Pages/NominillasInterPage/NominillasInter-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

describe(NominillasInterData.testSuites.Nominillas, () => {

  it("Seleccionar Nominillas", () => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio");
    NominillasInterMethods.navigateToNominillasInter();
    
    Logger.stepNumber(2);
    Logger.step("Iniciar Sesión en NominillasInter");
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password);
    Logger.verification("Verificar que se muestra la página de Consulta de Nóminas e IRPF");
    LoginMethods.verifyUser();

    Logger.stepNumber(3);
    Logger.step("Hacer clic en botón Ver Nominilla");
    NominillasInterMethods.clicOnVerNominilla();
    Logger.verification("Verificar que se muestra la página de Nominillas");
    NominillasInterMethods.navigateToNominillaOk()
  });

    it("Seleccionar Nominillas Anteriores", () => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio");
    NominillasInterMethods.navigateToNominillasInter();
    
    Logger.stepNumber(2);
    Logger.step("Iniciar Sesión en NominillasInter");
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password);
    Logger.verification("Verificar que se muestra la página de Consulta de Nóminas e IRPF");
    LoginMethods.verifyUser();

    Logger.stepNumber(3);
    Logger.step("Hacer clic en botón Seleccionar Mes");
    NominillasInterMethods.clicOnSeleccionarMes();
    Logger.verification("Verificar que se muestra la página de Nominillas Anteriores");
    NominillasInterMethods.navigateToNominillaAnteriorOk()

    Logger.stepNumber(4);
    Logger.step("Hacer clic en botón Ver Nominilla");
    cy.get('input[value="Ver Nominilla"]').first().click();
    Logger.verification("Verificar que se muestra la Nominilla Anterior");
    cy.location('pathname').should('contains', 'imprimir2.asp');
  });

});