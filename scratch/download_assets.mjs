import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const SRC_DIR = path.join(projectRoot, 'src');
const PUBLIC_IMAGES_DIR = path.join(projectRoot, 'public', 'images');

const urlRegex = /https:\/\/dreamconsultancy\.org\/wp-content\/uploads\/([\w\.\/\-]+?\.(?:jpg|jpeg|png|gif|svg|webp|bmp|tif|tiff|ico))/gi;

function ensureDirSync(dirpath) {
  if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath, { recursive: true });
  }
}

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      }
      
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (/\.(ts|tsx|js|jsx)$/.test(fullPath)) {
      processFile(fullPath);
    }
  }
}

async function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let match;
  let hasChanges = false;
  
  const downloads = [];
  
  while ((match = urlRegex.exec(content)) !== null) {
    const fullUrl = match[0];
    const relPath = match[1]; // e.g. 2024/10/logo.png
    
    const localDestPath = path.join(PUBLIC_IMAGES_DIR, relPath);
    const localDir = path.dirname(localDestPath);
    
    ensureDirSync(localDir);
    
    if (!fs.existsSync(localDestPath)) {
      console.log(`Downloading: ${fullUrl} -> ${localDestPath}`);
      downloads.push(downloadFile(fullUrl, localDestPath));
    }
  }
  
  if (downloads.length > 0) {
    try {
      await Promise.all(downloads);
    } catch(err) {
      console.error(err);
    }
  }
  
  // Replace in content
  const newContent = content.replace(urlRegex, (match, p1) => {
    return `/images/${p1}`;
  });
  
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`Updated paths in ${filePath}`);
  }
}

async function run() {
  processDirectory(SRC_DIR);
}

run();
