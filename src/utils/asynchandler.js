const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err));
    }
}

export {asyncHandler}




// const asyncHandler = () => {}
// const asyncHandler = (funct) => () => {}
// const asyncHandler = (funct)=>  async () => {}

// const requestHandler = (fn) => async (req,res,next) => {
//     try{
//     await fn(req,res,next);
// }catch(err){
//     res.status(err.code || 500).json({
//         success : false,
//         message : err.meassage
//     })
// }
// }
