function PopInteger(data) {
    data = data.toString().split('');
    
    while (data.length > 0) {
        console.log(data.join(''));
        data.pop();
    }
}

PopInteger(93571);
