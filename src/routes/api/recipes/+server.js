export const GET = () => {
	return new Response(JSON.stringify(text));
};

const text = [
	{
		id: 1,
		title: 'Sweetacado',
		desc: 'Sweetacoda is a mouth watering fruit snack for avacado lovers. It is a 2 min healthy cook for people looking for some sugar.',
		time: 2,
		cat: 'fruit',
		ingredients: ['12 Avacadoes', '1/3 cup flour', '23 eggs'],
		procedure: [
			'break eggs',
			'cut avacadoes',
			'add eggs to flour and mix well',
			'apply mixture on avacado pieces',
			'Your meal is ready to server! Bon Appetit'
		]
		// cover: 'p2.png'
	},
	{
		id: 2,
		title: 'Eggs',
		desc: 'eggs are just eggs with some honey and flour as a sweetener',
		time: 15,
		cat: 'south indian',
		ingredients: ['6 eggs', '2 1/2 cups flour', '5 teaspoons honey'],
		procedure: [
			'add honey to flour',
			'add eggs',
			'mix well and fry at 70C for 10 mins',
			'Bon Appetit!'
		]
	}
];

// {
//  id: 1,
// 	title: 'Sweetacado',
// 	desc: 'Sweetacoda is a mouth watering fruit snack for avacado lovers. It is a 2 min healthy cook for people looking for some sugar.',
// 	cat: 'fruit', *category
// 	ingredients: ['12 Avacadoes', '23 eggs'],
// 	procedure: [
// 		'break eggs',
// 		'cut avacadoes'
// 	]
//  cover: 'p2.png' * not needed
// },
