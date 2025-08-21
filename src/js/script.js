//index 3
const btn = document.getElementById('dropdownBtn');
  const selected = document.getElementById('selectedOption');
  const menu = document.getElementById('dropdownMenu');
  const options = menu.querySelectorAll('.option');
  const upArrow = document.getElementById('upArrow');
  const downArrow = document.getElementById('downArrow');

  let selectedIndex = -1;

  // فتح القائمة عند الضغط على الزر نفسه (أي مكان في الزر)
  btn.addEventListener('click', (e) => {
    menu.classList.toggle('show');
  });

  // التنقل بالأسهم
  upArrow.addEventListener('click', (e) => {
    selectedIndex = (selectedIndex > 0) ? selectedIndex - 1 : options.length - 1;
    updateSelection();
    e.stopPropagation();
  });

  downArrow.addEventListener('click', (e) => {
    selectedIndex = (selectedIndex < options.length - 1) ? selectedIndex + 1 : 0;
    updateSelection();
    e.stopPropagation();
  });

  // اختيار عنصر بالنقر من القائمة
  options.forEach((option, index) => {
    option.addEventListener('click', () => {
      selectedIndex = index;
      updateSelection();
      menu.classList.remove('show');
    });
  });

  function updateSelection() {
    selected.textContent = options[selectedIndex].textContent;
    options.forEach((opt, i) => {
      opt.classList.toggle('highlight', i === selectedIndex);
    });
  }

  // إغلاق القائمة عند النقر خارجها
  window.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('show');
    }
  });

  updateSelection(); // تهيئة العرض الأولي
  //end of index 3