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
