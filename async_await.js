function who() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('puppy');
      }, 200);
    });
  }
  function what() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('sit');
      }, 300);
    });
  }
  function where() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('in the ground');
      }, 500);
    });
  }
  async function fun() {
    const a = await who();
    const b = await what();
    const c = await where();  
    console.log(`${ a } ${ b } ${ c }`);
  }
fun(); 
// puppy sit in the ground
