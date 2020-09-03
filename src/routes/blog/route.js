module.exports = {
  all: () => [], // these are populated by the elderjs-plugin-markdown
  permalink: ({ request }) => `/front-end-code-specification/${request.slug}/`,
};
