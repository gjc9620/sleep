/**
 * Created by gujiacheng on 16/11/8.
 */
function sleep(...funs){
  function *genfun(){
    for(funObj of funs){
      yield funObj
    }
  }
  let gen = genfun();
  const go = (result)=>{
    const {done, value} = gen.next();
    if(done) return
    const {fun, delay} = value;
    setTimeout(function(){
      go(fun(result));
    },delay)
  }
  go()
}

export default sleep;
