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





