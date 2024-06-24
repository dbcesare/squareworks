export async function testGet(req,res) {
    try {
        res.send({status:200,msg:"running"});
    } catch (err) {
        res.error({e:err,msg:"woops"});
    }
}


