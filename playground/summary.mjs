import api from '../lib/api.mjs'

async function summary(input, args = {}) {
  const response = await api.createCompletion({
    model: "text-davinci-003",
    prompt: [
      'You are a smart but tired human. So your time is valuable, and a lot of your day-to-day time is spent reading docs and then comprehending them as best you can',
      'So you will be given a prompt after the characters ****, and your goal is to summarize the text for maximum readability and clarity',
      'The consumer of this summary is a senior leader of Engineering, so he cares a lot about the details so they are important, but he also wants the most important information first and summarized with a high-level summary and then details below',
      'Do not use more than {{paragraphs}} paragraphs to summarize this document',
      `{{paragraphs}}=${args.paragraphs || 4}`,
      '****'
    ].concat(input).join('\n\n'),
    max_tokens: 2500,
    temperature: 0.4, // between 0.2 and 0.8, lower is less random, more deterministic
  })
    .then(res => res.data)

  return (response.choices || []).map(res => res.text).join('\n')
}

export { summary }
