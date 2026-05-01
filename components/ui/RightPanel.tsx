'use client';
export function RightPanel({ visible }: { visible: boolean }) {
  return <aside className="panel ui-hit" style={{ position: 'absolute', top: 110, right: 24, width: 320, padding: 16, opacity: visible ? 1 : 0, transform: `translateX(${visible ? 0 : 30}px)`, transition: 'all .8s ease' }}><h3>DAO Metrics</h3><ul style={{ paddingLeft: 18 }}><li>Water cleaned: 4.8M L</li><li>CO₂ reduced: 980T</li><li>Ecosystems restored: 127</li></ul><h4>Events</h4><p>Hackathon: Ocean Nodes · May 18</p><p>Voting Epoch #42 open</p><p>Staking APY: 11.2%</p></aside>;
}
