(function () {
  /*********************************************************
   * KONFIGURASI JAWABAN (UBAH SESUAI KEBUTUHAN)
   *********************************************************/

  const JAWABAN_KESESUAIAN = "Sesuai";

  const JAWABAN_KEPUASAN = "Puas";

  const JAWABAN_KUALITAS = "Baik";

  const JAWABAN_TEXT =
    "Secara umum sudah baik dan sesuai harapan, semoga terus ditingkatkan.";

  /*********************************************************
   * HELPER
   *********************************************************/

  function selectRadioByExactLabel(container, targetText) {
    const labels = container.querySelectorAll("label");

    for (let label of labels) {
      const text = label.innerText.trim().toLowerCase();
      if (text === targetText.toLowerCase()) {
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

  function getAllLabelTexts(container) {
    return Array.from(container.querySelectorAll("label")).map((l) =>
      l.innerText.trim().toLowerCase(),
    );
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

      const labelTexts = getAllLabelTexts(container);

      if (labelTexts.includes("ya") && labelTexts.includes("tidak")) {
        selectRadioByExactLabel(container, "Ya");
        return;
      }

      if (labelTexts.includes("tidak puas") && labelTexts.includes("puas")) {
        selectRadioByExactLabel(container, JAWABAN_KEPUASAN);
        return;
      }

      if (
        labelTexts.includes("sangat buruk") &&
        labelTexts.includes("sangat baik")
      ) {
        selectRadioByExactLabel(container, JAWABAN_KUALITAS);
        return;
      }

      if (
        labelTexts.includes("sangat sesuai") &&
        labelTexts.includes("sangat tidak sesuai")
      ) {
        selectRadioByExactLabel(container, JAWABAN_KESESUAIAN);
        return;
      }
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

  console.log("✅ Semua pertanyaan berhasil diisi otomatis.");
})();
