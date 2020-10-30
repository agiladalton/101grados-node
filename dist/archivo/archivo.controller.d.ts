import { ArchivoService } from './archivo.service';
export declare class ArchivoController {
    private readonly archivoService;
    constructor(archivoService: ArchivoService);
    subir(req: any, response: any): Promise<any>;
    subirVarios(files: any, response: any): Promise<any>;
}
