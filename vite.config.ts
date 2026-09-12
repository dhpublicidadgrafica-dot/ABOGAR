import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

// LINT.IfChange(aistudio_media_plugin)
function aistudioMediaPlugin(): Plugin {
  return {
    name: 'vite-plugin-aistudio-media',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/assets/aistudio/')) {
          const rawPath = req.url.split('?')[0].split('#')[0];
          try {
            const decodedPath = decodeURIComponent(rawPath);
            const relativePath = decodedPath.replace(/^\//, '');
            const aistudioDir = path.resolve(
              __dirname,
              'public',
              'assets',
              'aistudio',
            );
            const filePath = path.resolve(__dirname, 'public', relativePath);
            if (
              filePath.startsWith(aistudioDir + path.sep) &&
              fs.existsSync(filePath) &&
              fs.statSync(filePath).isFile()
            ) {
              const ext = path.extname(filePath).toLowerCase();
              const mimeMap: Record<string, string> = {
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.png': 'image/png',
                '.gif': 'image/gif',
                '.webp': 'image/webp',
                '.svg': 'image/svg+xml',
                '.bmp': 'image/bmp',
                '.ico': 'image/x-icon',
                '.mp4': 'video/mp4',
                '.webm': 'video/webm',
                '.ogv': 'video/ogg',
                '.mp3': 'audio/mpeg',
                '.wav': 'audio/wav',
                '.ogg': 'audio/ogg',
                '.pdf': 'application/pdf',
              };
              res.setHeader(
                'Content-Type',
                mimeMap[ext] || 'application/octet-stream',
              );
              res.setHeader('Cache-Control', 'no-cache');
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          } catch {
            // Fall through if URI decoding or file access fails
          }
        }
        next();
      });
    },
  };
}
// LINT.ThenChange(//depot/google3/java/com/google/alkali/boq/makersuite/applet_dev_service/templates/initializers/react_theme/vite.config.ts:aistudio_media_plugin)

function saveImagePlugin(): Plugin {
  return {
    name: 'vite-plugin-save-image',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/api/save-image')) {
          if (req.method === 'POST') {
            const chunks: Buffer[] = [];
            req.on('data', (chunk) => {
              chunks.push(chunk);
            });
            req.on('end', async () => {
              try {
                const bodyStr = Buffer.concat(chunks).toString('utf-8');
                const { key, dataUrl, imageUrl, fileName: customFileName } = JSON.parse(bodyStr);

                let buffer: Buffer | null = null;
                let ext = 'jpg';

                if (imageUrl && typeof imageUrl === 'string' && (imageUrl.startsWith('http://') || imageUrl.startsWith('https://'))) {
                  try {
                    const fetchRes = await fetch(imageUrl);
                    if (!fetchRes.ok) {
                      throw new Error(`No se pudo descargar la imagen del enlace (${fetchRes.status})`);
                    }
                    const arrayBuf = await fetchRes.arrayBuffer();
                    buffer = Buffer.from(arrayBuf);
                    const contentType = fetchRes.headers.get('content-type') || '';
                    if (contentType.includes('png')) ext = 'png';
                    else if (contentType.includes('webp')) ext = 'webp';
                    else if (contentType.includes('svg')) ext = 'svg';
                    else ext = 'jpg';
                  } catch (fetchErr: any) {
                    res.setHeader('Content-Type', 'application/json');
                    res.statusCode = 400;
                    res.end(JSON.stringify({ error: `Error al descargar imagen: ${fetchErr?.message || 'enlace inválido'}` }));
                    return;
                  }
                } else if (key && dataUrl && typeof dataUrl === 'string' && dataUrl.startsWith('data:image/')) {
                  const match = dataUrl.match(/^data:image\/([a-zA-Z0-9+]+);base64,(.+)$/);
                  if (match) {
                    let matchedExt = match[1].toLowerCase();
                    if (matchedExt === 'jpeg') matchedExt = 'jpg';
                    ext = matchedExt;
                    const base64Data = match[2];
                    buffer = Buffer.from(base64Data, 'base64');
                  }
                }

                if (key && buffer) {
                  const safeKey = key.replace(/[^a-zA-Z0-9_-]/g, '_');
                  const fileName = customFileName || `${safeKey}.${ext}`;
                  const imagesDir = path.resolve(__dirname, 'public', 'images');
                  if (!fs.existsSync(imagesDir)) {
                    fs.mkdirSync(imagesDir, { recursive: true });
                  }
                  const filePath = path.resolve(imagesDir, fileName);
                  fs.writeFileSync(filePath, buffer);

                  const aistudioDir = path.resolve(__dirname, 'public', 'assets', 'aistudio');
                  if (!fs.existsSync(aistudioDir)) {
                    fs.mkdirSync(aistudioDir, { recursive: true });
                  }
                  fs.writeFileSync(path.resolve(aistudioDir, fileName), buffer);
                  fs.writeFileSync(path.resolve(__dirname, 'public', fileName), buffer);

                  // If it's the director photo, also duplicate as carlos-nava.jpg
                  if (key === 'abogar_director_photo') {
                    fs.writeFileSync(path.resolve(imagesDir, `carlos-nava.${ext}`), buffer);
                    fs.writeFileSync(path.resolve(aistudioDir, `carlos-nava.${ext}`), buffer);
                    fs.writeFileSync(path.resolve(__dirname, 'public', `carlos-nava.${ext}`), buffer);
                  }

                  // Update manifest
                  const manifestPath = path.resolve(imagesDir, 'manifest.json');
                  let manifest: Record<string, string> = {};
                  if (fs.existsSync(manifestPath)) {
                    try {
                      manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
                    } catch {}
                  }
                  manifest[key] = `/images/${fileName}`;
                  if (key === 'abogar_director_photo') {
                    manifest['carlos_nava'] = `/images/carlos-nava.${ext}`;
                  }
                  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

                  res.setHeader('Content-Type', 'application/json');
                  res.statusCode = 200;
                  res.end(JSON.stringify({ success: true, url: `/images/${fileName}?t=${Date.now()}` }));
                  return;
                }
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 400;
                res.end(JSON.stringify({ error: 'Formato o enlace de imagen inválido' }));
                return;
              } catch (e: any) {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 500;
                res.end(JSON.stringify({ error: e?.message || 'Error al guardar imagen' }));
                return;
              }
            });
            return;
          }

          if (req.method === 'GET') {
            const manifestPath = path.resolve(__dirname, 'public', 'images', 'manifest.json');
            let manifest: Record<string, string> = {};
            if (fs.existsSync(manifestPath)) {
              try {
                manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
              } catch {}
            }
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({ success: true, manifest }));
            return;
          }
        }

        // Serve any static file in public/images/ directly
        if (req.url && (req.url.startsWith('/images/') || req.url.startsWith('/assets/aistudio/'))) {
          try {
            const cleanUrl = req.url.split('?')[0];
            const filePath = path.resolve(__dirname, 'public', cleanUrl.replace(/^\//, ''));
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              const ext = path.extname(filePath).toLowerCase();
              const mimeMap: Record<string, string> = {
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.png': 'image/png',
                '.gif': 'image/gif',
                '.webp': 'image/webp',
                '.svg': 'image/svg+xml',
                '.ico': 'image/x-icon',
              };
              res.setHeader('Content-Type', mimeMap[ext] || 'application/octet-stream');
              res.setHeader('Cache-Control', 'public, max-age=31536000');
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          } catch {}
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), aistudioMediaPlugin(), saveImagePlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
