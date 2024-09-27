
  // import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

// dotenv.config();

const genAI = new GoogleGenerativeAI("AIzaSyD4cAXjTFVb1t1woMTF9ZCCuRQiQk0MHjA");

async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = "Once upon a time, in a faraway land"

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

run();