import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <main class="hero">
    <div class="hero-inner">
      <h2 class="role">음악교사</h2>
      <h1 class="name">김영후</h1>
      <p class="tagline">소리를 눈으로, 감정을 손끝으로 연주합니다.</p>

      <div class="actions">
        <a class="btn primary" href="#contact">Contact</a>
        <a class="btn ghost" href="#works">Works</a>
      </div>
    </div>

    <div class="decor">
      <svg class="note note1" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>
      <svg class="note note2" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>
      <div class="blob blob1"></div>
      <div class="blob blob2"></div>
    </div>
  </main>

  <section id="works" class="section">
    <h3>대표 작업</h3>
    <p>학생 연주 지도 · 합창 지휘 · 수업 계획 작성</p>
  </section>

  <section id="contact" class="section contact">
    <h3>연락</h3>
    <p>이메일: <a href="mailto:kim.younghu@example.com">kim.younghu@example.com</a></p>
  </section>
`

// 간단한 인터랙션: 음악 노트를 주기적으로 깜빡이게 함
const notes = document.querySelectorAll('.note')
setInterval(() => {
  const i = Math.floor(Math.random() * notes.length)
  notes[i].classList.add('pop')
  setTimeout(() => notes[i].classList.remove('pop'), 900)
}, 800)

// 부드러운 진입 애니메이션
window.requestAnimationFrame(() => document.body.classList.add('render'))
