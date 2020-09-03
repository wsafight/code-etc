const { hookInterface } = require('@elderjs/elderjs');

module.exports = {
  all: () =>
    hookInterface.map((hook) => ({
      slug: hook.hook,
    })),
  permalink: ({ request }) => `/front-end-code-specification/${request.slug}/`,
};
