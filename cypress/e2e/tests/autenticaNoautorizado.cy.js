
import { NominillasInterData } from "../Pages/NominillasInterPage/NominillasInter-page.data";
import { NominillasInterMethods } from "../Pages/NominillasInterPage/NominillasInter-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

describe(NominillasInterData.testSuites.autenticacion, () => {
    it("Usuario no pertenece a funcionalidad", () => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio");
    NominillasInterMethods.navigateToNominillasInter();
    
    Logger.stepNumber(2);
    Logger.step("Ingresar un nombre de usuario no autorizado");
    LoginMethods.insertUsername(LoginData.invalidCredentials.username);
    LoginMethods.insertPassword(LoginData.invalidCredentials.password);

    Logger.stepNumber(3);
    Logger.step('Hacer clic en "Conectar" para iniciar sesión');
    LoginMethods.clickOnLoginButton();
    Logger.verification("Verificar que se muestra un mensaje de error indicando que el usuario no pertenece al perfil o funcionalidad");
    LoginMethods.verifyAlert();
  });

});
