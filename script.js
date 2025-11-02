// ===== MOCK DATA =====
const posts = [
  {
    id: "1",
    title: "การจัดการข้อพิพาทในสัญญาก่อสร้างภาครัฐ: แนวทางป้องกันตั้งแต่ต้นน้ำ",
    desc: "สรุปแนวทางป้องกันข้อพิพาทตั้งแต่ช่วง TOR/ร่างสัญญา ไปจนถึงระหว่างก่อสร้าง",
    tag: "dispute"
  },
  {
    id: "2",
    title: "3 กลไกระงับข้อพิพาทที่ใช้ได้จริง",
    desc: "เจรจา • DRB • อนุญาโตฯ เลือกยังไง",
    tag: "dispute"
  },
  {
    id: "3",
    title: "Checklist ก่อนออก TOR งานก่อสร้าง",
    desc: "ลดงานเปลี่ยน ลดงบบานปลาย",
    tag: "contract"
  },
  {
    id: "4",
    title: "ออกแบบหลักสูตรกฎหมายก่อสร้างสำหรับวิศวกร",
    desc: "ทำให้ทีมเทคนิคเข้าใจกฎหมาย",
    tag: "training"
  }
];

function mapTag(tag){
  if (tag === "dispute") return "ข้อพิพาท";
  if (tag === "contract") return "กฎหมายสัญญา";
  if (tag === "training") return "อบรม";
  return "บทความ";
}

// ===== เติมบทความ =====
const articleListFull = document.getElementById("articleListFull");
function renderArticles(list){
  if (!articleListFull) return;
  articleListFull.innerHTML = "";
  list.forEach(p=>{
    const el = document.createElement("article");
    el.className = "article";

    // ถ้าเป็นบทความแรก → ใส่ปุ่มอ่านต่อไป article.html
    const readMore =
      p.id === "1"
        ? `<a href="article.html" style="color:var(--accent);font-size:.8rem;display:inline-block;margin-top:.4rem;">อ่านต่อ →</a>`
        : "";

    el.innerHTML = `
      <span class="badge">${mapTag(p.tag)}</span>
      <h4>${p.title}</h4>
      <p>${p.desc}</p>
      ${readMore}
    `;
    articleListFull.appendChild(el);
  });
}
renderArticles(posts);

// ฟิลเตอร์
document.querySelectorAll(".tag-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".tag-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    if (f === "all") renderArticles(posts);
    else renderArticles(posts.filter(p=>p.tag === f));
  });
});

// ===== NAVIGATION (ทำงานแน่นอน) =====
function scrollToTarget(selector){
  const el = document.querySelector(selector);
  if (!el) return;
  el.scrollIntoView({behavior:"smooth", block:"start"});
}

// desktop + mobile
document.querySelectorAll("[data-nav], .nav-links a, .mobile-nav a").forEach(link=>{
  link.addEventListener("click", e=>{
    const href = link.getAttribute("data-nav") || link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();
    scrollToTarget(href);

    // ปิด mobile nav ถ้าเปิดอยู่
    const mobileNav = document.getElementById("mobileNav");
    const navToggle = document.getElementById("navToggle");
    if (mobileNav && mobileNav.classList.contains("open")){
      mobileNav.classList.remove("open");
    }
    if (navToggle && navToggle.classList.contains("open")){
      navToggle.classList.remove("open");
    }
  });
});

// ===== MOBILE TOGGLE =====
const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");
if (navToggle && mobileNav){
  navToggle.addEventListener("click", ()=>{
    mobileNav.classList.toggle("open");
    navToggle.classList.toggle("open");
  });
}

// ===== FORM MOCK =====
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");
if (contactForm){
  contactForm.addEventListener("submit", e=>{
    e.preventDefault();
    formMsg.textContent = "✅ ส่งข้อมูลเรียบร้อย (mock)";
    formMsg.style.color = "#d6a85c";
    contactForm.reset();
  });
}
