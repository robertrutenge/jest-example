module.exports = {
   extends:["eslint:recommended"],
   parserOptions:{
    ecmaVersion:6
   },
   env:{
       node:true
   },
   rules:{
       quotes:['error','single', {"avoid-Escape":true}],
       'comma-dangle': [​'error'​, ​'always-multiline'​],
   }
       
}