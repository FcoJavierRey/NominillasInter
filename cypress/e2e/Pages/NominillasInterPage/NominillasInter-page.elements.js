export class NominillasInterElements {
  static get Menu() {
    return {
      get  Nominillas() {
           return cy.contains('font', 'Nominillas');
        
      },

       get  CertificadosRenta() {
        return cy.contains('font', 'Certificados de la Renta');
        
      },
           
    };
  }
  
   static get NoPermisos(){
    return cy.contains('p', 'El usuario introducido no pertenece al perfil o funcionalidad especificada ');
  }
 static get signedUser() {
    return cy.contains('a', 'Inicio');
  }

}
