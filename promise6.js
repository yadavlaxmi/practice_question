var promise = new Promise(function(resolve, reject) {
    const x = "somi";
    const y = "somi"
    if(x === y) {
      resolve();
    } else {
      reject();
    }
  });
     
  promise.
      then(function () {
          console.log('successful somi');
      }).
      catch(function () {
          console.log('Some error has occurred');
      });