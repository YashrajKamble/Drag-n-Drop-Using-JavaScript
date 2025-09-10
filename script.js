document.addEventListener('DOMContentLoaded', function() {
    const leftBox = document.getElementById("left");
    const rightBox = document.getElementById("right");
    let draggedItem = null;

    // Function to handle drag start
    function handleDragStart(e) {
        draggedItem = this;
        this.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    // Function to handle drag end
    function handleDragEnd() {
        this.classList.remove('dragging');
        draggedItem = null;
    }

    // Function to handle drag over
    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move';
        return false;
    }

    // Function to handle drop
    function handleDrop(e) {
        e.stopPropagation();
        e.preventDefault();
        
        if (draggedItem !== this) {
            this.appendChild(draggedItem);
        }
        return false;
    }

    // Add event listeners to all list items
    function addDragEvents() {
        const lists = document.querySelectorAll('.list');
        lists.forEach(item => {
            item.removeEventListener('dragstart', handleDragStart);
            item.removeEventListener('dragend', handleDragEnd);
            
            item.addEventListener('dragstart', handleDragStart);
            item.addEventListener('dragend', handleDragEnd);
        });
    }

    // Add event listeners to drop zones
    [leftBox, rightBox].forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('drop', handleDrop);
    });

    // Initialize drag events
    addDragEvents();

    // Add mutation observer to handle dynamically added elements
    const observer = new MutationObserver(addDragEvents);
    observer.observe(document.body, { childList: true, subtree: true });
});