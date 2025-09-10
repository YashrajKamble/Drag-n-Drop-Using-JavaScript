# Drag and Drop Interface

A modern, responsive drag and drop interface built with vanilla JavaScript, HTML5, and CSS3. This project demonstrates the implementation of the HTML5 Drag and Drop API with enhanced user experience features.

## Features

- **Intuitive Drag and Drop**: Smooth drag and drop functionality between containers
- **Visual Feedback**: Clear visual cues during drag operations
- **Responsive Design**: Works on various screen sizes
- **No External Dependencies**: Built with vanilla JavaScript
- **Modern UI**: Clean and polished interface with smooth animations
- **Accessible**: Follows web accessibility best practices

## Demo

You can try the live demo by opening the `index.html` file in a modern web browser.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs directly in the browser

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd drag-and-drop
   ```
3. Open `index.html` in your preferred web browser

## Project Structure

```
drag-and-drop/
├── index.html          # Main HTML file
├── script.js          # JavaScript functionality
├── style.css          # Styles for the application
├── images/            # Contains all image assets
│   ├── drag_drop_icon.png  # Drag handle icon
│   └── favicon.png    # Browser tab icon
└── README.md          # This file
```

## How It Works

### HTML Structure
- Two main containers (`#left` and `#right`) serve as drop zones
- Draggable items with the class `.list` can be moved between containers
- Each item includes a drag handle icon for better UX

### JavaScript Implementation
- Uses the HTML5 Drag and Drop API
- Event-driven architecture with proper event delegation
- Smooth animations and visual feedback during drag operations
- Handles both mouse and touch events

### CSS Styling
- Modern, clean design with smooth transitions
- Visual feedback for drag operations
- Responsive layout that works on different screen sizes
- Custom styling for the drag handle and drop zones

## Code Overview

### Key JavaScript Functions

#### `handleDragStart(e)`
- Called when a drag operation starts
- Sets the dragged item and applies visual feedback
- Configures the drag data transfer

#### `handleDragEnd()`
- Cleans up after a drag operation
- Removes visual feedback
- Resets the dragged item reference

#### `handleDragOver(e)`
- Prevents default browser behavior
- Sets the drop effect to 'move'
- Called repeatedly while an item is being dragged over a drop zone

#### `handleDrop(e)`
- Handles the drop event
- Moves the dragged item to the target container
- Prevents default browser behavior

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Acknowledgments

- HTML5 Drag and Drop API
- Google Fonts for the Poppins font family
- All contributors who helped improve this project

## Support

For support, please open an issue in the GitHub repository.
