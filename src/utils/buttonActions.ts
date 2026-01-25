export const openUrl = (url: string) => {
  window.open(url, "_blank");
};

export const openMultipleUrls = (urls: string[]) => {
  urls.forEach((url) => {
    window.open(url, "_blank");
  });
};

const open1 = () => window.open("https://a.com", "_blank");
const open2 = () => window.open("https://b.com", "_blank");
const open3 = () => window.open("https://c.com", "_blank");
const open4 = () => window.open("https://d.com", "_blank");
const open5 = () => window.open("https://e.com", "_blank");

export const openAll = () => {
  open1();
  open2();
  open3();
  open4();
  open5();
};
