const projects = [
	{
		name: 'four-card-feature-section-master',
		youtube:
			'https://www.youtube.com/watch?v=PcSUEo0P0GU&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=2&t=0s'
	},
	{
		name: 'profile-card-component-main',
		youtube:
			'https://www.youtube.com/watch?v=8A7-0gsbHA0&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=3&t=0s'
	},
	{
		name: 'order-summary-component-main',
		youtube:
			''
	},
	
];


const list = document.getElementById('list');

projects.forEach(({ name, youtube }, i) => {
	const listItem = document.createElement('li');

	listItem.innerHTML = `
		<a href="/${name}/index.html">
			<img src="/${name}/design/desktop-design.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>
		<div class="links-container">
			<a href="/${name}/index.html" class="blue">
				<i class="fas fa-eye"></i>
			</a>
			<a href="${youtube}" class="youtube">
				<i class="fab fa-youtube"></i>
			</a>
		</div>
	`;

	list.appendChild(listItem);
});

function formatProjectName(name) {
	return name
		.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}