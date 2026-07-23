import Link from "next/link";

const Seal = () => <span className="seal" aria-hidden="true">宋<br/>歌</span>;

const Lab = ({name, children}:{name:string; children?:React.ReactNode}) => (
  <li><strong>{name}</strong> ️ {children}</li>
);

export default function Ai4mdPost() {
  return <main>
    <header className="site-header">
      <Link className="brand" href="/#home"><Seal/><span>Physics of Life</span></Link>
      <nav><Link href="/#research">Research</Link><Link href="/#publications">Publications</Link><Link href="/#talks">Talks</Link><Link href="/#teaching">Teaching</Link><Link href="/#gallery">Gallery</Link><Link href="/#blog">Blog</Link></nav>
    </header>

    <article className="post paper-section">
      <header className="post-header">
        <Link className="post-back" href="/#blog">← Back to Blog</Link>
        <p className="eyebrow">OCTOBER 05, 2024</p>
        <h1>Machine Learning Force Field Labs</h1>
      </header>

      <div className="post-body">
        <p>Welcome to my curated list of Machine Learning Force Field labs!</p>
        <blockquote>Note: The list is inspired by the protein design lists that <a href="https://github.com/Zuricho">@Zuricho</a> has posted on <a href="https://github.com/Zuricho/ProteinDesignLabs/tree/main">Github</a>.</blockquote>
        <p>This list serves as a public reference for labs developing machine learning methods to enhance the accuracy of MD simulation.</p>
        <p>While I&apos;ve tried to be comprehensive, my knowledge is absolutely very limited.</p>
        <p>I apologize if I&apos;ve missed your lab or labs you&apos;re familiar with. Suggestions for additions are highly welcomed – comments could be posted on [].</p>

        <nav className="post-toc" aria-label="Table of contents">
          <h2>Table of Contents</h2>
          <ul>
            <li><a href="#united-states">United States</a></li>
            <li><a href="#princeton">Princeton</a></li>
            <li><a href="#mit">MIT</a></li>
            <li><a href="#harvard">Harvard</a></li>
            <li><a href="#stanford">Stanford</a></li>
            <li><a href="#uc-berkeley">UC Berkeley</a></li>
            <li><a href="#duke">Duke</a></li>
            <li><a href="#cmu">CMU</a></li>
            <li><a href="#others-in-the-us">Others in the US</a></li>
            <li><a href="#europe">Europe</a></li>
            <li><a href="#germany">Germany</a></li>
            <li><a href="#uk">UK</a></li>
          </ul>
        </nav>

        <h2 id="united-states">United States</h2>
        <h3 id="princeton">Princeton</h3>
        <ul><Lab name="Roberto Car"><a href="https://chemistry.princeton.edu/faculty-research/faculty/roberto-car/">Princeton Profile</a> <a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.120.143001"><strong>DeepMD</strong></a></Lab></ul>

        <h3 id="mit">MIT</h3>
        <ul>
          <Lab name="Bin Zhang"><a href="https://zhanggroup.mit.edu/team.html">Lab website</a> <a href="https://doi.org/10.1021/acscentsci.3c01160">Related Paper</a></Lab>
          <Lab name="Tommi S. Jaakkola"><a href="https://people.csail.mit.edu/tommi/people.html">Lab website</a> <a href="https://arxiv.org/pdf/2210.07237">Related Paper</a></Lab>
          <Lab name="Tess E. Smidt"><a href="https://blondegeek.github.io/">Personal website</a> <a href="https://e3nn.org/"><strong>E3NN</strong></a></Lab>
        </ul>

        <h3 id="harvard">Harvard</h3>
        <ul>
          <Lab name="Boris Kozinsky"><a href="https://mir.g.harvard.edu/people">Lab website</a> <a href="https://github.com/mir-group/nequip"><strong>NequIP</strong></a></Lab>
          <Lab name="Debora Marks"><a href="https://www.deboramarkslab.com/members">Lab website</a> <a href="https://openreview.net/pdf?id=Byg3y3C9Km">Related Paper</a></Lab>
        </ul>

        <h3 id="stanford">Stanford</h3>
        <ul>
          <Lab name="Grant M. Rotskoff"><a href="https://statmech.stanford.edu/">Lab website</a> <a href="https://www.youtube.com/watch?v=eQy9jSobLfI">Related Talk</a></Lab>
          <Lab name="Thomas E. Markland"><a href="https://web.stanford.edu/group/markland/group.html">Lab website</a> <strong>TorchMD-Net</strong></Lab>
          <Lab name="Ron Dror"><a href="https://web.stanford.edu/group/markland/group.html">Lab website</a></Lab>
        </ul>

        <h3 id="uc-berkeley">UC Berkeley</h3>
        <ul>
          <Lab name="Teresa Head-Gordon"><a href="https://thglab.berkeley.edu/group/">Lab website</a> <a href="https://arxiv.org/pdf/2405.02247">Related Paper</a></Lab>
          <Lab name="Aditi S. Krishnapriyan"><a href="https://a1k12.github.io/">Group website</a> <a href="https://arxiv.org/abs/2402.13984">Related Paper</a></Lab>
        </ul>

        <h3 id="duke">Duke</h3>
        <ul><Lab name="Weitao Yang"><a href="https://yanglab.chem.duke.edu">Lab website</a> <a href="https://arxiv.org/abs/2502.02801"><strong>NepoIP/MM</strong></a></Lab></ul>

        <h3 id="cmu">CMU</h3>
        <ul><Lab name="Olexandr Isayev"><a href="https://olexandrisayev.com/">Lab website</a> <a href="https://pubs.rsc.org/en/content/articlehtml/2017/sc/c6sc05720a"><strong>ANI</strong></a></Lab></ul>

        <h3 id="others-in-the-us">Others in the US</h3>
        <ul>
          <Lab name="Adrian E. Roitberg"><a href="https://roitberg.chem.ufl.edu/">Lab at UF</a> <a href="https://pubs.rsc.org/en/content/articlehtml/2017/sc/c6sc05720a"><strong>ANI</strong></a></Lab>
          <Lab name="John D. Chodera"><a href="https://www.choderalab.org/">Lab at Memorial Sloan Kettering Cancer Center</a> <a href="https://pubs.rsc.org/en/content/articlelanding/2022/sc/d2sc02739a"><strong>Espaloma</strong></a></Lab>
        </ul>

        <h2 id="europe">Europe</h2>
        <h3 id="germany">Germany</h3>
        <ul>
          <Lab name="Klaus-Robert Müller"><a href="https://web.ml.tu-berlin.de/">The Machine Learning Group at TU Berlin</a>
            <ul><li><a href="https://doi.org/10.1063/1.5019779"><strong>SchNet</strong></a></li><li><a href="https://pubs.rsc.org/en/content/articlehtml/2021/sc/d1sc02742e"><strong>FieldSchNet</strong></a></li><li><a href="https://www.nature.com/articles/s41467-024-50620-6"><strong>SO3krates</strong></a></li><li><a href="https://www.science.org/doi/10.1126/sciadv.adn4397"><strong>GEMS</strong></a></li><li><a href="https://chemrxiv.org/engage/chemrxiv/article-details/679bf19781d2151a02991c58"><strong>SO3LR</strong></a></li></ul>
          </Lab>
          <Lab name="Stephan Günnemann"><a href="https://www.cs.cit.tum.de/daml/startseite/">The Machine Learning Group at TUM</a>
            <ul><li><a href="https://arxiv.org/abs/2106.08903"><strong>GemNet</strong></a></li><li><a href="https://arxiv.org/abs/2003.03123"><strong>DimeNet</strong></a></li></ul>
          </Lab>
          <Lab name="Frank Noé"></Lab>
        </ul>

        <h2 id="uk">UK</h2>
        <ul><Lab name="Gábor Csányi"><a href="https://www.eng.cam.ac.uk/profiles/gc121">University of Cambridge Profile</a> <a href="https://arxiv.org/abs/2206.07697"><strong>MACE</strong></a></Lab></ul>
      </div>
    </article>

    <footer><Seal/><p>© 2026 Ge Song宋歌</p><Link href="/#blog">Back to Blog ↑</Link></footer>
  </main>;
}
