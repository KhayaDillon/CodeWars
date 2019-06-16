
function GetSum( a,b )
{
   var sum=0;
   
   if(a===b)
   {
       sum=a;
   }
   
   else if(a<b)
   {
        while(a<=b)
        {
            sum+=a;
            a++;
        }
   }
   
   else if(b<a)
   {
        while(b<=a)
        {
            sum+=b;
            b++;
        }
   }
   
   return sum;
}