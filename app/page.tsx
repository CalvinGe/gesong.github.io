"use client";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const publications = [
  ["NepoIP/MM: Towards Accurate Biomolecular Simulation with a Machine Learning/Molecular Mechanics Model Incorporating Polarization Effects","Published in Journal of Chemical Theory and Computation, 2025","J. Chem. Theory Comput. 2025, 21, 11, 5588–5598","https://pubs.acs.org/doi/full/10.1021/acs.jctc.5c00372"],
  ["Excited-Ground State Transition of RNA Strand Slippage Mechanism Captured by Base-specific Force Field","Published in Journal of Chemical Theory and Computation, 2024","J. Chem. Theory Comput. 2024, 20, 14, 6082–6097","https://pubs.acs.org/doi/10.1021/acs.jctc.4c00497"],
  ["Phosphorylation Modification Force Field FB18CMAP Improving Conformation Sampling of Phosphoproteins","Published in Journal of Chemical Information and Modeling, 2023","Song, G., et al., Phosphorylation Modification Force Field FB18CMAP Improving Conformation Sampling of Phosphoproteins. Journal of Chemical Information and Modeling 2023, 63, 1602-1614.","https://pubs.acs.org/doi/10.1021/acs.jcim.3c00112"],
];
const gallery = [
  ["ACTC 2024","American Conference on Theoretical Chemistry. Met with Prof. Roald Hoffmann (Nobel Prize in Chemistry 1981) at the conference.","/images/hoffmann.jpg"],
  ["D.E. Shaw","Met at NYU’s 2024 Simons Symposium","/images/deshaw1.jpg"],
  ["Duke’s Nobel Prize Medals in Chemistry","Located at Duke School of Medicine, there’re a 2012 and a 2015 Nobel Prize Medal in Chemistry exhibited","/images/medal.jpg"],
  ["Stanford","I visited stanford university in the Thanksgiving of 2023","/images/stf1.jpg"],
  ["Hardware","I currently own a personal computational resource GPU01","/images/gpu01.jpg"],
];
const Seal=()=> <span className="seal" aria-hidden="true">宋<br/>歌</span>;
const Mark=({cn,en}:{cn:string,en:string})=><div className="section-mark"><span>{cn}</span><p>{en}</p></div>;

export default function Home() {
  return <main>
    <header className="site-header"><a className="brand" href="#home"><Seal/><span>Physics of Life</span></a><nav><a href="#research">Research</a><a href="#publications">Publications</a><a href="#talks">Talks</a><a href="#teaching">Teaching</a><a href="#gallery">Gallery</a><a href="#blog">Blog</a></nav></header>
    <section className="hero paper-section" id="home">
      <div className="hero-ink" aria-hidden="true"><span/><span/><span/></div>
      <aside className="profile"><h2>Ge Song 宋歌</h2><p>PhD student in computational chemistry</p><p className="place">Durham, North Carolina</p><div className="socials"><a href="https://www.researchgate.net/profile/Ge-Song-34">ResearchGate</a><a href="https://github.com/CalvinGe">Github</a><a href="https://scholar.google.com/citations?user=MtLj6n0AAAAJ">Google Scholar</a><a href="https://orcid.org/">ORCID</a></div><a className="cv-download" href={`${basePath}/Ge_Song_CV_2026.pdf`} download>Download CV <span aria-hidden="true">↓</span></a></aside>
      <div className="hero-copy"><p className="eyebrow">PERSONAL ACADEMIC WEBSITE</p><h1>Personal Academic<br/>Website of Ge</h1><blockquote><p>If you want to master something, teach it.</p><cite>—Richard P. Feynman</cite><p>若欲精通某事，便需将其教给他人。</p><cite>——理查德·费曼</cite></blockquote></div>
    </section>
    <section className="content-section" id="research"><Mark cn="研" en="RESEARCH"/><div className="section-body">
      <h2>Research Interests</h2><p>I am interested in using AI to capture the high-dimensional, multiscale complexity of living systems and to build computational models that explain and predict complex biological processes, with potential applications in drug discovery, disease treatment, and healthy lifespan extension.</p>
      <h2>Research Experience</h2><div className="work-grid research-experience">
        <article><h3>Development of Machine Learning Force Fields</h3><blockquote>NepoIP/MM is an open-source code for performing accurate ML/MM MD simulation with electrostatic embedding.</blockquote><p>To perform NepoIP/MM MD simulation, see <a href="https://github.com/Yang-Laboratory/NepoIP">Yang-Laboratory/NepoIP: An open-source neural network for performing accurate ML/MM MD simulation with electrostatic embedding.</a></p></article>
        <article><h3>Automatic Sleep Stage Classification by Neural Networks</h3><p>Published article: <a href="https://www.nature.com/articles/s41746-025-01607-0">Continuous sleep depth index annotation with deep learning yields novel digital biomarkers for sleep health (npj Digital Medicine)</a></p><p>Web server software (Old version of SleepViTNet) : <a href="https://github.com/CalvinGe/Web-SleepViTNet">CalvinGe/Web-SleepViTNet (github.com)</a></p></article>
        <article><h3>Development of Force Fields for Phospho-proteins</h3><a href="https://github.com/HFChenLab/FB18CMAP">GitHub - HFChenLab/FB18CMAP: FB18CMAP force field parameter</a></article>
        <article><h3>Development of Force Fields for RNAs</h3></article>
        <article><h3>Computer-aided Drug Design</h3></article>
      </div>
    </div></section>
    <section className="content-section tinted" id="publications"><Mark cn="文" en="PUBLICATIONS"/><div className="section-body"><h2>Selected Publications</h2><p>For full list of publication: <a href="https://scholar.google.com/citations?user=MtLj6n0AAAAJ">Google Scholar profile</a>. or: <a href="https://www.researchgate.net/profile/Ge-Song-34">Researchgate profile</a>.</p><div className="publication-list">{publications.map((x,i)=><article key={x[0]}><span className="pub-no">0{i+1}</span><div><h3><a href={x[3]}>{x[0]}</a></h3><p>{x[1]}</p><p>Recommended citation: {x[2]} <a href={x[3]}>↗</a></p></div></article>)}</div></div></section>
    <section className="content-section" id="talks"><Mark cn="讲" en="TALKS"/><div className="section-body"><h2>Talks and presentations</h2><article className="timeline-item"><time>March 23, 2026</time><div><h3>NepoIP/MM: Toward accurate biomolecular simulation with a machine learning/molecular mechanics model incorporating polarization effects</h3><p>ACS Conference Oral Presentation, Georgia World Congress Center, Atlanta, Georgia</p><a href="https://scimeetings.acs.org/exhibit/NepoIPMM-Toward-accurate-biomolecular-simulation/4419171">More information here</a></div></article></div></section>
    <section className="content-section compact tinted" id="teaching"><Mark cn="教" en="TEACHING"/><div className="section-body"><h2>Teaching</h2>
      {[["General Chemistry 101 lab","Lab Teaching/Grading, Duke University, Department of Chemistry, 2024","I have taught six labs of General Chem 101."],["Physical Chemistry Course","Grading, Duke University, Department of Chemistry, 2023","I have graded the homework and exams for Chem 310 Physical Chemistry Undergraduate course given by Prof. Weitao Yang. The course was actually introduction level of quantum mechanics."],["General Chemistry Honor Course","Lab Teaching/Grading, Duke University, Department of Chemistry, 2023","I have taught five labs of Chem 110 Honor Undergraduate course: 1. Quantum Mechanics; 2. Molecular Modeling with Spartan; 3. Integrated Rate Laws; 4. Freezing Point Depression; 5. Electrochemistry."]].map(x=><article className="teaching-item" key={x[0]}><h3>{x[0]}</h3><p className="meta">{x[1]}</p><p>{x[2]}</p></article>)}
    </div></section>
    <section className="content-section" id="gallery"><Mark cn="观" en="GALLERY"/><div className="section-body"><h2>Gallery</h2><div className="gallery-grid">{gallery.map(x=><article key={x[0]}><div className="gallery-image"><img src={`${basePath}${x[2]}`} alt={x[0]}/></div><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></div></section>
    <section className="content-section tinted" id="blog"><Mark cn="记" en="BLOG"/><div className="section-body"><h2>Blog posts</h2><p className="year">2024</p><article className="blog-card"><p>Published: October 05, 2024 · 1 minute read</p><h3><a href={`${basePath}/posts/ai4md/`}>Machine Learning Force Field Labs</a></h3><p>Welcome to my curated list of Machine Learning Force Field labs!</p></article></div></section>
    <footer><Seal/><p>© 2026 Ge Song宋歌</p><a href="#home">Back to top ↑</a></footer>
  </main>;
}
