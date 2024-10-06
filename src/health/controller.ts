import { Request, Response } from "express";

class HealthController {
    
    getHealth(req: Request, res: Response) {
        res.json({ status: 'ok' })
    }

}

export default HealthController