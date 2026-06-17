const FEATURES = [
  {
    icon: '/assets/img/icons/icon-green-feature-1.svg',
    title: 'Quick Add Expense',
    desc: 'Add expenses in seconds with a clean, fast interface. No clutter, just tap and split.',
  },
  {
    icon: '/assets/img/icons/icon-green-feature-2.svg',
    title: 'Smart Split Algorithm',
    desc: 'Split equally, unequally, by exact amounts, percentages, or custom shares with ease.',
  },
  {
    icon: '/assets/img/icons/icon-green-feature-3.svg',
    title: 'Settle Up Instantly',
    desc: 'Simplify group debts with a single payment path. Settle balances with minimal transactions.',
  },
];

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="container-default">
        <div className="section-head-center">
          <h2>Ultimate method & amazing features to split expenses</h2>
        </div>

        <div className="features-grid">
          {FEATURES.map((feat, i) => (
            <div key={i} className="feature-item">
              <img src={feat.icon} alt={feat.title} className="feature-icon-img" />
              <div className="feature-text">
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
