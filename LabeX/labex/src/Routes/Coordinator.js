export const goToAbout = (history) => {
    history.push("/Sobre");
  };
  
  export const goToApplication = (history) => {
    history.push("/Cadastro");
  };
 
  export const goToHome = (history) => {
    history.push("/");
  };
  
  export const goToLogin = (history) => {
    history.push("/Login");
  };
  
  export const goToTripsList = (history) => {
    history.push("/trips/list");
  };

  
// ACESSO ADM  
  export const goToTripDetails = (history) => {
    history.push("/trips/details");
  };
 
  export const goToCreate = (history) => {
    history.push("/trips/create");
  };

  export const goToAdmDetails = (history) => {
    history.push("/trips/AdmDetails/`${id}`");
  };


  
  
