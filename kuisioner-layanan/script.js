(function () {
  /*********************************************************
   * KONFIGURASI JAWABAN
   * Isi dengan: "Baik" atau "Sangat Baik"
   *********************************************************/
  const JAWABAN = "Baik";

  const semuaPertanyaan = document.querySelectorAll("li.i_pertanyaan");

  semuaPertanyaan.forEach((pertanyaan) => {
    const container = pertanyaan.querySelector(".pertanyaan-jawaban");
    if (!container) return;

    const labels = container.querySelectorAll("label");

    labels.forEach((label) => {
      const text = label.innerText.trim().toLowerCase();

      if (text === JAWABAN.toLowerCase()) {
        const forAttr = label.getAttribute("for");
        const radio = document.getElementById(forAttr);

        if (radio) {
          radio.checked = true;
          radio.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }
    });
  });

  console.log("✅ Semua pertanyaan diisi:", JAWABAN);
})();
