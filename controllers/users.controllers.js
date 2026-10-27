import user from "../data/users.db.js";
const allUsers=(req,res)=>{
    res.json(user);
};

const soloUser=(req,res)=>{
     const{id} = req.params;
     const single_user=user.find((matchedUser)=>matchedUser.id === parseInt(id));
     if(!single_user)
     {  
        return res.status(404).send("Message:User not found");
     }
     res.json(single_user);
};

const createUser=(req,res)=>{

    const{name,gmail}=req.body;

     user.push({
        id:user.length+1,
        name,
        gmail
     });

     res.status(201).send("Message:New User created successfully");
};


const updateAll=(req,res)=>{
    const{id}=req.params;
    const{name,gmail}=req.body;

    let single_user=user.find((matchedUser)=>matchedUser.id === parseInt(id));
    if(!single_user)
    {
        return res.status(404).send("Message:User not found");
    }

    single_user.name=name;
    single_user.gmail=gmail;

    res.json({
              Message:"User updated",
              user:single_user
    });
};

const update=(req,res)=>{
    const{id}=req.params;
    const{name,gmail}=req.body;

    let single_user=user.find((matchedUser)=>matchedUser.id === parseInt(id));
    if(!single_user)
    {
         return res.status(404).send("Message:User not found");
    }

    //Validate name if provided
    if(name !== undefined) {
        if (typeof name !== "string" || name.trim() === "") {
            return res.status(400).send("Name must be a non-empty string");
}
    }

    //Validate gmail if provided
    if(gmail!==undefined)
    {
        if (typeof gmail !== "string" || gmail.trim() === "") {
           return res.status(400).send("Gmail must be a non-empty string");
}
    }
    
    //Require at least one field
    if (name === undefined && gmail === undefined) {
        return res.status(400).send("Message: Provide at least one field to update");
    }
    
    if (name !== undefined) {
        single_user.name = name;
    }

    if (gmail !== undefined) {
        single_user.gmail = gmail;
    }

    res.json(
        {
           Message:"User updated successfully",
           user:single_user
        }
    );

    
};

const deleteUser=(req,res)=>{
    const{id}=req.params;

    const userIdx=user.findIndex((user_match)=>user_match.id === parseInt(id));

    if(userIdx === -1)
    {
        return res.status(404).send("Message:User doesn't exists");
    }

    user.splice(userIdx,1);

    res.send("Message:User deleted successfully");
};

export {allUsers,soloUser,createUser,updateAll,update,deleteUser};