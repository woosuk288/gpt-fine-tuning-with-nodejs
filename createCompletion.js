import { openai } from "./api.js";

async function createCompletion() {
  try {
    const response = await openai.createCompletion({
      // model: 'davinci:ft-personal-2023-03-31-01-09-15',

      model: "ada:ft-personal-2023-06-21-23-40-45",
      prompt: "What is Lens Protocol",
      max_tokens: 200,
    });
    if (response.data) {
      console.log("choices: ", response.data.choices);
    }
  } catch (err) {
    console.log("Object.keys(err): ", Object.keys(err));
    console.log("err.response: ", err.response);
  }
}

createCompletion();
