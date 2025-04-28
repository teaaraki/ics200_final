

document.addEventListener('DOMContentLoaded', function () {
    var readMoreLinks = document.querySelectorAll('.read-more');
    var modals = document.querySelectorAll('.modal');
    var closeButtons = document.querySelectorAll('.close');
    readMoreLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var card = link.closest('.card');
            var modalId = card.getAttribute('data-modal');
            if (modalId) {
                var modal = document.getElementById(modalId);
                if (modal) {
                    modal.style.display = 'block';
                }
            }
        });
    });
    closeButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var modal = btn.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });
    window.addEventListener('click', function (e) {
        modals.forEach(function (modal) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
