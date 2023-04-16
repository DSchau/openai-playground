import { meals } from './playground/meal-planning.mjs'

async function run() {
  const response = await meals('')

  console.log(response)
}

run()
  