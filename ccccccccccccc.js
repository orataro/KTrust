document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.scroll-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.01
  });

  targets.forEach(el => observer.observe(el));
});

const openBtn = document.getElementById("openTerms");
const closeBtn = document.getElementById("closeTerms");
const modal = document.getElementById("termsModal");
const agree = document.getElementById("agree");
const form = document.getElementById("entryForm");

// 開く
openBtn.addEventListener("click", e => {
  e.preventDefault();
  modal.classList.add("active");
});

// 閉じる
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// 背景クリックで閉じる
modal.addEventListener("click", e => {
  if(e.target === modal){
    modal.classList.remove("active");
  }
});

// 同意チェック必須
form.addEventListener("submit", e => {
  if(!agree.checked){
    alert("利用規約への同意が必要です");
    e.preventDefault();
  }
});