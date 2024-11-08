// utils.js
export const adjustUrlYoutube = (url: string | URL) => {
  const urlObj = new URL(url);
  const videoId = urlObj.pathname.split("/")[1];
  const params = urlObj.search;
  return `https://youtube.com/embed/${videoId}${params}`;
};
