// Ambil semua elemen dengan kelas .dropdown-item
const dropdownItems = document.querySelectorAll('.dropdown-item');

// Tambahkan event listener ke masing-masing item dropdown
dropdownItems.forEach(item => {
  item.addEventListener('click', function() {
    // Menutup dropdown setelah item diklik
    const dropdownMenu = this.closest('.dropdown').querySelector('.dropdown-content');
    dropdownMenu.classList.remove('block'); // Menghapus kelas 'block' untuk menutup dropdown
  });
});

// Agar dropdown dapat dibuka dan ditutup dengan klik pada tombol
const dropdownButtons = document.querySelectorAll('.dropdown button');
dropdownButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    e.stopPropagation(); // Menghentikan event klik agar tidak bocor ke luar
    const dropdownMenu = this.closest('.dropdown').querySelector('.dropdown-content');
    dropdownMenu.classList.toggle('block'); // Toggle visibilitas dropdown
  });
});

// Menutup dropdown jika klik di luar dropdown
document.addEventListener('click', function(e) {
  const dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(e.target) && !dropdown.previousElementSibling.contains(e.target)) {
      dropdown.classList.remove('block'); // Menutup dropdown jika klik di luar
    }
  });
});