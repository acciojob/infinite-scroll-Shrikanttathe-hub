//your code here!
const listContainer =  document.querySelector('main');
const list = document.getElementById('infi-list');

let itemCount = 0;

function addItems(count) {
	for(let i=0; i<count; i++){
		itemCount++;
		const li = document.createElement('li');
		li.textContent = `Item ${itemCount}`;
		list.appendChild(li);
	}
}
addItems(10);
list.addEventListener('scroll', ()=> {
	const scrollTop = list.scrollTop;
	const scrollHeight = list.scrollHeight;
	const clientHeight = list.clientHeight;

	if(scrollTop + clientHeight >= scrollHeight - 5){
		addItems(2);
	}
});