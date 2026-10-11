let ctx, muted = false
export const setMuted = (m) => { muted = m }
export const beep = (f = 520, d = 0.07, type = 'square') => {
  if (muted) return
  try {
    ctx ||= new (window.AudioContext || window.webkitAudioContext)()
    const o = ctx.createOscillator(), g = ctx.createGain()
    o.type = type; o.frequency.value = f
    g.gain.setValueAtTime(0.04, ctx.currentTime)
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + d)
    o.connect(g).connect(ctx.destination); o.start(); o.stop(ctx.currentTime + d)
  } catch {}
}
