import Exception from '../Exception';
import HttpResponse from '../../Types/HttpResponse';

export default class MigrationDoesNotExistsOnFilesystemException extends Exception {

    /**
     * Constructor
     */
    constructor(message: string) {
        super(message);
    }

    /**
     * Handle exception
     */
    public handle(exception: this): HttpResponse {
        // Prepare response
        const httpResponse: HttpResponse = {
            code: 106,
            message: exception.message,
            data: null
        };

        // Return response
        return httpResponse;
    }
}