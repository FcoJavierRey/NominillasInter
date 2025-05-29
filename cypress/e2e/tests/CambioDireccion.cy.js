
import { NominillasInterData } from "../Pages/NominillasInterPage/NominillasInter-page.data";
import { NominillasInterMethods } from "../Pages/NominillasInterPage/NominillasInter-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

describe(NominillasInterData.testSuites.CambioDireccion, () => {
  it("Seleccionar Solicitar el cambio", () => {
   Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio");
    NominillasInterMethods.navigateToNominillasInter();
    
    Logger.stepNumber(2);
    Logger.step("Iniciar Sesión en NominillasInter");
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password);
    Logger.verification("Verificar que se muestra la página de Consulta de Nóminas e IRPF");
    LoginMethods.verifyUser();

    Logger.stepNumber(3);
    Logger.step("Hacer clic en enlace Solicitar el cambio");
    NominillasInterMethods.clicOnSolicitarCambio();
    Logger.verification("Verificar que se muestra la página de Solicitar Cambio");
    NominillasInterMethods.navigateToCambioDireccionOk()
  });
 

});