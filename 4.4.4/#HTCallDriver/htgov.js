function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'zh-CN',
    includedLanguages: 'zh-CN,en,ja,ko,fr,es,de,ru',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.onclick = () => {
      const el = document.getElementById("google_translate_element");
      if (el) el.style.display = el.style.display === "none" ? "block" : "none";
    };
  }

  const popupBtn = document.querySelector(".account-toggle img");
  if (popupBtn) {
    popupBtn.addEventListener("click", () => {
      const popup = document.getElementById('accountPopup');
      if (popup) popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
    });
  }
});
