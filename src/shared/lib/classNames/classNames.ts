export type Mode = Record<string, boolean | string | undefined>;

export function classNames(cls: string, mods: Mode = {}, additional: string[] = []): string {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([cls]) => cls),
    ...additional.filter(Boolean),
  ].join(' ');
}
