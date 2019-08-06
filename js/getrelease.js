document.addEventListener("DOMContentLoaded", function(){

  $.getJSON("https://api.github.com/repos/gurobase/javser/releases/latest").done(function(release) {
            var asset = release.assets[0];
            console.log(formatBytes(asset.size));
            // document.getElementById("downloadButton").innerHTML = formatBytes(asset.size);
          });
  
      });
  


var clicked = false;
function downloadClick() {
    function GetLatestReleaseInfo() {
        $.getJSON("https://api.github.com/repos/gurobase/javser/releases/latest").done(function(release) {
          var asset = release.assets[0];
          window.open(asset.browser_download_url,"_self");
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
          window.open(asset.browser_download_url,"_self");
        });
    document.getElementById("btn-download").classList.add("downloaded");
    clicked2 = true;
    setTimeout(function() {
      document.getElementById("btn-download").classList.remove("downloaded");
      clicked2 = false;
    }, 3000);
  }
}


function formatBytes(a,b){if(0==a)return"0 Bytes";var c=1024,d=b||2,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));return parseFloat((a/Math.pow(c,f)).toFixed(d))+" "+e[f]}




