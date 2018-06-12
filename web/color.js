var body= {
  backcolor:function(color){
    document.querySelector('body').style.color = color;}
    ,
  bodysetcolor:function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
function hi(color){
  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i < alist.length){
    alist[i].style.color = color;
    i = i + 1;
  }
}
function oh(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    body.backcolor('black');
    body.bodysetcolor('white')
    self.value = 'day';

hi('skyblue')
  } else {
    body.backcolor('white')
    body.bodysetcolor('black')
    self.value = 'night';

    hi('green')
  }

}
