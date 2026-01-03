
console.log("متجر المستقبل 2050 يعمل!");

let cartCount = 0;
const cartElement = document.getElementById('futureCartCount');

// زر المساعد الذكي
document.getElementById('aiAssistantBtn').onclick = function() {
    alert("مرحباً! أنا المساعد الذكي. كيف يمكنني مساعدتك؟");
};


document.getElementById('processPayment').onclick = function() {
    alert("جاري معالجة الدفع بالذكاء الاصطناعي...\nتمت العملية بنجاح!");
};


document.getElementById('currencySelect').onchange = function() {
    const selected = this.value;
    alert("تم تغيير العملة إلى: " + selected);
};


function addToCart() {
    cartCount++;
    if (cartElement) {
        cartElement.textContent = cartCount;
    }
    alert("تمت إضافة المنتج إلى السلة!");
}


setInterval(() => {
    const suggestions = [
        "تخفيضات على الإلكترونيات",
        "عرض خاص اليوم",
        "شحن مجاني للطلبات فوق 200 ر.س"
    ];
    const prediction = ["+10%", "+15%", "+20%"];
    
    const suggestionElement = document.getElementById('aiSuggestion');
    const predictionElement = document.getElementById('salesPrediction');
    
    if (suggestionElement) {
        suggestionElement.textContent = suggestions[Math.floor(Math.random() * suggestions.length)];
    }
    
    if (predictionElement) {
        predictionElement.textContent = prediction[Math.floor(Math.random() * prediction.length)];
    }
}, 5000);
