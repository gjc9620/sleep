## use generator to achieve sleep
 
###sample

```
import sleep form sleep
sleep(
  {fun: ()=>1, delay: 1e3 },
  {fun: a=>a+1, delay: 3e4},
  {fun: b=>b+3, delay: 3e2},
  {fun: console.log, delay: 3e2}
);
//5

```