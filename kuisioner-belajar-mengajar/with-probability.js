(function () {
  /*********************************************************
   * KONFIGURASI PROBABILITAS
   * Format: { "Label": persentase }
   * Total harus = 100
   *********************************************************/

  const PROB_KUALITAS = {
    "Baik": 80,
    "Sangat Baik": 20
  };

  const PROB_KEPUASAN = {
    "Puas": 80,
    "Sangat Puas": 20
  };

  const PROB_KESESUAIAN = {
    "Sesuai": 80,
    "Sangat Sesuai": 20
  };

  const JAWABAN_TEXT =
    "Secara umum sudah baik dan sesuai harapan, semoga terus ditingkatkan.";

  /*********************************************************
   * HELPER FUNCTION
   *********************************************************/

  function weightedRandom(probObj) {
    const entries = Object.entries(probObj);
    const total = entries.reduce((sum, [, val]) => sum + val, 0);

    if (total !== 100) {
      console.warn("⚠ Total probabilitas tidak 100%");
    }

    const rand = Math.random() * 100;
    let cumulative = 0;

    for (let [label, prob] of entries) {
      cumulative += prob;
      if (rand <= cumulative) {
        return label;
      }
    }

    return entries[0][0];
  }

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
      l.innerText.trim().toLowerCase()
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


      if (
        labelTexts.includes("sangat buruk") &&
        labelTexts.includes("sangat baik")
      ) {
        const chosen = weightedRandom(PROB_KUALITAS);
        selectRadioByExactLabel(container, chosen);
        return;
      }


      if (
        labelTexts.includes("tidak puas") &&
        labelTexts.includes("puas")
      ) {
        const chosen = weightedRandom(PROB_KEPUASAN);
        selectRadioByExactLabel(container, chosen);
        return;
      }


      if (
        labelTexts.includes("sangat sesuai") &&
        labelTexts.includes("sangat tidak sesuai")
      ) {
        const chosen = weightedRandom(PROB_KESESUAIAN);
        selectRadioByExactLabel(container, chosen);
        return;
      }
    }


    if (tipe === "2") {
      const inputText = pertanyaan.querySelector(
        'input[type="text"].jawaban-option'
      );

      if (inputText) {
        inputText.value = JAWABAN_TEXT;
        inputText.dispatchEvent(new Event("input", { bubbles: true }));
        inputText.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  });

  console.log("✅ Selesai dengan probabilitas.");
})();
