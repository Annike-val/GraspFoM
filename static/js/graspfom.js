document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.querySelector(button.dataset.copy);
    if (!target) return;

    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      const label = button.querySelector("span");
      if (!label) return;

      const previous = label.textContent;
      label.textContent = "Copied";
      window.setTimeout(() => {
        label.textContent = previous;
      }, 1600);
    } catch {
      target.focus();
    }
  });
});

document.querySelectorAll(".asset-tile").forEach((tile) => {
  tile.addEventListener("pointermove", (event) => {
    const rect = tile.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    const tiltX = (50 - y) / 28;
    const tiltY = (x - 50) / 28;

    tile.style.setProperty("--mx", `${x}%`);
    tile.style.setProperty("--my", `${y}%`);
    tile.style.transform = `translateY(-8px) rotate(var(--rotate)) perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  });

  tile.addEventListener("pointerleave", () => {
    tile.style.removeProperty("--mx");
    tile.style.removeProperty("--my");
    tile.style.transform = "";
  });
});
