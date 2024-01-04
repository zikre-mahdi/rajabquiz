import { getQuestions } from "../../connections/rajabquiz";

export default async function handler(req, res) {
  
    const result = await getQuestions();
    res.status(200).json({ data:result });
  
}