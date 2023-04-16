import api from '../lib/api.mjs'

async function metrics(input) {
  const response = await api.createCompletion({
    model: "text-davinci-003",
    prompt: [
      'You have an acute business sense, so your goal at a high-level is to summarize but to really focus on the results that seem most measurable and most exciting. You are writing to engineers, so it is OK if there are some technical details but we want to make them clearly understandable',
      'So as an example, something that is really amazing is a sentence like: "Delivered an improvement to the first-time user experience which increased conversion by 300%"',
      'Whereas something that is only OK or not really worth highlighting is: "Delivered onboarding improvements"',
      'So given the following inputs (at the end of this message after the characters: ****), please summarize the details with 1-2 easily readable sentences and then follow-up with a 1-4 item bulleted list with the heading "🚢 Shipped", prioritizing the most exciting and measurable business results that were not covered in the summary. No more than four results, please.',
      'Please return the response back in JSON, using only the keys "summary" for the summary and "results" for the array of results',
      '****'
    ].concat(input).join('\n\n'),
    max_tokens: 2500,
    temperature: 0.4, // between 0.2 and 0.8, lower is less random, more deterministic
  })
    .then(res => res.data)

  return (response.choices || []).map(res => res.text).join('\n')
}

export { metrics }
