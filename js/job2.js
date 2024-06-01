document.addEventListener('DOMContentLoaded', function() {
    // Get all input elements and suggestion lists
    const inputs = document.querySelectorAll('.input-icon input');
    const suggestionLists = document.querySelectorAll('.suggestions');

    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            // Hide all suggestion lists
            suggestionLists.forEach(list => list.style.display = 'none');
            
            // Show the suggestion list related to the focused input
            const relatedList = this.nextElementSibling;
            if (relatedList && relatedList.classList.contains('suggestions')) {
                relatedList.style.display = 'block';
            }
        });

        input.addEventListener('input', function() {
            // Hide all suggestion lists
            suggestionLists.forEach(list => list.style.display = 'none');
            
            // Show the suggestion list related to the input field
            const relatedList = this.nextElementSibling;
            if (relatedList && relatedList.classList.contains('suggestions')) {
                relatedList.style.display = 'block';
            }
        });
    });

    // Hide suggestion lists when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.input-icon')) {
            suggestionLists.forEach(list => list.style.display = 'none');
        }
    });

    // Add click event to each suggestion item
    suggestionLists.forEach(list => {
        list.addEventListener('click', function(e) {
            if (e.target.tagName === 'LI') {
                const input = this.previousElementSibling;
                if (input) {
                    input.value = e.target.textContent;
                }
                this.style.display = 'none';
            }
        });
    });
});
