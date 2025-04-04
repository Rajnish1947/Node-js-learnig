const app=require('express')();
const http=require('http').Server(app);
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://kumarrajnish28443:dBoxebGh8scNpch2@cluster1.k98w5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")

const user=require('./models/UserModel');
async function insert() {
await user.create({
    Name:'Rajnish kumar',
    mob:62055115897,
    addres:'Rampur Bindalal',
    email:'Kumarraj@gmail.com',
    age:23
})    
}
insert();
http.listen(4000,function(){
console.log('server is running')
});


// kumarrajnish28443
//dBoxebGh8scNpch2