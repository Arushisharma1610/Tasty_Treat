// import express from 'express';
// import multer from 'multer';
// import { createDish, getDishes, getDishById, updateDish, deleteDish } from '../controllers/dishController.js';

// const router = express.Router();
// const upload = multer({ dest: 'public/uploads/' });

// router.post('/', upload.single('image'), createDish);
// router.get('/', getDishes);
// router.get('/:id', getDishById);
// router.put('/:id', upload.single('image'), updateDish);
// router.delete('/:id', deleteDish);

// export default router;

import express from 'express';
import upload from '../config/multer.js'; // Import multer configuration
import { createDish, getDishes, getDishById, updateDish, deleteDish } from '../controllers/dishController.js';

const router = express.Router();

router.post('/', upload.single('image'), createDish);
router.get('/', getDishes);
router.get('/:id', getDishById);
router.put('/:id', upload.single('image'), updateDish);
router.delete('/:id', deleteDish);

export default router;

