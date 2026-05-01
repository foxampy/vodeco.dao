'use client';
const updates = ['Coral restoration vote reaches quorum', 'New mangrove impact NFT released', 'Ocean cleanup sprint starts in 2h'];
export function LeftFeed({ visible }: { visible: boolean }) {
  return <aside className="panel ui-hit" style={{ position: 'absolute', top: 110, left: 24, width: 300, padding: 16, opacity: visible ? 1 : 0, transform: `translateX(${visible ? 0 : -30}px)`, transition: 'all .8s ease' }}><h3>Live Feed</h3>{updates.map((u, i) => <div key={u} style={{ marginTop: 12, padding: 10, borderRadius: 12, background: 'rgba(115,210,255,0.08)' }}><small>@community • {i + 1}m</small><div>{u}</div></div>)}</aside>;
}
