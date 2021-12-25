import DatabaseError from "../models/errors/database.error.model";
import type { Url } from '../models/url.model';
import UrlModel from '../models/url.model';

class UrlRepository {
    public async create(originUrl: string): Promise<Url> {
        try {
            const url = await UrlModel.findOne({ originUrl });

            if (url) {
                return url;
            }

            const newUrl = await UrlModel.create({ originUrl });
            return newUrl;
        } catch (error) {
            throw new DatabaseError('Erro ao criar Link');
        }
    }

    public async read(shortUrl: string): Promise<any> {
        try {
            const url = await UrlModel.findOne({ shortUrl });

            return url;
        } catch (error) {
            throw new DatabaseError('Erro ao encontrar Link');
        }
    }

    public async remove(shortUrl: string): Promise<void> {
        try {
            await UrlModel.findOneAndRemove({ shortUrl });
        } catch (error) {
            throw new DatabaseError('Erro ao remover Link');
        }
    }
}

export default new UrlRepository();