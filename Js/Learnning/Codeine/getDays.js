function getDays(dateString1, dateString2) {
    let date1 = new Date(dateString1);
    let date2 = new Date(dateString2);
  
    let timeDiff = Math.abs(date2 - date1);
  
    let hours = Math.floor(timeDiff / (60 * 60 * 1000));
    let minutes = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));
  
    let result = {
      hrs: ('0' + hours).slice(-2),
      minu: ('0' + minutes).slice(-2)
    };
  
    return result;
  }
  
  let result1 = getDays("December 31 12:00", "January 1 12:34");
  let result2 = getDays("June 1 00:01", "June 1 00:36");
  
  console.log("hrs:", result1.hrs, ", minu:", result1.minu);
  console.log("hrs:", result2.hrs, ", minu:", result2.minu);
  