function isValidIP(ip) {
    const IPs = ip.split('.');
    
    if (IPs.length !== 4) return console.log(false);

    for (const Valid of IPs) {
      const Value = parseInt(Valid, 10);
      if (isNaN(Value) || Value < 0 || Value > 255 || Valid !== Value.toString()) return console.log(false);
    }
    return console.log(true);
}

isValidIP("1.2.3.4");          // Output: true
isValidIP("1.2.3");            // Output: false
isValidIP("1.2.3.4.5");        // Output: false
isValidIP("123.45.67.89");     // Output: true
isValidIP("123.456.78.90");    // Output: false
isValidIP("123.045.067.089");  // Output: false