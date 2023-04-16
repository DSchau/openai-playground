import api from '../lib/api.mjs'

async function meals(input) {
  const response = await api.createCompletion({
    model: "text-davinci-003",
    prompt: [
      'Every Saturday, my wife and I plan the next week of meals for Monday through Friday. Usually, we probably get three or maybe four meals planned so no more than four meals. If the four meal cap has been hit, just add "N/A" for the meal for that day',
      'What I want from you is a weekly meal plan in the following form (after ****) of some weekly meals',
      'We are not vegetarian, and some types of food that we quite like are seafood, pasta, grilled or smoked meats, sometimes a vegetarian dish or two. We almost have two to three meat dishes, and then sometimes one vegeterian dish',
      'On Tuesdays we usually do a taco day, and so it will always be tacos like steak tacos, shrimp tacos, etc.',
      'We are not all that picky of eaters, but one of us does not particularly like cheese, so please avoid heavy cheese dishes (like queso) but light cheese used in dishes (like parmesan) are totally OK!',
      'Given these requirements, please generate a meal plan for this week',
      '****',
      '- Monday: Meal (a URL to the meal or recipe)',
      '- Tuesday: Meal (a URL to the meal or recipe)',
      '- Wednesday: Meal (a URL to the meal or recipe)',
      '- Thursday: N/A',
      '- Friday: Meal (a URL to the meal or recipe)',
    ].concat(input).join('\n\n'),
    max_tokens: 2500,
    temperature: 0.4, // between 0.2 and 0.8, lower is less random, more deterministic
  })
    .then(res => res.data)

  return (response.choices || []).map(res => res.text).join('\n')
}

export { meals }
