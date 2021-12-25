import mongoose from 'mongoose';
import shortId from 'shortid';

export interface Url {
    originUrl: string,
    shortUrl: string,
};

const urlSchema = new mongoose.Schema<Url>({
    originUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        default: shortId.generate
    }
});

export default mongoose.model('Url', urlSchema);