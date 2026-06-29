// ---------- STORAGE ----------

const STORAGE_KEY = "founding-docs-progress-v2";
const CHAT_KEY = "founding-docs-tutor-chat-v1";
const CORE_DOC_KEYS = ["declaration","constitution","billofrights"];
const CONTEXT_DOC_KEYS = ["federalist","antifederalist","articles","northwestordinance"];
const DOC_KEYS = CORE_DOC_KEYS.concat(CONTEXT_DOC_KEYS);

function defaultProgress(){
  const p = { stickingPoints: [] };
  DOC_KEYS.forEach(k=>{
    p[k] = { answered: {} }; // answered[sectionId] = true/false (last attempt correct)
  });
  return p;
}

function loadProgress(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return defaultProgress();
    const parsed = JSON.parse(raw);
    const base = defaultProgress();
    DOC_KEYS.forEach(k=>{ if(parsed[k]) base[k] = parsed[k]; });
    if(Array.isArray(parsed.stickingPoints)) base.stickingPoints = parsed.stickingPoints;
    return base;
  }catch(e){
    return defaultProgress();
  }
}

function saveProgress(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(PROGRESS)); }

let PROGRESS = loadProgress();

function docStats(key){
  const total = DOCS[key].sections.length;
  const answered = PROGRESS[key].answered;
  const correctCount = Object.values(answered).filter(v=>v===true).length;
  const answeredCount = Object.keys(answered).length;
  return {
    total,
    correctCount,
    answeredCount,
    pct: total ? Math.round((correctCount/total)*100) : 0,
    completed: total > 0 && correctCount === total
  };
}

function resetProgress(){
  if(confirm("This clears all saved progress and sticking points on this device. Continue?")){
    PROGRESS = defaultProgress();
    saveProgress();
    render();
  }
}

// ---------- ROUTER ----------

function currentRoute(){
  return location.hash.replace(/^#\/?/, "") || "home";
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", ()=>{ render(); initChat(); });

function render(){
  const route = currentRoute();
  document.querySelectorAll(".primary-nav a, .secondary-nav a").forEach(a=>{
    a.classList.toggle("active", a.dataset.route === route);
  });
  const app = document.getElementById("app");
  if(route === "home") app.innerHTML = renderHome();
  else if(DOCS[route]) app.innerHTML = renderDoc(route);
  else if(route === "today") app.innerHTML = renderToday();
  else if(route === "people") app.innerHTML = renderPeople();
  else if(route === "sort") app.innerHTML = renderSortGame();
  else if(route === "dashboard") app.innerHTML = renderDashboard();
  else app.innerHTML = renderHome();

  if(DOCS[route]) wireDocPage(route);
  if(route === "sort") wireSortGame();
  if(route === "dashboard") wireDashboard();
  window.scrollTo({top:0});
}

// ---------- HOME ----------

function progressPillHTML(key){
  const s = docStats(key);
  const label = s.completed ? `Mastered · ${s.pct}%` : (s.answeredCount>0 ? `In progress · ${s.pct}%` : "Not started");
  return `<span class="progress-pill ${s.completed?'complete':''}"><span class="dot"></span>${label}</span>`;
}

function renderHome(){
  return `
  <section class="hero">
    <div>
      <div class="hero-eyebrow">Three documents, three different jobs</div>
      <h1>One announced independence.<br>One built the government.<br>One protects<br>you from it.</h1>
      <p class="lede">A short, self-paced, interactive study of the Declaration of Independence, the Constitution, and the Bill of Rights — built to fix the specific confusion most people have: which document does what.</p>
      <div class="hero-cta">
        <a class="btn" href="#/declaration">Start with the Declaration →</a>
        <a class="btn ghost" href="#/dashboard">View your record</a>
      </div>
    </div>
    <div class="callout">
      <strong>The one-sentence version:</strong> the Declaration (1776) is a breakup letter explaining why; the Constitution (1787) is the government's actual operating manual; the Bill of Rights (1791) is the list of individual protections added because the operating manual didn't have one yet.
    </div>
  </section>

  <section class="doc-cards">
    <a class="card" href="#/declaration" style="text-decoration:none;">
      <div class="card-year">1776</div>
      <h3>Declaration of Independence</h3>
      <p>Announces separation from Britain and lays out the philosophical case for it. No legal force today.</p>
      ${progressPillHTML('declaration')}
    </a>
    <a class="card" href="#/constitution" style="text-decoration:none;">
      <div class="card-year">1787</div>
      <h3>The Constitution</h3>
      <p>Creates the three branches of government and is the literal supreme law of the land today.</p>
      ${progressPillHTML('constitution')}
    </a>
    <a class="card" href="#/billofrights" style="text-decoration:none;">
      <div class="card-year">1791</div>
      <h3>The Bill of Rights</h3>
      <p>The first ten amendments — individual protections added to get the Constitution ratified.</p>
      ${progressPillHTML('billofrights')}
    </a>
  </section>

  <section class="section-block" style="margin-top:56px;">
    <h2>Context & debate</h2>
    <p style="margin-top:-6px; color:var(--ink-soft);">Not founding law — but the surrounding argument and the failed first attempt that explain why the core three look the way they do.</p>
    <div class="doc-cards" style="grid-template-columns:repeat(2,1fr);">
      <a class="card" href="#/federalist" style="text-decoration:none;">
        <div class="card-year">1787–88</div>
        <h3>Federalist Papers</h3>
        <p>Hamilton, Madison & Jay argue for ratification — still cited in court as evidence of original intent.</p>
        ${progressPillHTML('federalist')}
      </a>
      <a class="card" href="#/antifederalist" style="text-decoration:none;">
        <div class="card-year">1787–88</div>
        <h3>Anti-Federalist Papers</h3>
        <p>The other side of the debate — warnings about a too-powerful federal government that directly produced the Bill of Rights.</p>
        ${progressPillHTML('antifederalist')}
      </a>
      <a class="card" href="#/articles" style="text-decoration:none;">
        <div class="card-year">1781</div>
        <h3>Articles of Confederation</h3>
        <p>The first, deliberately weak national government — its failure is why the Constitution exists.</p>
        ${progressPillHTML('articles')}
      </a>
      <a class="card" href="#/northwestordinance" style="text-decoration:none;">
        <div class="card-year">1787</div>
        <h3>Northwest Ordinance</h3>
        <p>How new states joined the union — and banned slavery in the territory, the same year the Constitution stayed silent on it.</p>
        ${progressPillHTML('northwestordinance')}
      </a>
    </div>
  </section>

  <section class="section-block" style="margin-top:48px;">
    <h2>Also worth a look</h2>
    <p><a href="#/people">Key People →</a> — the handful of names behind all of this, and which side of the ratification debate they were on.</p>
    <p><a href="#/sort">Sort It Out →</a> — a quick tap-to-match game mixing facts from all seven documents, to test whether you can actually tell them apart.</p>
    <p><a href="#/today">Still in Force →</a> — which amendments are actually argued in court and the news today, and which are largely historical footnotes.</p>
  </section>
  `;
}

function renderPeople(){
  const cards = KEY_PEOPLE.map(p=>`
    <div class="person-card">
      <h3>${p.name}</h3>
      <span class="tag">${p.role}</span>
      <p>${p.blurb}</p>
    </div>
  `).join("");
  return `
  <div class="doc-header">
    <div class="eyebrow">The names behind the documents</div>
    <h1>Key People</h1>
    <p class="subtitle">A short list — not exhaustive, but enough to keep straight who argued for what, and which side of the ratification debate they were actually on.</p>
  </div>
  <div class="person-grid">${cards}</div>
  `;
}

// ---------- DOCUMENT PAGE (section by section, each interactive) ----------

function renderDoc(key){
  const d = DOCS[key];
  const sectionsHTML = d.sections.map((s,si)=>renderSection(key, s, si)).join("");
  return `
  <div class="doc-header">
    <div class="eyebrow">${d.eyebrow}</div>
    <h1>${d.title}</h1>
    <p class="subtitle">${d.subtitle}</p>
  </div>
  ${sectionsHTML}
  `;
}

function renderSection(docKey, s, si){
  let bodyHTML = "";

  if(s.html){
    bodyHTML += s.html;
  }

  if(s.reveal){
    bodyHTML += `<p class="section-intro">${s.intro||""}</p>`;
    bodyHTML += `<div class="key-elements">` + s.reveal.map((el,i)=>`
      <div class="el reveal-el" data-open="false">
        <span class="marker">${String(i+1).padStart(2,'0')}</span>
        <div>
          <span class="label">${el.label}</span>
          <span class="desc">${el.desc}</span>
          ${el.text ? `<blockquote class="reveal-text">${el.text}</blockquote>` : ''}
        </div>
      </div>
    `).join("") + `</div>`;
  }

  if(s.phrases){
    bodyHTML += `<p class="section-intro">${s.intro||""}</p>`;
    bodyHTML += s.phrases.map(p=>`
      <div class="phrase-block reveal-phrase" data-open="false">
        <p class="phrase-text">"${p.text}"</p>
        <p class="phrase-gloss" hidden>${p.gloss}</p>
      </div>
    `).join("");
  }

  const checkHTML = renderMiniCheck(docKey, s, si);

  return `
  <section class="section-block" data-section="${si}">
    <h2><span class="num">${String(si+1).padStart(2,'0')}</span> ${s.heading}</h2>
    ${bodyHTML}
    ${checkHTML}
  </section>
  `;
}

function renderMiniCheck(docKey, s, si){
  const q = s.check;
  const already = PROGRESS[docKey].answered.hasOwnProperty(s.id);
  const wasCorrect = PROGRESS[docKey].answered[s.id] === true;
  const optionsHTML = q.options.map((opt,oi)=>`
    <label class="quiz-option" data-oi="${oi}">
      <input type="radio" name="mc-${docKey}-${si}" value="${oi}">
      <span>${opt}</span>
    </label>
  `).join("");
  return `
  <div class="mini-check" data-doc="${docKey}" data-si="${si}" data-correct="${q.correct}">
    <div class="mini-check-label">Quick check ${already ? (wasCorrect ? "· answered correctly" : "· revisit this one") : ""}</div>
    <div class="q-text">${q.q}</div>
    <div class="quiz-options">${optionsHTML}</div>
    <button type="button" class="btn check-btn" style="margin-top:10px;">Check answer</button>
    <div class="quiz-feedback" id="fb-${docKey}-${si}"></div>
  </div>
  `;
}

function wireDocPage(docKey){
  // click-to-reveal terms (event delegation on the app container)
  const app = document.getElementById("app");
  app.querySelectorAll(".term").forEach(t=>{
    t.addEventListener("click", ()=>{
      t.classList.toggle("open");
    });
  });

  // click-to-reveal structure items
  app.querySelectorAll(".reveal-el").forEach(el=>{
    el.addEventListener("click", ()=>{
      const open = el.dataset.open === "true";
      el.dataset.open = open ? "false" : "true";
      el.classList.toggle("is-open", !open);
    });
  });

  // click-to-reveal phrase glosses
  app.querySelectorAll(".reveal-phrase").forEach(block=>{
    block.addEventListener("click", ()=>{
      const gloss = block.querySelector(".phrase-gloss");
      const open = block.dataset.open === "true";
      gloss.hidden = open;
      block.dataset.open = open ? "false" : "true";
      block.classList.toggle("is-open", !open);
    });
  });

  // mini-checks
  app.querySelectorAll(".mini-check").forEach(mc=>{
    const si = parseInt(mc.dataset.si,10);
    const correctIdx = parseInt(mc.dataset.correct,10);
    const checkBtn = mc.querySelector(".check-btn");

    mc.querySelectorAll(".quiz-option").forEach(label=>{
      label.addEventListener("click", ()=>{
        mc.querySelectorAll(".quiz-option").forEach(l=>l.classList.remove("selected"));
        label.classList.add("selected");
      });
    });

    checkBtn.addEventListener("click", ()=>{
      const selected = mc.querySelector("input:checked");
      if(!selected){
        const fb = document.getElementById(`fb-${docKey}-${si}`);
        fb.classList.add("show","wrong");
        fb.textContent = "Pick an answer first.";
        return;
      }
      const selectedIdx = parseInt(selected.value,10);
      const isCorrect = selectedIdx === correctIdx;
      const section = DOCS[docKey].sections[si];

      mc.querySelectorAll(".quiz-option").forEach(label=>{
        const oi = parseInt(label.dataset.oi,10);
        if(oi === correctIdx) label.classList.add("correct");
        else if(oi === selectedIdx) label.classList.add("incorrect");
      });

      const fb = document.getElementById(`fb-${docKey}-${si}`);
      fb.classList.add("show", isCorrect ? "right" : "wrong");
      fb.textContent = isCorrect ? "Correct." : "Not quite — " + section.check.correction;

      PROGRESS[docKey].answered[section.id] = isCorrect;
      PROGRESS.stickingPoints = PROGRESS.stickingPoints.filter(sp => !(sp.doc===docKey && sp.sectionId===section.id));
      if(!isCorrect){
        PROGRESS.stickingPoints.push({doc:docKey, sectionId:section.id, q:section.check.q, correction:section.check.correction});
      }
      saveProgress();
      checkBtn.disabled = true;

      if(docStats(docKey).completed){
        triggerSealStamp(DOCS[docKey].title);
      }
    });
  });
}

function triggerSealStamp(docTitle){
  const overlay = document.getElementById("sealOverlay");
  const nameEl = document.getElementById("sealDocName");
  nameEl.textContent = docTitle.replace("The ", "").toUpperCase();
  overlay.classList.add("show");
  const close = ()=> overlay.classList.remove("show");
  overlay.onclick = close;
  setTimeout(close, 2400);
}

// ---------- TODAY PAGE ----------

function renderToday(){
  const cards = AMENDMENTS_TODAY.map(a=>`
    <div class="amend-card">
      <div class="num">${a.num}</div>
      <div>
        <span class="tag">${a.tag}</span>
        <h3>${a.title}</h3>
        <p>${a.text}</p>
      </div>
    </div>
  `).join("");

  return `
  <div class="doc-header">
    <div class="eyebrow">Beyond memorization</div>
    <h1>Still in Force</h1>
    <p class="subtitle">Of the 27 amendments, a handful do almost all the work in today's courts, headlines, and arguments. Here's which ones, and why.</p>
  </div>
  <div class="amend-grid">${cards}</div>
  <div class="callout" style="margin-top:32px;">
    <strong>Worth noticing:</strong> the 14th Amendment isn't part of the original Bill of Rights — it was ratified in 1868, after the Civil War — but it's arguably done more to shape how the Bill of Rights actually applies to your daily life (via "incorporation") than almost anything in the original ten.
  </div>
  `;
}

// ---------- SORT IT OUT GAME ----------

let sortState = null;

function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function newSortRound(){
  sortState = {
    items: shuffle(SORT_ITEMS).map((it,i)=>({...it, id:i, placed:false, wrongFlash:false})),
    correctCount: 0,
    selectedId: null
  };
}

function renderSortGame(){
  if(!sortState) newSortRound();
  const remaining = sortState.items.filter(it=>!it.placed);
  const itemsHTML = remaining.map(it=>`
    <div class="sort-item ${sortState.selectedId===it.id?'selected':''} ${it.wrongFlash?'wrong-flash':''}" data-id="${it.id}">${it.text}</div>
  `).join("") || `<div class="empty-state">All sorted — nice work.</div>`;

  const bucketsHTML = DOC_KEYS.map(k=>`
    <div class="sort-bucket" data-doc="${k}">
      <div class="bucket-label">${DOC_LABELS[k]}</div>
      <div class="bucket-drop">Tap here</div>
    </div>
  `).join("");

  return `
  <div class="doc-header">
    <div class="eyebrow">Mixing all seven documents</div>
    <h1>Sort It Out</h1>
    <p class="subtitle">Tap a card below, then tap the document it belongs to. ${sortState.correctCount} of ${SORT_ITEMS.length} placed correctly so far this round.</p>
  </div>
  <div class="sort-board">
    <div class="sort-items">${itemsHTML}</div>
    <div class="sort-buckets">${bucketsHTML}</div>
  </div>
  <div class="reset-row" style="text-align:left; margin-top:24px;">
    <button id="sortRestart">Start a new round</button>
  </div>
  `;
}

function wireSortGame(){
  const app = document.getElementById("app");

  app.querySelectorAll(".sort-item").forEach(el=>{
    el.addEventListener("click", ()=>{
      sortState.selectedId = parseInt(el.dataset.id,10);
      render();
    });
  });

  app.querySelectorAll(".sort-bucket").forEach(bucket=>{
    bucket.addEventListener("click", ()=>{
      if(sortState.selectedId === null) return;
      const item = sortState.items.find(it=>it.id===sortState.selectedId);
      const targetDoc = bucket.dataset.doc;
      if(item.doc === targetDoc){
        item.placed = true;
        sortState.correctCount++;
        sortState.selectedId = null;
      } else {
        item.wrongFlash = true;
        setTimeout(()=>{ item.wrongFlash = false; if(currentRoute()==="sort") render(); }, 500);
      }
      render();
    });
  });

  const restart = document.getElementById("sortRestart");
  if(restart) restart.addEventListener("click", ()=>{ newSortRound(); render(); });
}

// ---------- DASHBOARD ----------

function renderDashboard(){
  const totalAnswered = DOC_KEYS.reduce((s,k)=>s+docStats(k).answeredCount,0);
  const completedCount = DOC_KEYS.filter(k=>docStats(k).completed).length;
  const avgPct = Math.round(DOC_KEYS.reduce((s,k)=>s+docStats(k).pct,0)/DOC_KEYS.length);

  const certRows = DOC_KEYS.map(k=>{
    const s = docStats(k);
    const status = s.completed ? "Ratified ✓" : (s.answeredCount>0 ? s.pct+"%" : "Not started");
    return `<div class="cert-row"><span class="doc-name">${DOCS[k].title}</span><span class="status ${s.completed?'done':'pending'}">${status}</span></div>`;
  }).join("");

  const sticking = PROGRESS.stickingPoints;
  const stickingHTML = sticking.length === 0
    ? `<div class="empty-state">No open sticking points right now — nice. Keep working through the sections above to test that.</div>`
    : sticking.map(sp=>`
      <div class="sticking-item">
        <div class="src">${DOCS[sp.doc].title}</div>
        <div class="q">${sp.q}</div>
        <div class="correction">${sp.correction}</div>
      </div>
    `).join("");

  return `
  <div class="doc-header">
    <div class="eyebrow">Stored only in this browser</div>
    <h1>Your Record</h1>
    <p class="subtitle">Progress across all seven documents, and the specific sticking points worth revisiting.</p>
  </div>

  <div class="dash-grid">
    <div class="dash-stat"><div class="num">${completedCount}/${DOC_KEYS.length}</div><div class="label">Documents mastered</div></div>
    <div class="dash-stat"><div class="num">${avgPct||0}%</div><div class="label">Average progress</div></div>
    <div class="dash-stat"><div class="num">${totalAnswered}</div><div class="label">Quick checks answered</div></div>
  </div>

  <div class="cert">
    <h2>Certificate of Ratification</h2>
    ${certRows}
  </div>

  <section class="section-block">
    <h2>Sticking points</h2>
    <p style="color:var(--ink-soft); font-size:14.5px; margin-top:-6px;">Questions you've missed, with the correction. These clear automatically once you answer them correctly later.</p>
    <div class="sticking-list">${stickingHTML}</div>
  </section>

  <div class="reset-row">
    <button id="resetBtn">Clear all saved progress</button>
  </div>
  `;
}

function wireDashboard(){
  const btn = document.getElementById("resetBtn");
  if(btn) btn.addEventListener("click", resetProgress);
}

// ---------- TUTOR CHAT ----------

let chatMessages = [];

function loadChat(){
  try{
    const raw = localStorage.getItem(CHAT_KEY);
    chatMessages = raw ? JSON.parse(raw) : [];
  }catch(e){ chatMessages = []; }
}

function saveChat(){
  localStorage.setItem(CHAT_KEY, JSON.stringify(chatMessages.slice(-30)));
}

function initChat(){
  loadChat();
  const toggle = document.getElementById("tutorToggle");
  const panel = document.getElementById("tutorPanel");
  const closeBtn = document.getElementById("tutorClose");
  const form = document.getElementById("tutorForm");
  const input = document.getElementById("tutorInput");

  toggle.addEventListener("click", ()=>{
    panel.classList.toggle("open");
    if(panel.classList.contains("open")) input.focus();
  });
  closeBtn.addEventListener("click", ()=> panel.classList.remove("open"));

  renderChatLog();

  form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const text = input.value.trim();
    if(!text) return;
    input.value = "";
    chatMessages.push({role:"user", content:text});
    saveChat();
    renderChatLog();
    await sendToTutor();
  });
}

function renderChatLog(){
  const log = document.getElementById("tutorLog");
  if(chatMessages.length === 0){
    log.innerHTML = `<div class="tutor-empty">Ask anything about the Declaration, the Constitution, or the Bill of Rights — what something means, how two documents differ, or to quiz you on the spot.</div>`;
    return;
  }
  log.innerHTML = chatMessages.map(m=>`
    <div class="tutor-msg ${m.role}">
      <div class="tutor-msg-role">${m.role === 'user' ? 'You' : 'Tutor'}</div>
      <div class="tutor-msg-body">${escapeHTML(m.content)}</div>
    </div>
  `).join("");
  log.scrollTop = log.scrollHeight;
}

function escapeHTML(str){
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML.replace(/\n/g,"<br>");
}

async function sendToTutor(){
  const log = document.getElementById("tutorLog");
  const typingId = "typing-" + Date.now();
  log.insertAdjacentHTML("beforeend", `<div class="tutor-msg assistant" id="${typingId}"><div class="tutor-msg-role">Tutor</div><div class="tutor-msg-body tutor-typing">Thinking…</div></div>`);
  log.scrollTop = log.scrollHeight;

  const route = currentRoute();
  const context = DOCS[route] ? `User is currently reading: ${DOCS[route].title}.` : `User is on the app's "${route}" page.`;

  try{
    const res = await fetch("/api/tutor", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({ messages: chatMessages, context })
    });
    const data = await res.json();
    document.getElementById(typingId)?.remove();

    if(!res.ok || data.error){
      chatMessages.push({role:"assistant", content: "Tutor isn't set up yet: " + (data.error || "unknown error") + ". This app needs an ANTHROPIC_API_KEY environment variable added in your Vercel project settings — see the README."});
    } else {
      chatMessages.push({role:"assistant", content: data.text || "Sorry, I didn't get a usable response."});
    }
  }catch(e){
    document.getElementById(typingId)?.remove();
    chatMessages.push({role:"assistant", content:"Couldn't reach the tutor backend. If you're testing this locally (not on Vercel), the /api/tutor function won't run — deploy to Vercel with an ANTHROPIC_API_KEY set to use the live tutor."});
  }
  saveChat();
  renderChatLog();
}
