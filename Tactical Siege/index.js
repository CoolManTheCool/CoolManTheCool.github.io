var github = "https://github.com/CoolManTheCool/Tactical-Siege/releases/latest/download/";

var mac = "Tactical-Siege-MacOS.zip";
var win = "Tactical-Siege-Windows.zip";
var linux = "Tactical-Siege-Linux.zip";

function downloadRelease(platform) {
    // Replace the following link with the actual link to the release for each platform
    let downloadLink = '';

    switch (platform) {
        case 'MacOS':
            downloadLink = github+mac;
            break;
        case 'Linux':
            downloadLink = github+linux;
            break;
        case 'Windows':
            downloadLink = github+win;
            break;
    }

    window.location.href = downloadLink;
}

document.addEventListener("DOMContentLoaded", function () {
    const fadeHeader = document.querySelector(".fade-header");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        fadeHeader.classList.add("hide");
      } else {
        fadeHeader.classList.remove("hide");
      }
    });
  });
  