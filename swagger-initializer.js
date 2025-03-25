window.onload = () => {
  window.ui = SwaggerUIBundle({
    url: "vbc-open-api-specs.yaml",  // 👈 make sure this matches your file name
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    layout: "StandaloneLayout"
  });
};
