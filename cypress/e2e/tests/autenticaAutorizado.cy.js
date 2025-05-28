
import { NominillasInterData } from "../Pages/NominillasInterPage/NominillasInter-page.data";
import { NominillasInterMethods } from "../Pages/NominillasInterPage/NominillasInter-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

describe(NominillasInterData.testSuites.autenticacion, () => {
    it("Usuario autorizado a funcionalidad", () => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio");
    NominillasInterMethods.navigateToNominillasInter();
    
    Logger.stepNumber(2);
    Logger.step("Ingresar un nombre de usuario autorizado");
    LoginMethods.insertUsername(LoginData.validCredentials.username);
    LoginMethods.insertPassword(LoginData.validCredentials.password);

    Logger.stepNumber(3);
    Logger.step('Hacer clic en "Conectar" para iniciar sesión');
    LoginMethods.clickOnLoginButton();
    Logger.verification("Verificar que se muestra la página de Consulta de Nóminas e IRPF");
    LoginMethods.verifyUser();
  });

});
