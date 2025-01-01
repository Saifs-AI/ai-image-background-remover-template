const { createApp } = Vue;

createApp({
    data() {
        return {
            selectedImage: null,
            processedImage: null
        }
    },
    methods: {
        handleFileSelect(event) {
            const file = event.target.files[0];
            if (file) {
                this.loadImage(file);
            }
        },
        handleDrop(event) {
            const file = event.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                this.loadImage(file);
            }
        },
        loadImage(file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.selectedImage = e.target.result;
                this.processedImage = null;
            };
            reader.readAsDataURL(file);
        },
        processImage() {
            // Simulate processing with a loading state
            this.processedImage = this.selectedImage;
            
            // In a real implementation, you would:
            // 1. Send the image to a backend service
            // 2. Process it with AI
            // 3. Return the processed image
            // For demo purposes, we're just using the original image
        },
        downloadImage() {
            if (this.processedImage) {
                const link = document.createElement('a');
                link.href = this.processedImage;
                link.download = 'processed-image.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }
}).mount('#app'); 