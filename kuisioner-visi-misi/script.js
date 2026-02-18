(function () {
  /*********************************************************
   * KONFIGURASI
   *********************************************************/

  const JAWABAN_TEXT =
    "Secara umum sudah baik. Semoga ke depan semakin berkembang dan ditingkatkan kualitasnya.";

  /*********************************************************
   * HELPER FUNCTION
   *********************************************************/

  function pilihYaAtauIya(container) {
    const labels = container.querySelectorAll("label");

    for (let label of labels) {
      const text = label.innerText.trim().toLowerCase();

      if (text === "iya" || text === "ya") {
        const forAttr = label.getAttribute("for");
        if (forAttr) {
          const radio = document.getElementById(forAttr);
          if (radio) {
            radio.checked = true;
            radio.dispatchEvent(new Event("change", { bubbles: true }));
            return true;
          }
        }
      }
    }
    return false;
  }

  /*********************************************************
   * PROSES SEMUA PERTANYAAN
   *********************************************************/

  const semuaPertanyaan = document.querySelectorAll("li.i_pertanyaan");

  semuaPertanyaan.forEach((pertanyaan) => {
    const tipeJawaban = pertanyaan.querySelector(".id_tipe_jawaban");
    if (!tipeJawaban) return;

    const tipe = tipeJawaban.value;

    if (tipe === "1") {
      const container = pertanyaan.querySelector(".pertanyaan-jawaban");
      if (!container) return;

      pilihYaAtauIya(container);
    }

    if (tipe === "2") {
      const inputText = pertanyaan.querySelector(
        'input[type="text"].jawaban-option',
      );

      if (inputText) {
        inputText.value = JAWABAN_TEXT;
        inputText.dispatchEvent(new Event("input", { bubbles: true }));
        inputText.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  });

  console.log("✅ Semua pertanyaan berhasil diisi (Ya/Iya + Text).");
})();
