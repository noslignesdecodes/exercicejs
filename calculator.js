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

function app()
{
	var number1=getElem('#number1');
	var number2=getElem('#number2');
	
	
	
	var appOperation=getElem('#operation');
	
	var resultBt=getElem('#resultBt');
	
	var resultLbl=getElem('#result');
	
	addEvent(resultBt, 'click',function(){
		console.log('clicked');
		switch(appOperation.value)
		{
			case '+':
				resultLbl.textContent='addition '+number1.value+" + "+number2.value+" = "+(toDouble(number1.value)+toDouble(number2.value));
			break;
			case '-':
				resultLbl.textContent='addition '+number1.value+" - "+number2.value+" = "+(toDouble(number1.value)-toDouble(number2.value));
			break;
			case 'x':
				resultLbl.textContent='addition '+number1.value+" x "+number2.value+" = "+(toDouble(number1.value)*toDouble(number2.value));
			break;
			case '/':
				resultLbl.textContent='addition '+number1.value+" / "+number2.value+" = "+(toDouble(number1.value)/toDouble(number2.value));
			break;
		}
	});
	 
}

(function(){
	app();
})();