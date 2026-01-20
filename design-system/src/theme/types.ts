export type BackgroundColor = keyof Theme['colors']['background'];
export type BorderColor = keyof Theme['colors']['border'];
export type TextColor = keyof Theme['colors']['text'];
export type IconColor = keyof Theme['colors']['icon'];
export type OverlayColor = keyof Theme['colors']['overlay'];

export type Theme = {
  colors: {
    background: {
      default: string;
      surface: string;
      defaultStrong: string;
      primary: string;
      primaryWeak: string;
      primaryStrong: string;
      accent: string;
      accentWeak: string;
      accentStrong: string;
      success: string;
      successWeak: string;
      successStrong: string;
      error: string;
      errorWeak: string;
      errorStrong: string;
      warning: string;
      warningWeak: string;
      warningStrong: string;
      info: string;
      infoWeak: string;
      infoStrong: string;
    };
    border: {
      subtle: string;
      default: string;
      active: string;
      action: string;
      error: string;
      success: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      onDefault: string;
      onAccent: string;
      success: string;
      error: string;
      warning: string;
      info: string;
    };
    icon: {
      default: string;
      secondary: string;
      active: string;
      heart: string;
      success: string;
      error: string;
      warning: string;
      info: string;
    };
    overlay: {
      scrim: string;
      image: string;
      frost: string;
    };
  };
};
