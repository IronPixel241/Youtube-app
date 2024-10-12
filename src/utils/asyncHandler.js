// utils folder is just for utility functions, 
// taaki ek hi kaam baar baar na karna pade 
// ---------------------------------------------------------------------


// Method - 1 (using Promises)

const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}





// Method - 2 (using try - catch)

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     }
//     catch (error) {
//         res.status(err.code || 500).json({success: false, message: err.message})
//     }
// }
