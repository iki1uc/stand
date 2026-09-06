/* ================================================================
   COORD.js — gemeinsames Koordinatensystem (b/h/t · HDF-Cube)
   ================================================================
   Wird von index.html (Allrounder) und optional von einzelnen
   Etagen genutzt, um jeder Etage eine (x,y,z)-Position auf der
   b/h/t-Achse zuzuweisen und diese zentral abzufragen.
   ================================================================ */

const COORD = (function () {
  "use strict";

  const axes = {
    b: 'Breite (X-Achse)',
    h: 'Höhe (Y-Achse)',
    t: 'Tiefe (Z-Achse)'
  };

  const stages = {};

  function register(id, x, y, z) {
    stages[id] = { x, y, z };
    return stages[id];
  }

  function get(id) {
    return stages[id] || null;
  }

  function all() {
    return { ...stages };
  }

  return { axes, stages, register, get, all };
})();
