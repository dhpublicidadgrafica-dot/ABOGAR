/**
 * Utilidad para sincronizar y guardar permanentemente las imágenes
 * en el almacenamiento local y en los archivos del proyecto (/public/images/).
 */

export interface SaveImageResponse {
  success: boolean;
  url?: string;
  error?: string;
}

export async function saveImageLocallyAndServer(
  key: string,
  imageSource: string, // puede ser data:image/... o https://...
  fileName?: string
): Promise<SaveImageResponse> {
  const isDataUrl = imageSource.startsWith('data:image/');
  const isHttpUrl = imageSource.startsWith('http://') || imageSource.startsWith('https://');

  // 1. Guardar en localStorage para disponibilidad instantánea en el navegador
  try {
    localStorage.setItem(key, imageSource);
  } catch (err) {
    console.warn('No se pudo guardar en localStorage (posible límite de cuota):', err);
  }

  // 2. Enviar al endpoint del servidor para persistir como archivo físico en /public/images/
  try {
    const payload: { key: string; dataUrl?: string; imageUrl?: string; fileName?: string } = {
      key,
      fileName,
    };
    if (isDataUrl) {
      payload.dataUrl = imageSource;
    } else if (isHttpUrl) {
      payload.imageUrl = imageSource;
    } else {
      payload.dataUrl = imageSource;
    }

    const res = await fetch('/api/save-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.url) {
        try {
          localStorage.setItem(key, data.url);
        } catch {}
      }
      return { success: true, url: data.url };
    } else {
      const errData = await res.json().catch(() => ({}));
      return { success: false, error: errData.error || 'Error al guardar en el servidor' };
    }
  } catch (err: any) {
    console.warn('Error al contactar con /api/save-image:', err);
    return { success: false, error: err?.message };
  }
}

export async function saveImageFromUrl(
  key: string,
  imageUrl: string,
  fileName?: string
): Promise<SaveImageResponse> {
  return saveImageLocallyAndServer(key, imageUrl, fileName);
}

/**
 * Recorre todas las imágenes personalizadas guardadas en localStorage
 * y las sincroniza automáticamente con los archivos del servidor.
 */
export async function syncLocalImagesWithServer(): Promise<{ synced: number; errors: number }> {
  let synced = 0;
  let errors = 0;

  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith('abogar_')) continue;

      const value = localStorage.getItem(key);
      if (value && value.startsWith('data:image/')) {
        try {
          const res = await fetch('/api/save-image', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ key, dataUrl: value }),
          });
          if (res.ok) {
            synced++;
          } else {
            errors++;
          }
        } catch {
          errors++;
        }
      }
    }
  } catch (e) {
    console.warn('Error durante la sincronización automática de imágenes:', e);
  }

  return { synced, errors };
}
