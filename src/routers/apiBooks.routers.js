const {Router} = require ("express")
const router = Router();
const userCtrl = require("../controller/apiBooks.controller")

router.post("/registro", userCtrl.postRegistro);  
router.post("/login", userCtrl.postLogin);   
router.get("/libros", userCtrl.getLibros); 
router.post("/libros", userCtrl.postLibros); 
router.put("/libros", userCtrl.putLibros); 
router.delete("/libros", userCtrl.deleteLibros); 



module.exports = router;