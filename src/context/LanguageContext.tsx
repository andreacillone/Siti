import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Language {
  code: string;
  name: string;
  flag: string;
  currency: string;
}

export const languages: Language[] = [
  { code: 'it', name: 'Italiano', flag: 'IT', currency: 'EUR' },
  { code: 'en', name: 'English', flag: 'US', currency: 'USD' },
  { code: 'fr', name: 'Français', flag: 'FR', currency: 'EUR' },
  { code: 'de', name: 'Deutsch', flag: 'DE', currency: 'EUR' },
  { code: 'es', name: 'Español', flag: 'ES', currency: 'EUR' }
];

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  it: {
    'nav.gallery': 'Galleria',
    'nav.support': 'Supporto',
    'nav.search': 'Cerca',
    'home.title': 'KARMA',
    'home.subtitle': 'Collezione d\'Arte Esclusiva',
    'home.unique': '1/1 Non esistono copie',
    'home.explore': 'Esplora Galleria',
    'home.section.title': 'Arte Automobilistica Esclusiva',
    'home.section.description': 'Ogni pezzo della nostra collezione è un\'opera d\'arte unica 1/1, che cattura l\'essenza dell\'eccellenza automobilistica attraverso la visione artistica.',
    'home.feature1.title': 'Pezzi Unici',
    'home.feature1.desc': 'Ogni opera d\'arte è unica nel suo genere senza copie esistenti',
    'home.feature2.title': 'Eccellenza Artistica',
    'home.feature2.desc': 'Collezione curata con cura di arte ispirata all\'automotive',
    'home.feature3.title': 'Qualità Premium',
    'home.feature3.desc': 'Materiali di alta qualità e cornici professionali incluse',
    'cart.title': 'Carrello',
    'cart.empty': 'Il tuo carrello è vuoto',
    'cart.empty.desc': 'Scopri la nostra collezione esclusiva di arte automobilistica',
    'cart.browse': 'Sfoglia Galleria',
    'cart.items': 'articoli nel tuo carrello',
    'cart.item': 'articolo nel tuo carrello',
    'cart.clear': 'Svuota Carrello',
    'cart.continue': 'Continua Shopping',
    'cart.summary': 'Riepilogo Ordine',
    'cart.subtotal': 'Subtotale',
    'cart.shipping': 'Spedizione',
    'cart.free': 'Gratuita',
    'cart.tax': 'Tasse',
    'cart.total': 'Totale',
    'cart.checkout': 'Procedi al Checkout',
    'cart.secure': 'Checkout sicuro con crittografia SSL',
    'gallery.title': 'Galleria',
    'gallery.description': 'Esplora la nostra collezione esclusiva di opere d\'arte automobilistiche',
    'gallery.all': 'Tutti',
    'gallery.available': 'Disponibili',
    'gallery.sold': 'Esauriti',
    'gallery.no-products': 'Nessun prodotto trovato per il filtro selezionato.',
    'product.back': 'Torna alla galleria',
    'product.next': 'Prodotto successivo',
    'product.not-found': 'Prodotto non trovato',
    'product.frame': 'CORNICE UTILIZZATA',
    'product.dimensions': 'DIMENSIONI TOTALI',
    'product.idcode': 'CODICE ID',
    'product.videos': 'LINK VIDEO',
    'product.no-videos': 'Nessun video disponibile',
    'product.available': 'Disponibile',
    'product.sold-out': 'Esaurito',
    'product.add-to-cart': 'Aggiungi al Carrello',
    'support.title': 'Supporto',
    'support.description': 'Siamo qui per aiutarti. Contatta il nostro team di supporto.',
    'support.get-in-touch': 'Contattaci',
    'support.email': 'Email',
    'support.phone': 'Telefono',
    'support.live-chat': 'Chat Live',
    'support.available': 'Disponibile 24/7',
    'support.hours': 'Orari di Lavoro',
    'support.business-hours': 'Lun-Ven: 9:00-18:00 CET',
    'support.address': 'Indirizzo',
    'account.title': 'Il Mio Account',
    'account.welcome': 'Bentornato',
    'account.sign-in': 'Accedi',
    'account.create-account': 'Crea Account',
    'account.welcome-back': 'Bentornato su Karma',
    'account.join': 'Unisciti alla comunità Karma',
    'account.name': 'Nome Completo',
    'account.email': 'Email',
    'account.password': 'Password',
    'account.confirm-password': 'Conferma Password',
    'account.google': 'Continua con Google',
    'account.no-account': 'Non hai un account? Registrati',
    'account.have-account': 'Hai già un account? Accedi',
    'admin.title': 'Pannello Admin',
    'admin.description': 'Gestisci la tua collezione Karma',
    'admin.access-denied': 'Accesso Negato',
    'admin.no-permission': 'Non hai i permessi per accedere a questa pagina.',
    'currency.symbol': '€'
  },
  en: {
    'nav.gallery': 'Gallery',
    'nav.support': 'Support',
    'nav.search': 'Search',
    'home.title': 'KARMA',
    'home.subtitle': 'Exclusive Art Collection',
    'home.unique': '1/1 No copies exist',
    'home.explore': 'Explore Gallery',
    'home.section.title': 'Exclusive Automotive Art',
    'home.section.description': 'Each piece in our collection is a unique 1/1 artwork, capturing the essence of automotive excellence through artistic vision.',
    'home.feature1.title': 'Unique Pieces',
    'home.feature1.desc': 'Every artwork is one-of-a-kind with no copies in existence',
    'home.feature2.title': 'Artistic Excellence',
    'home.feature2.desc': 'Carefully curated collection of automotive-inspired art',
    'home.feature3.title': 'Premium Quality',
    'home.feature3.desc': 'High-quality materials and professional framing included',
    'cart.title': 'Shopping Cart',
    'cart.empty': 'Your cart is empty',
    'cart.empty.desc': 'Discover our exclusive collection of automotive art',
    'cart.browse': 'Browse Gallery',
    'cart.items': 'items in your cart',
    'cart.item': 'item in your cart',
    'cart.clear': 'Clear Cart',
    'cart.continue': 'Continue Shopping',
    'cart.summary': 'Order Summary',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Shipping',
    'cart.free': 'Free',
    'cart.tax': 'Tax',
    'cart.total': 'Total',
    'cart.checkout': 'Proceed to Checkout',
    'cart.secure': 'Secure checkout with SSL encryption',
    'gallery.title': 'Gallery',
    'gallery.description': 'Explore our exclusive collection of automotive art pieces',
    'gallery.all': 'All',
    'gallery.available': 'Available',
    'gallery.sold': 'Sold Out',
    'gallery.no-products': 'No products found for the selected filter.',
    'product.back': 'Back to gallery',
    'product.next': 'Next product',
    'product.not-found': 'Product not found',
    'product.frame': 'FRAME USED',
    'product.dimensions': 'TOTAL DIMENSIONS',
    'product.idcode': 'ID CODE',
    'product.videos': 'VIDEO LINKS',
    'product.no-videos': 'No videos available',
    'product.available': 'Available',
    'product.sold-out': 'Sold Out',
    'product.add-to-cart': 'Add to Cart',
    'support.title': 'Support',
    'support.description': 'We\'re here to help. Get in touch with our support team.',
    'support.get-in-touch': 'Get in Touch',
    'support.email': 'Email',
    'support.phone': 'Phone',
    'support.live-chat': 'Live Chat',
    'support.available': 'Available 24/7',
    'support.hours': 'Business Hours',
    'support.business-hours': 'Mon-Fri: 9AM-6PM EST',
    'support.address': 'Address',
    'account.title': 'My Account',
    'account.welcome': 'Welcome back',
    'account.sign-in': 'Sign In',
    'account.create-account': 'Create Account',
    'account.welcome-back': 'Welcome back to Karma',
    'account.join': 'Join the Karma community',
    'account.name': 'Full Name',
    'account.email': 'Email',
    'account.password': 'Password',
    'account.confirm-password': 'Confirm Password',
    'account.google': 'Continue with Google',
    'account.no-account': 'Don\'t have an account? Sign up',
    'account.have-account': 'Already have an account? Sign in',
    'admin.title': 'Admin Panel',
    'admin.description': 'Manage your Karma collection',
    'admin.access-denied': 'Access Denied',
    'admin.no-permission': 'You don\'t have permission to access this page.',
    'currency.symbol': '$'
  },
  fr: {
    'nav.gallery': 'Galerie',
    'nav.support': 'Support',
    'nav.search': 'Rechercher',
    'home.title': 'KARMA',
    'home.subtitle': 'Collection d\'Art Exclusive',
    'home.unique': '1/1 Aucune copie n\'existe',
    'home.explore': 'Explorer la Galerie',
    'home.section.title': 'Art Automobile Exclusif',
    'home.section.description': 'Chaque pièce de notre collection est une œuvre d\'art unique 1/1, capturant l\'essence de l\'excellence automobile à travers la vision artistique.',
    'home.feature1.title': 'Pièces Uniques',
    'home.feature1.desc': 'Chaque œuvre d\'art est unique sans copies existantes',
    'home.feature2.title': 'Excellence Artistique',
    'home.feature2.desc': 'Collection soigneusement sélectionnée d\'art inspiré de l\'automobile',
    'home.feature3.title': 'Qualité Premium',
    'home.feature3.desc': 'Matériaux de haute qualité et encadrement professionnel inclus',
    'currency.symbol': '€'
  },
  de: {
    'nav.gallery': 'Galerie',
    'nav.support': 'Support',
    'nav.search': 'Suchen',
    'home.title': 'KARMA',
    'home.subtitle': 'Exklusive Kunstsammlung',
    'home.unique': '1/1 Keine Kopien existieren',
    'home.explore': 'Galerie Erkunden',
    'home.section.title': 'Exklusive Automobilkunst',
    'home.section.description': 'Jedes Stück unserer Sammlung ist ein einzigartiges 1/1 Kunstwerk, das die Essenz automobiler Exzellenz durch künstlerische Vision einfängt.',
    'home.feature1.title': 'Einzigartige Stücke',
    'home.feature1.desc': 'Jedes Kunstwerk ist einzigartig ohne existierende Kopien',
    'home.feature2.title': 'Künstlerische Exzellenz',
    'home.feature2.desc': 'Sorgfältig kuratierte Sammlung von automobil-inspirierter Kunst',
    'home.feature3.title': 'Premium Qualität',
    'home.feature3.desc': 'Hochwertige Materialien und professionelle Rahmung inklusive',
    'currency.symbol': '€'
  },
  es: {
    'nav.gallery': 'Galería',
    'nav.support': 'Soporte',
    'nav.search': 'Buscar',
    'home.title': 'KARMA',
    'home.subtitle': 'Colección de Arte Exclusiva',
    'home.unique': '1/1 No existen copias',
    'home.explore': 'Explorar Galería',
    'home.section.title': 'Arte Automovilístico Exclusivo',
    'home.section.description': 'Cada pieza de nuestra colección es una obra de arte única 1/1, capturando la esencia de la excelencia automovilística a través de la visión artística.',
    'home.feature1.title': 'Piezas Únicas',
    'home.feature1.desc': 'Cada obra de arte es única sin copias existentes',
    'home.feature2.title': 'Excelencia Artística',
    'home.feature2.desc': 'Colección cuidadosamente curada de arte inspirado en automóviles',
    'home.feature3.title': 'Calidad Premium',
    'home.feature3.desc': 'Materiales de alta calidad y enmarcado profesional incluido',
    'currency.symbol': '€'
  }
};

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  formatPrice: (price: number) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('karma-language');
    if (savedLanguage) {
      const language = languages.find(lang => lang.code === savedLanguage);
      if (language) {
        setCurrentLanguage(language);
      }
    }
  }, []);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('karma-language', language.code);
  };

  const t = (key: string): string => {
    return translations[currentLanguage.code]?.[key] || translations['en'][key] || key;
  };

  const formatPrice = (price: number): string => {
    const symbol = t('currency.symbol');
    if (currentLanguage.currency === 'USD') {
      return `${symbol}${Math.round(price * 1.1).toLocaleString()}`;
    }
    return `${symbol}${price.toLocaleString()}`;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, formatPrice }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};