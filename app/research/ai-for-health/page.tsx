import Link from "next/link";
import type { Metadata } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = { title: "AI for Health | BioSim" };

export default function ResearchPage() {
  return <main>
    <header className="site-header"><Link className="brand" href="/#home"><span className="seal" aria-hidden="true">宋<br/>歌</span><span>BioSim</span></Link><nav><Link href="/#research">Research</Link><Link href="/#publications">Publications</Link><Link href="/#talks">Talks</Link><Link href="/#teaching">Teaching</Link><Link href="/#gallery">Gallery</Link><Link href="/#blog">Blog</Link></nav></header>
    <article className="post paper-section research-detail">
      <header className="post-header"><Link className="post-back" href="/#research">← All research directions</Link><p className="eyebrow">RESEARCH DIRECTION</p><h1>AI for Health</h1></header>
      <div className="post-body"><figure className="research-detail-logo"><img src={`${basePath}/images/research/ai-for-health.png`} alt="EEG, EOG, EMG and ECG sensor diagram"/></figure><article><h3>Automatic Sleep Stage Classification by Neural Networks</h3><p>Published article: <a href="https://www.nature.com/articles/s41746-025-01607-0">Continuous sleep depth index annotation with deep learning yields novel digital biomarkers for sleep health (npj Digital Medicine)</a></p><p>Web server software (Old version of SleepViTNet) : <a href="https://github.com/CalvinGe/Web-SleepViTNet">CalvinGe/Web-SleepViTNet (github.com)</a></p></article></div>
    </article>
    <footer><span className="seal" aria-hidden="true">宋<br/>歌</span><p>© 2026 Ge Song宋歌</p><Link href="/#research">Back to research ↑</Link></footer>
  </main>;
}
