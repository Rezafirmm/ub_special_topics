      const menuToggle = document.getElementById("menuToggle");
      const mobileMenu = document.getElementById("mobileMenu");
      const iconOpen = document.getElementById("iconOpen");
      const iconClose = document.getElementById("iconClose");

      mobileMenu.classList.add("hidden");

      menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");

        iconOpen.classList.toggle("hidden");
        iconClose.classList.toggle("hidden");
      });
      document.addEventListener("click", (e) => {
        if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
          mobileMenu.classList.add("hidden");
          iconOpen.classList.remove("hidden");
          iconClose.classList.add("hidden");
        }
      });

      window.addEventListener("scroll", () => {
        document.getElementById("mainHeader").classList.toggle("scrolled", window.scrollY > 20);
      });