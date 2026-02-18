(function () {
  /*********************************************************
   * KONFIGURASI JAWABAN TEXT
   *********************************************************/
  const JAWABAN_KENDALA = "Tidak ada kendala.";
  const JAWABAN_DUKUNGAN =
    "Dukungan konseling yang mudah diakses serta komunikasi yang lebih terbuka.";

  const TARGET_RADIO =
    "tidak sesuai dengan saya sama sekali atau tidak pernah";

  const semuaPertanyaan = document.querySelectorAll("li.i_pertanyaan");

  semuaPertanyaan.forEach((pertanyaan) => {
    const container = pertanyaan.querySelector(".pertanyaan-jawaban");
    if (!container) return;

    const tipeJawaban = pertanyaan.querySelector(".id_tipe_jawaban");
    if (!tipeJawaban) return;

    const tipe = tipeJawaban.value;

    if (tipe === "1") {
      const labels = container.querySelectorAll("label");

      labels.forEach((label) => {
        const text = label.innerText.trim().toLowerCase();

        if (text === TARGET_RADIO) {
          const forAttr = label.getAttribute("for");
          const radio = document.getElementById(forAttr);

          if (radio) {
            radio.checked = true;
            radio.dispatchEvent(new Event("change", { bubbles: true }));
          }
        }
      });
    }

    if (tipe === "2") {
      const teksPertanyaan = pertanyaan
        .querySelector(".pertanyaan-pertanyaan")
        ?.innerText.toLowerCase();

      const inputText = container.querySelector(
        'input[type="text"].jawaban-option'
      );

      if (!inputText || !teksPertanyaan) return;

      if (
        teksPertanyaan.includes(
          "kendala apa saja yang dialami pada semester sebelumnya"
        )
      ) {
        inputText.value = JAWABAN_KENDALA;
      }

      if (
        teksPertanyaan.includes(
          "menurutmu apa dukungan yang dibutuhkan"
        )
      ) {
        inputText.value = JAWABAN_DUKUNGAN;
      }

      inputText.dispatchEvent(new Event("input", { bubbles: true }));
      inputText.dispatchEvent(new Event("change", { bubbles: true }));
    }
  });

  console.log("✅ Skrining berhasil diisi otomatis.");
})();
