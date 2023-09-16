function generatePassword(){
  let pass ='';
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
  'abcdefghijklmnopqrstuvwxyz0123456789@#$!%^&*()-';

  for (let i = 0; i < 15; i ++){
    let char = Math.floor(Math.random() * str.length);
    pass += str.charAt(char);
  }
  return pass;
  }

  // str.length 是代表 str入面0-62個數字 會抽取其中一個 然後* math.random()  假設math.random = 0.4 str= 50  所以0.4 * 50 =20 
  //  然後loop 15次; math.floor只係幫你清除小數點 
  // 最後 str.charAt(char) 就係幫你 係str裡面搵出 20個字母係乜 以呢個20為例 我地係T 所以password第一個字係T.


  document.getElementById("fuckme").onclick = function(){
  console.log(generatePassword()) ;

const resultDiv = document.getElementById("result");
resultDiv.textContent = generatePassword();
};


