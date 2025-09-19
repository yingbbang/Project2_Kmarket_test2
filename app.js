// 아코디언 메뉴 (한 번에 하나만 열리도록)
document.querySelectorAll(".menu__btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";

    // 모두 닫기
    document.querySelectorAll(".menu__btn").forEach(b => b.setAttribute("aria-expanded", "false"));
    document.querySelectorAll(".submenu").forEach(sub => sub.style.display = "none");

    // 클릭한 버튼 열기
    if (!expanded) {
      btn.setAttribute("aria-expanded", "true");
      const submenu = btn.nextElementSibling;
      if (submenu) submenu.style.display = "block";
    }
  });
});
