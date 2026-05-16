/**
 * Locale-aware typography class bundles (plans/locale-typo-graphy.md).
 * Myanmar pages also get global html:lang(my) overrides in public/styles/global.css.
 */
export function t(locale: string) {
  const isMy = locale === 'my';
  return {
    tag: isMy
      ? 'text-[#00C2FF] text-sm font-normal'
      : 'text-[#00C2FF] font-mono text-xs tracking-widest uppercase',

    heroH1: isMy
      ? 'font-bold text-5xl leading-[1.4]'
      : 'font-black text-6xl uppercase leading-none tracking-tight',

    h2: isMy
      ? 'font-bold text-3xl leading-[1.4]'
      : 'font-black text-4xl uppercase leading-none tracking-tight',

    h3: isMy ? 'font-bold text-xl leading-[1.5]' : 'font-bold text-2xl uppercase tracking-tight',

    body: isMy ? 'text-base leading-[1.9]' : 'text-sm leading-relaxed tracking-normal',

    muted: isMy ? 'text-sm font-normal' : 'text-sm font-mono tracking-wide',

    button: isMy ? 'text-sm font-bold' : 'text-sm font-semibold tracking-wide uppercase',

    stat: isMy ? 'font-bold text-5xl' : 'font-black text-5xl font-mono',

    statLabel: isMy
      ? 'text-xs font-normal mt-1'
      : 'font-mono text-xs tracking-widest uppercase mt-1',

    navLink: isMy ? 'text-sm font-normal' : 'text-sm font-mono tracking-wide',

    badge: isMy
      ? 'text-xs font-bold px-3 py-1'
      : 'text-xs font-mono font-bold tracking-widest px-3 py-1',
  };
}
