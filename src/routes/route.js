const express = require('express');
const router = express.Router();

const UserController = require("../controller/userController")
const BookController = require("../controller/bookController")
const ReivewController = require("../controller/reviewController")
const Middleware = require("../middleware/authMiddleware")

const awsController = require("../controller/awsController")




router.post("/register", UserController.createUser)

router.post("/login",UserController. userLogIn)




router.post("/books",BookController.createBook)






router.get("/books",Middleware.authentication ,BookController.getBooks)
//Middleware.authentication,

router.get("/books/:bookId",Middleware.authentication,BookController.getBookById)

router.put("/books/:bookId",Middleware.authentication,Middleware.authorization,BookController.updateBooks)

router.delete("/books/:bookId",Middleware.authentication,Middleware.authorization,BookController.deleteBooksbyId)

router.post("/books/:bookId/review",ReivewController.createReview)

router.put("/books/:bookId/review/:reviewId",ReivewController.updateReview)

router.delete("/books/:bookId/review/:reviewId",ReivewController.deleteReviewsbyId)

router.post("/write-file-aws",awsController.sdk )

module.exports = router;