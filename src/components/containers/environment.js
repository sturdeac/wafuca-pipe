import { prodCaptcha, localCaptcha } from "./config/keys";

export default function getCaptchaKey() {
  if (window.location.hostname === "localhost") {
    return localCaptcha;
  }
  return prodCaptcha;
};