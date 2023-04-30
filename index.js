const zodiac = document.getElementById("zodiac")

const body = document.body;

const changeBackground = () => {
    switch (zodiac.value) {

        case 'aries':
            body.style.backgroundColor = "#fc0303";
            break;

        case 'taurus':
            body.style.backgroundColor = "#ad95b9";
            break;

        case 'gemini':
            body.style.backgroundColor = "#a6a1cc";
            break;

        case 'cancer':
            body.style.backgroundColor = "#ffb8ae";
            break;

        case 'leo':
            body.style.backgroundColor = "#e6e6fa";
            break;

        case 'virgo':
            body.style.backgroundColor = "#222b36";
            break;

        case 'libra':
            body.style.backgroundColor = "#556d88";
            break;

        case 'scorpio':
            body.style.backgroundColor = "#fdf2c0";
            break;

        case 'sagittarius':
            body.style.backgroundColor = "#d6d1c0";
            break;

        case 'aquarius':
            body.style.backgroundColor = "#40e0d0";
            break;

        case 'capricorn':
            body.style.backgroundColor = "#ff19db";
            break;

        case 'pisces':
            body.style.backgroundColor = "#86ffcb";
            break;

        default:
            body.style.backgroundColor = "#0828b2";
            break;
    }
}