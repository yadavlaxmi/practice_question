function Gurukul(){
    console.log("I am Navgurukul");
 }
  
 function Nav(callback){
    console.log("I am Nav");
    callback();
 }
  
 Nav(Gurukul);
  
//  I am Nav
// I am Navgurukul
