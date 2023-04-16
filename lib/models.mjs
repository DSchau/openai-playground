import api from './api.mjs'

export default function getModels() {
  return api.listEngines()
    .then(res => res.data)
}

getModels()
  .then(engines => console.log(engines))
