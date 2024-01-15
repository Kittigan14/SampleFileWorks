console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));

function isValidIP(ip) {
    const IPs = ip.split('.');
    
    if (IPs.length !== 4) return false;

    for (const Valid of IPs) {
      const Value = parseInt(Valid, 10);
      if (isNaN(Value) || Value < 0 || Value > 255 || Valid !== Value.toString()) return false;
    }
    return true;
}