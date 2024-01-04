// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { addUser } from "../../connections/db";

export default async function handler(req, res) {
  let userName, userType;
  if(req.body && req.body.userName && req.body.userType){
    console.log(req.body);
    userName = req.body.userName;
    userType= req.body.userType;
  } else if(req.query && req.query.userName && req.query.userType){
    userName = req.query.userName;
    userType= req.query.userType;
  }
  
  if(!userName || !userType) {
    res.status(400).send("Please provide the name of user");  
  } else {
    const result = await addUser(userName, userType);
    res.status(200).json({ name: 'John Doe', result });
  }
}
