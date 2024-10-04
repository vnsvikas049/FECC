function getDayOfWeek(daynumber){
    switch(daynumber){
        case 1 :
            console.log('Monday');
            break ;
            case 2 :
                console.log('Tuesday');
                break ;
                case 3 :
                    console.log('Wednesday');
                    break ;
                    case 4 :
                        console.log('Thursday');
                        break ;
                        case 5 :
                            console.log('Friday');
                            break ;
                            case 6 :
                                console.log('Saturday');
                                break ;
                                default :
                                    console.log('Sunday');
                                    break ;
    }
    
}
getDayOfWeek(3)

// switch with fall through

function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
           return "Sunday"
            break;
        case 2:
           return "Monday"
            break;
        case 3:
           return "Tuesday"
            break;
        case 4:
           return "Wednesday"
            break;
        case 5:
           return "Thrusday"
            break;
        case 6:
            return "Weekend"
            break;
        case 7:
            return "Weekend"
            break;
    
        default:
             return "please put a right number"
            break;
    }
} 

console.log (getDayOfWeek(6))

// switch case with multiple condition

function classifyAnimal(animal) {
    switch (animal) {
     case 1:
         return "Mammal";
         break;
     case 2:
         return "bird";
         break;
     case 3:
         return "reptile";
         break;
    
     default:
         return "Not a animal";
         break;
    } 
 }
 
 console.log(classifyAnimal(3))


