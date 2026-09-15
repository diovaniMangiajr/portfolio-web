// ==========================================
// 1. GERENCIAMENTO DE TEMA (DARK / LIGHT)
// ==========================================
const root = document.documentElement;
const themeToggleBtn = document.getElementById("themeToggle");

function updateThemeIcon(isDark) {
    if (!themeToggleBtn) return;
    themeToggleBtn.innerHTML = isDark 
        ? '<i class="fa-solid fa-sun text-amber-400"></i>' 
        : '<i class="fa-solid fa-moon text-slate-600 dark:text-slate-300"></i>';
}

function setTheme(isDark) {
    if (isDark) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
    updateThemeIcon(isDark);
}

// Inicializa o ícone conforme o estado inicial da tag <html>
updateThemeIcon(root.classList.contains("dark"));

if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
        const isCurrentlyDark = root.classList.contains("dark");
        setTheme(!isCurrentlyDark);
    });
}

// ==========================================
// 2. NAVBAR MOBILE (ABRIR / FECHAR)
// ==========================================
const navToggle = document.getElementById("navToggle");
const navContent = document.getElementById("navContent");
const navToggleIcon = document.getElementById("navToggleIcon");

if (navToggle && navContent) {
    // Abrir/fechar menu ao clicar no botão
    navToggle.addEventListener("click", () => {
        const isHidden = navContent.classList.toggle("hidden");
        if (navToggleIcon) {
            navToggleIcon.classList.toggle("fa-bars", isHidden);
            navToggleIcon.classList.toggle("fa-xmark", !isHidden);
        }
    });

    // Fechar automaticamente ao clicar em um link (apenas no mobile)
    navContent.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 1024) { // Breakpoint lg do Tailwind (1024px)
                navContent.classList.add("hidden");
                if (navToggleIcon) {
                    navToggleIcon.classList.add("fa-bars");
                    navToggleIcon.classList.remove("fa-xmark");
                }
            }
        });
    });
}

// ==========================================
// 3. ATUALIZAÇÃO DO ANO NO RODAPÉ
// ==========================================
const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}