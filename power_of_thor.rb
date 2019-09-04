#Test Cases 1-2

if light_x > initial_tx
        if light_y > initial_ty
            puts "SE"
        elsif light_y < initial_ty
            puts "NE"
        else
            puts "E"
        end
    elsif light_x < initial_tx
        if light_y > initial_ty
            puts "SW"
        elsif light_y < initial_ty
            puts "NW"
        else
            puts "W"
        end
    else
        if light_y > initial_ty
            puts "S"
        elsif light_y < initial_ty
            puts "N"
        end
    end

#Figuring out Case 3

if initial_ty == 17 || initial_ty == 0
        if light_x > initial_tx
            puts "E"
        else
            puts "W"
        end
    elsif initial_tx == 39 || initial_tx == 0
        if light_y > initial_ty
            puts "S"
        else
            puts "N"
        end
    elsif light_x > initial_tx
        if light_y > initial_ty
            puts "SE"
        elsif light_y < initial_ty
            puts "NE"
        else
            puts "E"
        end
    elsif light_x < initial_tx
        if light_y > initial_ty
            puts "SW"
        elsif light_y < initial_ty
            puts "NW"
        else
            puts "W"
        end
    else
        if light_y > initial_ty
            puts "S"
        elsif light_y < initial_ty
            puts "N"
        end
    end
