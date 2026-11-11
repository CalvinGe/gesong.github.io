import Link from "next/link";
import type { Metadata } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = { title: "Drug Discovery | BioSim" };

export default function ResearchPage() {
  return <main>
    <header className="site-header"><Link className="brand" href="/#home"><span className="seal" aria-hidden="true">宋<br/>歌</span><span>BioSim</span></Link><nav><Link href="/#research">Research</Link><Link href="/#publications">Publications</Link><Link href="/#talks">Talks</Link><Link href="/#teaching">Teaching</Link><Link href="/#gallery">Gallery</Link><Link href="/#blog">Blog</Link></nav></header>
    <article className="post paper-section research-detail">
      <header className="post-header"><Link className="post-back" href="/#research">← All research directions</Link><p className="eyebrow">RESEARCH DIRECTION</p><h1>Drug Discovery</h1></header>
      <div className="post-body"><figure className="research-detail-logo"><img src={`${basePath}/images/research/drug-discovery.png`} alt="Protein binding site and bound ligand"/></figure><section className="research-project"><h2>2023 Challenge Cup (Shanghai)</h2><p>Building on the FB18CMAP molecular force field and enhanced sampling methods, we developed an end-to-end drug screening platform targeting phosphorylated proteins. We used this platform to screen inhibitors of GSK-3 kinase, which is associated with Alzheimer’s disease, and validated their inhibitory effects experimentally by measuring kinase activity.</p><p><a href="https://xmk.tiaozhanbei.net/project/241904/">Challenge Cup project archive ↗</a> <span className="resource-note">(Link may be unavailable.)</span></p></section></div>
    </article>
    <footer><span className="seal" aria-hidden="true">宋<br/>歌</span><p>© 2026 Ge Song宋歌</p><Link href="/#research">Back to research ↑</Link></footer>
  </main>;
}
