const {Router} = require ("express")
const router = Router();
const userCtrl = require("../controller/apiBooks.controller")

router.post("/registro", userCtrl.postRegistro);  
router.post("/login", userCtrl.postLogin);   


module.exports = router;