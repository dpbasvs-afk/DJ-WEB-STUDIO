import { useEffect, useState } from 'react';
import './App.css';
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  Terminal,
  X,
  Zap,
} from 'lucide-react';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  const [toast, setToast] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', service: 'High-Frequency Web App', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const triggerToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      triggerToast('Please fill in all required fields.');
      return;
    }
    setSubmitted(true);
    triggerToast('Inquiry dispatched successfully! DJ Web Studio will connect within 2 hours.');
    setTimeout(() => {
      setForm({ name: '', email: '', service: 'High-Frequency Web App', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  const projects = [
    { 
      id: 1, 
      title: "Aura AI Commerce", 
      tagline: "Autonomous neural shopping experience with real-time intent prediction.", 
      category: "E-Commerce / AI", 
      metrics: "340% Conversion Lift • <120ms Latency", 
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80", 
      stack: ["React", "TensorFlow.js", "Node.js", "Redis"], 
      desc: "Aura AI Commerce redefines digital storefronts by analyzing micro-interactions in real time.", 
      features: ["Real-time intent vector prediction engine", "Sub-100ms globally edge-cached pipeline", "Dynamic personalized UI morphology"] 
    },
    { 
      id: 2, 
      title: "Vortex Financial Engine", 
      tagline: "Ultra-low latency institutional trading interface & liquidity aggregator.", 
      category: "Fintech / Web3", 
      metrics: "$4.2B Daily Volume • 99.999% Uptime", 
      image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80", 
      stack: ["Next.js", "Rust", "WebSockets", "Solidity"], 
      desc: "Engineered for high-frequency trading desks and decentralized liquidity pools.", 
      features: ["Sub-millisecond order book streaming", "Encrypted biometric authentication layers", "Custom canvas-based high-fps charting"] 
    },
    { 
      id: 3, 
      title: "Hyperion Cloud Suite", 
      tagline: "Distributed Kubernetes orchestration and microservice observability deck.", 
      category: "Cloud Infrastructure", 
      metrics: "12,000+ Nodes Managed • Zero SecBreaches", 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", 
      stack: ["React", "Go", "Docker", "Kubernetes"], 
      desc: "Hyperion provides DevOps teams with a crystal-clear command center.", 
      features: ["Real-time topological cluster health maps", "Automated self-healing policy triggers", "Granular RBAC with token support"] 
    },
    { 
      id: 4, 
      title: "Kairo Cyber Security", 
      tagline: "Zero-trust perimeter defense and biometric threat mitigation platform.", 
      category: "Cybersecurity", 
      metrics: "99.99% Threat Blocked • ISO27001 Ready", 
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80", 
      stack: ["TypeScript", "Python", "FastAPI", "WebAssembly"], 
      desc: "Kairo guards critical digital assets with military-grade encryption visualization.", 
      features: ["Continuous vulnerability posture scoring", "Encrypted ephemeral session tunnels", "Behavioral biometric keystroke analysis"] 
    },
    { 
      id: 5, 
      title: "Pulse Health Analytics", 
      tagline: "HIPAA-compliant remote patient telemetry and AI diagnostic suite.", 
      category: "HealthTech", 
      metrics: "1.8M Patients Monitored • 40% Faster Triage", 
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80", 
      stack: ["React", "Node.js", "PostgreSQL", "AES256"], 
      desc: "Bridging the gap between hospitals and at-home recovery.", 
      features: ["End-to-end HIPAA compliant data pipelines", "Real-time IoT wearable sensor streaming", "Automated clinical escalation triggers"] 
    },
    { 
      id: 6, 
      title: "Nexus 3D Engine", 
      tagline: "In-browser WebGL spatial computing & interactive digital twins.", 
      category: "Spatial Computing / 3D", 
      metrics: "60 FPS Stable • 85% Engagement Boost", 
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80", 
      stack: ["Three.js", "WebGL", "R3F", "GLSL"], 
      desc: "Nexus renders photorealistic 3D environments directly inside modern web browsers.", 
      features: ["GPU-accelerated GLSL shader effects", "Dynamic lighting & shadow baking in-browser", "Cross-device mobile & desktop VR support"] 
    }
  ];

  const socials = [
    { name: 'WhatsApp', href: 'https://wa.me/15551234567', icon: MessageCircle },
    { name: 'Gmail', href: 'mailto:hello@djwebstudio.dev', icon: Mail },
    { name: 'Instagram', href: 'https://instagram.com/djwebstudio', icon: Sparkles },
    { name: 'Threads', href: 'https://threads.net/@djwebstudio', icon: MessageCircle },
    { name: 'X', href: 'https://x.com/djwebstudio', icon: X },
  ];

  return (
    <div className="min-h-screen bg-[#05070d] text-slate-100">
      <div className="cursor-glow" style={{ left: mousePos.x, top: mousePos.y }}>
        <div className={`cursor-halo ${hovered ? 'cursor-halo-large' : ''}`} />
        <div className="cursor-dot" />
      </div>

      <header className="site-header">
        <a className="brand" href="#top" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <span className="brand-mark"><Terminal size={17} /></span>
          <span>DJ WEB <b>STUDIO</b></span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#work">Selected work</a>
          <a href="#contact">Contact <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero page-width">
          <div className="eyebrow"><span className="status-dot" /> Independent digital atelier / Est. 2024</div>
          <h1>Digital experiences with <em>signal.</em></h1>
          <div className="hero-bottom">
            <p className="hero-copy">DJ Web Studio builds fast, thoughtful interfaces for ambitious teams. Strategy, design, and engineering in one focused frequency.</p>
            <a className="text-link" href="#work">Explore the work <ChevronRight size={17} /></a>
          </div>
        </section>

        <section className="metrics page-width" aria-label="Studio metrics">
          <div><strong>99.9%</strong><span>Quality score</span></div>
          <div><strong>24<span className="accent">+</span></strong><span>Deploys shipped</span></div>
          <div><strong>&lt;1<span className="accent">s</span></strong><span>Average latency</span></div>
          <div className="metric-note"><Sparkles size={17} /> Built for the next version of the web</div>
        </section>

        <section id="work" className="work page-width">
          <div className="section-heading"><div><p className="kicker">01 / Selected work</p><h2>Proof of frequency.</h2></div><p>Six recent systems made to move at the speed of the idea.</p></div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <button key={project.id} className="project-card" onClick={() => setModalProject(project)} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <div className="project-image"><img src={project.image} alt="" /><span className="project-number">0{index + 1}</span><span className="open-icon"><ArrowUpRight size={18} /></span></div>
                <div className="project-info"><p className="kicker">{project.category}</p><h3>{project.title}</h3><p>{project.tagline}</p><span className="project-metric">{project.metrics}</span></div>
              </button>
            ))}
          </div>
        </section>

        <section id="contact" className="contact page-width">
          <div className="contact-copy"><p className="kicker">02 / Direct contact</p><h2>Have a good<br /><em>signal?</em></h2><p>Tell us what you are building. We usually reply within one working day.</p><div className="socials">{socials.map(({ name, href, icon: Icon }) => <a key={name} href={href} target={name === 'Gmail' ? undefined : '_blank'} rel="noreferrer"><Icon size={16} /> {name}</a>)}</div></div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label>
            <label>Email<input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" /></label>
            <label>What are we making?<textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="A few words about the project..." rows="4" /></label>
            <button className="submit-button" type="submit">{submitted ? <><Check size={17} /> Sent</> : <><Send size={16} /> Start a conversation</>}</button>
          </form>
        </section>
      </main>

      <footer className="footer page-width"><span>DJ WEB STUDIO © 2024—2026</span><span>Made with precision <Zap size={13} /></span></footer>

      {modalProject && <div className="modal-backdrop" role="presentation" onClick={() => setModalProject(null)}><article className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}><button className="close-button" onClick={() => setModalProject(null)} aria-label="Close case study"><X size={20} /></button><img src={modalProject.image} alt="" /><div className="modal-body"><p className="kicker">{modalProject.category}</p><h2 id="modal-title">{modalProject.title}</h2><p>{modalProject.desc}</p><div className="feature-list">{modalProject.features.map((feature) => <div key={feature}><Check size={15} />{feature}</div>)}</div><div className="stack">{modalProject.stack.map((item) => <span key={item}>{item}</span>)}</div></div></article></div>}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

