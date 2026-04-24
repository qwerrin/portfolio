// ============================================================
// タイピングアニメーション
// テキストを1文字ずつ表示し、消して、次のテキストへ切り替える
// ============================================================

const texts = [
  'Web Developer',
  'HTML / CSS / JS を学習中',
  'ものづくりが好き',
];

let textIndex = 0;   // 現在表示中のテキストの番号
let charIndex = 0;   // 現在表示中の文字の位置
let isDeleting = false; // 消している最中かどうか

const typingEl = document.getElementById('typing');

function type() {
  const current = texts[textIndex];

  if (isDeleting) {
    // 文字を1つ削除
    typingEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
  } else {
    // 文字を1つ追加
    typingEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
  }

  // 次の呼び出しまでの待機時間
  let delay = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === current.length) {
    // テキストを書き終わったら1秒待って消し始める
    delay = 1000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    // 消し終わったら次のテキストへ
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    delay = 400;
  }

  setTimeout(type, delay);
}

// ページ読み込み後にタイピング開始
type();


// ============================================================
// スクロールアニメーション
// セクションが画面に入ったら .visible クラスを付けて表示する
// IntersectionObserver：要素が画面に入ったかどうかを監視する API
// ============================================================

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 画面に入ったら visible クラスを追加（CSS でフェードイン）
        entry.target.classList.add('visible');
        // 一度表示したら監視を解除（パフォーマンス向上）
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15, // 要素が15%見えたら発火
  }
);

// すべてのセクションを監視対象に登録
sections.forEach((section) => observer.observe(section));


// ============================================================
// スムーズスクロール（ナビゲーションリンク）
// ヘッダーの高さ分だけオフセットして正確な位置へスクロール
// ============================================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // デフォルトのジャンプ動作をキャンセル

    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);

    if (target) {
      const headerHeight = 60; // ナビの高さ（style.css の .nav と合わせる）
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
