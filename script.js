// Array to hold image data (file names and captions)
const images = [
    { src: "/pictures/balcony1.jpeg", caption: "1" },
    { src: "/pictures/balcony2.jpeg", caption: "2" },
    { src: "/pictures/balcony3.jpeg", caption: "3" },
    { src: "/pictures/balconyview.jpeg", caption: "4" },
    { src: "/pictures/bathroom1.webp", caption: "5" },
    { src: "/pictures/bathroom2.jpeg", caption: "6" },
    { src: "/pictures/bbq.jpeg", caption: "7" },
    { src: "/pictures/diningarea1.jpeg", caption: "8" },
    { src: "/pictures/diningarea2.webp", caption: "9" },
    { src: "/pictures/frontentrance.jpeg", caption: "10" },
    { src: "/pictures/guestbedroom1.jpeg", caption: "11" },
    { src: "/pictures/guestbedroom3.webp", caption: "12" },
    { src: "/pictures/kitchen1.jpeg", caption: "13" },
    { src: "/pictures/kitchen2.jpeg", caption: "14" },
    { src: "/pictures/kitchen3.webp", caption: "15" },
    { src: "/pictures/kitchenview.jpeg", caption: "16" },
    { src: "/pictures/livingroom1.webp", caption: "17" },
    { src: "/pictures/livingroom2.jpeg", caption: "18" },
    { src: "/pictures/livingroom3.jpeg", caption: "19" },
    { src: "/pictures/map.jpg", caption: "map" },
    { src: "/pictures/masterbedroom1.webp", caption: "20" },
    { src: "/pictures/masterbedroom2.jpeg", caption: "21" },
    { src: "/pictures/masterbedroom3.jpeg", caption: "22" },
    { src: "/pictures/masterbedroom4.jpeg", caption: "23" },
    { src: "/pictures/pool1.jpeg", caption: "24" },
    { src: "/pictures/pool2.jpeg", caption: "25" },
    { src: "/pictures/pool3.jpeg", caption: "26" },
];

let currentImageIndex = 0;

// Function to update the image and caption
function updateImage() {
    const imgElement = document.getElementById("gallery-image");
    const captionElement = document.getElementById("image-caption");

    imgElement.src = images[currentImageIndex].src;
    captionElement.textContent = images[currentImageIndex].caption;
}

// Show the next image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

// Show the previous image
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

// Generate the HTML structure dynamically
function generateHTML() {
    const app = document.getElementById("app");

    // Sidebar with contact info and house summary
    const sidebar = `
        <aside class="sidebar">
            <h2>Contact Information</h2>
            <p><strong>Name:</strong> Verónica Vieira</p>
            <p><strong>Email:</strong> casa-vero@gmail.com</p>
            <p><strong>Phone:</strong> +351 913087926</p>
            
            <h2>House Summary</h2>
            <p>This beautiful house features a lovey pool, situated just a 10 minute walk from the Lagos city center or a 10 minute walk to the closest beach.</p>
        </aside>
    `;

    // Header
    const header = `
        <header>
            <h1>Casa Vero</h1>
            <p>A home for the Holiday</p>
        </header>
    `;

    // Slideshow container
    const slideshow = `
        <section class="slideshow-container">
            <img id="gallery-image" src="${images[0].src}" alt="Gallery Image">
            <p id="image-caption">${images[0].caption}</p>

            <!-- Navigation buttons -->
            <button id="prev" onclick="prevImage()">&#10094; Prev</button>
            <button id="next" onclick="nextImage()">Next &#10095;</button>
        </section>
    `;

    // Footer
    const footer = `
        <footer>
            
        </footer>
    `;

    // Append the sidebar and content to the app container
    app.innerHTML = sidebar + header + slideshow + footer;
}

// Call the function to generate the HTML when the page loads
generateHTML();

