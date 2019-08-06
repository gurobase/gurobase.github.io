document.addEventListener("DOMContentLoaded", function() {

  var randomNumber = Math.floor(Math.random() * 9);
  console.log(randomNumber)
  var phonePicArray = [
"https://lh6.googleusercontent.com/khNedqspMCo18_dA5XrI4jDxdbDVMTGu9X8lblCsZyGjRG7LYHkZ5y_RnU5cHEYa-p8Hd_td6vO2r2GaBrT2=w1920-h941",
"https://lh3.googleusercontent.com/gQ9ZMg1AqBMrdzMm4s8Ux0ajUoKG3m3-3_uRrFzvVrkhRNkvQhRLKdd8x_XfRknptB_ss1WlJXN1dBapJZ2s=w1920-h941",
"https://lh4.googleusercontent.com/IhF6qZ6bz_jfHGw9tr6Iqv9rimS_fY9L0vx7b5CQ8odmHSvI62NfcO230RS0iZDkwO3vr3m7QYuaseyjWyDy=w1920-h941",
"https://lh5.googleusercontent.com/JyZLyKFaHs3Y_wKO9GUUsHg5pke9hoePtViwI14ahXwq33cHxdOGa0UzeKYy2CQuX_hVDNbp1EiDEjhcNmcd=w1920-h941",
"https://lh3.googleusercontent.com/1S_v3abQZ4Y2OoEYro4T_cqEG7-LZyrNq7CAuiTrxEvvKyAoi4iPe6cuXnHw59gPu7lZwdVa29OdTlal1QqO=w1920-h941",
"https://lh6.googleusercontent.com/YV3KZKKDSH5xq-F3iss4xo894xMm9kycBjI--XMOzlBLr553rerRzDETbfgcu8yheaHdmfXah2_pMg7VssKp=w1920-h941",
"https://lh4.googleusercontent.com/RuFRQ_OgA9_BOzKgM03GUndLFo3NLhugFuaarVU8SPsNKw2EMIbGSRZs6ArGJJSszoVY4vNb9TJOUZF_Kyi3=w1920-h941",
"https://lh4.googleusercontent.com/htZ1Ajeab1N_tvT13GPr5-0xGOpEoelcV3ddw7S0kivJkKQr77a1KAGI-qrjMDs6rez3BL15cqMMP3FtD3Km=w1920-h941",
"https://lh3.googleusercontent.com/WNOr9JGWxfJ3P-oQhxuSngtUJIME7nfiJZmim7bbkLuCJ1XE32kLZiiD8od-r32fnYFh7g3O_yikTq4ow5Ya=w1920-h941"
  ]
  document.getElementById("javserPhone").src=phonePicArray[randomNumber];
});

var clicked = false;

function downloadClick() {
  function GetLatestReleaseInfo() {
      $.getJSON("https://api.github.com/repos/gurobase/javser/releases/latest").done(function(release) {
          var asset = release.assets[0];
          window.open(asset.browser_download_url, "_self");
      });
  }

  GetLatestReleaseInfo();
  if (clicked === false) {
      document.getElementById("downloadId").classList.add("tracking-out-contract");
      setTimeout(function() {
          document.getElementById("retryImg").classList.add("fade-in");
          document.getElementById("retryImg").classList.remove("noDisplay");
          document.getElementById("downloadId").classList.add("noDisplay");
          document.getElementById("tyText").classList.remove("noDisplay");
          document.getElementById("tyText").classList.add("fade-in");

      }, 1000);
  }
  clicked = true;
}

var clicked2 = false;
if (clicked2 === false) {
  function downloadB() {
      $.getJSON("https://api.github.com/repos/gurobase/javser/releases/latest").done(function(release) {
          var asset = release.assets[0];
          window.open(asset.browser_download_url, "_self");
      });
      document.getElementById("btn-download").classList.add("downloaded");
      clicked2 = true;
      setTimeout(function() {
          document.getElementById("btn-download").classList.remove("downloaded");
          clicked2 = false;
      }, 3000);
  }
}


function formatBytes(a, b) {
  if (0 == a) return "0 Bytes";
  var c = 1024,
      d = b || 2,
      e = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      f = Math.floor(Math.log(a) / Math.log(c));
  return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f]
}