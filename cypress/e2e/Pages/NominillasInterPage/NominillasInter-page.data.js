export class NominillasInterData {

static get url() {
    return "https://wwwpre.educacion.org/educacion/certificados/nominillasinter/scripts/nominillas.asp";
  };

static get urlRevision() {
    return "https://www3.gobiernodecanarias.org/educacion/cau_ce/cas/login";
  };

static get urlCambioIBAN() {
    return "https://www.gobiernodecanarias.org/cmsweb/export/sites/educacion/web/servicios/oficina_virtual_personal_docente/_doc/";
  };

static get urlCertificado() {
    return "https://wwwpre.educacion.org/educacion/Certificados/NominillasInter/Scripts/Imprimir2.asp";
  };

static get urlNominilla() {
    return "https://wwwpre.educacion.org/educacion/Certificados/NominillasInter/Scripts/imprimir2.asp";
  };

static get urlNominillaAnterior() {
    return "https://wwwpre.educacion.org/educacion/Certificados/NominillasInter/Scripts/opciones.asp";
};
 
  static get testSuites() {
    return {
      registro: "Registro",
      autenticacion: "NominillasInter: Autenticación",
      RevisionNominillas: "NominillasInter: Revisión de la cuenta corriente en formato IBAN",
      CertificadoRetenciones: "NominillasInter: Certificados de Retenciones y Plan de Pensiones",
      Nominillas: "NominillasInter: Nominillas",
      CambioDireccion: "Solicitud de Cambio de Dirección",
      DeclaracionResidencia: "Declaración de residencia habitual y efectiva en la isla de La Palma",
    };
  }

  
}
