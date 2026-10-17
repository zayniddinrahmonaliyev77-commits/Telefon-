/**
 * TURDIQULOVA MAFTUNA - SHAXSIY MOBIL PORTFOLIO
 * Interaktiv funksiyalar, Hikoyalar (Stories) tizimi, Dialog modallari va Mental arifmetika arenasi
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. DATA DEFINITIONS
  // ==========================================
  const storiesData = [
    {
      id: 'bio',
      emoji: '👩‍🎓',
      title: 'Turdiqulova Maftuna',
      desc: '2006-yil 1-iyunda Jizzax viloyati Jizzax shahrida tug‘ilgan. Hozirda Jizzax davlat pedagogika universiteti Tarix fakultetining 3-bosqich talabasi.',
      tag: 'Tarjimayi hol'
    },
    {
      id: 'book',
      emoji: '📖',
      title: 'Uslubiy Qo‘llanma (2026)',
      desc: '“Amir Temur va Temuriylar davri yozma manbalari” nomli kitob hamda nufuzli ilmiy jurnallarda chop etilgan maqolalar muallifi.',
      tag: 'Ilmiy meros'
    },
    {
      id: 'diplomas',
      emoji: '🥇',
      title: 'Xalqaro Diplomlar',
      desc: 'Ispaniyaning “EL AUGE DEL DESARROLLO DE LA CIENCIA Y LA CREATIVIDAD” (2-daraja) va Rossiyaning “Корабль Знаний” (1-daraja) diplomlari sohibasi.',
      tag: 'Xalqaro yutuqlar'
    },
    {
      id: 'mental',
      emoji: '🧮',
      title: 'Mental Arifmetika',
      desc: 'Bir necha yillik murabbiylik faoliyati davomida ko‘plab shogirdlarga ta’lim bergan. “Ziyo Sam Academy” maxsus sertifikatiga ega.',
      tag: 'Pedagogik mahorat'
    },
    {
      id: 'english',
      emoji: '🇬🇧',
      title: 'Ingliz Tili (B2)',
      desc: 'Ingliz tilini bilish darajasini tasdiqlovchi xalqaro B2 sertifikati. Xalqaro ilmiy konferensiyalarda erkin ilmiy muloqot ko‘nikmasi.',
      tag: 'Til sertifikati'
    },
    {
      id: 'trainer',
      emoji: '🏆',
      title: 'Fidoyi Ustoz & Namunali Trener',
      desc: '2025–2026-yillar Respublika ochiq olimpiadalarida “Eng iqtidorli va namunali trener” hamda “Eng iqtidorli va fidoyi ustoz” mukofotlari.',
      tag: 'Respublika unvoni'
    }
  ];

  const detailsData = {
    spain: {
      title: 'Ispaniya Xalqaro Tanlovi — 2-Darajali Diplom 🥈',
      body: `
        <div class="modal-detail-badge" style="background: rgba(239, 68, 68, 0.15); color: #ef4444; padding: 4px 10px; border-radius: 99px; font-weight: 700; font-size: 0.75rem; display: inline-block; margin-bottom: 12px;">Xalqaro tanlov • Ispaniya</div>
        <p><strong>Tanlov nomi:</strong> “EL AUGE DEL DESARROLLO DE LA CIENCIA Y LA CREATIVIDAD”</p>
        <p><strong>Natija:</strong> 2-darajali Diplom bilan taqdirlangan</p>
        <p><strong>Formati:</strong> Onlayn miqyosda o‘tkazilgan xalqaro ilmiy-ijodiy tanlov</p>
        <p style="margin-top: 10px; color: var(--text-secondary);">Muallif ilmiy izlanishlari va tarixiy manbalar tahlili bo‘yicha yuqori baholanib, xalqaro hakamlar hay’ati tomonidan 2-o‘rin diplomi bilan taqdirlandi.</p>
      `
    },
    russia: {
      title: 'Rossiya Xalqaro Tanlovi — 1-Darajali Diplom 🥇',
      body: `
        <div class="modal-detail-badge" style="background: rgba(59, 130, 246, 0.15); color: #3b82f6; padding: 4px 10px; border-radius: 99px; font-weight: 700; font-size: 0.75rem; display: inline-block; margin-bottom: 12px;">Xalqaro tanlov • Rossiya Federatsiyasi</div>
        <p><strong>Tanlov nomi:</strong> “Корабль Знаний”</p>
        <p><strong>Natija:</strong> 1-darajali Diplom sohibasi</p>
        <p><strong>Yo‘nalish:</strong> Ilmiy-ma’rifiy va intellektual musobaqa</p>
        <p style="margin-top: 10px; color: var(--text-secondary);">Mazkur xalqaro tanlovda Maftuna Turdiqulova yuksak bilim va intellektual salohiyat namoyish etib, 1-darajali diplom bilan taqdirlandi.</p>
      `
    },
    trainer: {
      title: '“Eng iqtidorli va namunali trener” 🏆',
      body: `
        <div class="modal-detail-badge" style="background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 4px 10px; border-radius: 99px; font-weight: 700; font-size: 0.75rem; display: inline-block; margin-bottom: 12px;">Respublika Ochiq Olimpiadasi</div>
        <p><strong>Davr:</strong> 2025–2026-yillar</p>
        <p><strong>Nominatsiya:</strong> “Eng iqtidorli va namunali trener”</p>
        <p style="margin-top: 10px; color: var(--text-secondary);">Mental arifmetika yo‘nalishida yoshlarni yuqori natijalarga erishtirishdagi namunali murabbiylik faoliyati va innovatsion ta’lim usullari uchun Respublika miqyosida e’tirof etilgan.</p>
      `
    },
    teacher: {
      title: '“Eng iqtidorli va fidoyi ustoz” 🌟',
      body: `
        <div class="modal-detail-badge" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; padding: 4px 10px; border-radius: 99px; font-weight: 700; font-size: 0.75rem; display: inline-block; margin-bottom: 12px;">Respublika Ochiq Olimpiadasi</div>
        <p><strong>Davr:</strong> 2025–2026-yillar</p>
        <p><strong>Nominatsiya:</strong> “Eng iqtidorli va fidoyi ustoz”</p>
        <p style="margin-top: 10px; color: var(--text-secondary);">Pedagogik sohadagi fidoyiligi, yosh avlodning intellektual qobiliyatlarini yuksaltirishga qo‘shgan hissasi uchun yuksak Respublika mukofotiga sazovor bo‘lgan.</p>
      `
    },
    book: {
      title: '“Amir Temur va Temuriylar davri yozma manbalari” 📖',
      body: `
        <div class="modal-detail-badge" style="background: rgba(20, 184, 166, 0.15); color: #14b8a6; padding: 4px 10px; border-radius: 99px; font-weight: 700; font-size: 0.75rem; display: inline-block; margin-bottom: 12px;">Uslubiy qo‘llanma • 2026</div>
        <p><strong>Muallif:</strong> Turdiqulova Maftuna Laziz qizi</p>
        <p><strong>Tashkilot:</strong> Jizzax davlat pedagogika universiteti (JDPU) Tarix fakulteti</p>
        <p><strong>Nashr yili:</strong> 2026-yil</p>
        <div style="margin-top: 12px; padding: 10px; background: rgba(255,255,255,0.05); border-radius: 8px;">
          <p style="font-size: 0.8rem; line-height: 1.45; color: var(--text-secondary);">Qo‘llanmada Temuriylar davriga oid nodir qo‘lyozmalar, farmonlar, xorijiy davlatlar bilan elchilik munosabatlari va tarixiy xronikalar manbashunoslik nuqtai nazaridan tizimlashtirilgan. Talabalar va tadqiqotchilar uchun qimmatli ilmiy manbadir.</p>
        </div>
      `
    },
    english: {
      title: 'Ingliz Tili Xalqaro B2 Sertifikati 🇬🇧',
      body: `
        <div class="modal-detail-badge" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8; padding: 4px 10px; border-radius: 99px; font-weight: 700; font-size: 0.75rem; display: inline-block; margin-bottom: 12px;">CEFR Xalqaro Sertifikat</div>
        <p><strong>Daraja:</strong> B2 (Vantage / Independent User)</p>
        <p><strong>Ko‘nikmalar:</strong> Ilmiy maqolalarni xorijiy tilda tahlil qilish, xalqaro simpoziumlarda ma’ruza qilish va akademik yozish ko‘nikmalari.</p>
      `
    },
    ziyosam: {
      title: '“Ziyo Sam Academy” Maxsus Sertifikati 🧮',
      body: `
        <div class="modal-detail-badge" style="background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 4px 10px; border-radius: 99px; font-weight: 700; font-size: 0.75rem; display: inline-block; margin-bottom: 12px;">Maxsus Sertifikat</div>
        <p><strong>Akademiya:</strong> Ziyo Sam Academy</p>
        <p><strong>Yo‘nalish:</strong> Mental Arifmetika maxsus trening kurslari</p>
        <p style="margin-top: 10px; color: var(--text-secondary);">Mental arifmetika metodikasi, abakus bilan ishlash, tasavvuriy hisoblash va bolalar xotirasini kuchaytirish bo‘yicha professional trenerlik kurslarini muvaffaqiyatli yakunlagan.</p>
      `
    },
    teamit: {
      title: '“Teamit Academy” IT Sertifikati 💻',
      body: `
        <div class="modal-detail-badge" style="background: rgba(168, 85, 247, 0.15); color: #a855f7; padding: 4px 10px; border-radius: 99px; font-weight: 700; font-size: 0.75rem; display: inline-block; margin-bottom: 12px;">Raqamli Ko‘nikmalar</div>
        <p><strong>Akademiya:</strong> Teamit Academy</p>
        <p><strong>Yo‘nalish:</strong> Kompyuter savodxonligi va zamonaviy axborot texnologiyalari</p>
        <p style="margin-top: 10px; color: var(--text-secondary);">Axborot texnologiyalari, ma’lumotlar bilan ishlash, ta’limda raqamli vositalardan unumli foydalanish sertifikati.</p>
      `
    },
    books: {
      title: 'Kitobxonlik Musobaqalari & Seminarlar 📚',
      body: `
        <div class="modal-detail-badge" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; padding: 4px 10px; border-radius: 99px; font-weight: 700; font-size: 0.75rem; display: inline-block; margin-bottom: 12px;">Universitet e’tirofi</div>
        <p><strong>Muassasa:</strong> Jizzax davlat pedagogika universiteti</p>
        <p><strong>Faoliyat:</strong> Kitobxonlik bellashuvlari, ilmiy-nazariy seminarlar va davra suhbatlarining muntazam faol ishtirokchisi.</p>
      `
    }
  };

  // ==========================================
  // 2. AUDIO SYNTHESIS (Haptic Micro-interactions)
  // ==========================================
  let soundEnabled = true;
  let audioCtx = null;

  function playTickSound(frequency = 600, duration = 0.04) {
    if (!soundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio not permitted or supported
    }
  }

  const btnSoundToggle = document.getElementById('btnSoundToggle');
  const soundIcon = document.getElementById('soundIcon');
  if (btnSoundToggle) {
    btnSoundToggle.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      soundIcon.textContent = soundEnabled ? '🔊' : '🔇';
      showToast(soundEnabled ? 'Ovoz effektlari yoqildi' : 'Ovoz o‘chirildi');
    });
  }

  // ==========================================
  // 3. CLOCK & DYNAMIC ISLAND
  // ==========================================
  function updateClock() {
    const clockEl = document.getElementById('statusClock');
    if (clockEl) {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      clockEl.textContent = `${h}:${m}`;
    }
  }
  updateClock();
  setInterval(updateClock, 1000);

  const dynamicIsland = document.getElementById('dynamicIsland');
  if (dynamicIsland) {
    dynamicIsland.addEventListener('click', () => {
      playTickSound(800, 0.06);
      dynamicIsland.classList.toggle('expanded');
      showToast('🌟 Maftuna Turdiqulova • 2026 Portfolio');
      setTimeout(() => {
        dynamicIsland.classList.remove('expanded');
      }, 3500);
    });
  }

  // ==========================================
  // 4. DESKTOP VIEW CONTROLLER & THEMES
  // ==========================================
  const deviceFrame = document.getElementById('deviceFrame');
  const btnPhoneView = document.getElementById('btnPhoneView');
  const btnFullView = document.getElementById('btnFullView');
  const btnThemeToggle = document.getElementById('btnThemeToggle');

  if (btnPhoneView && btnFullView && deviceFrame) {
    btnPhoneView.addEventListener('click', () => {
      playTickSound();
      deviceFrame.classList.remove('full-screen-mode');
      btnPhoneView.classList.add('active');
      btnFullView.classList.remove('active');
      showToast('📱 Telefon ramkasi yoqildi');
    });

    btnFullView.addEventListener('click', () => {
      playTickSound();
      deviceFrame.classList.add('full-screen-mode');
      btnFullView.classList.add('active');
      btnPhoneView.classList.remove('active');
      showToast('🖥️ Moslashuvchan ekran faollashdi');
    });
  }

  if (btnThemeToggle) {
    btnThemeToggle.addEventListener('click', () => {
      playTickSound();
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      btnThemeToggle.querySelector('.theme-label').textContent = newTheme === 'dark' ? 'Tungi rejim' : 'Kunduzgi rejim';
      btnThemeToggle.querySelector('.theme-icon').textContent = newTheme === 'dark' ? '🌓' : '☀️';
      showToast(newTheme === 'dark' ? 'Tungi rejim yoqildi' : 'Kunduzgi rejim yoqildi');
    });
  }

  // ==========================================
  // 5. STORIES PLAYER (Instagram-like Stories)
  // ==========================================
  const storyDialog = document.getElementById('storyDialog');
  const storyProgressBars = document.getElementById('storyProgressBars');
  const storySlideTitle = document.getElementById('storySlideTitle');
  const storySlideDesc = document.getElementById('storySlideDesc');
  const storySlideTag = document.getElementById('storySlideTag');
  const storyEmoji = document.getElementById('storyEmoji');
  const btnCloseStory = document.getElementById('btnCloseStory');
  const storyTapLeft = document.getElementById('storyTapLeft');
  const storyTapRight = document.getElementById('storyTapRight');

  let currentStoryIndex = 0;
  let storyTimer = null;
  let storyProgress = 0;
  const SLIDE_DURATION = 4500; // 4.5 seconds per story
  const STEP_INTERVAL = 50;

  function buildStoryProgress() {
    storyProgressBars.innerHTML = '';
    storiesData.forEach((_, idx) => {
      const bar = document.createElement('div');
      bar.className = 'story-prog-bar';
      const fill = document.createElement('div');
      fill.className = 'story-prog-fill';
      fill.id = `storyFill_${idx}`;
      bar.appendChild(fill);
      storyProgressBars.appendChild(bar);
    });
  }

  function renderCurrentStory() {
    const data = storiesData[currentStoryIndex];
    if (!data) return;

    storySlideTitle.textContent = data.title;
    storySlideDesc.textContent = data.desc;
    storySlideTag.textContent = data.tag;
    storyEmoji.textContent = data.emoji;

    // Update progress bars
    storiesData.forEach((_, idx) => {
      const fill = document.getElementById(`storyFill_${idx}`);
      if (fill) {
        if (idx < currentStoryIndex) {
          fill.style.width = '100%';
        } else if (idx === currentStoryIndex) {
          fill.style.width = '0%';
        } else {
          fill.style.width = '0%';
        }
      }
    });

    storyProgress = 0;
    clearInterval(storyTimer);

    storyTimer = setInterval(() => {
      storyProgress += (STEP_INTERVAL / SLIDE_DURATION) * 100;
      const fill = document.getElementById(`storyFill_${currentStoryIndex}`);
      if (fill) {
        fill.style.width = `${Math.min(storyProgress, 100)}%`;
      }

      if (storyProgress >= 100) {
        clearInterval(storyTimer);
        nextStory();
      }
    }, STEP_INTERVAL);
  }

  function nextStory() {
    if (currentStoryIndex < storiesData.length - 1) {
      currentStoryIndex++;
      playTickSound(700, 0.04);
      renderCurrentStory();
    } else {
      closeStory();
    }
  }

  function prevStory() {
    if (currentStoryIndex > 0) {
      currentStoryIndex--;
      playTickSound(600, 0.04);
      renderCurrentStory();
    } else {
      renderCurrentStory();
    }
  }

  function openStory(storyId) {
    const foundIdx = storiesData.findIndex(s => s.id === storyId);
    currentStoryIndex = foundIdx !== -1 ? foundIdx : 0;
    buildStoryProgress();
    renderCurrentStory();
    storyDialog.showModal();
    playTickSound(900, 0.05);
  }

  function closeStory() {
    clearInterval(storyTimer);
    if (storyDialog.open) {
      storyDialog.close();
    }
  }

  // Attach Story triggers
  document.querySelectorAll('.story-item').forEach(item => {
    item.addEventListener('click', () => {
      const storyId = item.getAttribute('data-story');
      openStory(storyId);
    });
  });

  if (btnCloseStory) btnCloseStory.addEventListener('click', closeStory);
  if (storyTapRight) storyTapRight.addEventListener('click', nextStory);
  if (storyTapLeft) storyTapLeft.addEventListener('click', prevStory);

  // Pause on hold
  const storyPlayer = document.getElementById('storyPlayer');
  if (storyPlayer) {
    storyPlayer.addEventListener('pointerdown', () => clearInterval(storyTimer));
    storyPlayer.addEventListener('pointerup', () => {
      if (storyDialog.open) {
        clearInterval(storyTimer);
        storyTimer = setInterval(() => {
          storyProgress += (STEP_INTERVAL / SLIDE_DURATION) * 100;
          const fill = document.getElementById(`storyFill_${currentStoryIndex}`);
          if (fill) fill.style.width = `${Math.min(storyProgress, 100)}%`;
          if (storyProgress >= 100) {
            clearInterval(storyTimer);
            nextStory();
          }
        }, STEP_INTERVAL);
      }
    });
  }

  // ==========================================
  // 6. CATEGORY FILTER CHIPS
  // ==========================================
  const filterTabs = document.querySelectorAll('.tab-chip');
  const filterableItems = document.querySelectorAll('.filterable-item');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      playTickSound();
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      filterableItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // ==========================================
  // 7. BOTTOM NAVIGATION BAR TABS
  // ==========================================
  const bottomNavItems = document.querySelectorAll('.mobile-bottom-nav .nav-item');
  const contentScroll = document.getElementById('contentScroll');

  const tabToElementId = {
    home: 'homeSection',
    science: 'cardScience',
    awards: 'cardAwards',
    mental: 'cardMental',
    contact: 'cardContact'
  };

  bottomNavItems.forEach(item => {
    item.addEventListener('click', () => {
      playTickSound(750, 0.04);
      bottomNavItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      const tab = item.getAttribute('data-tab');
      const targetId = tabToElementId[tab];
      const targetEl = document.getElementById(targetId);

      if (targetEl && contentScroll) {
        // If it was hidden by category filter, show all first
        if (targetEl.classList.contains('hidden')) {
          document.querySelector('.tab-chip[data-filter="all"]').click();
        }
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ==========================================
  // 8. DETAILS MODAL SHEET
  // ==========================================
  const detailsDialog = document.getElementById('detailsDialog');
  const detailTitle = document.getElementById('detailTitle');
  const detailBody = document.getElementById('detailBody');
  const btnCloseDetails = document.getElementById('btnCloseDetails');

  function openDetails(key) {
    const item = detailsData[key];
    if (!item) return;

    detailTitle.textContent = item.title;
    detailBody.innerHTML = item.body;
    detailsDialog.showModal();
    playTickSound(850, 0.05);
  }

  if (btnCloseDetails) {
    btnCloseDetails.addEventListener('click', () => detailsDialog.close());
  }

  // Book details button
  const btnBookDetails = document.getElementById('btnBookDetails');
  if (btnBookDetails) {
    btnBookDetails.addEventListener('click', () => openDetails('book'));
  }

  // Awards details button
  document.querySelectorAll('[data-award]').forEach(btn => {
    btn.addEventListener('click', () => {
      const awardKey = btn.getAttribute('data-award');
      openDetails(awardKey);
    });
  });

  // Certs click
  document.querySelectorAll('[data-cert]').forEach(card => {
    card.addEventListener('click', () => {
      const certKey = card.getAttribute('data-cert');
      openDetails(certKey);
    });
  });

  // ==========================================
  // 9. CV MODAL & PRINT
  // ==========================================
  const cvDialog = document.getElementById('cvDialog');
  const btnOpenCV = document.getElementById('btnOpenCV');
  const btnCloseCV = document.getElementById('btnCloseCV');
  const btnPrintCV = document.getElementById('btnPrintCV');

  if (btnOpenCV) {
    btnOpenCV.addEventListener('click', () => {
      playTickSound();
      cvDialog.showModal();
    });
  }

  if (btnCloseCV) {
    btnCloseCV.addEventListener('click', () => cvDialog.close());
  }

  if (btnPrintCV) {
    btnPrintCV.addEventListener('click', () => {
      window.print();
    });
  }

  // Hero contact button
  const btnOpenContact = document.getElementById('btnOpenContact');
  if (btnOpenContact) {
    btnOpenContact.addEventListener('click', () => {
      playTickSound();
      document.querySelector('.nav-item[data-tab="contact"]').click();
    });
  }

  // ==========================================
  // 10. QR CODE & SHARE MODAL
  // ==========================================
  const qrDialog = document.getElementById('qrDialog');
  const btnQuickQR = document.getElementById('btnQuickQR');
  const btnCloseQR = document.getElementById('btnCloseQR');
  const btnCopyLink = document.getElementById('btnCopyLink');
  const shareUrlInput = document.getElementById('shareUrlInput');
  const btnShareApp = document.getElementById('btnShareApp');

  const currentUrl = window.location.href;
  if (shareUrlInput) shareUrlInput.value = currentUrl;

  if (btnQuickQR) {
    btnQuickQR.addEventListener('click', () => {
      playTickSound();
      qrDialog.showModal();
    });
  }

  if (btnCloseQR) {
    btnCloseQR.addEventListener('click', () => qrDialog.close());
  }

  if (btnCopyLink && shareUrlInput) {
    btnCopyLink.addEventListener('click', () => {
      navigator.clipboard.writeText(shareUrlInput.value).then(() => {
        showToast('✅ Havola nusxalandi!');
        btnCopyLink.textContent = 'Nusxalandi!';
        setTimeout(() => { btnCopyLink.textContent = 'Nusxalash'; }, 2000);
      });
    });
  }

  if (btnShareApp) {
    btnShareApp.addEventListener('click', async () => {
      playTickSound();
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'Turdiqulova Maftuna | Shaxsiy Mobil Portfolio',
            text: 'JDPU Tarix fakulteti 3-bosqich talabasi, Mental Arifmetika ustozi Maftuna Turdiqulovaning rasmiy portfoliosi.',
            url: window.location.href
          });
        } catch (e) {
          qrDialog.showModal();
        }
      } else {
        qrDialog.showModal();
      }
    });
  }

  // ==========================================
  // 11. LIGHT-DISMISS FALLBACK (Guidance Compliance)
  // For browsers without native 'closedby' attribute support
  // ==========================================
  const allDialogs = [storyDialog, detailsDialog, cvDialog, qrDialog];
  allDialogs.forEach(dialog => {
    if (!dialog) return;

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      dialog.addEventListener('click', (event) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent = (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );
        if (isDialogContent) return;
        dialog.close();
      });
    }
  });

  // ==========================================
  // 12. MENTAL MATH INTERACTIVE MINI-GAME
  // ==========================================
  const mathProblemEl = document.getElementById('mathProblem');
  const mathOptionsEl = document.getElementById('mathOptions');
  const timerValEl = document.getElementById('timerVal');
  const gameResultMsg = document.getElementById('gameResultMsg');
  const btnStartGame = document.getElementById('btnStartGame');

  let currentProblem = null;
  let gameInterval = null;
  let timeLeft = 10;

  function generateMathProblem() {
    // Generate arithmetic problem suitable for quick mental math
    const ops = ['+', '-', '×'];
    const op = ops[Math.floor(Math.random() * ops.length)];
    let a, b, answer;

    if (op === '+') {
      a = Math.floor(Math.random() * 50) + 12;
      b = Math.floor(Math.random() * 50) + 15;
      answer = a + b;
    } else if (op === '-') {
      a = Math.floor(Math.random() * 60) + 40;
      b = Math.floor(Math.random() * 30) + 10;
      answer = a - b;
    } else {
      a = Math.floor(Math.random() * 12) + 3;
      b = Math.floor(Math.random() * 8) + 4;
      answer = a * b;
    }

    // 2 plausible distractors
    const offset1 = Math.random() > 0.5 ? 2 : -2;
    const offset2 = Math.random() > 0.5 ? 10 : -10;
    const choices = [answer, answer + offset1, answer + offset2];
    choices.sort(() => Math.random() - 0.5);

    return { question: `${a} ${op} ${b} = ?`, answer, choices };
  }

  function startMathGame() {
    clearInterval(gameInterval);
    timeLeft = 10;
    timerValEl.textContent = timeLeft;
    gameResultMsg.textContent = '';
    currentProblem = generateMathProblem();
    mathProblemEl.textContent = currentProblem.question;

    mathOptionsEl.innerHTML = '';
    currentProblem.choices.forEach(val => {
      const btn = document.createElement('button');
      btn.className = 'opt-btn';
      btn.textContent = val;
      btn.setAttribute('data-val', val);

      btn.addEventListener('click', () => {
        clearInterval(gameInterval);
        const selected = parseInt(val, 10);
        if (selected === currentProblem.answer) {
          btn.classList.add('correct');
          playTickSound(1000, 0.15);
          gameResultMsg.innerHTML = '<span style="color: #34d399;">👏 Barakalla! To‘g‘ri javob! Maftuna ustoz shogirdlari darajasi!</span>';
        } else {
          btn.classList.add('wrong');
          playTickSound(300, 0.2);
          gameResultMsg.innerHTML = `<span style="color: #f87171;">Noto‘g‘ri. To‘g‘ri javob: ${currentProblem.answer}</span>`;
        }
        document.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);
      });

      mathOptionsEl.appendChild(btn);
    });

    gameInterval = setInterval(() => {
      timeLeft--;
      timerValEl.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(gameInterval);
        gameResultMsg.innerHTML = `<span style="color: #f59e0b;">⏳ Vaqt tugadi! Javob: ${currentProblem.answer}</span>`;
        document.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);
      }
    }, 1000);
  }

  if (btnStartGame) {
    btnStartGame.addEventListener('click', () => {
      playTickSound();
      startMathGame();
    });
  }

  // ==========================================
  // 13. QUICK CONTACT FORM SUBMISSION
  // ==========================================
  const quickMsgForm = document.getElementById('quickMsgForm');
  if (quickMsgForm) {
    quickMsgForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const senderName = document.getElementById('senderName').value;
      playTickSound(1100, 0.1);
      showToast(`Rahmat, ${senderName}! Xabaringiz yuborildi. Maftuna tez orada aloqaga chiqadi.`);
      quickMsgForm.reset();
    });
  }

  // ==========================================
  // 14. TOAST NOTIFICATION HELPER
  // ==========================================
  const toastPopup = document.getElementById('toastPopup');
  let toastTimer = null;

  function showToast(message) {
    if (!toastPopup) return;
    toastPopup.textContent = message;
    toastPopup.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastPopup.classList.remove('visible');
    }, 3200);
  }

  // Welcome Toast
  setTimeout(() => {
    showToast('👋 Xush kelibsiz! Maftunaning mobil portfoliosi.');
  }, 1000);

});
