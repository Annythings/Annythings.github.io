document.addEventListener("DOMContentLoaded", function () {
    const catImage = document.getElementById("cat");
    const frames = [
        "frames/cat_frame1.png",
        "frames/cat_frame2.png",
        "frames/cat_frame3.png",
        "frames/cat_frame4.png",
        "frames/cat_frame5.png",
        "frames/cat_frame6.png"
    ];

    let currentFrame = 0;

    function animateCat() {
        catImage.src = frames[currentFrame]; // เปลี่ยนภาพตามเฟรม
        currentFrame = (currentFrame + 1) % frames.length; // วนลูปภาพ
    }

    // ตรวจสอบว่า script ทำงาน
    console.log("Animation Started!");

    // ตั้งให้เปลี่ยนภาพทุก 100ms (0.1 วินาที)
    setInterval(animateCat, 100);
});
