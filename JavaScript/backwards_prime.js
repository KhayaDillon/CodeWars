function isPrime(n)
{
    if(n==2 || n==3)return true;
    else if(n%2===0 || n%3===0)return false;
    else{
        var i=5;
        while(i<=n/2)
        {
            if(n%i===0)
            {
                return false;
            }
            i++;
        }
    }
    return true;
}
