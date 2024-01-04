import { getUsers } from "../../connections/db";

export default async function handler(req, res) {
  
    const result = await getUsers();
    res.status(200).json({ data:result });
  
}