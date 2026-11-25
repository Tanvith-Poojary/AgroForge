# AGROFORGE – Peacock Shield (Interactive 3D Digital Prototype)

An interactive 3D engineering demonstration of the **AGROFORGE – Peacock Shield** concept: a solar-assisted, motor-driven rotating multi-faceted reflective canopy designed to create shifting directional light reflections above agricultural fields.

> **Concept Stage Notice:** This is a digital engineering prototype and visual simulation. Physical prototyping and field trials are required to validate mechanical durability, solar power sizing (indicative 10–20 W concept), and bird-deterrence effectiveness.

## Implemented Features

- **Authentic 3D Prototype Reconstruction (`src/components/three/`)**:
  - Stationary ground mounting flange, main vertical cylindrical support pole, clamping collars, wiring conduit, and branded weather-resistant Smart Controller enclosure with live status & solar indicators.
  - Unified rotating assembly: central bearing collar, machined spider hub, curved tubular radial support arms with concentric rings and diagonal braces, 10–12 adjustable multi-faceted mirror-sheet canopy sectors, and top-mounted tilted photovoltaic panel (10–20 W concept).
- **Live Rotation & Operating Modes**:
  - `MODE 1 · MANUAL`: Start, Pause, Reset orientation, continuous RPM slider (0–12 RPM with 0/2/5/10 presets), Clockwise/Anticlockwise rotation, adjustable 10–12 radial sections.
  - `MODE 2 · AUTOMATIC`: Simulated controller command cycles altering rotation speed and direction.
  - `MODE 3 · SUNLIGHT SIMULATION`: Adjustable sun azimuth, elevation, intensity, live specular glints, and toggleable visual reflection ray paths.
- **Exploded View & Component Inspector**:
  - Smooth coaxial separation of all 10 major components with guide lines, interactive labels, and detailed system/connection metadata.
- **Farm Deployment Simulation**:
  - Multi-unit 3D agricultural field with crop rows, drag-and-drop unit placement, 3D/top-down camera, scale grid overlay, adjustable field size, and per-unit controls.

## Development

```bash
npm install
npm run dev
npm run build
```
