import MainLayout from '../../components/MainLayout/index.js';
import ContactUs from '../../components/ContactUs/index.js';
import Translate from '@docusaurus/Translate';

function SannHero() {
  return (
    <section className='sann-hero-section' style={{ padding: '80px 1rem', textAlign: 'center' }}>
      <div className='container' style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '40px' }}>
          <img 
            src='/img/s-icon-dark-square.png' 
            alt='Sånn logo' 
            style={{ 
              maxWidth: '400px', 
              width: '100%', 
              height: 'auto',
              margin: '0 auto',
              display: 'block'
            }} 
          />
        </div>
        <div style={{ fontSize: '1.75rem', color: '#666', marginTop: '20px' }}>
          <Translate>sann.coming-soon</Translate>
        </div>
      </div>
    </section>
  );
}

function SannContactus() {
  return (
   <ContactUs/>
  );
}

// Sann page
export default function Sann() {
  return (
    <MainLayout>
      <SannHero />
      <SannContactus />
    </MainLayout>
  );
}

