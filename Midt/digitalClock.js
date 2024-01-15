function digitClock(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600);
    const second = Math.floor(seconds % 60);

    const formatHours = hours.toString().padStart(2, '0')
    const formatMinutes = minutes.toString().padStart(2, '0')
    const formatSeconds = second.toString().padStart(2, '0')

    return console.log(`${formatHours}:${formatMinutes}:${formatSeconds}`);
}

digitClock(5025);
digitClock(61201);
digitClock(87000);