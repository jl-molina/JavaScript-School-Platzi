// There are two types of conditionals in JavaScript: Switch-Case, If else-if else

const typeOfSubscription = 'Basic';


// Switch-Case
switch(typeOfSubscription) {
    case 'Free':
        console.log('You can only take free courses');
        break;
    case 'Basic':
        console.log('You can take almost every course for a month');
        break;
    case 'Expert':
        console.log('You can take almost every course for a year');
        break;
    case 'ExpertDuo':
        console.log('You and someone else can take every course for a year');
        break;
}


// If - else if - else
if (typeOfSubscription === 'Free') {
    console.log('You can only take free courses');
} else if (typeOfSubscription === 'Basic') {
    console.log('You can take almost every course for a month');
} else if (typeOfSubscription === 'Expert') {
    console.log('You can take almost every course for a year');
} else {
    console.log('You and someone else can take every course for a year');
}