import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "AI for Health | BioSim" };

export default function ResearchPage() {
  return <main>
    <header className="site-header"><Link className="brand" href="/#home"><span className="seal" aria-hidden="true">宋<br/>歌</span><span>BioSim</span></Link><nav><Link href="/#research">Research</Link><Link href="/#publications">Publications</Link><Link href="/#talks">Talks</Link><Link href="/#teaching">Teaching</Link><Link href="/#gallery">Gallery</Link><Link href="/#blog">Blog</Link></nav></header>
    <article className="post paper-section research-detail">
      <header className="post-header"><Link className="post-back" href="/#research">← All research directions</Link><p className="eyebrow">RESEARCH DIRECTION</p><h1>AI for Health</h1></header>
      <div className="post-body"><div className="research-placeholder detail-placeholder" aria-label="Research image and logo coming soon"><span>Image / Logo</span></div><h2>Overview</h2><p>I am interested in using AI to capture the high-dimensional, multiscale complexity of living systems and to build computational models that explain and predict complex biological processes, with potential applications in drug discovery, disease treatment, and healthy lifespan extension.</p><article><h3>Automatic Sleep Stage Classification by Neural Networks</h3><p>Published article: <a href="https://www.nature.com/articles/s41746-025-01607-0">Continuous sleep depth index annotation with deep learning yields novel digital biomarkers for sleep health (npj Digital Medicine)</a></p><p>Web server software (Old version of SleepViTNet) : <a href="https://github.com/CalvinGe/Web-SleepViTNet">CalvinGe/Web-SleepViTNet (github.com)</a></p></article></div>
    </article>
    <footer><span className="seal" aria-hidden="true">宋<br/>歌</span><p>© 2026 Ge Song宋歌</p><Link href="/#research">Back to research ↑</Link></footer>
  </main>;
}
