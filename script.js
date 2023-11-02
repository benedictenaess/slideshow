const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let colorIndex = 0;

const title = document.querySelector('.title');
const textContent = 'COLOURFULHOMES';


const arrayText = Array.from(textContent);
console.log(arrayText);

arrayText.forEach(letter =>{
	const span = document.createElement('span');
	span.textContent = letter;
	title.appendChild(span);

	span.addEventListener('mouseover', ()=>{
        span.style.color = colors[colorIndex];
		colorIndex = (colorIndex + 1) % colors.length;
	});

	span.addEventListener('mouseout', () => {
        span.style.color = ''; 
    });
});

