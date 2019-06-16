
function consonantCount(str) {
    str=str.toLowerCase();
    var vow='aeiou';
    var cons='abcdefghijklmnopqrstuvwxyz';
    var i=0;
    var n=0;
    
    while(i<str.length)
    {
      if(cons.indexOf(str[i])!==-1 && vow.indexOf(str[i])===-1)
      {
        n++;
      }
      i++;
    }
    return n;
}

function vowelCount(str) {
    str=str.toLowerCase();
    var vow='aeiou';
    var cons='abcdefghijklmnopqrstuvwxyz';
    var i=0;
    var n=0;
    
    while(i<str.length)
    {
      if(cons.indexOf(str[i])===-1 && vow.indexOf(str[i])!==-1)
      {
        n++;
      }
      i++;
    }
    return n;
}