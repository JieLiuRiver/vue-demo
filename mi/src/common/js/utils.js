export function setHtmlSize() {
  let iW = document.documentElement.clientWidth;
  document.getElementsByTagName("html")[0].style.fontSize=iW/3.75+"px";
}
