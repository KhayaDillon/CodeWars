
function insertDash(num) {
   var n = num.toString();
   var ans='';
   var i=0;
   while(i<n.length)
   {
       
       if(parseInt(n[i])%2!==0 && parseInt(n[i+1])%2!==0 && i!==n.length-1) 
       {
           ans=ans+n[i]+'-';
       }
       else if(parseInt(n[i])%2!==0 && parseInt(n[i+1])%2!==0 && i===n.length-1)
       {
           ans=ans+n[i];
       }
       else
       {
           ans=ans+n[i];
       }
       i++;
   }
   return ans;
}