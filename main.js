function main(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("res1");
        },3000);
    });
}

function main1(res){
    console.log("res",res);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            reject("res2");
        },1000);
    });
}
async function Parent(){
    try{
    var res1= await main();
    var res2= await main1();
    console.log("res", res1, res2);
    }
    catch(err){
        console.log(err);
    }
}
Parent();