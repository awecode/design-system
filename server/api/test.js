const { defineEventHandler, readBody } = require('nitropack');

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const input = body.input;

    // Validation
    if (input === undefined || typeof input !== 'number') {
        return { statusCode: 400, body: { error: 'Input is required and must be an integer.' } };
    }

    // Process the input
    const output = input + 1;
    return { output };
});
