// const express = require('express')
// const router = express.Router()

// const AnimalController = require('../controllers/AnimalController')
// const upload = require('../middleware/upload')
// const authenticate = require('../middleware/authenticate')

// router.get('/', authenticate,AnimalController.index)
// router.post('/show', AnimalController.show)
// router.post('/store', upload.array('image[]'), AnimalController.store)
// router.post('/store', AnimalController.store)
// router.post('/update', AnimalController.update)
// router.post('/delete', AnimalController.destroy)

// module.exports = router

const express = require('express');
const router = express.Router();
const AnimalController = require('../controllers/AnimalController');
const upload = require('../middleware/upload'); // Importez le middleware upload correctement
const authenticate = require('../middleware/authenticate');

router.get('/', authenticate, AnimalController.index);
router.post('/show', AnimalController.show);
router.post('/store', upload.array('image[]'), AnimalController.store); // Utilisez le middleware d'upload ici
router.post('/update', AnimalController.update);
router.post('/delete', AnimalController.destroy);

module.exports = router;
//http://localhost:3001/api/animal/