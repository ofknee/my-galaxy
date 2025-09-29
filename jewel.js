/* KEEPING in case jewel rendering bug reappears later
// context
const ctx = document.getElementById("jewelRendered").getContext("2d");
const image = new Image();
image.onload = () => {
    // PRAYING that the jewel renders properly this time
    const animate = () => {
        ctx.drawImage(image, 0, 0); // draw the image onto the canvas at coords
        requestAnimationFrame(animate);
    };
    animate();
};
image.src = "/assets/jewel.gif"; // set source path
*/