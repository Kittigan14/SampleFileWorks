const status = 700;

switch (status) {
    case 200:
        console.log('OK!');
        break;
    case 400:
    case 500:
    case 700:
        console.log('Error!');
        break;
    default:
        console.log('Unknown status');
}