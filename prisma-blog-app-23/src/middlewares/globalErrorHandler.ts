import { NextFunction, Request, Response } from "express"

function errorHandler (
    err: any,
    req: Request, 
    res: Response, 
    next: NextFunction
) {

  res.status(500)
//   res.render('error from error handler ---', { error: err })
res.json({
    message: "Error from error handler!",
    error: err
})
}

export default errorHandler;