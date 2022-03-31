const handlePromise = (Promise) =>{
    return Promise
        .then((data)=>[null,data])
        .catch((error)=>[error, undefined]);
};

module.exports=handlePromise;