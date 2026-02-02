// ฟังก์ชันตรวจจับการ Scroll เพื่อแสดง Effect Fade-in
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        // ถ้าองค์ประกอบเลื่อนขึ้นมาอยู่ในระยะสายตา ให้เติม class 'active'
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } 
        // ถ้าต้องการให้ Fade out ตอนเลื่อนกลับไป ให้เอาคอมเมนต์บรรทัดล่างออก
        // else {
        //     reveals[i].classList.remove('active');
        // }
    }
}

// ตั้งค่า Swiper ให้เป็นแบบ Coverflow (เหมือน WeTV)
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto", // ให้ระบบคำนวณจำนวนรูปเอง
    coverflowEffect: {
        rotate: 30,     // องศาการหมุนของรูปข้างๆ
        stretch: 0,
        depth: 100,     // ความลึก (มิติ)
        modifier: 1,
        slideShadows: true, // เงาข้างๆ
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true, // ให้หมุนวนลูปไปเรื่อยๆ
    autoplay: {
        delay: 2500, // เลื่อนเองทุก 2.5 วินาที
        disableOnInteraction: false,
    },
});

// Swiper สำหรับส่วน Activities & Achievements
var swiperAchieve = new Swiper(".mySwiperAchievements", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 20,       // หมุนน้อยกว่า Workflow หน่อย เพื่อให้อ่านง่าย
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false, // ปิดเงา เพื่อให้การ์ดดูคลีนๆ (หรือแก้เป็น true ถ้าชอบเงา)
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 3000, // เปลี่ยนทุก 3 วินาที
        disableOnInteraction: false,
    },
});

// ฟังก์ชัน Modal (ชุดเดิม)
function openModal(element) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("expandedImg");
    var captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImg.src = element.src;
    captionText.innerHTML = element.alt;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}