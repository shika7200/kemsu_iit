type ProfProps = {
  
    avatar: string;
    surname: string;
    name: string;
    fathername: string;
    status: string;
    phone: string;
    mail: string;
    description: string;
  }
  
  type ProfBlockProps = ProfProps & {
    orientation: string;
    isAuthorized: boolean; 
  }
  