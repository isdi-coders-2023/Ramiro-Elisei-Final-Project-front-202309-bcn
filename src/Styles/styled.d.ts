import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    paddingSide: string;
    paddingTop: string;

    color: {
      main: string;
      secondary: string;
      accentBright: string;
      accentMedium: string;
      backgroundLight: string;
      backgorundMedium: string;
      backgroundDark: string;
      disable: string;
      successfull: string;
      unSuccessfull: string;
    };

    typography: {
      mainFont: string;
    };
  }
}
