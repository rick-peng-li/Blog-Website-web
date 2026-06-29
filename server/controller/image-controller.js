import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const url = 'http://localhost:8000';

export const uploadImage = (request, response) => {
    if (!request.file) {
        return response.status(404).json("File not found");
    }
    
    const imageUrl = `${url}/uploads/${request.file.filename}`;
    response.status(200).json(imageUrl);
}

export const getImage = (request, response) => {
    const filename = request.params.filename;
    const filePath = path.join(__dirname, '../uploads', filename);
    
    if (!fs.existsSync(filePath)) {
        return response.status(404).json({ msg: 'File not found' });
    }
    
    response.sendFile(filePath);
}