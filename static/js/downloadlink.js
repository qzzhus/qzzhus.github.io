document.getElementById("download-btn").addEventListener("click", () => {
  const url = "https://raw.githubusercontent.com/qzzhus/qzzhus.github.io/689a3c6b0e01240b562f4c0acd9cad102f432f59/resources/Curriculum%20Vitae.pdf";
  const filename = "ZHU_Curriculum_Vitae.pdf";
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});