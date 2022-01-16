const itemRef = document.querySelectorAll('.item');
const titleRef = document.querySelectorAll('h2');
const listItemRef = document.querySelectorAll('item ul');
console.log('Number of categories:', itemRef.length);

titleRef.forEach((elem, index) => {
	console.log(`Category: ${elem.textContent}`)
	listItemRef.forEach((elem, i) => {
		if (index === i) {
			console.log(`Elements: ${elem.children.length}`)
		}
	})
})