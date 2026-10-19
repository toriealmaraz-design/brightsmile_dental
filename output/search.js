/* ==========================================================================
   BRIGHTSMILE CLIENT-SIDE DOM SEARCH FILTER  (LO2 2D1 – Distinction Feature)
   ========================================================================= */
(function () {
    'use strict';

    function initPatientSearch() {
        var input = document.getElementById('patientSearch');
        if (!input) return;

        var container = input.closest('.search-box') || input.parentElement;
        var rows = document.querySelectorAll('.patient-row');

        // Watch for newly added rows
        var observer = new MutationObserver(function () {
            var newRows = document.querySelectorAll('.patient-row');
            if (newRows.length > rows.length) rows = newRows;
        });
        if (container) {
            observer.observe(container, { childList: true, subtree: true });
        }

        input.addEventListener('input', function () {
            var filter = this.value.toLowerCase();
            var visibleCount = 0;

            rows.forEach(function (row) {
                var text = row.textContent || row.innerText || '';
                if (text.toLowerCase().includes(filter)) {
                    row.style.display = '';
                    visibleCount++;
                } else {
                    row.style.display = 'none';
                }
            });

            var indicator = document.getElementById('searchIndicator');
            if (indicator) {
                indicator.style.display = visibleCount === 0 ? 'block' : 'none';
            }
        });

        input.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && this.value) {
                this.value = '';
                this.dispatchEvent(new Event('input'));
            }
        });
    }

    function initAppointmentFilter() {
        var input = document.getElementById('appointmentSearch');
        if (!input) return;

        var rows = document.querySelectorAll('.appointment-row');

        input.addEventListener('input', function () {
            var filter = this.value.toLowerCase();
            var visible = 0;

            rows.forEach(function (row) {
                var text = row.textContent || row.innerText || '';
                if (text.toLowerCase().includes(filter)) {
                    row.style.display = '';
                    visible++;
                } else {
                    row.style.display = 'none';
                }
            });

            var indicator = document.getElementById('appointmentSearchIndicator');
            if (indicator) {
                indicator.style.display = visible === 0 ? 'block' : 'none';
            }
        });
    }

    function initGenericSearch() {
        var inputs = document.querySelectorAll('.search-input');
        inputs.forEach(function (input) {
            var table = input.closest('.search-block') ? input.closest('.search-block').querySelector('.search-table') : null;
            if (!table) return;

            var rows = table.querySelectorAll('.search-row');

            input.addEventListener('input', function () {
                var filter = this.value.toLowerCase();
                var visible = 0;
                rows.forEach(function (row) {
                    var text = row.textContent || row.innerText || '';
                    if (text.toLowerCase().includes(filter)) {
                        row.style.display = '';
                        visible++;
                    } else {
                        row.style.display = 'none';
                    }
                });
                var indicator = table.parentElement.querySelector('.search-indicator');
                if (indicator) {
                    indicator.style.display = visible === 0 ? 'block' : 'none';
                }
            });
        });
    }

    function focusFirstSearch() {
        var input = document.querySelector('.search-input');
        if (input && document.readyState === 'complete') {
            input.focus();
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        initPatientSearch();
        initAppointmentFilter();
        initGenericSearch();
        focusFirstSearch();
    });
})();
