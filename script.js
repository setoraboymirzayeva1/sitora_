// Hamma rasmlarni tanlab olamiz
const images = document.querySelectorAll(".img-card img");

// Modal yaratamiz
const modal = document.createElement("div");
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.background = "rgba(0,0,0,0.8)";
modal.style.display = "none";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";
modal.style.zIndex = "1000";

// Katta rasm uchun img
const modalImg = document.createElement("img");
modalImg.style.maxWidth = "80%";
modalImg.style.maxHeight = "80%";
modalImg.style.borderRadius = "10px";

modal.appendChild(modalImg);
document.body.appendChild(modal);

// Har bir rasmga bosilganda ishlaydi
images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

// Modalni bosganda yopiladi
modal.addEventListener("click", () => {
  modal.style.display = "none";
});