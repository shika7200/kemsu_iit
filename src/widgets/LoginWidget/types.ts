export type  LogoProps = {
  src: string;
  alt: string;
}


export type HeadingProps  ={
  text: string;
}


export type  InputProps = {
  placeholder: string;
}

export type ButtonConfig = {
    buttonText: string;
    path: string;
  }

export type InputConfig ={
    placeholder: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }