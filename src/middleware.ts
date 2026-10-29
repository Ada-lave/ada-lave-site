import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((ctx, next) => {
  const selected = ctx.url.searchParams.get('lang');
  if (selected === 'ru' || selected === 'en') {
    ctx.cookies.set('site-lang', selected, {
      path: '/', maxAge: 60 * 60 * 24 * 365, sameSite: 'lax', httpOnly: true,
      secure: ctx.url.protocol === 'https:',
    });
  }
  if (ctx.url.pathname === '/') {
    const preference = selected ?? ctx.cookies.get('site-lang')?.value;
    const english = preference === 'en' || (!preference && /^en\b/i.test(ctx.request.headers.get('accept-language') ?? ''));
    if (english) {
      return new Response(null, { status: 302, headers: { Location: '/en', Vary: 'Accept-Language, Cookie', 'Cache-Control': 'private, no-store' } });
    }
  }
  return next();
});
