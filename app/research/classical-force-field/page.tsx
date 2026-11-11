import Link from "next/link";
import type { Metadata } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = { title: "Classical Force Field | BioSim" };

export default function ResearchPage() {
  return <main>
    <header className="site-header"><Link className="brand" href="/#home"><span className="seal" aria-hidden="true">宋<br/>歌</span><span>BioSim</span></Link><nav><Link href="/#research">Research</Link><Link href="/#publications">Publications</Link><Link href="/#talks">Talks</Link><Link href="/#teaching">Teaching</Link><Link href="/#gallery">Gallery</Link><Link href="/#blog">Blog</Link></nav></header>
    <article className="post paper-section research-detail">
      <header className="post-header"><Link className="post-back" href="/#research">← All research directions</Link><p className="eyebrow">RESEARCH DIRECTION</p><h1>Classical Force Field</h1></header>
      <div className="post-body"><figure className="research-detail-logo"><img src={`${basePath}/images/research/classical-force-field.png`} alt="FB18CMAP force field comparison"/></figure><section className="research-project"><h2>FB18CMAP</h2><p>FB18CMAP Fits backbone dihedrals PES against ab initio calculation of phosphorylated residues. MD simulation with FB18CMAP improves agreement with NMR J-coupling constants and chemical shifts.</p><p className="research-resources"><a href="https://github.com/HFChenLab/FB18CMAP">GitHub - HFChenLab/FB18CMAP: FB18CMAP force field parameter</a><a href="https://doi.org/10.1021/acs.jcim.3c00112">Read the article ↗</a></p></section><section className="research-project"><h2>BSFF2</h2><p>we develop the new version of RNA base-specific force field (BSFF2) to address underestimation of base pairing stability and artificial backbone conformations.</p><p><a href="https://doi.org/10.1021/acs.jctc.4c00497">Read the article ↗</a></p></section></div>
    </article>
    <footer><span className="seal" aria-hidden="true">宋<br/>歌</span><p>© 2026 Ge Song宋歌</p><Link href="/#research">Back to research ↑</Link></footer>
  </main>;
}
