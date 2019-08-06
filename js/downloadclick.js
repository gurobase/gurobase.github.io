var clicked = false;
function downloadClick() {
    window.location.href = "https://github.com/gurobase/javser/raw/master/release/app-release.apk";
    if (clicked === false) {
        document.getElementById("downloadId").classList.add("tracking-out-contract");
        setTimeout(function(){
            document.getElementById("retryImg").classList.add("fade-in");
            document.getElementById("retryImg").classList.remove("noDisplay");
            document.getElementById("downloadId").classList.add("noDisplay");
            
        },1000);
    }
    clicked = true;
    
    
}