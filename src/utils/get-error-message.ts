import { isAxiosError } from 'axios';

const getErrorMessage = (error: unknown) => {
    // let message;

    // axios error
    if (isAxiosError(error)) {
        const message =
            error.response?.data?.message ||
            error.message ||
            'Axios request failed';
        return message;
    }

    // syntax error
    if (error instanceof SyntaxError) {
        return 'Invalid or missing JSON body. Please send valid JSON';
    }

    // Error class
    if (error instanceof Error) {
        return error.message;
    }

    return `Internal server error: ${String(error)}`;
};

export default getErrorMessage;
