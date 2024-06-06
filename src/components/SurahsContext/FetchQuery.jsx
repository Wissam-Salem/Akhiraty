export const fetchFn = async () => {
  let response = await fetch("https://data-rosy.vercel.app/radio.json");
  let data = await response.json();
  return data;
};
