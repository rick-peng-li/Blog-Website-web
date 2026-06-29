import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, path.join(__dirname, '../uploads'));
    },
    filename: (request, file, callback) => {
        const match = ["image/png", "image/jpg", "image/jpeg"];
        
        if (match.indexOf(file.mimetype) === -1) {
            return callback(new Error('Invalid file type'), `${Date.now()}-blog-${file.originalname}`);
        }

        callback(null, `${Date.now()}-blog-${file.originalname}`);
    }
});

export default multer({ storage });