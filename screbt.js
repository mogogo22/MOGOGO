let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let huerotate = document.getElementById("hue-rotate");

let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img = document.getElementById("img");

let reset = document.querySelector("span");
let imgBox = document.querySelector(".img-box");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

// دالة لإعادة تعيين التأثيرات
function resetValue() {
    // إعادة تعيين تأثيرات الفلاتر
    img.style.filter = 'none';
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blur.value = '0';
    huerotate.value = '0';
    
    // إعادة تحميل الصورة الأصلية إلى الـ canvas
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function() {
        img.src = file.result;  // تحميل الصورة من جديد
    }
    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);  // مسح الـ canvas قبل رسم الصورة من جديد
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);  // رسم الصورة من جديد بدون فلاتر
        img.style.display = 'none';  // إخفاء الـ img بعد رسمها على الـ canvas
    }
}

// تحميل الصورة عند التغيير في input file
window.onload = function(){
    download.style.display = 'none';
    reset.style.display = 'none';
    imgBox.style.display = 'none';
}
upload.onchange = function(){
    resetValue()
    download.style.display = 'block';
    reset.style.display = 'block';
    imgBox.style.display = 'block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function(){
        img.src = file.result;
    }
    img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        img.style.display = 'none';
    }
}

// تطبيق الفلاتر بناءً على التغييرات في قيم الـ input
let filters = document.querySelectorAll("ul li input");
filters.forEach( filter => {
    filter.addEventListener('input', function(){
        ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${huerotate.value}deg)
        `
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
    })
})

// تحميل الصورة عند الضغط على زر تحميل
download.onclick = function(){
    download.href = canvas.toDataURL();
}
