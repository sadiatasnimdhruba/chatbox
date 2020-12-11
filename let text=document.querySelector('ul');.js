let text=document.querySelector('ul');
let type=document.querySelector('#typeText');
let scrollButton=document.querySelector('#scroll');
let pageBottom = document.querySelector('#page-bottom')

scrollButton.addEventListener('click',function()
{
	pageBottom.scrollIntoView();
})

function sendText()
{
	if(type.value==="")
	{
        alert('please write a message!!!');
	}
	else{
	let li=document.createElement('li');
	li.appendChild(document.createTextNode(type.value+" "));
	text.appendChild(li);
	type.value='';
}
}