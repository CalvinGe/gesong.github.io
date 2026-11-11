import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Neural Network Potential | BioSim" };

export default function ResearchPage() {
  return <main>
    <header className="site-header"><Link className="brand" href="/#home"><span className="seal" aria-hidden="true">宋<br/>歌</span><span>BioSim</span></Link><nav><Link href="/#research">Research</Link><Link href="/#publications">Publications</Link><Link href="/#blog">Blog</Link></nav></header>
    <article className="post paper-section research-detail">
      <header className="post-header"><Link className="post-back" href="/#research">← All research directions</Link><p className="eyebrow">RESEARCH DIRECTION</p><h1>Neural Network Potential</h1></header>
      <div className="post-body"><div className="research-placeholder detail-placeholder" aria-label="Research image and logo coming soon"><span>Image / Logo</span></div><h2>Overview</h2><p className="research-coming">More details coming soon.</p></div>
    </article>
    <footer><span className="seal" aria-hidden="true">宋<br/>歌</span><p>© 2026 Ge Song宋歌</p><Link href="/#research">Back to research ↑</Link></footer>
  </main>;
}
