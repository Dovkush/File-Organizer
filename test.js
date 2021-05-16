const spoon = (str) => {
    let res = [];
    let [x, y] = str.split(" ");
    let res1 = x.split("");
    let res2 = y.split("");
    let v = res1[0];
    let w = res2[0];
    res1[0] = w;
    res2[0] = v;
    console.log(res1.join(""), res2.join(""));
  
   
  };
  spoon("kite flying");




