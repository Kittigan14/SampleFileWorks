function digitClock(seconds) {
    const totalSeconds = seconds % 86400;
    
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = totalSeconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
}

digitClock(5025);   // Output: 01:23:45
digitClock(61201);  // Output: 17:00:01
digitClock(87000);  // Output: 00:10:00