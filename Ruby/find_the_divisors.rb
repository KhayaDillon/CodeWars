
def divisors(integer)
  if integer > 1
    divisors = []
    
    i = 2
    while i < integer 
      divisors.push(i) if integer % i == 0
      i += 1
    end
    
    divisors.length == 0 ? "#{integer} is prime" : divisors
  end
end