import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Force Field Development | BioSim" };

export default function ResearchPage() {
  return <main>
    <header className="site-header"><Link className="brand" href="/#home"><span className="seal" aria-hidden="true">宋<br/>歌</span><span>BioSim</span></Link><nav><Link href="/#research">Research</Link><Link href="/#publications">Publications</Link><Link href="/#talks">Talks</Link><Link href="/#teaching">Teaching</Link><Link href="/#gallery">Gallery</Link><Link href="/#blog">Blog</Link></nav></header>
    <article className="post paper-section research-detail">
      <header className="post-header"><Link className="post-back" href="/#research">← All research directions</Link><p className="eyebrow">RESEARCH DIRECTION</p><h1>Force Field Development</h1></header>
      <div className="post-body"><article><h3>Development of Machine Learning Force Fields</h3><blockquote>NepoIP/MM is an open-source code for performing accurate ML/MM MD simulation with electrostatic embedding.</blockquote><p>To perform NepoIP/MM MD simulation, see <a href="https://github.com/Yang-Laboratory/NepoIP">Yang-Laboratory/NepoIP: An open-source neural network for performing accurate ML/MM MD simulation with electrostatic embedding.</a></p></article><article><h3>Development of Force Fields for Phospho-proteins</h3><a href="https://github.com/HFChenLab/FB18CMAP">GitHub - HFChenLab/FB18CMAP: FB18CMAP force field parameter</a></article><article><h3>Development of Force Fields for RNAs</h3></article></div>
    </article>
    <footer><span className="seal" aria-hidden="true">宋<br/>歌</span><p>© 2026 Ge Song宋歌</p><Link href="/#research">Back to research ↑</Link></footer>
  </main>;
}
