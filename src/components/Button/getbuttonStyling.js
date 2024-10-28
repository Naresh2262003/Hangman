export default function buttonStyling(color){
    switch(color){
        case 'red':
            return "bg-red-500";

        case 'yellow':
            return "bg-yellow-500";

        case 'green':
            return "bg-green-500";

        case 'black':
            return "bg-black-500";

        case 'gray':
            return "bg-gray-500";

        default:
            return "bg-blue-500";

    }
}