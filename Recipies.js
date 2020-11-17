class Recipies {
  constructor();
  cook(){
    console.log('Cooking');
  }
  done(text){
    console.log(text)
  }
  delicious(){
    console.log("Nice")
  }
}

const recipies = new Recipies();
recipies.cook();
recipies.done('Done');
recipies.delicious();
