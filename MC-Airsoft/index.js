function downloadRelease(platform) {
    // Replace the following link with the actual link to the release for each platform
    let downloadLink = '';

    switch (platform) {
        case 'MacOS':
            downloadLink = 'https://github.com/CoolManTheCool/MC-Airsoft/releases/latest/download/MC-Airsoft-MacOS.zip';
            break;
        case 'Linux':
            downloadLink = 'https://github.com/CoolManTheCool/MC-Airsoft/releases/latest/download/MC-Airsoft-Linux.tar.gz';
            break;
        case 'Windows':
            downloadLink = 'https://github.com/CoolManTheCool/MC-Airsoft/releases/latest/download/MC-Airsoft-Windows.zip';
            break;
        case 'Web':
            downloadLink = 'MC-Airsoft_Web/MCAirsoft.html'
            break;
    }

    window.location.href = downloadLink;
}