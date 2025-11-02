// Progress bar scroll
const bar = document.getElementById('progressBar');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  bar.style.width = scrolled + '%';
});

// Modal
const modal = document.getElementById('leadModal');
const modalClose = document.getElementById('modalClose');
document.querySelectorAll('[data-open="leadmagnet"]').forEach(b =>
  b.addEventListener('click', () => modal.classList.add('show'))
);
modalClose.onclick = () => modal.classList.remove('show');
modal.onclick = e => { if (e.target === modal) modal.classList.remove('show'); };

// Form mock
const leadForm = document.getElementById('leadForm');
if (leadForm) {
  leadForm.onsubmit = e => {
    e.preventDefault();
    document.getElementById('formMsg').textContent = '✅ ส่งข้อมูลเรียบร้อย (mock)';
    leadForm.reset();
  };
}

const magnetForm = document.getElementById('magnetForm');
if (magnetForm) {
  magnetForm.onsubmit = e => {
    e.preventDefault();
    document.getElementById('magMsg').textContent = '✅ ดาวน์โหลดได้ทันที';
    setTimeout(() => window.open('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', '_blank'), 600);
    modal.classList.remove('show');
  };
}
