import type { NextFunction, Request, Response } from 'express';
import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import urlRepository from '../repositories/url.repository';

const urlRoute = Router();

urlRoute.post('/short', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { originUrl } = req.body;
        const url = await urlRepository.create(originUrl);

        res.status(StatusCodes.CREATED).json(url);
    } catch (error) {
        next(error);
    }
});

urlRoute.get('/:hash', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { hash } = req.params;
        const originUrl = await urlRepository.read(hash);

        res.status(StatusCodes.OK).redirect(originUrl);
    } catch (error) {
        next(error);
    }
});

export default urlRoute;