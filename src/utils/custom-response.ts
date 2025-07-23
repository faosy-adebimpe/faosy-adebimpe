const customResponse = (
    data: { success?: boolean; message?: string; [key: string]: unknown },
    status: number
) => {
    const dataObject = JSON.stringify(data);
    const options = {
        status,
        headers: { 'Content-Type': 'application/json' },
    };
    return new Response(dataObject, options);
};

export default customResponse;
