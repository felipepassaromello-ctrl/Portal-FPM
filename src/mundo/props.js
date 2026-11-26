/* Mundo das companhias — a arquitetura de cada setor.
 *
 * Ao lado do prédio de cada companhia (a sede, com altura pelo valor de mercado) fica a "operação" do setor: refinaria
 * com tocha no petróleo, turbina eólica na energia, silos no agro, fábrica com chaminés na indústria, e assim por
 * diante. Assim o setor se lê pela forma, e não só pela cor.
 *
 * Cada peça é uma geometria só, em unidades do terreno (cerca de 1 de largura, chão em y = 0), com um atributo por
 * vértice (aPart) que diz ao shader do mapa como pintar: 1 concreto, 2 luz na cor do setor, 3 chama, 4 metal escuro,
 * 5 janelas acesas, 6 luz vermelha piscando.
 */
import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

const tag = (g, id, x = 0, y = 0, z = 0) => {
  g.translate(x, y, z);
  g.setAttribute("aPart", new THREE.BufferAttribute(new Float32Array(g.attributes.position.count).fill(id), 1));
  return g;
};
const box = (w, h, d, id, x = 0, y = 0, z = 0, rz = 0) => { const g = new THREE.BoxGeometry(w, h, d); if (rz) g.rotateZ(rz); return tag(g, id, x, y + h / 2, z); };
const cyl = (r, h, id, x = 0, y = 0, z = 0, rTop = r, seg = 10) => tag(new THREE.CylinderGeometry(rTop, r, h, seg), id, x, y + h / 2, z);
const cone = (r, h, id, x = 0, y = 0, z = 0, seg = 10) => tag(new THREE.ConeGeometry(r, h, seg), id, x, y + h / 2, z);
const ball = (r, id, x, y, z) => tag(new THREE.SphereGeometry(r, 8, 6), id, x, y, z);

// peça de cada setor: { geo, smoke: pontos de onde sai fumaça, rotor: onde gira a hélice, top: fica no topo do prédio }
export function sectorProps() {
  const out = {};
  const def = (k, parts, extra = {}) => { out[k] = { geo: mergeGeometries(parts), ...extra }; parts.forEach((g) => g.dispose()); };

  // energia: turbina eólica e subestação
  def("util", [
    cyl(0.035, 1.25, 1, 0, 0, 0, 0.02), box(0.07, 0.06, 0.16, 1, 0, 1.22, 0.02),
    box(0.3, 0.12, 0.22, 1, -0.28, 0, 0.2), box(0.3, 0.02, 0.22, 2, -0.28, 0.12, 0.2),
    cyl(0.012, 0.3, 4, -0.38, 0.12, 0.26, 0.012, 5), cyl(0.012, 0.3, 4, -0.2, 0.12, 0.14, 0.012, 5),
  ], { rotor: [0, 1.25, 0.11] });
  // petróleo: tanques, coluna de destilação e tocha
  def("oil", [
    cyl(0.2, 0.26, 1, -0.2, 0, 0.15), cyl(0.205, 0.03, 2, -0.2, 0.19, 0.15), cyl(0.15, 0.2, 1, 0.18, 0, 0.22), cyl(0.155, 0.025, 2, 0.18, 0.14, 0.22),
    cyl(0.05, 0.85, 1, 0.1, 0, -0.15), cyl(0.06, 0.02, 2, 0.1, 0.3, -0.15), cyl(0.06, 0.02, 2, 0.1, 0.6, -0.15),
    box(0.3, 0.02, 0.03, 4, -0.05, 0.3, -0.15), cyl(0.02, 1.15, 4, -0.3, 0, -0.2, 0.015, 6), cone(0.06, 0.22, 3, -0.3, 1.15, -0.2, 7),
  ]);
  // agro: silos e elevador de grãos
  def("agro", [
    ...[-0.3, 0, 0.3].flatMap((x) => [cyl(0.14, 0.5, 1, x, 0, 0), cone(0.14, 0.12, 1, x, 0.5, 0), cyl(0.145, 0.03, 2, x, 0.36, 0)]),
    box(0.06, 0.78, 0.06, 4, 0.15, 0, -0.2), box(0.5, 0.025, 0.04, 4, 0, 0.74, -0.1, 0.12),
  ]);
  // indústria: galpão de telhado serrilhado e chaminés
  def("ind", [
    box(0.8, 0.22, 0.45, 1), box(0.8, 0.05, 0.01, 5, 0, 0.09, 0.23),
    ...[-0.27, 0, 0.27].map((x) => box(0.27, 0.09, 0.45, 1, x, 0.2, 0, 0.38)),
    cyl(0.04, 0.72, 1, 0.28, 0, -0.3, 0.03), cyl(0.036, 0.04, 6, 0.28, 0.7, -0.3), cyl(0.04, 0.6, 1, 0.12, 0, -0.3, 0.03), cyl(0.036, 0.04, 6, 0.12, 0.58, -0.3),
  ], { smoke: [[0.28, 0.76, -0.3], [0.12, 0.64, -0.3]] });
  // mineração, siderurgia e papel: usina, chaminés altas e correia
  def("base", [
    box(0.6, 0.3, 0.5, 1, -0.1), box(0.6, 0.03, 0.5, 2, -0.1, 0.3), box(0.55, 0.03, 0.06, 4, -0.05, 0.42, 0.3, 0.5),
    cyl(0.05, 1.0, 1, 0.32, 0, -0.15, 0.035), cyl(0.04, 0.04, 6, 0.32, 0.98, -0.15), cyl(0.05, 0.8, 1, 0.42, 0, 0.1, 0.035), cyl(0.04, 0.04, 6, 0.42, 0.78, 0.1),
    cone(0.16, 0.14, 4, -0.38, 0, 0.32, 6),
  ], { smoke: [[0.32, 1.05, -0.15], [0.42, 0.85, 0.1]] });
  // logística: contêineres empilhados e pórtico
  def("log", [
    ...[-0.22, 0, 0.22].flatMap((x, a) => [0, 0.1].flatMap((z, b) => [box(0.2, 0.09, 0.09, (a + b) % 2 ? 2 : 1, x, 0, z), ...((a + b) % 3 ? [box(0.2, 0.09, 0.09, (a + b) % 2 ? 1 : 2, x, 0.09, z)] : [])])),
    box(0.03, 0.5, 0.03, 4, -0.38, 0, 0.05), box(0.03, 0.5, 0.03, 4, 0.38, 0, 0.05), box(0.84, 0.035, 0.05, 4, 0, 0.5, 0.05), box(0.06, 0.05, 0.07, 1, 0.1, 0.45, 0.05), box(0.03, 0.03, 0.03, 6, 0, 0.535, 0.05),
  ]);
  // saúde e educação: ala hospitalar com a cruz acesa
  def("saude", [
    box(0.7, 0.3, 0.4, 5), box(0.72, 0.02, 0.42, 1, 0, 0.3), box(0.06, 0.26, 0.03, 2, 0, 0.36, 0.1), box(0.2, 0.07, 0.03, 2, 0, 0.455, 0.1), cyl(0.11, 0.01, 2, 0.22, 0.32, -0.05),
  ]);
  // tecnologia e telecom: data center e torre de transmissão
  def("tech", [
    box(0.6, 0.2, 0.4, 1, 0.05, 0, 0.1), box(0.6, 0.02, 0.41, 2, 0.05, 0.07, 0.1), box(0.6, 0.02, 0.41, 2, 0.05, 0.14, 0.1),
    cyl(0.03, 1.3, 4, -0.28, 0, -0.2, 0.008, 6), ball(0.06, 1, -0.22, 0.9, -0.2), ball(0.05, 1, -0.34, 1.05, -0.2), box(0.03, 0.03, 0.03, 6, -0.28, 1.3, -0.2),
  ]);
  // varejo e consumo: shopping com a faixa do letreiro
  def("cons", [
    box(0.8, 0.2, 0.5, 1), box(0.82, 0.05, 0.52, 2, 0, 0.14), box(0.24, 0.12, 0.02, 5, 0, 0, 0.26), box(0.1, 0.04, 0.1, 4, -0.2, 0.2), box(0.1, 0.04, 0.1, 4, 0.2, 0.2),
  ]);
  // construção e imóveis: prédio em obra e grua
  def("imob", [
    box(0.35, 0.42, 0.3, 5, 0.3, 0, 0.1), box(0.36, 0.02, 0.31, 1, 0.3, 0.42, 0.1), box(0.36, 0.02, 0.31, 1, 0.3, 0.21, 0.1),
    box(0.035, 1.2, 0.035, 4, -0.15), box(0.9, 0.03, 0.03, 4, 0.05, 1.2), box(0.12, 0.07, 0.06, 1, -0.33, 1.17), box(0.006, 0.4, 0.006, 4, 0.35, 0.8), box(0.03, 0.03, 0.03, 6, 0.49, 1.23),
  ]);
  // bancos: pináculo no topo da torre
  def("fin", [cyl(0.13, 0.03, 2), cone(0.1, 0.8, 4, 0, 0.03, 0, 8), box(0.03, 0.03, 0.03, 6, 0, 0.83)], { top: true });
  return out;
}

// hélice da turbina: três pás no plano XY, girando em torno do eixo (o shader gira)
export function rotorGeo() {
  const blades = [0, 1, 2].map((k) => { const g = new THREE.BoxGeometry(0.04, 0.5, 0.012); g.translate(0, 0.25, 0); g.rotateZ((k * Math.PI * 2) / 3); return g; });
  const hub = new THREE.SphereGeometry(0.035, 8, 6);
  const g = mergeGeometries([...blades, hub]);
  [...blades, hub].forEach((x) => x.dispose());
  return g;
}

// o prédio da companhia, com altura 1 (o mapa estica pela altura de cada uma): corpo de fachada (parte 0), embasamento,
// casas de máquinas e antena na cobertura. Com recuo, o terço de cima é mais estreito.
export function towerGeo(tiered) {
  const body = (w, h, y) => tag(new THREE.BoxGeometry(w, h, w), 0, 0, y + h / 2, 0);
  const s = tiered ? 0.72 : 1;
  const parts = tiered ? [body(1, 0.66, 0), body(0.72, 0.34, 0.66)] : [body(1, 1, 0)];
  parts.push(box(1.1, 0.03, 1.1, 1), box(0.26 * s, 0.03, 0.2 * s, 1, -0.2 * s, 1, 0.15 * s), box(0.16 * s, 0.045, 0.16 * s, 4, 0.22 * s, 1, -0.2 * s), box(0.3 * s, 0.018, 0.12 * s, 4, 0.1 * s, 1, 0.3 * s));
  if (tiered) parts.push(cyl(0.012, 0.12, 4, 0.2 * s, 1, 0.2 * s, 0.006, 5), box(0.2, 0.02, 0.1, 1, -0.3, 0.66, 0.42), box(0.1, 0.03, 0.1, 4, 0.42, 0.66, -0.3));
  const g = mergeGeometries(parts);
  parts.forEach((x) => x.dispose());
  return g;
}

// árvore de maquete: uma copa lisa sobre um tronco fino (a cor da copa vem de cada instância)
export function treeGeo() {
  const trunk = new THREE.CylinderGeometry(0.018, 0.024, 0.2, 6); trunk.translate(0, 0.1, 0);
  const crown = new THREE.SphereGeometry(0.2, 12, 9); crown.scale(1, 1.08, 1); crown.translate(0, 0.36, 0);
  const paint = (g, r, gg, b) => { const n = g.attributes.position.count, a = new Float32Array(n * 3); for (let k = 0; k < n; k++) a.set([r, gg, b], k * 3); g.setAttribute("color", new THREE.BufferAttribute(a, 3)); return g; };
  return mergeGeometries([paint(trunk, 0.62, 0.56, 0.5), paint(crown, 1, 1, 1)]);
}

// pessoa de terno, altura ~1,95 (mesma escala do antigo peão). Partes (para o shader das peças pequenas):
// 0 gravata (cor do tipo de acionista), 1 terno, 2 camisa, 3 pele, 4 cabelo, 5 sapatos.
export function personGeo() {
  const P = [
    box(0.2, 0.78, 0.24, 1, -0.13), box(0.2, 0.78, 0.24, 1, 0.13),
    box(0.22, 0.07, 0.36, 5, -0.13, 0, 0.05), box(0.22, 0.07, 0.36, 5, 0.13, 0, 0.05),
    box(0.62, 0.72, 0.32, 1, 0, 0.78), box(0.2, 0.5, 0.02, 2, 0, 0.98, 0.165), box(0.07, 0.4, 0.02, 0, 0, 1.04, 0.18),
    box(0.15, 0.64, 0.2, 1, -0.385, 0.84), box(0.15, 0.64, 0.2, 1, 0.385, 0.84), box(0.13, 0.11, 0.16, 3, -0.385, 0.73), box(0.13, 0.11, 0.16, 3, 0.385, 0.73),
    box(0.14, 0.1, 0.14, 3, 0, 1.5), ball(0.2, 3, 0, 1.74, 0), ball(0.205, 4, 0, 1.79, -0.035),
  ];
  const g = mergeGeometries(P);
  P.forEach((x) => x.dispose());
  return g;
}

const tint = (g, r, gg, b, x = 0, y = 0, z = 0) => { g.translate(x, y, z); const n = g.attributes.position.count, a = new Float32Array(n * 3); for (let k = 0; k < n; k++) a.set([r, gg, b], k * 3); g.setAttribute("color", new THREE.BufferAttribute(a, 3)); return g; };
// carro (frente para +x): carroceria na cor da instância, cabine de vidro, rodas, faróis e lanternas
export function carGeo() {
  const P = [
    tint(new THREE.BoxGeometry(0.17, 0.03, 0.074), 1, 1, 1, 0, 0.03, 0), tint(new THREE.BoxGeometry(0.09, 0.026, 0.064), 0.1, 0.13, 0.17, -0.008, 0.057, 0),
    tint(new THREE.BoxGeometry(0.094, 0.004, 0.068), 1, 1, 1, -0.008, 0.072, 0),
    ...[[-0.052, 0.036], [0.052, 0.036], [-0.052, -0.036], [0.052, -0.036]].map(([x, z]) => tint(new THREE.BoxGeometry(0.034, 0.03, 0.012), 0.06, 0.06, 0.07, x, 0.015, z)),
    tint(new THREE.BoxGeometry(0.004, 0.01, 0.06), 1.6, 1.5, 1.1, 0.086, 0.034, 0), tint(new THREE.BoxGeometry(0.004, 0.01, 0.06), 0.9, 0.1, 0.08, -0.086, 0.034, 0),
    tint(new THREE.BoxGeometry(0.19, 0.002, 0.092), 0.2, 0.2, 0.21, 0.008, 0.002, 0.008),
  ];
  const g = mergeGeometries(P);
  P.forEach((x) => x.dispose());
  return g;
}
// barco (proa para +x): k = 0 veleiro, 1 lancha
export function boatGeo(k) {
  const hull = new THREE.CylinderGeometry(0.09, 0.05, 0.5, 8, 1); hull.rotateZ(Math.PI / 2); hull.scale(1, 0.55, 1);
  const P = [tint(hull, 1, 1, 1, 0, 0.03, 0), tint(new THREE.BoxGeometry(0.4, 0.012, 0.13), 0.75, 0.6, 0.42, -0.02, 0.07, 0)];
  if (k === 0) {
    const sail = new THREE.ConeGeometry(0.17, 0.5, 3); sail.scale(1, 1, 0.06);
    const jib = new THREE.ConeGeometry(0.1, 0.36, 3); jib.scale(1, 1, 0.06);
    P.push(tint(new THREE.CylinderGeometry(0.006, 0.006, 0.6, 5), 0.3, 0.3, 0.32, 0.02, 0.37, 0), tint(sail, 1.5, 1.5, 1.5, -0.08, 0.36, 0), tint(jib, 1.5, 1.5, 1.5, 0.13, 0.27, 0));
  } else P.push(tint(new THREE.BoxGeometry(0.2, 0.06, 0.1), 1.4, 1.4, 1.4, -0.03, 0.1, 0), tint(new THREE.BoxGeometry(0.12, 0.03, 0.09), 0.1, 0.14, 0.2, 0.0, 0.14, 0), tint(new THREE.BoxGeometry(0.14, 0.008, 0.11), 1.4, 1.4, 1.4, -0.03, 0.16, 0));
  const g = mergeGeometries(P.map((x) => (x.index ? x.toNonIndexed() : x)));
  P.forEach((x) => x.dispose());
  g.computeVertexNormals();
  return g;
}
