import Link from "next/link";
import type { Metadata } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = { title: "Neural Network Potential | BioSim" };

export default function ResearchPage() {
  return <main>
    <header className="site-header"><Link className="brand" href="/#home"><span className="seal" aria-hidden="true">宋<br/>歌</span><span>BioSim</span></Link><nav><Link href="/#research">Research</Link><Link href="/#publications">Publications</Link><Link href="/#talks">Talks</Link><Link href="/#teaching">Teaching</Link><Link href="/#gallery">Gallery</Link><Link href="/#blog">Blog</Link></nav></header>
    <article className="post paper-section research-detail">
      <header className="post-header"><Link className="post-back" href="/#research">← All research directions</Link><p className="eyebrow">RESEARCH DIRECTION</p><h1>Neural Network Potential</h1></header>
      <div className="post-body"><figure className="research-detail-logo"><img src={`${basePath}/images/research/nepoip-logo.png`} alt="NepoIP logo"/></figure><section className="research-project"><h2>NepoIP/MM</h2><p>Using the external electrostatic potential as descriptor for the MM environment, NepoIP/MM can accurately sample the biomolecule’s conformation ensemble at the reference DFT/MM level. <a href="https://doi.org/10.1021/acs.jctc.5c00372">Read the article ↗</a></p><p>To perform NepoIP/MM MD simulation, see <a href="https://github.com/Yang-Laboratory/NepoIP">Yang-Laboratory/NepoIP: An open-source neural network for performing accurate ML/MM MD simulation with electrostatic embedding.</a></p></section></div>
    </article>
    <footer><span className="seal" aria-hidden="true">宋<br/>歌</span><p>© 2026 Ge Song宋歌</p><Link href="/#research">Back to research ↑</Link></footer>
  </main>;
}
