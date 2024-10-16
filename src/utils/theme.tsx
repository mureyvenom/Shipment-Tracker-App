import { createTheme } from '@shopify/restyle';

const palette = {
  //default colors
  // blue: '#101029',
  white: '#FFFFFF',
  black: '#000000',
  purple: '#2F50C1',
  faded_purple: '#F4F2F8',
  faded_blue: '#F4F2F8',
  red: '#D12030',
  border: '#D0D5DD',
  placeholder: '#A7A3B3',
  green: '#208D28',
  yellow: '#DB7E21',
  blue: '#F4F2F8',
};

export const theme = createTheme({
  colors: {
    background: palette.white,
    foreground: palette.black,
    primary: palette.purple,
    faded_primary: palette.faded_purple,
    white: palette.white,
    black: palette.black,
    danger: palette.red,
    border: palette.border,
    placeholder: palette.placeholder,
    label: '#101928',
    success: palette.green,
    warning: palette.yellow,
    select_bg: '#FAFAFA',
    transparent: 'transparent',
    faded: '#757281',
    icon: '#667185',
    faded_border: '#E4E7EC',
    tinted_bg: '#F6F6F6',
    faded_success: '#208D28',
    active_tab: '#91D6A8',
    main_blue: '#3E7EFF',
    f7: '#F7F7F7',
    alternative: '#475467',
    dark7: '#717171',
    faded_warning: '#FFF3D5',
    paste_bg: '#F2F4F7',
    purple: '#9747FF',
    faded_danger: '#FEE3D4',
    pitch: '#4561DB',
    filter_text: '#58536E',
    shipment_text: '#3F395C',
    disabled_button: '#EAE7F2',
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    '30': 30,
    xl: 40,
    mxl: 60,
    xxl: 80,
    pad: 20,
    mid: 12,
  },
  textVariants: {
    extrabold: {
      fontSize: 14,
      color: 'foreground',
      fontFamily: 'SF-Pro-Text-Heavy',
    },
    bold: {
      fontSize: 14,
      color: 'foreground',
      fontFamily: 'SF-Pro-Text-Bold',
    },
    semibold: {
      fontSize: 14,
      color: 'foreground',
      fontFamily: 'SF-Pro-Text-Semibold',
    },
    medium: {
      fontSize: 14,
      color: 'foreground',
      fontFamily: 'SF-Pro-Text-Medium',
    },
    regular: {
      fontSize: 14,
      color: 'foreground',
      fontFamily: 'SF-Pro-Text-Regular',
    },
    light: {
      fontSize: 14,
      color: 'foreground',
      fontFamily: 'SF-Pro-Text-Light',
    },
    inter_extrabold: {
      fontSize: 14,
      color: 'foreground',
      fontFamily: 'Inter-ExtraBold',
    },
    inter_bold: {
      fontSize: 14,
      color: 'foreground',
      fontFamily: 'Inter-Bold',
    },
    inter_semibold: {
      fontSize: 14,
      color: 'foreground',
      fontFamily: 'Inter-SemiBold',
    },
    inter_medium: {
      fontSize: 14,
      color: 'foreground',
      fontFamily: 'Inter-Medium',
    },
    inter_regular: {
      fontSize: 14,
      color: 'foreground',
      fontFamily: 'Inter-Regular',
    },
    inter_light: {
      fontSize: 14,
      color: 'foreground',
      fontFamily: 'Inter-Light',
    },
    defaults: {
      fontSize: 14,
      color: 'foreground',
      fontFamily: 'SF-Pro-Text-Regular',
    },
  },
  breakpoints: {},
});

export type Theme = typeof theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.black,
    foreground: palette.white,
  },
};
export default theme;
