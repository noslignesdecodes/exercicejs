function rand(min, max)
{
	return parseInt(Math.random()*max+min, 10);
}
function changeText(elem, str)
{
	elem.textContent=str;
}
function App()
{
	var guessTxt=getElem('#guessTxt');

	var guessBt=getElem('#guessBt');
	var hidden=rand(0,100);
	var userVal=0;
	var result=getElem('#result');
	const TOTAL_GUESS_ALLOWED =10;//total guess allowed
	var userHp=0;

	addEvent(guessBt,'click',function(){
		userVal=toInt(guessTxt.value);

		if(userHp >=TOTAL_GUESS_ALLOWED && userVal!=hidden)
		{
			changeText(result, 'GAME OVER, reload the browser to play again');
		}else{
			if(userVal>hidden)
			{
				userHp++;
				changeText(result, 'less than '+userVal+', hp: '+userHp+'/'+TOTAL_GUESS_ALLOWED);
				
			}else if(userVal<hidden)
			{
				userHp++;
				changeText(result,'greater than '+userVal+', hp: '+userHp+'/'+TOTAL_GUESS_ALLOWED);

			}else{
				changeText(result, 'Well done , hp: '+userHp+'/'+TOTAL_GUESS_ALLOWED);
			}
		}
		// alert(guessTxt.value);
	});
}
function getElem(elem)
{
	return document.querySelector(elem);
}
function addEvent(elem,event='click', fb='')
{
	var codeFb=fb;
	elem.addEventListener(event,function(){
		codeFb();
	});
}
function toDouble(number)
{
	return parseFloat(number,10);
}
function toInt(number)
{
	return parseInt(number,10);
}

(function(){
  var app=new App();
})();
//var numb= prompt("Enter a number");
//console.log('hey');

//console.log(rand(0,100));
//console.log(rand(0,5));

