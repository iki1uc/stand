/* ================================================================
   AUFZUG.js — gemeinsame Etagen-Registry für den ALLROUNDER
   ================================================================
   Vereinigt:
   - die 6 Module aus ORAKEL (api.cntrl, cpu, gpu, ram, 3-81-9, NEWADA)
   - die Etagen aus STAGE-Reich (stage, ui, etage-8-orbit-viewer)
   in EINER Registry, inkl. Koordinaten (über coord.js) und
   geteiltem Zustand/Log (über localStorage, etagenübergreifend).

   Neue Etage/Modul hinzufügen: unten in FLOORS einen Eintrag
   ergänzen + den passenden Ordner mit eigener index.html (und bei
   Bedarf einer etage.html-Brücke, siehe /etage.html in diesem Paket)
   anlegen.
   ================================================================ */

const Aufzug = (function () {
  "use strict";

  // ─── 1. ETAGEN-REGISTRY ────────────────────────────────────────
  const FLOORS = [
    { id: 'api.cntrl',              name: 'api.cntrl',                 icon: '🔌', path: 'api.cntrl/etage.html',              coord: [1, 0, 0] },
    { id: 'cpu',                    name: 'cpu',                       icon: '💻', path: 'cpu/etage.html',                    coord: [2, 0, 0] },
    { id: 'gpu',                    name: 'gpu',                       icon: '🎮', path: 'gpu/etage.html',                    coord: [3, 0, 0] },
    { id: 'ram',                    name: 'ram',                       icon: '🧠', path: 'ram/etage.html',                    coord: [4, 0, 0] },
    { id: '3',                      name: '3‑81‑9',                    icon: '🌀', path: '3/etage.html',                      coord: [5, 0, 0] },
    { id: 'NEWADA',                 name: 'NEWADA',                    icon: '🌵', path: 'NEWADA/etage.html',                 coord: [6, 0, 0], special: 'newada' },
    { id: 'stage',                  name: 'Stage · Corridor',          icon: '🎛️', path: 'stage.html',                        coord: [7, 0, 0] },
    { id: 'ui',                     name: 'UI · Interface',            icon: '🖥️', path: 'ui.html',                           coord: [8, 0, 0] },
    { id: 'etage-8-orbit-viewer',   name: 'Orbit-Viewer · Etage 8',    icon: '🌀', path: 'etage-8-orbit-viewer/index.html',   coord: [9, 8, 1] }
  ];

  const STORAGE_STATE = 'allrounder_shared_state';
  const STORAGE_LOG   = 'allrounder_shared_log';
  const LOG_MAX = 60;

  // ─── 2. KOORDINATEN AUTOMATISCH REGISTRIEREN ──────────────────
  function registerAllCoords() {
    FLOORS.forEach(f => {
      if (!COORD.get(f.id)) {
        const [x, y, z] = f.coord || [0, 0, 0];
        COORD.register(f.id, x, y, z);
      }
    });
    if (!COORD.get('b')) COORD.register('b', 1, 0, 0);
    if (!COORD.get('h')) COORD.register('h', 0, 1, 0);
    if (!COORD.get('t')) COORD.register('t', 0, 0, 1);
  }

  // ─── 3. GETEILTER ZUSTAND (Fähigkeiten-Weiterleitung) ─────────
  function getSharedState() {
    try { return JSON.parse(localStorage.getItem(STORAGE_STATE) || '{}'); }
    catch (_) { return {}; }
  }
  function setSharedValue(key, value) {
    const s = getSharedState();
    s[key] = value;
    localStorage.setItem(STORAGE_STATE, JSON.stringify(s));
  }
  function getSharedValue(key, fallback) {
    const s = getSharedState();
    return Object.prototype.hasOwnProperty.call(s, key) ? s[key] : fallback;
  }

  // Status je Etage ('bereit' | 'geladen' | 'fehlercode') persistent halten
  function setFloorStatus(id, status) { setSharedValue('status:' + id, status); }
  function getFloorStatus(id) { return getSharedValue('status:' + id, 'bereit'); }

  // ─── 4. GETEILTES LOG ──────────────────────────────────────────
  function getSharedLog() {
    try { return JSON.parse(localStorage.getItem(STORAGE_LOG) || '[]'); }
    catch (_) { return []; }
  }
  function log(msg, floorLabel) {
    const entries = getSharedLog();
    entries.push({
      time: new Date().toLocaleTimeString('de-DE'),
      floor: floorLabel || 'ALLROUNDER',
      msg
    });
    while (entries.length > LOG_MAX) entries.shift();
    localStorage.setItem(STORAGE_LOG, JSON.stringify(entries));
    return entries;
  }
  function clearLog() {
    localStorage.setItem(STORAGE_LOG, '[]');
  }

  registerAllCoords();

  return {
    FLOORS,
    log, clearLog, getSharedLog,
    setSharedValue, getSharedValue,
    setFloorStatus, getFloorStatus
  };
})();
