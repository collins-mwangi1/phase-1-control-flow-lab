function scuberGreetingForFeet(){}
  function scuberGreetingForFeet(feet){
if (feet <= 400) {
  return 'this one is on me!';
} else if (feet <= 2000) {
  return 'that will be twenty bucks.';
}else if (2000 < feet && feet <= 2500) {
  return 'i will glardly take your thirty bucks.';
} else {
  return 'none can do';
}
}

  


function ternaryCheckCity(){
  function ternaryCheckCity(city) {
    return city === 'NYC' ? 'OK, sounds good.'
  }
}

function switchOnCharmFromTip(){
  function switchOnCharmFromTip(tip) {
    switch (tip) {
      case 'generous':
        return 'thank you so much.';
        case 'not as generous':
          return 'thank you.';
          default:
            return 'bye.';
    }
  }
}