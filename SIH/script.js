document.addEventListener("DOMContentLoaded", () => {

  // FAQ Accordion
  document.querySelectorAll(".faq-item").forEach(item => {
    const btn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    btn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Collapse all
      document.querySelectorAll(".faq-item").forEach(faq => {
        faq.classList.remove("active");
        faq.querySelector(".faq-answer").style.maxHeight = null;
      });

      // Expand clicked
      if (!isActive) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  // Dropdown toggle
  document.querySelectorAll(".dropdown > a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      link.parentElement.classList.toggle("active");
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", e => {
    document.querySelectorAll(".dropdown").forEach(drop => {
      if (!drop.contains(e.target)) drop.classList.remove("active");
    });
  });

  // Hamburger Menu
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Multilingual Support
  const translations = {
    en: {
      headerTitle: "UpliftU",
      headerText: "UpliftU is a dedicated platform supporting the mental health and well-being of higher education students. Academic life can be demanding and stressful, impacting emotional, social, and psychological health. Our mission is to provide reliable resources, professional guidance, and a supportive community.",
      quoteText: "“Prioritizing mental well-being is essential for personal growth and academic success. Uplift your mind, balance your life, and achieve your potential.”",
      points: [
        "Professional resources to manage stress, anxiety, and academic pressures effectively.",
        "Guidance to cultivate mindfulness, resilience, and maintain a healthy work-life balance.",
        "A safe, inclusive environment for open discussion and shared experiences.",
        "Strategies and resources to enhance personal development and academic success.",
        "Access to certified mental health professionals for one-on-one guidance.",
        "Online guides, articles, and interactive tools to support mental well-being and personal growth."
      ]
    },
    hi: {
      headerTitle: "UpliftU",
      headerText: "UpliftU एक समर्पित प्लेटफ़ॉर्म है जो उच्च शिक्षा के छात्रों के मानसिक स्वास्थ्य और कल्याण का समर्थन करता है। शैक्षणिक जीवन मांगपूर्ण और तनावपूर्ण हो सकता है, जिससे भावनात्मक, सामाजिक और मनोवैज्ञानिक स्वास्थ्य प्रभावित हो सकता है। हमारा मिशन विश्वसनीय संसाधन, पेशेवर मार्गदर्शन और एक सहायक समुदाय प्रदान करना है।",
      quoteText: "“मानसिक स्वास्थ्य को प्राथमिकता देना व्यक्तिगत विकास और शैक्षणिक सफलता के लिए आवश्यक है। अपने मन को ऊँचा उठाएँ, जीवन में संतुलन बनाए रखें और अपनी पूरी क्षमता प्राप्त करें।”",
      points: [
        "तनाव, चिंता और अकादमिक दबाव को प्रभावी ढंग से प्रबंधित करने के लिए पेशेवर संसाधन।",
        "माइंडफुलनेस, लचीलापन विकसित करने और स्वस्थ कार्य-जीवन संतुलन बनाए रखने के लिए मार्गदर्शन।",
        "खुली चर्चा और साझा अनुभवों के लिए सुरक्षित, समावेशी वातावरण।",
        "व्यक्तिगत विकास और शैक्षणिक सफलता को बढ़ाने के लिए रणनीतियाँ और संसाधन।",
        "एक-से-एक मार्गदर्शन के लिए प्रमाणित मानसिक स्वास्थ्य पेशेवरों तक पहुँच।",
        "मानसिक स्वास्थ्य और व्यक्तिगत विकास का समर्थन करने के लिए ऑनलाइन गाइड, लेख और इंटरैक्टिव टूल।"
      ]
    },
    gu: {
      headerTitle: "UpliftU",
      headerText: "UpliftU ઉચ્ચ શિક્ષણના વિદ્યાર્થીઓના માનસિક આરોગ્ય અને સુખાકારી માટે એક પ્રતિબદ્ધ પ્લેટફોર્મ છે. શૈક્ષણિક જીવન માંગપૂર્ણ અને તણાવસભર હોઈ શકે છે, જે ભાવનાત્મક, સામાજિક અને માનસિક સ્વાસ્થ્યને અસર કરે છે. અમારી મિશન વિશ્વસનીય સાધનો, વ્યાવસાયિક માર્ગદર્શન અને એક સહાયક સમુદાય પ્રદાન કરવાનો છે.",
      quoteText: "“માનસિક સુખાકારીને પ્રાથમિકતા આપવી વ્યક્તિગત વિકાસ અને શૈક્ષણિક સફળતા માટે ضروری છે. તમારું મન ઉઠાવો, જીવનમાં સંતુલન જાળવો અને вашей સંપૂર્ણ ક્ષમતાને પ્રાપ્ત કરો.”",
      points: [
        "તણાવ, ચિંતા અને શૈક્ષણિક દબાણને અસરકારક રીતે મેનેજ કરવા માટે વ્યાવસાયિક સાધનો.",
        "માઇન્ડફુલનેસ, લવચીકતા વિકસાવવા અને સ્વસ્થ કાર્ય-જીવન સંતુલન જાળવવા માટે માર્ગદર્શન.",
        "ખુલ્લી ચર્ચા અને સામાજિક અનુભવ માટે સુરક્ષિત, સમાવિષ્ટ વાતાવરણ.",
        "વ્યક્તિગત વિકાસ અને શૈક્ષણિક સફળતા વધારવા માટેની રણનીતિઓ અને સાધનો.",
        "એક-પર-એક માર્ગદર્શન માટે પ્રમાણિત માનસિક આરોગ્ય વ્યાવસાયિકોને પ્રવેશ.",
        "માનસિક સુખાકારી અને વ્યક્તિગત વિકાસ માટે ઓનલાઈન માર્ગદર્શિકા, લેખ અને ઇન્ટરેક્ટિવ સાધનો."
      ]
    }
  };

  const langSelect = document.getElementById("language-select");
  langSelect.addEventListener("change", () => {
    const lang = langSelect.value;
    document.querySelector(".header-content h1").textContent = translations[lang].headerTitle;
    document.querySelector(".header-content p").textContent = translations[lang].headerText;
    document.querySelector(".quote-section .quote").textContent = translations[lang].quoteText;
    const pointDivs = document.querySelectorAll(".points-section .point p");
    translations[lang].points.forEach((text, i) => {
      if(pointDivs[i]) pointDivs[i].textContent = text;
    });
  });

});
