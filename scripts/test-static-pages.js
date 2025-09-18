import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration des pages à tester
const pagesToTest = [
  '/nettoyage-syndrome-diogene-montpellier',
  '/debarras-gros-volumes-montpellier',
  '/desinfection-insalubrite-montpellier'
];

// Fonction pour tester une page
async function testPage(url) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'localhost',
      port: 4173, // Port du serveur de preview Vite
      path: url,
      method: 'GET'
    };

    const req = createServer(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          url,
          status: res.statusCode,
          hasContent: data.includes('SOS Nettoyage Diogène'),
          hasSEO: data.includes('meta name="description"'),
          hasStructuredData: data.includes('application/ld+json'),
          size: data.length
        });
      });
    });

    req.on('error', (err) => {
      resolve({
        url,
        error: err.message,
        status: 'ERROR'
      });
    });

    req.end();
  });
}

// Fonction pour tester toutes les pages
async function testAllPages() {
  console.log('🧪 Test des pages statiques...\n');
  
  for (const page of pagesToTest) {
    console.log(`Testing ${page}...`);
    const result = await testPage(page);
    
    if (result.error) {
      console.log(`❌ ${page}: ${result.error}`);
    } else if (result.status === 200) {
      console.log(`✅ ${page}:`);
      console.log(`   Status: ${result.status}`);
      console.log(`   Taille: ${result.size} bytes`);
      console.log(`   Contenu: ${result.hasContent ? '✅' : '❌'}`);
      console.log(`   SEO: ${result.hasSEO ? '✅' : '❌'}`);
      console.log(`   Structured Data: ${result.hasStructuredData ? '✅' : '❌'}`);
    } else {
      console.log(`⚠️  ${page}: Status ${result.status}`);
    }
    console.log('');
  }
}

// Fonction pour vérifier les fichiers statiques
function checkStaticFiles() {
  console.log('📁 Vérification des fichiers statiques...\n');
  
  const distPath = path.join(__dirname, '..', 'dist');
  
  pagesToTest.forEach(page => {
    const routePath = page.slice(1); // Enlever le slash initial
    const indexPath = path.join(distPath, routePath, 'index.html');
    
    if (fs.existsSync(indexPath)) {
      const stats = fs.statSync(indexPath);
      console.log(`✅ ${page}/index.html existe (${stats.size} bytes)`);
    } else {
      console.log(`❌ ${page}/index.html manquant`);
    }
  });
}

// Exécuter les tests
console.log('🚀 Test des pages statiques SEO\n');
checkStaticFiles();
console.log('\n' + '='.repeat(50) + '\n');

// Note: Pour tester avec un serveur HTTP, il faut d'abord lancer `npm run preview`
console.log('💡 Pour tester avec un serveur HTTP:');
console.log('   1. Lancez: npm run preview');
console.log('   2. Puis testez les URLs dans votre navigateur:');
pagesToTest.forEach(page => {
  console.log(`   - http://localhost:4173${page}`);
});

console.log('\n🔍 Tests manuels recommandés:');
console.log('   - Vérifiez que les pages se chargent sans JavaScript');
console.log('   - Testez avec des outils comme httpstatus.io');
console.log('   - Vérifiez les meta tags avec les outils de développement');
