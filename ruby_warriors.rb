#Figuring out Lvl 6

class Player
  def initialize
    @direction = :backward  
  end
  
  def play_turn(warrior)
    change_direction?(warrior)
    
    if warrior.feel(@direction).enemy?
      warrior.attack!(@direction)
    elsif taking_damage?(warrior)
      if warrior.health < 15
        @direction = :backward
        warrior.walk!(@direction)
      else
        warrior.walk!(@direction)
      end
    elsif warrior.health < 20
      warrior.rest!
    elsif warrior.feel(@direction).captive?
      warrior.rescue!(@direction)
    else
      warrior.walk!(@direction)
    end
    
    @health = warrior.health 
  end
  
  def change_direction?(warrior) 
    if warrior.feel(:backward).wall?
      @direction = :forward
    end
  end
  
  def taking_damage?(warrior)
    if @health.nil?
      false
    elsif warrior.health < @health
      true
    end
  end
  
end
  
