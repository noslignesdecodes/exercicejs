function rand(min, max)
{
	return parseInt(Math.random()*max+min, 10);
}
function changeText(elem, str)
{
	elem.textContent=str;
}
function checkWord(somechar,str)
{
	var result='';
	if(result=str.indexOf(somechar))
		
	{
		return result ;
	}
	return false;
}

function showFoundChar(foundChar, str, foundedArr)
{
	var resultWord='';
	for(var i=0,c=str.length;i<c;i++)
	{
		if(i==foundChar)
		{
			resultWord+=str[i];
		}else{
			resultWord+='-';
		}
	}
	return resultWord; 
}
function App()
{
	var guessTxt=getElem('#guessTxt');

	var guessBt=getElem('#guessBt');
	var hidden='hello';
	
	var hiddenDescription='word used to greet someone';

    var hiddenWord=getElem('#hiddenWord');
    var resultWord='';


	for(var i=0,c=hidden.length;i<c;i++)
	{
            resultWord+='-';
	}

	changeText(hiddenWord,resultWord);

	//some variables
	var userVal=0;
	var result=getElem('#result');

	const TOTAL_GUESS_ALLOWED =10;//total guess allowed
	
	var userHp=0;

	var checkResult=0;

	var founded=[]; //storing founded index
	var notFounded=[];

	addEvent(guessBt,'click',function(){
		userVal=(guessTxt.value).charAt(0);
		checkResult=checkWord(userVal, hidden);
                if(checkResult>0)
		{
			// alert(typeof checkResult);
			// alert(checkResult);
			founded.push(checkResult);

			changeText(result, hidden[checkResult]+' exists');
			resultWord=showFoundChar(checkResult, hidden, founded);
			changeText(hiddenWord,resultWord);

		}else{
			changeText(result, userVal+' doesnt not exists');
		}
		// if(userHp >=TOTAL_GUESS_ALLOWED && userVal!=hidden)
		// {
		// 	changeText(result, 'GAME OVER, reload the browser to play again');
		// }else{
		//       changeText(result, userVal);	
		// }
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

