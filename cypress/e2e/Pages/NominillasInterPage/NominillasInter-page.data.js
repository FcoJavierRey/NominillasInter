export class NominillasInterData {

static get url() {
    return "https://wwwpre.educacion.org/educacion/certificados/nominillasinter/scripts/nominillas.asp";
  };

  
  static get testSuites() {
    return {
      registro: "Registro",
      autenticacion: "NominillasInter: Autenticación",
      ImpresionNominillas: "NominillasInter: Impresión de Nominillas",
      CertificadosRenta: "NominillasInter: Certificados de Renta",
    };
  }

  
}
