function removeSmallest(numbers) {
    var i=0;
    var small = numbers[i];
    while(i<numbers.length)
    {
        if(numbers[i]<small)
        {
            small=numbers[i];
        }
        i++;
    }
    var index = numbers.indexOf(small);
    if (index > -1) 
    {
        numbers.splice(index, 1);
    }
    return numbers;
}