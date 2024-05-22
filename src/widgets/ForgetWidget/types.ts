export type InputConfig ={
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

export type ButtonConfig  ={
    buttonText: string;
    onClick: () => void;
    disabled?: boolean;
  }

export type  ForgetWidgetProps ={
    onCodeSubmit: (email: string) => void;
  }
  