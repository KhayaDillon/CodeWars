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
