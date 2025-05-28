import { NominillasInterData } from "./NominillasInter-page.data";
import { NominillasInterElements } from "./NominillasInter-page.elements";

export class NominillasInterMethods {
  static navigateToNominillasInter() {
    cy.clearAllCookies();
    cy.clearLocalStorage()
    cy.visit(NominillasInterData.url);
 }

static navigateToAutenticarOk() {
    cy.visit(NominillasInterData.url);
 } 

static clicOnNominilla() {
    NominillasInterElements.Menu.Nominillas.click();
  }

  static clicOnCertificados() {
    NominillasInterElements.Menu.CertificadosRenta.click();
  }

  static clicOnRetenciones() {
    NominillasInterElements.Menu.CertificadosRenta.click();
  }
 static verifySignedUser(username) {
    NominillasInterElements.signedUser.should('exist');
  }  

  static verifyPermisos() {
    NominillasInterElements.NoPermisos.should('exist');
  }  
}
