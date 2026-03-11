"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Plasma grid shader – adapted to orange/navy palette
const fragmentShader = `
  uniform float time;
  uniform vec2 resolution;

  // hash / noise helpers
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0,0)), hash(i + vec2(1,0)), u.x),
      mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = rot * p * 2.0 + shift;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    uv.x *= resolution.x / resolution.y;

    float t = time * 0.18;

    // Grid lines
    vec2 grid = fract(uv * 14.0) - 0.5;
    float gridLine = smoothstep(0.48, 0.42, max(abs(grid.x), abs(grid.y)));

    // Plasma wave
    vec2 q = vec2(
      fbm(uv + vec2(0.0, 0.0) + t * 0.4),
      fbm(uv + vec2(5.2, 1.3) + t * 0.3)
    );
    vec2 r = vec2(
      fbm(uv + 4.0 * q + vec2(1.7, 9.2) + t * 0.2),
      fbm(uv + 4.0 * q + vec2(8.3, 2.8) + t * 0.15)
    );
    float f = fbm(uv + 4.0 * r);

    // Color palette: cream -> orange -> navy
    vec3 colorA = vec3(0.980, 0.965, 0.969); // #FAFAF8 cream
    vec3 colorB = vec3(0.769, 0.384, 0.176); // #C4622D orange
    vec3 colorC = vec3(0.059, 0.125, 0.251); // #0F2040 navy

    vec3 col = mix(colorA, colorB, clamp(f * f * 4.0, 0.0, 1.0));
    col = mix(col, colorC, clamp(length(q) * 0.6, 0.0, 1.0));

    // Blend in grid
    col = mix(col, col * 1.25, gridLine * 0.3);

    float alpha = clamp(f * 0.3 + gridLine * 0.06, 0.0, 0.32);

    gl_FragColor = vec4(col, alpha);
  }
`;

export default function ParticleNetwork() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth;
    const h = mount.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(w, h) },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
    });

    scene.add(new THREE.Mesh(geometry, material));

    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      material.uniforms.time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!mount) return;
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      renderer.setSize(nw, nh);
      material.uniforms.resolution.value.set(nw, nh);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      mount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
