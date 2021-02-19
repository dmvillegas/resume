const bookBullets = [ 'Designing classes with a single responsibility' , 'Managing dependencies', 'Creating flexible interface' , 'Reducing cost with Duck Typing' , 'Acquring behavior through inheritance', 'Sharing role behavior with modules', 'Combing objects with composition', 'Designing cost-effective test'];
const ul = document.createElement('ul');
const newList = document.getElementById('list');
let btn1 = document.createElement("BUTTON");

for (i = 0; i <= bookBullets.length -1; i++) {
    let li = document.createElement('li');
	 li.innerHTML = bookBullets[i];
	 ul.appendChild(li);
};
newList.appendChild(ul);
list.appendChild(btn1);

btn1.className ='question4';
btn1.textContent ='Hide List';

btn1.addEventListener('click', () => {
	let question1 = list;
	
	if (question1.style.display == 'block') {
	    question1.style.display = 'none';
	    btn1.textContent = 'Show'
 } else { 
 	question1.style.display = 'block';
 	}
});

