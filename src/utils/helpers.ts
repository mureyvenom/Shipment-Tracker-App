export const numberWithCommas = (x: number, decimals?: number) => {
  return x.toFixed(decimals || 0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const frequency = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

export const addAlpha = (color: string, opacity: number) => {
  // coerce values so ti is between 0 and 1.
  var _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
};

export const makeCamelCase = (str: string) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) {
      return '';
    } // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
};

export const getFormattedTime = (duration: number) => {
  let totalSeconds = duration;
  // let hours: string | number = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes: string | number = Math.floor(totalSeconds / 60);
  let seconds: string | number = totalSeconds % 60;

  minutes = String(minutes).padStart(2, '0');
  // hours = String(hours).padStart(2, '0');
  seconds = String(seconds.toFixed()).padStart(2, '0');
  return `${minutes && minutes + ':'}${seconds}`;
};

export const getUrl = () => {
  // return ENV_BASE_URL
  return 'https://shippex-demo.bc.brandimic.com/api/method';
};

export const validateEmail = (email: string) => {
  return email.match(
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
};

export const getHoursAndMinutes = (videoDuration: number) => {
  let totalSeconds = videoDuration / 1000;
  let hours: string | number = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  // let minutes: string | number = Math.floor(totalSeconds / 60);
  // let seconds: string | number = totalSeconds % 60;

  // minutes = String(Number(minutes.toFixed(0))).padStart(2, '0');
  hours = String(hours).padStart(2, '0');
  // seconds = String(seconds.toFixed()).padStart(2, '0');
  return hours + 'hr(s) ';
  // + minutes + 'min(s)';
};

export const appearanceMap = ['dark', 'light', 'system'];
