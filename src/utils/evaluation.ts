export const toNumber = (value: string): number =>
  Number(value.replace(/,/g, ""));

export const formatter = (value: string): string => {
  if (Number(value) > 999999999 || Number(value) < -999999999) {
    console.log("expo time", value);
    return Number(value)
      .toExponential(0)
      .replace("+", "");
  }

  if (value.indexOf(".") !== -1) {
    if (value.charAt(1) === "." && value.length >= 10) {
      return Number(value).toExponential(0);
    }
    const [integer, fraction] = value.split(".");
    return `${Number(integer).toLocaleString("en-gb")}.${fraction}`;
  }

  return `${Number(value).toLocaleString("en-gb")}`;
};

export const scaleTextSize = (text: string) => {
  switch (text.length) {
    case 6:
    case 7:
      return {
        fontSize: 62
      };
    case 8:
      return {
        fontSize: 58
      };
    case 9:
      return {
        fontSize: 54
      };
    case 10:
      return {
        fontSize: 48
      };
    case 11:
      return {
        fontSize: 44
      };
    case 12:
      return {
        fontSize: 42
      };
    default:
      return {};
  }
};
