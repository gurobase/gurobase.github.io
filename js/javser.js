document.addEventListener("DOMContentLoaded", function() {

  $.getJSON("https://api.github.com/repos/gurobase/javser/releases").done(function(release) {
    var appVersion = release[0].tag_name
    var totalDownloads = 0;
    release.forEach(function(element) {
      
      totalDownloads = totalDownloads + element.assets[0].download_count;
    })
    document.getElementById('versionInfo').innerHTML = release[0].tag_name +'</br> Android 5.0+</br>' + totalDownloads + " total downloads.";
  });

  var randomNumber = Math.floor(Math.random() * 9);
  var phonePicArray = [
      "https://i.ibb.co/BZd6bq3/javser-phone-cropped-1.png",
      "https://i.ibb.co/g6GRgJH/javser-phone-cropped-2.png",
      "https://i.ibb.co/bN1nC7Q/javser-phone-cropped-3.png",
      "https://i.ibb.co/HPM8w8H/javser-phone-cropped-4.png",
      "https://i.ibb.co/MfVFf1K/javser-phone-cropped-5.png",
      "https://i.ibb.co/5BHZZhm/javser-phone-cropped-6.png",
      "https://i.ibb.co/Ry8Md7k/javser-phone-cropped-7.png",
      "https://i.ibb.co/0j6Q3Nw/javser-phone-cropped-8.png",
      "https://i.ibb.co/pKvmPv2/javser-phone-cropped-9.png"
  ]
  document.getElementById("javserPhone").src = phonePicArray[randomNumber];
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

      }, 1000);
  }
  clicked = true;
}


function formatBytes(a, b) {
  if (0 == a) return "0 Bytes";
  var c = 1024,
      d = b || 2,
      e = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      f = Math.floor(Math.log(a) / Math.log(c));
  return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f]
}


function scrollClick() {
  document.getElementById("rightSide").classList.add("slide-out-top");
  setTimeout(function() {
    document.getElementById("rightSide").classList.add("noDisplay");
  }, 1000);
  }