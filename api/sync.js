// salesvision-sync/api/sync.js
const DATA_FILE = 'data.json';

async function handleRequest(request) {
  if (request.method === 'POST') {
    const data = await request.json();
    // Aqui você implementaria a lógica real de sincronização
    // Por enquanto, apenas retornamos os mesmos dados
    return new Response(JSON.stringify({
      status: 'success',
      data: data
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  return new Response('Not found', { status: 404 });
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});