<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🌀 ALLROUNDER · STAGE-Reich · ORAKEL · arg.sync · NEWADA</title>

  <!-- gemeinsame Module: Koordinaten + Etagen-Registry/Sync -->
  <script src="coord.js"></script>
  <script src="aufzug.js"></script>

  <style>
    * { margin:0; padding:0; box-sizing:border-box; }

    body {
      background: radial-gradient(ellipse at 20% 30%, #0a0e1a, #000000);
      min-height: 100vh;
      font-family: 'Segoe UI', 'Consolas', monospace;
      color: #c0d0d0;
      padding: 12px;
    }

    .container {
      max-width: 1500px;
      margin: 0 auto;
      background: rgba(6,8,16,0.6);
      backdrop-filter: blur(4px);
      border-radius: 40px;
      padding: 20px 24px 28px;
      border: 1px solid rgba(160,200,240,0.05);
      box-shadow: 0 20px 60px rgba(0,0,0,0.9), inset 0 0 80px rgba(100,180,255,0.02);
    }

    header {
      display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center;
      border-bottom: 1px solid rgba(160,200,240,0.06); padding-bottom: 10px; margin-bottom: 16px;
    }
    header h1 {
      font-size: 22px; font-weight: 300; letter-spacing: 3px;
      background: linear-gradient(135deg, #f0d080, #b388ff, #8cf0d0, #6cf);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      display: flex; align-items: center; gap: 10px;
    }
    header h1 small { font-size: 11px; -webkit-text-fill-color:#4a5a6a; color:#4a5a6a; letter-spacing:2px; }
    .status-leds { display:flex; gap:14px; font-size:11px; color:#5a7a8a; flex-wrap:wrap; }
    .status-leds span { display:flex; align-items:center; gap:5px; }
    .led { display:inline-block; width:9px; height:9px; border-radius:50%; background:#2a4a5a; transition:.3s; }
    .led.on { background:#8cf0d0; box-shadow:0 0 12px #8cf0d0; }
    .led.pulse { background:#f0d080; animation:pulse 1.2s infinite; }
    .led.off { background:#2a4a5a; }
    .led.sync { background:#b388ff; box-shadow:0 0 12px #b388ff; }
    .led.newada { background:#ff6b6b; box-shadow:0 0 12px #ff6b6b; }
    @keyframes pulse { 0%,100%{opacity:.4;transform:scale(.8)} 50%{opacity:1;transform:scale(1.2)} }

    .section-title {
      color:#f0d080; font-size:13px; font-weight:400; letter-spacing:1.5px;
      margin:20px 0 10px; border-bottom:1px solid rgba(255,215,0,0.06); padding-bottom:5px;
      display:flex; justify-content:space-between; align-items:center;
    }
    .section-title .badge { font-size:10px; color:#5a7a8a; font-weight:300; }

    /* ─── ETAGEN-CORRIDOR ────────────────────────────────────── */
    .grid {
      display:grid; grid-template-columns:repeat(auto-fill, minmax(180px,1fr)); gap:12px;
    }
    .card {
      background: rgba(10,14,20,0.5); border:1px solid rgba(100,180,255,0.06);
      border-radius:14px; padding:14px 14px 12px; cursor:pointer; transition:all .2s; position:relative;
    }
    .card:hover { border-color:rgba(160,200,240,0.2); transform:translateY(-2px); }
    .card.active { border-color:#f0d080; box-shadow:0 0 20px rgba(255,215,0,0.1); }
    .card.newada { border-color:rgba(255,107,107,0.15); }
    .card.newada.active { border-color:#ff6b6b; box-shadow:0 0 20px rgba(255,107,107,0.12); }
    .card .icon { font-size:26px; display:block; }
    .card .name { font-size:13px; font-weight:500; color:#d0e0e8; margin-top:4px; }
    .card .path { font-size:9px; color:#4a5a6a; margin-top:4px; word-break:break-all; }
    .card .coord-badge {
      position:absolute; top:10px; right:12px; font-size:9px; color:#b388ff;
      background:rgba(179,136,255,0.08); padding:1px 8px; border-radius:12px; border:1px solid rgba(179,136,255,0.1);
    }
    .card .status-row { display:flex; gap:5px; margin-top:6px; flex-wrap:wrap; }
    .card .status-tag { font-size:8px; padding:1px 9px; border-radius:12px; background:rgba(0,0,0,0.25); border:1px solid transparent; }
    .card .status-tag.legit { border-color:#8cf0d0; color:#8cf0d0; }
    .card .status-tag.pending { border-color:#f0d080; color:#f0d080; }
    .card .status-tag.bereit { border-color:#5a7a8a; color:#9ab0c0; }
    .card .status-tag.geladen { border-color:#f0d080; color:#f0d080; }
    .card .open-link { font-size:9px; color:#70c8ff; text-decoration:none; display:inline-block; margin-top:6px; }

    /* ─── KOORDINATEN ────────────────────────────────────────── */
    .coord-box {
      background: rgba(0,0,0,0.25); padding:12px 16px; border-radius:12px; border:1px solid rgba(100,180,255,0.04);
      font-size:12px; line-height:1.7; color:#8ab0c0; margin-bottom:6px; max-height:180px; overflow-y:auto;
    }
    .coord-box .axis-label { color:#f0d080; font-weight:bold; }
    .coord-box .stage-entry { display:flex; justify-content:space-between; padding:2px 4px; border-bottom:1px solid rgba(100,180,255,0.02); }
    .coord-box .stage-entry .id { color:#d0e0e8; }
    .coord-box .stage-entry .pos { color:#b388ff; }

    /* ─── IFRAME-VORSCHAU ────────────────────────────────────── */
    .iframe-wrap {
      position: relative; background: rgba(0,0,0,0.3); border-radius:20px;
      border:1px solid rgba(100,180,255,0.04); overflow:hidden; min-height:380px;
    }
    .iframe-wrap iframe { width:100%; height:420px; border:0; display:block; background:#05070c; }
    .iframe-placeholder {
      display:flex; flex-direction:column; align-items:center; justify-content:center;
      min-height:380px; color:#3a4a5a; font-size:13px; letter-spacing:2px; background:#05070c;
    }
    .iframe-placeholder .big-icon { font-size:44px; margin-bottom:10px; opacity:.3; }
    .iframe-placeholder .hint { font-size:9px; color:#2a3a4a; margin-top:8px; }

    /* ─── SYNC-BAR ───────────────────────────────────────────── */
    .sync-bar {
      display:flex; flex-wrap:wrap; gap:8px; align-items:center; background:rgba(0,0,0,0.2);
      border-radius:16px; padding:8px 16px; border:1px solid rgba(179,136,255,0.05); margin:14px 0 6px;
    }
    .sync-bar .label { font-size:10px; color:#b388ff; letter-spacing:1.5px; display:flex; align-items:center; gap:6px; }
    .sync-bar input {
      flex:1; background:rgba(20,28,36,0.5); border:1px solid rgba(120,160,190,0.1); color:#d0e0e8;
      padding:6px 14px; border-radius:20px; font-size:12px; font-family:inherit; min-width:120px;
    }
    .sync-bar input::placeholder { color:#4a5a6a; }
    button {
      background: rgba(20,28,36,0.4); border:1px solid rgba(120,160,190,0.08); color:#9ab0c0;
      padding:5px 16px; border-radius:18px; font-size:10.5px; font-family:inherit; cursor:pointer; transition:.2s;
    }
    button:hover { background:rgba(40,70,90,0.2); border-color:rgba(160,200,240,0.15); color:#d0e8f8; }
    button.primary { border-color:rgba(255,215,0,0.15); color:#f0d080; }
    button.primary:hover { background:rgba(255,215,0,0.05); }
    button.sync { border-color:rgba(179,136,255,0.15); color:#b388ff; }
    button.sync:hover { background:rgba(179,136,255,0.06); }
    button.newada { border-color:rgba(255,107,107,0.15); color:#ff6b6b; }
    button.newada:hover { background:rgba(255,107,107,0.06); }
    button.danger { border-color:rgba(255,80,80,0.08); color:#d06060; }
    button.danger:hover { background:rgba(255,80,80,0.04); }

    /* ─── LOG ────────────────────────────────────────────────── */
    .log-box {
      background: rgba(0,0,0,0.25); border-radius:10px; padding:6px 14px; font-size:10px; color:#5a7a8a;
      max-height:160px; overflow-y:auto; line-height:1.6; border:1px solid rgba(100,180,255,0.02); margin-top:6px;
    }
    .log-box .entry { border-bottom:1px solid rgba(100,180,255,0.02); padding:2px 0; }
    .log-box .time { color:#2a3a4a; }
    .log-box .floor { color:#6cf; }
    .log-box .msg { color:#8ab0c0; }

    .footer {
      display:flex; flex-wrap:wrap; gap:14px; justify-content:center; margin-top:16px; padding:6px 14px;
      background:rgba(0,0,0,0.15); border-radius:12px; border:1px solid rgba(100,180,255,0.02); font-size:9px; color:#3a4a5a;
    }
    .footer .gold { color:#f0d080; }
    .footer .newada { color:#ff6b6b; }
    .footer .stat { display:flex; align-items:center; gap:4px; }

    ::-webkit-scrollbar { width:4px; }
    ::-webkit-scrollbar-track { background:#080c12; }
    ::-webkit-scrollbar-thumb { background:#1a2a3a; border-radius:4px; }
  </style>
</head>
<body>

<div class="container">

  <header>
    <h1>🌀 ALLROUNDER <small>STAGE-Reich · ORAKEL · arg.sync · NEWADA</small></h1>
    <div class="status-leds">
      <span><span class="led on" id="ledSystem"></span> SYSTEM</span>
      <span><span class="led sync" id="ledSync"></span> SYNC</span>
      <span><span class="led pulse" id="ledReich"></span> REICH</span>
      <span><span class="led" id="ledModule"></span> MODUL</span>
      <span><span class="led newada" id="ledNewada"></span> NEWADA</span>
    </div>
  </header>

  <div class="section-title">🏢 ETAGEN · CORRIDOR <span class="badge" id="floorCount">0 Etagen</span></div>
  <div class="grid" id="floorGrid"></div>

  <div class="section-title">🧭 KOORDINATEN · b/h/t · HDF-Cube <span class="badge" id="coordCount">0 registriert</span></div>
  <div class="coord-box" id="coordBox">Koordinaten werden geladen…</div>

  <div class="section-title">🔮 VORSCHAU <span class="badge" id="previewLabel">– keine Etage geladen –</span></div>
  <div class="iframe-wrap" id="iframeWrap">
    <div class="iframe-placeholder" id="placeholder">
      <div class="big-icon">🔮</div>
      <div>Klick auf eine Etagen-Kachel oben, um sie hier zu laden</div>
      <div class="hint">Ziffern 1–9 wählen ebenfalls eine Etage</div>
    </div>
    <iframe id="moduleFrame" style="display:none;"></iframe>
  </div>

  <div class="sync-bar">
    <span class="label"><span class="led sync" style="display:inline-block;width:8px;height:8px;"></span> arg.sync</span>
    <input type="text" id="argInput" placeholder="Nachricht an Etage…" value="sync:allrounder">
    <button class="sync" id="btnSync">🔄 SYNC</button>
    <button class="primary" id="btnBroadcast">📡 BROADCAST</button>
    <button class="newada" id="btnNewadaStatus">🌵 NEWADA-Status</button>
    <button class="danger" id="btnResetAll">⟲ RESET ALLE</button>
  </div>

  <div class="section-title">📜 GETEILTES LOG <span class="badge" id="logCount">0 Einträge</span></div>
  <div class="log-box" id="logBox"></div>

  <div class="footer">
    <span class="stat"><span class="gold">★</span> ALLROUNDER · Etagen + Module + Sync in einem</span>
    <span class="stat">🔷 <span id="fActive">0</span>/<span id="fTotal">0</span> geladen</span>
    <span class="stat">⚡ <span id="fSyncCount">0</span> SYNCs</span>
    <span class="stat newada">🌵 NEWADA: <span id="fNewadaStatus">bereit</span></span>
    <span class="stat">⌨️ 1‑9=Etage  s=Sync  b=Broadcast  n=NEWADA  r=Reset</span>
  </div>

</div>

<script>
"use strict";
/* ================================================================
   ALLROUNDER — vereint STAGE-Reich (Corridor + Koordinaten) und
   ORAKEL (Modul-Kacheln + iframe-Vorschau + arg.sync + NEWADA)
   ================================================================ */

const state = {
  activeFloor: null,
  syncCount: parseInt(Aufzug.getSharedValue('syncCount', 0), 10) || 0,
  newadaStatus: Aufzug.getSharedValue('newadaStatus', 'bereit')
};

const frame = document.getElementById('moduleFrame');
const placeholder = document.getElementById('placeholder');
const argInput = document.getElementById('argInput');

// ─── LOG ─────────────────────────────────────────────────────────
function renderLog() {
  const entries = Aufzug.getSharedLog().slice().reverse();
  const box = document.getElementById('logBox');
  box.innerHTML = entries.map(e =>
    `<div class="entry"><span class="time">[${e.time}]</span> <span class="floor">${e.floor}</span> <span class="msg">${e.msg}</span></div>`
  ).join('');
  document.getElementById('logCount').textContent = `${entries.length} Einträge`;
}
function log(msg) { Aufzug.log(msg, '🌀 ALLROUNDER'); renderLog(); }

// ─── ETAGEN-KACHELN ─────────────────────────────────────────────
function renderFloors() {
  const grid = document.getElementById('floorGrid');
  grid.innerHTML = '';
  let geladenCount = 0;

  Aufzug.FLOORS.forEach(f => {
    const coord = COORD.get(f.id) || { x: '?', y: '?', z: '?' };
    const status = Aufzug.getFloorStatus(f.id); // 'bereit' | 'geladen'
    if (status === 'geladen') geladenCount++;

    const card = document.createElement('div');
    card.className = 'card' + (f.special === 'newada' ? ' newada' : '') + (state.activeFloor === f.id ? ' active' : '');
    card.innerHTML = `
      <span class="coord-badge">(${coord.x}, ${coord.y}, ${coord.z})</span>
      <span class="icon">${f.icon}</span>
      <div class="name">${f.name}</div>
      <div class="path">${f.path}</div>
      <div class="status-row">
        <span class="status-tag legit">✅ legitimiert</span>
        <span class="status-tag ${status === 'geladen' ? 'geladen' : 'bereit'}">${status === 'geladen' ? '📂 geladen' : '⏳ bereit'}</span>
      </div>
      <a class="open-link" href="${f.path}" target="_blank" rel="noopener">↗ in neuem Tab öffnen</a>
    `;
    card.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') return; // Link nicht abfangen
      loadFloor(f.id);
    });
    grid.appendChild(card);
  });

  document.getElementById('floorCount').textContent = `${Aufzug.FLOORS.length} Etagen`;
  document.getElementById('fTotal').textContent = Aufzug.FLOORS.length;
  document.getElementById('fActive').textContent = geladenCount;
}

// ─── KOORDINATEN ────────────────────────────────────────────────
function renderCoords() {
  const out = ['<span class="axis-label">📐 Achsen:</span>'];
  Object.entries(COORD.axes).forEach(([k, v]) => out.push(`&nbsp;&nbsp;• ${k}: ${v}`));
  out.push('<br><span class="axis-label">🏢 Etagen:</span>');
  const entries = Object.entries(COORD.all());
  entries.forEach(([id, c]) => {
    if (id === 'b' || id === 'h' || id === 't') return;
    out.push(`<div class="stage-entry"><span class="id">${id}</span><span class="pos">(${c.x}, ${c.y}, ${c.z})</span></div>`);
  });
  document.getElementById('coordBox').innerHTML = out.join('');
  document.getElementById('coordCount').textContent = `${entries.length} registriert`;
}

// ─── ETAGE LADEN (Vorschau-iframe) ──────────────────────────────
function loadFloor(id) {
  const f = Aufzug.FLOORS.find(x => x.id === id);
  if (!f) { log(`❌ Etage "${id}" nicht gefunden`); return; }

  state.activeFloor = id;
  placeholder.style.display = 'none';
  frame.style.display = 'block';
  frame.src = f.path;

  Aufzug.setFloorStatus(id, 'geladen');
  document.getElementById('ledModule').className = 'led on';
  document.getElementById('previewLabel').textContent = `${f.icon} ${f.name}`;

  log(`📂 Etage "${f.name}" geladen (${f.path})`);
  renderFloors();
}

// ─── ARG.SYNC ───────────────────────────────────────────────────
function doSync(message) {
  const msg = message || argInput.value.trim() || 'sync:allrounder';
  state.syncCount++;
  Aufzug.setSharedValue('syncCount', state.syncCount);

  const led = document.getElementById('ledSync');
  led.className = 'led sync';
  setTimeout(() => led.className = 'led', 400);

  if (frame.contentWindow && state.activeFloor) {
    try {
      frame.contentWindow.postMessage({ type: 'arg.sync', payload: msg, from: 'allrounder' }, '*');
      log(`📡 SYNC an ${state.activeFloor}: ${msg}`);
    } catch (e) {
      log(`⚠️ SYNC fehlgeschlagen: ${e.message}`);
    }
  } else {
    log(`🔄 SYNC (keine Etage aktiv): ${msg}`);
  }

  argInput.value = msg;
  updateFooter();
}
function broadcastSync() { doSync(argInput.value.trim() || 'broadcast:allrounder'); }

// ─── NEWADA ─────────────────────────────────────────────────────
function toggleNewadaStatus() {
  if (state.newadaStatus === 'bereit') {
    state.newadaStatus = 'aktiv 🌵';
    document.getElementById('ledNewada').className = 'led newada pulse';
    log('🌵 NEWADA · Raum-Zeit-Krümmung aktiviert');
  } else if (state.newadaStatus === 'aktiv 🌵') {
    state.newadaStatus = 'stabilisieren…';
    log('🌵 NEWADA · Stabilisierung läuft…');
    setTimeout(() => {
      state.newadaStatus = 'bereit';
      document.getElementById('ledNewada').className = 'led newada';
      Aufzug.setSharedValue('newadaStatus', state.newadaStatus);
      log('🌵 NEWADA · wieder bereit');
      updateFooter();
    }, 1500);
  } else {
    state.newadaStatus = 'bereit';
    document.getElementById('ledNewada').className = 'led newada';
    log('🌵 NEWADA · zurückgesetzt');
  }
  Aufzug.setSharedValue('newadaStatus', state.newadaStatus);
  updateFooter();
}

// ─── RESET ──────────────────────────────────────────────────────
function resetAll() {
  Aufzug.FLOORS.forEach(f => Aufzug.setFloorStatus(f.id, 'bereit'));
  state.activeFloor = null;
  state.syncCount = 0;
  state.newadaStatus = 'bereit';
  Aufzug.setSharedValue('syncCount', 0);
  Aufzug.setSharedValue('newadaStatus', 'bereit');
  Aufzug.clearLog();

  frame.style.display = 'none';
  frame.src = '';
  placeholder.style.display = 'flex';
  document.getElementById('previewLabel').textContent = '– keine Etage geladen –';
  document.getElementById('ledModule').className = 'led off';
  document.getElementById('ledNewada').className = 'led newada';

  renderFloors();
  log('⟲ ALLROUNDER zurückgesetzt — alle Etagen auf "bereit"');
  updateFooter();
}

// ─── FOOTER ─────────────────────────────────────────────────────
function updateFooter() {
  document.getElementById('fSyncCount').textContent = state.syncCount;
  document.getElementById('fNewadaStatus').textContent = state.newadaStatus;
}

// ─── POSTMESSAGE-EMPFAENGER (von Etagen) ───────────────────────
window.addEventListener('message', (event) => {
  const data = event.data;
  if (!data) return;
  if (data.type === 'arg.sync') {
    argInput.value = data.payload || '';
    state.syncCount++;
    Aufzug.setSharedValue('syncCount', state.syncCount);
    log(`📨 Empfangen von ${data.from || 'Etage'}: ${data.payload}`);
    updateFooter();
  }
  if (data.type === 'etage.ready') {
    const from = data.from || 'unbekannt';
    Aufzug.setFloorStatus(from, 'geladen');
    if (!COORD.get(from)) {
      const idx = Aufzug.FLOORS.findIndex(f => f.id === from);
      COORD.register(from, idx + 1, 0, 0);
      renderCoords();
    }
    renderFloors();
    log(`✅ Etage "${from}" meldet sich bereit`);
  }
});

// ─── EVENTS ─────────────────────────────────────────────────────
document.getElementById('btnSync').addEventListener('click', () => doSync());
document.getElementById('btnBroadcast').addEventListener('click', broadcastSync);
document.getElementById('btnNewadaStatus').addEventListener('click', toggleNewadaStatus);
document.getElementById('btnResetAll').addEventListener('click', resetAll);
argInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') doSync(); });

document.addEventListener('keydown', (e) => {
  if (e.key === 's' || e.key === 'S') { e.preventDefault(); doSync(); }
  if (e.key === 'b' || e.key === 'B') { e.preventDefault(); broadcastSync(); }
  if (e.key === 'r' || e.key === 'R') { e.preventDefault(); resetAll(); }
  if (e.key === 'n' || e.key === 'N') { e.preventDefault(); toggleNewadaStatus(); }
  const idx = parseInt(e.key, 10) - 1;
  if (idx >= 0 && idx < Aufzug.FLOORS.length) loadFloor(Aufzug.FLOORS[idx].id);
});

// ─── INIT ───────────────────────────────────────────────────────
renderFloors();
renderCoords();
renderLog();
updateFooter();
document.getElementById('ledNewada').className = state.newadaStatus === 'bereit' ? 'led newada' : 'led newada pulse';
log('🌀 ALLROUNDER initialisiert · Etagen + Module + arg.sync + NEWADA vereint');
</script>
</body>
</html>
