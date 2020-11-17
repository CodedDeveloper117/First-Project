class Recipies {
  constructor();
  cook(){
    console.log('Cooking');
  }
  done(text){
    console.log(text)
  }
}

const recipies = new Recipies();
recipies.cook();
recipies.done('Done');
