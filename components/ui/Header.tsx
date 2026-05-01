'use client';

export function Header({ visible }: { visible: boolean }) {
  return (
    <header className="header-shell ui-hit" style={{ opacity: visible ? 1 : 0, transform: `translateY(${visible ? '0' : '-20px'})`, transition: 'all 0.8s ease' , position:'absolute', top:20, left:24, right:24, padding:'12px 18px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <strong>VODECO</strong>
      <nav style={{ display: 'flex', gap: 18, opacity: 0.9 }}><span>DAO</span><span>Projects</span><span>Ecosystem</span><span>Analytics</span></nav>
      <button style={{ border: '1px solid #97e8ff', background: 'rgba(129,220,255,0.1)', color: '#e8f8ff', borderRadius: 999, padding: '8px 14px' }}>Connect Wallet</button>
    </header>
  );
}
