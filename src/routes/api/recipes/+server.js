export const GET = () => {
	return new Response(JSON.stringify(text));
};

const text = [
	{
		id: 1,
		title: 'Stuffed Okra',
		desc: 'Okra stuffed with Spices		',
		time: 20,
		cat: 'Vegetable',
		ingredients: [
			'15 Okras',
			'2 tbs Corriander Powder',
			'1 tbs red chilli Powder',
			'1/2 tbs turmeric Powder',
			'1/2 tbs Cumin powder',
			'1/2 dry mango powder',
			'1 chopped onion',
			'oil',
			'salt - for taste'
		],
		procedure: [
			'Slit the Okra',
			'Mix all the powders including salt in bowl and add some oil and keep still for 10 mins',
			'In a pan, heat oil at a low flame and add a little turmeric powder and jeera powder',
			'When the oil starts to splutter, add the chopped onion and stir till it becomes pinkish brown',
			'Now stuff the masala mixture (which was kept still) in the Okra',
			'Add okra in the pan, stir to mix the okra with the onion, turmeric powder and cumin powder (low flame)',
			'keep sprinkling water every 5 mins till it is cooked, keep stiring',
			'Happy Meal! Bon Appetit !'
		],
		cover: '1.png'
	},
	{
		id: 2,
		title: 'Marwari Kadi',
		desc: 'An Indian Classic also Popularly know as Rajasthani Kadi',
		time: 15,
		cat: 'Appetizer',
		ingredients: [
			'1 bowl of curd',
			'1 tbs gram flour (besan) ',
			'1-2 green chilli slitted',
			'1/2 inch ginger',
			'1/2 tbs fenugreek seeds (methi)',
			'1/2 tbs mustard seeds',
			'1/2 tbs cumin seeds (jeera)',
			'pinch of turmeric powder',
			'5-6 curry leaves',
			'1/2 tbs ghee',
			'1/2 tbs ghee',
			'salt - for taste'
		],
		procedure: [
			'Add Curd in a bowl and add gram flour, Whip it so that besan is perfectly dissolved in curd',
			'Add salt in it and keep it aside',
			'Take a pan and add 1 tbs ghee and curry leaves',
			'Add the cumin, fenugreen seeds, mustard seeds and green chilli, turmeric powder',
			'Cook at a low flame, when it splutters, add curd and flour mixture, boil at a medium flame',
			'keep stirring and give 3-4 boils',
			'Add small pieces of ginger',
			'Bon Appetit! Enjoy'
		],
		cover: '2.png'
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
