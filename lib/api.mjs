import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-1tDcnUYh7vtMAblZGIJpVlxi",
    apiKey: process.env.OPENAI_API_KEY,
});

export { configuration }

export default new OpenAIApi(configuration)
