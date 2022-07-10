module.exports = {
  get: {
    tags: ['Users'],
    summary: `Get user's statistics for a specific day -----------  In PROGRESS`,
    security: [{ bearerAuth: [] }],
    parameters: [
      {
        in: 'path',
        name: 'day',
        required: true,
        schema: { type: 'string' },
        description: 'Day...',
      },
    ],
    responses: {
      200: {
        description: 'Statistics returned',
      },
      400: {
        description: 'Bad Request',
      },
      401: {
        description: 'Not authorized',
      },
      500: {
        description: 'Server error',
      },
    },
  },
};
