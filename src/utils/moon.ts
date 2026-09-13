const SYNODIC = 29.53058867; // days
const KNOWN_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14, 0); // ms

export function moonAgeDays(date: Date) {
  const diff = date.getTime() - KNOWN_NEW_MOON;
  const days = diff / 86400000;
  return ((days % SYNODIC) + SYNODIC) % SYNODIC;
}

export function nextNewMoon(from: Date) {
  const age = moonAgeDays(from);
  let daysUntil = (SYNODIC - age) % SYNODIC;
  if (daysUntil < 0.5) daysUntil += SYNODIC;
  return addDays(from, daysUntil);
}

export function nextFullMoon(from: Date) {
  const age = moonAgeDays(from);
  let daysUntil = ((SYNODIC / 2) - age + SYNODIC) % SYNODIC;
  if (daysUntil < 0.5) daysUntil += SYNODIC;
  return addDays(from, daysUntil);
}

export function addDays(date: Date, days: number) {
  return new Date(date.getTime() + days * 86400000);
}

export function fmt(date: Date, opts?: Intl.DateTimeFormatOptions) {
  return date.toLocaleDateString('en-IN', opts || { day: 'numeric', month: 'long' });
}
