

const obj1 = {
    name : 'Person1',
    age : 5
    
};

const obj2 = {
    age : 5 ,
    name : 'Person2'
    
};

function compare(obj1, obj2){
    const sorted = (obj)=>{
        JSON.stringify(obj, Object.keys(obj).sort())
        
    }
    console.log(obj1, obj2)
    return sorted(obj1) === sorted(obj2);
}
console.log(compare(obj1,obj2))