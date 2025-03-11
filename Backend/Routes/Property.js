// routes/propertyRoutes.js
const express = require('express');
const multer = require('multer');
const {createProperty,getOneProperty,getAllProperty,deleteProperty,getPropertyCount} = require('../Controller/property');

const router = express.Router();

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image and video files are allowed.'));
    }
  },
});

router.post(
  '/createProperty',
  upload.fields([{ name: 'images', maxCount: 5 }, { name: 'videos', maxCount: 2 }]),createProperty
)

router.get('/properties', getAllProperty)


router.get('/properties/:id', getOneProperty)

router.delete('/deleteproperty/:id',deleteProperty)

router.get('/propertycount',getPropertyCount)

module.exports = router;
