import multer from 'multer';
import path from 'path';

// Configure storage options
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads'); // Directory where files will be saved
  },
  filename: (req, file, cb) => {
    // Save file with original name and extension
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Create upload instance
const upload = multer({ storage: storage });

export default upload;
