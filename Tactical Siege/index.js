function downloadRelease(platform) {
    // Replace the following link with the actual link to the release for each platform
    let downloadLink = '';

    switch (platform) {
        case 'MacOS':
            downloadLink = 'https://github.com/CoolManTheCool/MC-Airsoft/releases/latest/download/Tactical_Siege_MacOS.zip';
            break;
        case 'Linux':
            downloadLink = 'https://github.com/CoolManTheCool/MC-Airsoft/releases/latest/download/Tactical_Siege_Linux.zip';
            break;
        case 'Windows':
            downloadLink = 'https://github.com/CoolManTheCool/MC-Airsoft/releases/latest/download/Tactical_Siege_Windows.zip';
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
  