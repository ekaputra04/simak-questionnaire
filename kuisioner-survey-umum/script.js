(function () {
  /*********************************************************
   * KONFIGURASI INPUT TEXT
   *********************************************************/
  const JAWABAN_SARAN =
    "Perlu peningkatan sosialisasi, pelatihan preventif, serta mekanisme pelaporan yang lebih mudah, aman, dan responsif agar penanganan kasus dapat dilakukan secara cepat dan transparan.";

  /*********************************************************
   * HELPER
   *********************************************************/
  function pilihByLabel(container, targetText) {
    const labels = container.querySelectorAll("label");

    for (let label of labels) {
      const text = label.innerText.trim().toLowerCase();
      if (text === targetText.toLowerCase()) {
        const forAttr = label.getAttribute("for");
        const radio = document.getElementById(forAttr);
        if (radio) {
          radio.checked = true;
          radio.dispatchEvent(new Event("change", { bubbles: true }));
          return true;
        }
      }
    }
    return false;
  }

  function getLabelTexts(container) {
    return Array.from(container.querySelectorAll("label")).map((l) =>
      l.innerText.trim().toLowerCase(),
    );
  }

  /*********************************************************
   * PROSES SEMUA PERTANYAAN
   *********************************************************/
  const semuaPertanyaan = document.querySelectorAll("li.i_pertanyaan");

  semuaPertanyaan.forEach((pertanyaan) => {
    const container = pertanyaan.querySelector(".pertanyaan-jawaban");
    if (!container) return;

    const tipeJawaban = pertanyaan.querySelector(".id_tipe_jawaban");
    if (!tipeJawaban) return;

    const tipe = tipeJawaban.value;

    if (tipe === "1") {
      const labels = getLabelTexts(container);

      if (labels.includes("tahu") && labels.includes("tidak tahu")) {
        pilihByLabel(container, "Tahu");
        return;
      }

      if (labels.includes("pernah") && labels.includes("belum pernah")) {
        pilihByLabel(container, "Pernah");
        return;
      }

      if (labels.includes("ada") && labels.includes("tidak ada")) {
        pilihByLabel(container, "Ada");
        return;
      }

      if (labels.includes("iya") && labels.includes("tidak")) {
        pilihByLabel(container, "Iya");
        return;
      }
    }

    if (tipe === "2") {
      const teksPertanyaan = pertanyaan
        .querySelector(".pertanyaan-pertanyaan")
        ?.innerText.toLowerCase();

      if (
        teksPertanyaan &&
        teksPertanyaan.includes(
          "apakah ada saran-saran yang ingin diberikan berkaitan dengan pelaksanaan pencegahan dan penanganan kekerasan seksual",
        )
      ) {
        const inputText = container.querySelector(
          'input[type="text"].jawaban-option',
        );

        if (inputText) {
          inputText.value = JAWABAN_SARAN;
          inputText.dispatchEvent(new Event("input", { bubbles: true }));
          inputText.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }
    }
  });

  console.log("✅ Semua pertanyaan berhasil diisi sesuai aturan.");
})();
