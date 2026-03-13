import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((ctx, next) => {
  // Auto-redirect to /en only from the root page
  if (ctx.url.pathname === '/') {
    const acceptLanguage = ctx.request.headers.get('accept-language') ?? '';
    const prefersEnglish = /^en\b/i.test(acceptLanguage);
    if (prefersEnglish) {
      return ctx.redirect('/en', 302);
    }
  }
  return next();
});
