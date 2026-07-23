export interface ArchitecturalObject {
  id: string;
  name: string; // e.g. FLOAT 01
  collection: "FLOAT" | "AURA" | "FORM" | "VOID" | "NOVA";
  subtitle: string; // e.g. Floating Object of Light & Silence
  description: string; // "An architectural object crafted from wood, fabric and warm light."
  price: string; // e.g. "$450"
  numericPrice: number;
  materials: string[];
  dimensions: string;
  lightTemp: "2700K" | "3000K";
  image: string;
  specs: {
    linenRatio: string; // e.g. "70% Natural Linen"
    woodRatio: string; // e.g. "30% Steam-bent Ash Wood"
    lightSpec: string; // e.g. "2700K Warm Architectural Glow"
    joinery: string; // e.g. "Solid Brass & Hand-rubbed Oil Finish"
  };
  explodedLayers: {
    name: string;
    description: string;
    material: string;
  }[];
}

export const ARCHITECTURAL_COLLECTIONS: ArchitecturalObject[] = [
  {
    id: "float-01",
    name: "FLOAT 01",
    collection: "FLOAT",
    subtitle: "Floating Cylinder Object",
    description:
      "Designed to disappear into your space while quietly transforming it. Crafted from hand-bent ash wood and translucent raw linen.",
    price: "$450",
    numericPrice: 450,
    materials: ["Ash Wood", "Natural Linen Fabric", "2700K LED", "Solid Brass"],
    dimensions: "H 68cm × Ø 28cm",
    lightTemp: "2700K",
    image: "/images/hero_floating_lamp.png",
    specs: {
      linenRatio: "70% Natural Unbleached Linen",
      woodRatio: "30% Steam-bent Ash Wood",
      lightSpec: "2700K Warm Architectural Light",
      joinery: "Solid Brass & Natural Plant Oils",
    },
    explodedLayers: [
      {
        name: "01. Outer Diffuser",
        description: "Translucent hand-loomed 70% natural unbleached linen fabric weave.",
        material: "Natural Unbleached Linen",
      },
      {
        name: "02. Floating Skeleton",
        description: "Precision steam-bent ash wood ribbons treated with organic plant oils.",
        material: "Sustainable Ash Wood",
      },
      {
        name: "03. Radiance Core",
        description: "Solid-state 2700K indirect LED array casting soft shadowless warmth.",
        material: "2700K Architectural LED",
      },
      {
        name: "04. Precision Joinery",
        description: "Hand-machined solid brass screws and magnetic floating harness.",
        material: "Solid Brass & Teak Details",
      },
    ],
  },
  {
    id: "float-02",
    name: "FLOAT 02",
    collection: "FLOAT",
    subtitle: "Horizontal Cantilevered Light Beam",
    description:
      "An architectural object crafted from teak wood, natural canvas, and warm light. Suspended silently in space like a levitating beam.",
    price: "$700",
    numericPrice: 700,
    materials: ["Solid Teak", "Organic Cotton Canvas", "2700K LED", "Natural Oils"],
    dimensions: "L 120cm × W 14cm × H 18cm",
    lightTemp: "2700K",
    image: "/images/lamp_kaze_detail.png",
    specs: {
      linenRatio: "65% Organic Cotton Canvas",
      woodRatio: "35% Solid Plantation Teak",
      lightSpec: "2700K Soft Indirect Glow",
      joinery: "Concealed Brass Brackets",
    },
    explodedLayers: [
      {
        name: "01. Canvas Canopy",
        description: "Heavyweight organic unbleached cotton canvas tension layer.",
        material: "Organic Cotton Canvas",
      },
      {
        name: "02. Teak Spine",
        description: "Solid hand-planed teak wood load-bearing backbone.",
        material: "Plantation Teak",
      },
      {
        name: "03. Light Channel",
        description: "Dual-sided 2700K architectural light strip.",
        material: "2700K Warm LED",
      },
      {
        name: "04. Brass Anchors",
        description: "Micro solid brass tension cables and hand-stamped wooden tags.",
        material: "Solid Brass Hardware",
      },
    ],
  },
  {
    id: "aura-01",
    name: "AURA 01",
    collection: "AURA",
    subtitle: "Monolithic Pedestal Light Object",
    description:
      "A moment of silence rendered in stone and wood. A heavy travertine base paired with a featherweight parchment linen crown.",
    price: "$1,200",
    numericPrice: 1200,
    materials: ["Beech Wood", "Honed Travertine", "Parchment Linen", "3000K LED"],
    dimensions: "H 82cm × W 34cm × D 34cm",
    lightTemp: "3000K",
    image: "/images/lamp_exploded_materials.png",
    specs: {
      linenRatio: "60% Hand-woven Parchment Linen",
      woodRatio: "40% Honed Travertine & Beech",
      lightSpec: "3000K Warm Museum Radiance",
      joinery: "Hand-turned Beech Wood Pegs",
    },
    explodedLayers: [
      {
        name: "01. Parchment Crown",
        description: "Textured parchment linen shade capturing ambient sunlight shadows.",
        material: "Parchment Linen",
      },
      {
        name: "02. Beech Ring",
        description: "Lathe-turned natural beech wood collar with hand-rubbed wax finish.",
        material: "Natural Beech",
      },
      {
        name: "03. Luminous Core",
        description: "High-CRI 3000K light engine designed for museum-grade color rendering.",
        material: "3000K LED Engine",
      },
      {
        name: "04. Travertine Plinth",
        description: "Monolithic raw travertine stone base anchoring the floating light.",
        material: "Beige Travertine",
      },
    ],
  },
  {
    id: "void-01",
    name: "VOID 01",
    collection: "VOID",
    subtitle: "Radical Wall Sculpture Object",
    description:
      "A quiet intervention on empty architectural walls. Recessed wood frame casting soft ambient halos onto raw plaster.",
    price: "$1,500",
    numericPrice: 1500,
    materials: ["Teak Wood", "Raw Woven Linen", "Solid Brass", "2700K LED"],
    dimensions: "Ø 90cm × D 12cm",
    lightTemp: "2700K",
    image: "/images/craftsmanship_wood_fabric.png",
    specs: {
      linenRatio: "75% Raw Woven Linen",
      woodRatio: "25% Carved Teak Frame",
      lightSpec: "2700K Halo Projection",
      joinery: "Flush Brass Wall Mounts",
    },
    explodedLayers: [
      {
        name: "01. Woven Screen",
        description: "Open-weave linen fiber screen allowing light to breathe into the room.",
        material: "Woven Linen Fiber",
      },
      {
        name: "02. Teak Halo Frame",
        description: "Circular steam-curved teak rim sculpted to bounce indirect light.",
        material: "Carved Teak Wood",
      },
      {
        name: "03. Circumferential Light",
        description: "Concealed 360-degree warm LED reflector strip.",
        material: "2700K Warm LED",
      },
      {
        name: "04. Wall Spacer",
        description: "Machined solid brass standoff pins creating floating shadow effect.",
        material: "Solid Brass",
      },
    ],
  },
  {
    id: "nova-01",
    name: "NOVA 01",
    collection: "NOVA",
    subtitle: "Limited Edition Collectible Object",
    description:
      "Numbered limited series of 50 pieces worldwide. Includes serialized wooden tag with red wax stamp seal and magnetic presentation box.",
    price: "$2,000",
    numericPrice: 2000,
    materials: ["Teak Wood", "Fine Organic Linen", "Solid Brass", "Red Wax Seal"],
    dimensions: "H 110cm × W 45cm × D 45cm",
    lightTemp: "2700K",
    image: "/images/packaging_linen_pouch.png",
    specs: {
      linenRatio: "80% Organic Linen",
      woodRatio: "20% Carved Teak & Brass",
      lightSpec: "2700K Dim-to-Warm Architectural Engine",
      joinery: "Numbered Serial Brass Plate",
    },
    explodedLayers: [
      {
        name: "01. Sculptural Linen Hood",
        description: "Artisanally draped organic linen shade, unique to each numbered piece.",
        material: "Organic Linen",
      },
      {
        name: "02. Teak Tripod Core",
        description: "Three interlocking hand-carved teak legs united by brass mortise joints.",
        material: "Hand-Carved Teak",
      },
      {
        name: "03. Calibrated LED Engine",
        description: "Smooth dim-to-warm architectural illumination engine.",
        material: "2700K Dim-to-Warm LED",
      },
      {
        name: "04. Authenticity Seal",
        description: "Serialized wooden tag, red wax seal, and linen packaging pouch.",
        material: "Wood, Wax & Linen Pouch",
      },
    ],
  },
];

export const BRAND_VALUES = [
  { title: "01. Silence", desc: "Creating serene visual space through glare-free indirect warmth." },
  { title: "02. Simplicity", desc: "Purity of geometry inspired by Scandinavian and Japanese minimalism." },
  { title: "03. Architecture", desc: "Objects designed to dialogue with raw concrete, plaster, stone, and wood." },
  { title: "04. Sustainability", desc: "100% natural unbleached linen, plantation wood, and organic plant oils." },
  { title: "05. Craftsmanship", desc: "Artisanal steam-bending and hand-turned joinery crafted in Sri Lanka." },
  { title: "06. Innovation", desc: "Concealed 2700K solid-state light engines built for 50,000+ silent hours." },
  { title: "07. Timelessness", desc: "Objects free from transient trends, engineered to age gracefully." },
  { title: "08. Modern Luxury", desc: "Luxury measured not in gloss or gold, but in texture, shadow, and air." },
  { title: "09. Lightness", desc: "Visual weightlessness—sculptures that appear suspended in atmosphere." },
  { title: "10. Human-Centered Design", desc: "Calming light temperatures tailored for human circadian peace." },
];

export const BUSINESS_MODEL_BREAKDOWN = [
  { area: "Luxury Architectural Objects", percentage: "40%", description: "Collectible residential pieces for private patrons" },
  { area: "Hotels & Hospitality", percentage: "20%", description: "Bespoke lighting systems for luxury villas & boutique hotels" },
  { area: "Architects & Interior Designers", percentage: "20%", description: "Trade partnerships & custom architectural installations" },
  { area: "Furniture & Room Dividers", percentage: "10%", description: "Luminous spatial partitions & architectural furniture" },
  { area: "Limited Edition Collectibles", percentage: "10%", description: "Numbered museum pieces & gallery collaborations" },
];
