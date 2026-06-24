import './BrandsTicker.css';

const BRANDS = [
  { name: 'Nestlé', src: '/brandlogos/nestle.png' },
  { name: 'Shreddies', src: '/brandlogos/shreddies.png' },
  { name: 'Cheerios', src: '/brandlogos/cheerios.png' },
  { name: 'Milkybar', src: '/brandlogos/milkybar.png' },
  { name: 'Aero', src: '/brandlogos/aero.png' },
  { name: 'Smarties', src: '/brandlogos/smarties.png' },
  { name: 'Munchies', src: '/brandlogos/munchies.png' },
  { name: 'Nesquik', src: '/brandlogos/nesquik.png' },
  { name: 'After Eight', src: '/brandlogos/after-eight.png' },
  { name: "L'Oréal Luxe", src: '/brandlogos/loreal-luxe.png' },
  { name: 'IT Cosmetics', src: '/brandlogos/it-cosmetics.png' },
];

export default function BrandsTicker() {
  return (
    <section id="brands" className="brands-ticker">
      <p className="brands-ticker-label">Worked with:</p>
      <div className="brands-ticker-grid">
        {BRANDS.map((brand) => (
          <div className="brands-ticker-item" key={brand.name}>
            <img src={brand.src} alt={brand.name} className="brands-ticker-logo" />
          </div>
        ))}
      </div>
    </section>
  );
}
