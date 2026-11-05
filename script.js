/*
 * SSC Flix — vanilla JavaScript edition
 * Converted from the supplied React/TSX source.
 * This project uses no React, JSX, Tailwind, or icon package.
 */

// --- EXAM DEFINITIONS DATA ---
const EXAM_CATEGORIES = [
  { id: 'cgl', code: 'SSC CGL', name: 'Combined Graduate Level', targetDays: 42, cutoff: 138.5, totalMarks: 200, tier: 'Tier I & II', totalMocks: 45, icon: '🎯' },
  { id: 'chsl', code: 'SSC CHSL', name: 'Combined Higher Secondary Level', targetDays: 68, cutoff: 145.0, totalMarks: 200, tier: 'Tier I & II', totalMocks: 38, icon: '⚡' },
  { id: 'cpo', code: 'SSC CPO', name: 'Central Police Organization (SI)', targetDays: 85, cutoff: 115.0, totalMarks: 200, tier: 'Paper I & II', totalMocks: 30, icon: '🛡️' },
  { id: 'mts', code: 'SSC MTS', name: 'Multi-Tasking Staff & Havaldar', targetDays: 110, cutoff: 128.0, totalMarks: 150, tier: 'Session I & II', totalMocks: 40, icon: '📝' },
  { id: 'steno', code: 'SSC STENO', name: 'Stenographer Grade C & D', targetDays: 125, cutoff: 132.0, totalMarks: 200, tier: 'CBT + Skill', totalMocks: 25, icon: '⌨️' },
  { id: 'gd', code: 'SSC GD', name: 'Constable (GD) in CAPFs', targetDays: 140, cutoff: 135.0, totalMarks: 160, tier: 'CBT & PET', totalMocks: 50, icon: '🎖️' }
];

// --- SECTIONS CONFIGURATION ---
const SECTIONS = [
  { id: 'reasoning', name: 'General Intelligence', nameHi: 'सामान्य बुद्धिमत्ता', total: 5, markPos: 2, markNeg: 0.5 },
  { id: 'ga', name: 'General Awareness', nameHi: 'सामान्य जागरूकता', total: 5, markPos: 2, markNeg: 0.5 },
  { id: 'quant', name: 'Quantitative Aptitude', nameHi: 'मात्रात्मक रुझान', total: 5, markPos: 2, markNeg: 0.5 },
  { id: 'english', name: 'English Comprehension', nameHi: 'अंग्रेजी समझ', total: 5, markPos: 2, markNeg: 0.5 },
  { id: 'computer', name: 'Computer Knowledge', nameHi: 'कंप्यूटर ज्ञान', total: 5, markPos: 2, markNeg: 0.5 }
];

// --- ASPIRANT STATE OPTIONS (signup form) ---
const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
  'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
  'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman & Nicobar Islands', 'Chandigarh',
  'Dadra & Nagar Haveli and Daman & Diu', 'Delhi', 'Jammu & Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
];

// --- BILINGUAL QUESTION BANK WITH STEP-BY-STEP HINTS ---
const MOCK_QUESTIONS = {
  reasoning: [
    {
      id: 'r1',
      num: 1,
      examId: 'cgl',
      text: 'Select the related word/number pair from the given alternatives:\n\nThermometer : Temperature :: Barometer : ?',
      textHi: 'दिए गए विकल्पों में से संबंधित शब्द/संख्या युग्म को चुनिए:\n\nथर्मामीटर : तापमान :: बैरोमीटर : ?',
      options: ['Atmospheric Pressure', 'Humidity', 'Wind Velocity', 'Earthquake Intensity'],
      optionsHi: ['वायुमंडलीय दबाव', 'आर्द्रता', 'पवन का वेग', 'भूकंप की तीव्रता'],
      correct: 0,
      hint: 'Think about scientific measuring instruments and what weather metric Barometers register.',
      hintHi: 'वैज्ञानिक मापने वाले उपकरणों के बारे में सोचें कि बैरोमीटर क्या मापता है।',
      explanation: 'A Thermometer measures temperature; similarly, a Barometer measures Atmospheric Pressure.'
    },
    {
      id: 'r2',
      num: 2,
      examId: 'cgl',
      text: 'In a certain code language, "PENCIL" is written as "QFODJM". How will "PAPER" be written in that code language?',
      textHi: 'एक निश्चित कूट भाषा में "PENCIL" को "QFODJM" लिखा जाता है। उसी भाषा में "PAPER" कैसे लिखा जाएगा?',
      options: ['QBQFS', 'QBQER', 'QBPFR', 'QCPFS'],
      optionsHi: ['QBQFS', 'QBQER', 'QBPFR', 'QCPFS'],
      correct: 0,
      hint: 'Shift each letter forward by 1 position in the alphabet.',
      hintHi: 'वर्णमाला में प्रत्येक अक्षर को 1 स्थान आगे बढ़ाएं।',
      explanation: 'Pattern: Each letter is shifted by +1 in alphabetical order (P->Q, A->B, P->Q, E->F, R->S).'
    },
    {
      id: 'r3',
      num: 3,
      examId: 'chsl',
      text: 'Which sequence of mathematical signs will correctly balance the given equation?\n\n16 * 4 * 5 * 9 = 11',
      textHi: 'गणितीय चिन्हों का कौन सा क्रम दिए गए समीकरण को संतुलित करेगा?\n\n16 * 4 * 5 * 9 = 11',
      options: ['÷, ×, -', '×, ÷, +', '÷, +, ×', '+, -, ÷'],
      optionsHi: ['÷, ×, -', '×, ÷, +', '÷, +, ×', '+, -, ÷'],
      correct: 0,
      hint: 'Apply BODMAS rule starting with division.',
      hintHi: 'भाग से शुरू करते हुए BODMAS नियम लागू करें।',
      explanation: '(16 ÷ 4) × 5 - 9 = 4 × 5 - 9 = 20 - 9 = 11.'
    },
    {
      id: 'r4',
      num: 4,
      examId: 'cpo',
      text: 'Four letter-clusters have been given. Select the odd one out.',
      textHi: 'चार अक्षर-समूह दिए गए हैं। इनमें से विषम का चयन करें।',
      options: ['CXFU', 'AZDW', 'HSKP', 'EVGT'],
      optionsHi: ['CXFU', 'AZDW', 'HSKP', 'EVGT'],
      correct: 2,
      hint: 'Check opposite letter pairs (A-Z, B-Y, etc.).',
      hintHi: 'विपरीत अक्षर जोड़ों (A-Z, B-Y, आदि) की जाँच करें।',
      explanation: 'All options except HSKP consist of pair of opposite alphabets (C-X / F-U, A-Z / D-W, E-V / G-T).'
    },
    {
      id: 'r5',
      num: 5,
      examId: 'mts',
      text: 'If A="+" , B="-", C="×", and D="÷", then evaluate:\n18 C 4 A 12 D 3 B 6 = ?',
      textHi: 'यदि A="+", B="-", C="×", और D="÷", तो मान ज्ञात कीजिए:\n18 C 4 A 12 D 3 B 6 = ?',
      options: ['70', '68', '74', '66'],
      optionsHi: ['70', '68', '74', '66'],
      correct: 0,
      hint: 'Replace letters with mathematical operators and solve 18×4 + 12÷3 - 6.',
      hintHi: 'अक्षरों को गणितीय ऑपरेटरों से बदलें और 18×4 + 12÷3 - 6 को हल करें।',
      explanation: 'Substituting operators: 18 × 4 + 12 ÷ 3 - 6 = 72 + 4 - 6 = 70.'
    }
  ],
  ga: [
    {
      id: 'g1',
      num: 1,
      examId: 'cgl',
      text: 'Which Article of the Indian Constitution empowers the President to promulgate Ordinances during recess of Parliament?',
      textHi: 'भारतीय संविधान का कौन सा अनुच्छेद राष्ट्रपति को संसद के विश्रांति काल में अध्यादेश प्रख्यापित करने की शक्ति देता है?',
      options: ['Article 123', 'Article 213', 'Article 72', 'Article 143'],
      optionsHi: ['अनुच्छेद 123', 'अनुच्छेद 213', 'अनुच्छेद 72', 'अनुच्छेद 143'],
      correct: 0,
      hint: 'It is a 3-digit number starting with 12.',
      hintHi: 'यह 12 से शुरू होने वाली 3 अंकों की संख्या है।',
      explanation: 'Article 123 empowers the President of India to issue ordinances when Parliament is not in session.'
    },
    {
      id: 'g2',
      num: 2,
      examId: 'chsl',
      text: 'The famous Battle of Talikota (1565 AD) led to the downfall of which medieval empire?',
      textHi: 'तालिकोटा का प्रसिद्ध युद्ध (1565 ई.) किस मध्यकालीन साम्राज्य के पतन का कारण बना?',
      options: ['Vijayanagara Empire', 'Chola Empire', 'Gupta Empire', 'Mughal Empire'],
      optionsHi: ['विजयनगर साम्राज्य', 'चोल साम्राज्य', 'गुप्त साम्राज्य', 'मुगल साम्राज्य'],
      correct: 0,
      hint: 'This empire was founded by Harihara and Bukka in South India.',
      hintHi: 'इस साम्राज्य की स्थापना दक्षिण भारत में हरिहर और बुक्का ने की थी।',
      explanation: 'The Battle of Talikota in 1565 led to the defeat and eventual collapse of the Vijayanagara Empire.'
    },
    {
      id: 'g3',
      num: 3,
      examId: 'cpo',
      text: 'Which fundamental subatomic particle was discovered by Sir James Chadwick in 1932?',
      textHi: '1932 में सर जेम्स चैडविक ने किस मूल उप-परमाणु कण की खोज की थी?',
      options: ['Neutron', 'Electron', 'Proton', 'Positron'],
      optionsHi: ['न्यूट्रॉन', 'इलेक्ट्रॉन', 'प्रोटॉन', 'पॉज़िट्रॉन'],
      correct: 0,
      hint: 'This particle has zero net electric charge.',
      hintHi: 'इस कण में शून्य निवल विद्युत आवेश होता है।',
      explanation: 'Sir James Chadwick discovered the neutral subatomic particle, the Neutron, in 1932.'
    },
    {
      id: 'g4',
      num: 4,
      examId: 'mts',
      text: 'Which water body geographically separates the Andaman Islands from the Nicobar group?',
      textHi: 'कौन सा जल निकाय अंडमान द्वीपों को निकोबार समूह से भौगोलिक रूप से अलग करता है?',
      options: ['Ten Degree Channel', 'Nine Degree Channel', 'Palk Strait', 'Duncan Passage'],
      optionsHi: ['दस डिग्री चैनल', 'नौ डिग्री चैनल', 'पाक जलडमरूमध्य', 'डंकन मार्ग'],
      correct: 0,
      hint: 'It is named after the latitude line 10° N.',
      hintHi: 'इसका नाम अक्षांश रेखा 10° N के नाम पर रखा गया है।',
      explanation: 'The 10 Degree Channel lies in the Bay of Bengal and separates the Andaman and Nicobar Islands.'
    },
    {
      id: 'g5',
      num: 5,
      examId: 'cgl',
      text: 'Who was the socio-religious founder of Brahmo Samaj in Kolkata (1828)?',
      textHi: '1828 में कोलकाता में ब्रह्म समाज के सामाजिक-धार्मिक संस्थापक कौन थे?',
      options: ['Raja Ram Mohan Roy', 'Swami Dayananda Saraswati', 'Ishwar Chandra Vidyasagar', 'Swami Vivekananda'],
      optionsHi: ['राजा राम मोहन राय', 'स्वामी दयानंद सरस्वती', 'ईश्वर चंद्र विद्यासागर', 'स्वामी विवेकानंद'],
      correct: 0,
      hint: 'He is known as the Father of the Bengal Renaissance.',
      hintHi: 'उन्हें बंगाल पुनर्जागरण के जनक के रूप में जाना जाता है।',
      explanation: 'Raja Ram Mohan Roy established the Brahmo Sabha in 1828, later renamed Brahmo Samaj.'
    }
  ],
  quant: [
    {
      id: 'q1',
      num: 1,
      examId: 'cgl',
      text: 'If A can complete a piece of work in 12 days and B in 18 days, how many days will they take working together?',
      textHi: 'यदि A किसी कार्य को 12 दिनों में तथा B 18 दिनों में पूरा कर सकता है, तो दोनों मिलकर कार्य कितने दिनों में पूरा करेंगे?',
      options: ['7.2 days', '6.5 days', '8.0 days', '7.5 days'],
      optionsHi: ['7.2 दिन', '6.5 दिन', '8.0 दिन', '7.5 दिन'],
      correct: 0,
      hint: 'Formula: (A × B) / (A + B) = (12 × 18) / (12 + 18).',
      hintHi: 'सूत्र: (A × B) / (A + B) = (12 × 18) / (12 + 18)।',
      explanation: 'Combined 1-day efficiency = (1/12 + 1/18) = 5/36. Total time required = 36/5 = 7.2 days.'
    },
    {
      id: 'q2',
      num: 2,
      examId: 'chsl',
      text: 'What is the Compound Interest (CI) on ₹10,000 for 2 years at 10% per annum compounded annually?',
      textHi: '₹10,000 पर 2 वर्ष के लिए 10% वार्षिक दर से चक्रवृद्वि ब्याज कितना होगा?',
      options: ['₹2,100', '₹2,000', '₹2,200', '₹1,900'],
      optionsHi: ['₹2,100', '₹2,000', '₹2,200', '₹1,900'],
      correct: 0,
      hint: 'Effective CI rate for 2 years at 10% is 10 + 10 + (10×10)/100 = 21%.',
      hintHi: '10% पर 2 वर्षों के लिए प्रभावी CI दर 10 + 10 + (10×10)/100 = 21% है।',
      explanation: 'Amount = 10000 × (1 + 10/100)² = ₹12,100. Interest = 12100 - 10000 = ₹2,100.'
    },
    {
      id: 'q3',
      num: 3,
      examId: 'cpo',
      text: 'Two successive discounts of 20% and 10% on a marked price are equivalent to a single net discount of:',
      textHi: 'अंकित मूल्य पर 20% और 10% की दो क्रमिक छूट किस एकल छूट के बराबर हैं?',
      options: ['28%', '30%', '25%', '32%'],
      optionsHi: ['28%', '30%', '25%', '32%'],
      correct: 0,
      hint: 'Single discount formula = d1 + d2 - (d1×d2)/100.',
      hintHi: 'एकल छूट सूत्र = d1 + d2 - (d1×d2)/100.',
      explanation: 'Single equivalent discount formula: d1 + d2 - (d1×d2)/100 = 20 + 10 - 2 = 28%.'
    },
    {
      id: 'q4',
      num: 4,
      examId: 'mts',
      text: 'The average height of 5 students is 160 cm. If a new student with height 172 cm joins them, what is the new average?',
      textHi: '5 छात्रों की औसत लंबाई 160 सेमी है। यदि 172 सेमी लंबाई वाला एक नया छात्र शामिल होता है, तो नया औसत क्या होगा?',
      options: ['162 cm', '161 cm', '163 cm', '164 cm'],
      optionsHi: ['162 सेमी', '161 सेमी', '163 सेमी', '164 सेमी'],
      correct: 0,
      hint: 'Find total height sum: (5 × 160) + 172, then divide by 6.',
      hintHi: 'कुल लंबाई का योग ज्ञात करें: (5 × 160) + 172, फिर 6 से भाग दें।',
      explanation: 'Old sum = 5 × 160 = 800 cm. New sum = 800 + 172 = 972 cm. New average = 972 / 6 = 162 cm.'
    },
    {
      id: 'q5',
      num: 5,
      examId: 'cgl',
      text: 'Evaluate the trigonometric expression: sin²(30°) + cos²(60°) + tan(45°).',
      textHi: 'त्रिकोणमितीय व्यंजक का मान ज्ञात कीजिए: sin²(30°) + cos²(60°) + tan(45°)।',
      options: ['1.5', '1.0', '2.0', '0.75'],
      optionsHi: ['1.5', '1.0', '2.0', '0.75'],
      correct: 0,
      hint: 'Substitute standard values: sin(30°)=0.5, cos(60°)=0.5, tan(45°)=1.',
      hintHi: 'मान रखें: sin(30°)=0.5, cos(60°)=0.5, tan(45°)=1।',
      explanation: '(1/2)² + (1/2)² + 1 = 1/4 + 1/4 + 1 = 0.5 + 1 = 1.5.'
    }
  ],
  english: [
    {
      id: 'e1',
      num: 1,
      examId: 'cgl',
      text: 'Select the most appropriate SYNONYM of the given word:\n\nCANDID',
      textHi: 'दिए गए शब्द का सबसे उपयुक्त समानार्थी (SYNONYM) चुनें:\n\nCANDID',
      options: ['Frank', 'Deceitful', 'Reserved', 'Arrogant'],
      optionsHi: ['स्पष्टवादी (Frank)', 'छली (Deceitful)', 'संकोची (Reserved)', 'अहंकारी (Arrogant)'],
      correct: 0,
      hint: 'Candid describes someone who speaks straightforwardly and honestly.',
      hintHi: 'कैंडिड उस व्यक्ति का वर्णन करता है जो स्पष्ट और ईमानदारी से बोलता है।',
      explanation: 'Candid means truthful and straightforward. "Frank" is its closest synonym.'
    },
    {
      id: 'e2',
      num: 2,
      examId: 'chsl',
      text: 'Identify the segment containing a grammatical error:\n"Neither the manager nor the employees was present at the safety meeting."',
      textHi: 'व्याकरणिक त्रुटि वाले भाग की पहचान करें:\n"Neither the manager nor the employees was present at the safety meeting."',
      options: ['was present', 'Neither the manager', 'nor the employees', 'at the safety meeting'],
      optionsHi: ['was present', 'Neither the manager', 'nor the employees', 'at the safety meeting'],
      correct: 0,
      hint: 'Subject verb agreement rule with neither...nor applies to the closest subject ("employees").',
      hintHi: 'neither...nor के साथ सब्जेक्ट वर्ब एग्रीमेंट का नियम निकटतम सब्जेक्ट पर लागू होता है।',
      explanation: 'When subjects are joined by "neither... nor", the verb agrees with the nearest subject ("employees" -> plural). It should be "were present".'
    },
    {
      id: 'e3',
      num: 3,
      examId: 'cpo',
      text: 'Select the correctly spelt word from the given options:',
      textHi: 'दिए गए विकल्पों में से सही वर्तनी वाला शब्द चुनें:',
      options: ['Accommodation', 'Acommodation', 'Accomodation', 'Acomodation'],
      optionsHi: ['Accommodation', 'Acommodation', 'Accomodation', 'Acomodation'],
      correct: 0,
      hint: 'This word contains double C and double M.',
      hintHi: 'इस शब्द में डबल C और डबल M शामिल हैं।',
      explanation: 'The correct spelling is "Accommodation" with double "c" and double "m".'
    },
    {
      id: 'e4',
      num: 4,
      examId: 'mts',
      text: 'Select the one-word substitution for:\n"A person who habitually looks at the bright side of things."',
      textHi: 'एक शब्द प्रतिस्थापन चुनें:\n"A person who habitually looks at the bright side of things."',
      options: ['Optimist', 'Pessimist', 'Altruist', 'Philanthropist'],
      optionsHi: ['आशावादी (Optimist)', 'निराशावादी (Pessimist)', 'परोपकारी (Altruist)', 'जनहितैषी (Philanthropist)'],
      correct: 0,
      hint: 'Opposite of Pessimist.',
      hintHi: 'निराशावादी (Pessimist) का विपरीत।',
      explanation: 'An Optimist is a person who holds positive expectations for outcomes.'
    },
    {
      id: 'e5',
      num: 5,
      examId: 'cgl',
      text: 'Select the most appropriate ANTONYM of the given word:\n\nEPHEMERAL',
      textHi: 'दिए गए शब्द का सबसे उपयुक्त विलोम (ANTONYM) चुनें:\n\nEPHEMERAL',
      options: ['Permanent', 'Transient', 'Fleeting', 'Brief'],
      optionsHi: ['स्थायी (Permanent)', 'क्षणिक (Transient)', 'अल्पकालिक (Fleeting)', 'संक्षिप्त (Brief)'],
      correct: 0,
      hint: 'Ephemeral means lasting a very short time.',
      hintHi: 'Ephemeral का अर्थ है बहुत कम समय तक रहने वाला।',
      explanation: 'Ephemeral means lasting for a very short time. "Permanent" is its exact antonym.'
    }
  ],
  computer: [
    {
      id: 'c1',
      num: 1,
      examId: 'cgl',
      text: 'Which key combination is used in MS Excel to open the "Format Cells" dialog box?',
      textHi: 'MS Excel में "Format Cells" डायलॉग बॉक्स खोलने के लिए किस कुंजी संयोजन का उपयोग किया जाता है?',
      options: ['Ctrl + 1', 'Ctrl + F', 'Shift + F1', 'Alt + Enter'],
      optionsHi: ['Ctrl + 1', 'Ctrl + F', 'Shift + F1', 'Alt + Enter'],
      correct: 0,
      hint: 'Ctrl key combined with the digit 1.',
      hintHi: 'अंक 1 के साथ जोड़ा गया Ctrl की।',
      explanation: 'Ctrl + 1 opens the Format Cells dialog in Microsoft Excel.'
    },
    {
      id: 'c2',
      num: 2,
      examId: 'cgl',
      text: 'What type of network protocol is used specifically for transferring web pages securely across the internet?',
      textHi: 'इंटरनेट पर वेब पेजों को सुरक्षित रूप से स्थानांतरित करने के लिए किस नेटवर्क प्रोटोकॉल का उपयोग किया जाता है?',
      options: ['HTTPS', 'FTP', 'SMTP', 'UDP'],
      optionsHi: ['HTTPS', 'FTP', 'SMTP', 'UDP'],
      correct: 0,
      hint: 'Look for S at the end standing for Secure.',
      hintHi: 'अंत में S देखें जिसका अर्थ Secure है।',
      explanation: 'HTTPS (Hypertext Transfer Protocol Secure) encrypts web data transfer via TLS/SSL.'
    },
    {
      id: 'c3',
      num: 3,
      examId: 'chsl',
      text: 'In computer architecture, what does SRAM stand for?',
      textHi: 'कंप्यूटर आर्किटेक्चर में, SRAM का पूर्ण रूप क्या है?',
      options: ['Static Random Access Memory', 'Sequential Read Access Memory', 'Synchronous Rapid RAM', 'System Storage RAM'],
      optionsHi: ['Static Random Access Memory', 'Sequential Read Access Memory', 'Synchronous Rapid RAM', 'System Storage RAM'],
      correct: 0,
      hint: 'The first word is Static.',
      hintHi: 'पहला शब्द Static है।',
      explanation: 'SRAM stands for Static Random Access Memory, fast memory used in CPU cache.'
    },
    {
      id: 'c4',
      num: 4,
      examId: 'cpo',
      text: 'Which component is known as the central brain of the computer system?',
      textHi: 'कंप्यूटर सिस्टम के केंद्रीय मस्तिष्क के रूप में किस घटक को जाना जाता है?',
      options: ['Central Processing Unit (CPU)', 'RAM', 'Hard Disk Drive', 'Power Supply Unit'],
      optionsHi: ['सेंट्रल प्रोसेसिंग यूनिट (CPU)', 'RAM', 'हार्ड डिस्क ड्राइव', 'पावर सप्लाई यूनिट'],
      correct: 0,
      hint: 'Abbreviated as CPU.',
      hintHi: 'इसे संक्षेप में CPU कहा जाता है।',
      explanation: 'The CPU performs arithmetic, logical, and input/output control operations.'
    },
    {
      id: 'c5',
      num: 5,
      examId: 'mts',
      text: 'Which shortcut key combination pastes clipboard text without formatting in Windows 11?',
      textHi: 'Windows 11 में बिना स्वरूपण के क्लिपबोर्ड टेक्स्ट को पेस्ट करने के लिए कौन सी शॉर्टकट कुंजी है?',
      options: ['Ctrl + Shift + V', 'Ctrl + V', 'Alt + V', 'Shift + Insert'],
      optionsHi: ['Ctrl + Shift + V', 'Ctrl + V', 'Alt + V', 'Shift + Insert'],
      correct: 0,
      hint: 'Standard paste with Shift key added.',
      hintHi: 'Shift कुंजी के साथ जोड़ा गया मानक पेस्ट।',
      explanation: 'Ctrl + Shift + V pastes plain text without bringing source styles.'
    }
  ]
};

// --- LEADERBOARD DUMMY DATA ---
const LEADERBOARD_DATA = [
  { name: 'Ananya Roy', state: 'West Bengal', tests: 14, weekly: 486, total: 5320, exam: 'cgl' },
  { name: 'Vikram Singh', state: 'Rajasthan', tests: 11, weekly: 441, total: 4985, exam: 'cgl' },
  { name: 'Priya Sharma', state: 'Uttar Pradesh', tests: 13, weekly: 428, total: 4710, exam: 'chsl' },
  { name: 'Rahul Sharma (You)', state: 'Delhi NCR', tests: 9, weekly: 362, total: 3876, isUser: true, exam: 'cgl' },
  { name: 'Amit Verma', state: 'Madhya Pradesh', tests: 8, weekly: 337, total: 3404, exam: 'cpo' },
  { name: 'Sneha Patel', state: 'Gujarat', tests: 10, weekly: 321, total: 3158, exam: 'chsl' },
  { name: 'Karthik Nair', state: 'Kerala', tests: 7, weekly: 298, total: 2841, exam: 'mts' }
];

const STORAGE_KEY = 'ssc-infinity-pro-state';
const LEGACY_STORAGE_KEY = 'ssc-infinity-pro-vanilla-state';
const NAV_ITEMS = [
  ['dashboard', 'Dashboard', 'layout-dashboard'],
  ['mocks', 'Mock Tests', 'file-text', ''],
  ['pyq', 'PYQs', 'history'],
  ['practice', 'Chapter Tests', 'book-open'],
  ['bookmarks', 'Bookmarks', 'bookmark'],
  ['mytests', 'My Tests', 'rotate-ccw'],
  ['leaderboard', 'Leaderboard', 'trophy'],
  ['settings', 'Preferences', 'settings']
];
const PYQ_LIST = [
  { year: '2025 Shift 1', shift: 'Shift 1 (14th July 2025)', subject: 'All 4 Sections', q: 100 },
  { year: '2025 Shift 2', shift: 'Shift 2 (14th July 2025)', subject: 'All 4 Sections', q: 100 },
  { year: '2024 Tier 1', shift: 'Shift 3 (24th Sept 2024)', subject: 'All 4 Sections', q: 100 },
  { year: '2024 Tier 2', shift: 'Paper 1 (26th Oct 2024)', subject: 'Quant & English', q: 130 }
];
const MOCK_LIST = [
  { id: 'm1', title: 'Official Full Mock #01', q: 100, mins: 60, diff: 'Exam Standard', attempted: true, score: '152.5 / 200', premium: false },
  { id: 'm2', title: 'Official Full Mock #02', q: 100, mins: 60, diff: 'Exam Standard', attempted: true, score: '144.0 / 200', premium: false },
  { id: 'm3', title: 'Official Full Mock #03', q: 100, mins: 60, diff: 'Hard / High Level', attempted: false, premium: true },
  { id: 'm4', title: 'Sectional: Quantitative Aptitude Advance', q: 25, mins: 20, diff: 'Moderate', attempted: false, premium: false },
  { id: 'm5', title: 'All India Live Ranker Mock #04', q: 100, mins: 60, diff: 'AIR Ranking', attempted: false, premium: true }
];
const PRACTICE_LIST = [
  { id: 'quant', name: 'Quantitative Aptitude', chapters: 18, totalQ: 1450, solved: 820 },
  { id: 'reasoning', name: 'General Intelligence & Reasoning', chapters: 15, totalQ: 1200, solved: 950 },
  { id: 'english', name: 'English Comprehension', chapters: 12, totalQ: 1100, solved: 670 },
  { id: 'ga', name: 'General Awareness', chapters: 22, totalQ: 2100, solved: 400 },
  { id: 'computer', name: 'Computer Knowledge', chapters: 10, totalQ: 500, solved: 310 }
];
const CHAPTER_PAPERS = {
  quant: ['Percentage & Averages', 'Ratio & Proportion', 'Profit & Loss', 'Time, Speed & Distance', 'Number System & Simplification'],
  reasoning: ['Coding & Decoding', 'Analogy & Classification', 'Series Completion', 'Blood Relations & Directions', 'Syllogism & Venn Diagrams'],
  english: ['Spotting Errors', 'Fill in the Blanks', 'Synonyms & Antonyms', 'Sentence Improvement', 'Cloze Test & Comprehension'],
  ga: ['Polity & Constitution', 'Ancient & Medieval History', 'Indian Geography', 'Economic Basics', 'Static GK & Current Affairs'],
  computer: ['Computer Fundamentals', 'MS Office Applications', 'Internet & Networking', 'Cyber Security Basics', 'Input & Output Devices']
};
const DEFAULT_USER = {
  isLoggedIn: true,
  name: 'Rahul Sharma',
  email: 'rahul.sharma@example.com',
  plan: 'PRO',
  targetExam: 'cgl',
  rollNo: '220104928',
  avatarType: 'monogram'
};

function makeInitialQuestionState() {
  const result = {};
  Object.keys(MOCK_QUESTIONS).forEach(sectionId => {
    MOCK_QUESTIONS[sectionId].forEach(question => {
      result[question.id] = { selectedOption: null, status: 'UNVISITED' };
    });
  });
  result.r1.status = 'UNANSWERED';
  return result;
}
function loadState() {
  const base = {
    user: { ...DEFAULT_USER }, activeTab: 'landing', welcomeCompleted: false, selectedExamId: 'cgl', lang: 'en', accentTheme: 'violet', themeMode: 'light', themePreferenceSet: false,
    globalSearch: '', bookmarkedIds: ['r1', 'q2', 'e1', 'c2'], customNotes: {},
    userState: makeInitialQuestionState(), studyModeActive: false, showHintsMap: {}, billingCycle: 'annual', mocksView: 'full', sectionalSubject: 'all', pyqView: 'full', pyqYear: 'all', pyqSubject: 'all', practiceSubject: 'quant', bookmarksSubject: 'quant', customNotes: {}, myTestsView: 'attempted', leaderboardView: 'weekly',
    myTests: [
      { id: 'mt1', title: 'SSC CGL Official Full Mock #01', kind: 'Full Mock', status: 'attempted', score: '152.5 / 200', when: '28 Oct, 7:04 PM' },
      { id: 'mt2', title: 'SSC CGL Sectional: Quantitative Aptitude', kind: 'Sectional', status: 'attempted', score: '40.0 / 50', when: '26 Oct, 9:22 PM' },
      { id: 'mt3', title: 'SSC CGL PYQ Paper: Shift 1 (14th July 2025)', kind: 'PYQ', status: 'attempted', score: '138.5 / 200', when: '23 Oct, 6:31 PM' },
      { id: 'mt4', title: 'SSC CGL Chapter Test: Coding & Decoding', kind: 'Chapter', status: 'pending', answered: 4, total: 10, when: 'yesterday, 07:32 left on the clock' }
    ]
  };
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY) || 'null');
    if (!saved) return { ...base, isNewVisit: true };
    return {
      ...base, ...saved, isNewVisit: false,
      welcomeCompleted: saved.welcomeCompleted === undefined ? true : !!saved.welcomeCompleted,
      themeMode: saved.themePreferenceSet ? (saved.themeMode || 'light') : 'light',
      themePreferenceSet: !!saved.themePreferenceSet,
      user: (() => { const u = { ...base.user, ...(saved.user || {}) }; delete u.avatar; u.avatarType = u.avatarType === 'photo' && u.avatarImage ? 'photo' : 'monogram'; return u; })(),
      userState: { ...base.userState, ...(saved.userState || {}) },
      customNotes: { ...base.customNotes, ...(saved.customNotes || {}) }
    };
  } catch (error) {
    console.warn('Could not load saved SSC Flix state:', error);
    return { ...base, isNewVisit: true };
  }
}
let state = loadState();
function applyTheme() {
  document.body.classList.toggle('light', state.themeMode === 'light');
}
applyTheme();
let exam = {
  active: false, title: '', sectionId: 'reasoning', questionIndex: 0,
  timeLeft: 3600, submitted: false, paletteFilter: 'ALL', solutionFilter: 'ALL',
  entryGate: false, gateAccepted: false, paused: false,
  confirmExit: false, confirmSubmit: false, reportOpen: false, reportReason: 'wrong-key',
  reportView: 'analytics', practiceQuestions: null, wrongPractice: false, studyMode: false,
  showInstructions: false, showQuestionPaper: false, activeModal: '', selectedPlan: 'PRO',
  processingPayment: false, authMode: 'login', profileOpen: false, notificationsOpen: false, examSwitchOpen: false, mobileMoreOpen: false, workspaceFilter: 'all'
};
let timerHandle = null;
let toastHandle = null;

const app = document.getElementById('app');
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const ICON_PATHS = {
  compass: '<circle cx="12" cy="12" r="9"/><path d="m16.2 7.8-2.5 5.9-5.9 2.5 2.5-5.9 5.9-2.5Z"/>',
  'layout-dashboard': '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
  'file-text': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
  history: '<path d="M3 12a9 9 0 1 0 2.6-6.4L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',
  'book-open': '<path d="M12 7v14M3 18V5a2 2 0 0 1 2-2h3a4 4 0 0 1 4 4 4 4 0 0 1 4-4h3a2 2 0 0 1 2 2v13h-5a4 4 0 0 0-4 3 4 4 0 0 0-4-3H3Z"/>',
  bookmark: '<path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18l-6-4-6 4V4Z"/>',
  chart: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-5 5"/>',
  trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="m8.2 13-1.4 9L12 19l5.2 3-1.4-9"/><path d="m9.5 8 1.7 1.7L14.8 6"/>',
  settings: '<path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.6a8 8 0 0 1-1.5.9l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.5-.9l-1.7.6-1.4-2.4 1.4-1.1a7 7 0 0 1 0-1.8l-1.4-1.1 1.4-2.4 1.7.6a8 8 0 0 1 1.5-.9l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.5.9l1.7-.6 1.4 2.4-1.4 1.1a7 7 0 0 1 0 1.8Z" transform="translate(-1 -2) scale(.94)"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'play-circle': '<circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4V8Z"/>',
  crown: '<path d="m2 8 5 4 5-8 5 8 5-4-2 12H4L2 8Z"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  lightbulb: '<path d="M9 18h6M10 22h4M8 14a7 7 0 1 1 8 0c-1 .7-1 2-1 2h-6s0-1.3-1-2Z"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  'trending-up': '<path d="m3 17 6-6 4 4 8-8M15 7h6v6"/>',
  brain: '<path d="M12 18V5a3 3 0 0 0-5.8-1A4 4 0 0 0 4 11a4 4 0 0 0 2 7 3 3 0 0 0 6 0ZM12 18V5a3 3 0 0 1 5.8-1A4 4 0 0 1 20 11a4 4 0 0 1-2 7 3 3 0 0 1-6 0Z"/>',
  'check-circle': '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/>',
  'x-circle': '<circle cx="12" cy="12" r="9"/><path d="m9 9 6 6m0-6-6 6"/>',
  'chevron-left': '<path d="m15 18-6-6 6-6"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  'rotate-ccw': '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  'help-circle': '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.6 2.6 0 1 1 4.4 1.9c-1.2 1-1.9 1.4-1.9 3.1M12 17h.01"/>',
  sparkles: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/>',
  'arrow-right': '<path d="M5 12h14M13 6l6 6-6 6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  zap: '<path d="M13 2 3.5 13.7h6.6L8.8 22l9.7-11.7h-6.6L13 2Z"/>',
  shield: '<path d="M12 3 4.8 5.7v5.9c0 4.7 3.2 7.7 7.2 9.4 4-1.7 7.2-4.7 7.2-9.4V5.7L12 3Z"/><path d="m9.2 12.1 1.9 2 3.7-4.1"/>',
  clipboard: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6M9 16h4"/>',
  keyboard: '<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h.01M18 14h.01M9 14h6"/>',
  camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"/><circle cx="12" cy="13" r="3"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  'log-out': '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.4 4.9 18 6.3"/>',
  pause: '<rect x="7" y="5" width="3.6" height="14" rx="1.2"/><rect x="13.4" y="5" width="3.6" height="14" rx="1.2"/>',
  flag: '<path d="M4 21V4"/><path d="M4 4s.6-1 4-1 4 3 7 3 3-1 3-1v9s-.6 1-3 1-4-3-7-3-4 1-4 1"/>',
  'check-circle': '<circle cx="12" cy="12" r="9"/><path d="m8.6 12.4 2.4 2.4 4.6-5.6"/>',
  'log-in': '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="m3 12h12M11 8l4 4-4 4"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/>',
  'user-plus': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',
  play: '<path d="m7.5 4.2 11.4 7.8L7.5 19.8Z" fill="currentColor" stroke="none"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M21 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  calculator: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h.01M16 19h.01"/>',
  landmark: '<path d="M3 21h18M5 21V9m4 12V9m6 12V9m4 12V9M2 9h20L12 3 2 9Z"/>',
  circle: '<circle cx="12" cy="12" r="9"/>',
  'arrow-up-right': '<path d="M7 17 17 7M7 7h10v10"/>',
  monitor: '<rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 21h8M12 18v3"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>'
};
function iconSvg(name, size = 16, extraClass = '') {
  const paths = ICON_PATHS[name] || ICON_PATHS.sparkles;
  return `<svg class="icon-svg ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
}
function avatarHtml(size = 37, extraClass = '') {
  const u = state.user;
  const cls = extraClass ? ` ${extraClass}` : '';
  const style = `width:${size}px;height:${size}px;flex:0 0 ${size}px;font-size:${Math.round(size * .36)}px`;
  if (u.avatarType === 'photo' && u.avatarImage) return `<img class="avatar${cls}" src="${u.avatarImage}" alt="" style="${style}">`;
  const initials = esc(u.name.trim().split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase() || 'SS');
  return `<span class="avatar${cls}" style="${style}">${initials}</span>`;
}
function handleAvatarFile(file) {
  if (!file || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = 96;
      const ctx = canvas.getContext('2d');
      const side = Math.min(img.width, img.height);
      ctx.drawImage(img, (img.width - side) / 2, (img.height - side) / 2, side, side, 0, 0, 96, 96);
      state.user = { ...state.user, avatarType: 'photo', avatarImage: canvas.toDataURL('image/jpeg', .86) };
      persist();
      render();
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
}
// Monochrome exam identity icons keyed by exam id (replaces decorative emojis).
const EXAM_ICONS = { cgl: 'target', chsl: 'zap', cpo: 'shield', mts: 'clipboard', steno: 'keyboard', gd: 'award' };
const examIconSvg = (examId, size = 16, extraClass = '') => iconSvg(EXAM_ICONS[examId] || 'sparkles', size, extraClass);
const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const currentExam = () => EXAM_CATEGORIES.find(item => item.id === state.selectedExamId) || EXAM_CATEGORIES[0];
const allQuestions = () => exam.practiceQuestions || Object.entries(MOCK_QUESTIONS).flatMap(([sectionId, questions]) => questions.map(question => ({ ...question, sectionId })));
const questionsFor = sectionId => exam.practiceQuestions ? exam.practiceQuestions.filter(question => question.sectionId === sectionId) : (MOCK_QUESTIONS[sectionId] || []);
const currentQuestions = () => questionsFor(exam.sectionId);
const currentQuestion = () => currentQuestions()[exam.questionIndex] || currentQuestions()[0];
const currentQuestionState = () => state.userState[currentQuestion()?.id] || { selectedOption: null, status: 'UNVISITED' };
const isHindi = () => state.lang === 'hi';
const questionText = q => isHindi() ? q.textHi : q.text;
const questionOptions = q => isHindi() ? q.optionsHi : q.options;
const questionHint = q => isHindi() ? q.hintHi : q.hint;
const primaryButton = (text, action, extra = '', attrs = '') => `<button class="btn btn-primary ${extra}" data-action="${action}" ${attrs}>${text}</button>`;
const secondaryButton = (text, action, extra = '', attrs = '') => `<button class="btn btn-secondary ${extra}" data-action="${action}" ${attrs}>${text}</button>`;
const searchMatch = value => !state.globalSearch.trim() || String(value || '').toLowerCase().includes(state.globalSearch.trim().toLowerCase());
function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      user: state.user, activeTab: state.activeTab, welcomeCompleted: state.welcomeCompleted, selectedExamId: state.selectedExamId,
      lang: state.lang, accentTheme: state.accentTheme, themeMode: state.themeMode, themePreferenceSet: state.themePreferenceSet, bookmarkedIds: state.bookmarkedIds,
      customNotes: state.customNotes, userState: state.userState, studyModeActive: state.studyModeActive,
      showHintsMap: state.showHintsMap, billingCycle: state.billingCycle,
      mocksView: state.mocksView, sectionalSubject: state.sectionalSubject,
      pyqView: state.pyqView, pyqYear: state.pyqYear, pyqSubject: state.pyqSubject,
      practiceSubject: state.practiceSubject, bookmarksSubject: state.bookmarksSubject,
      myTestsView: state.myTestsView, myTests: state.myTests,
      leaderboardView: state.leaderboardView
    }));
  } catch (error) { console.warn('Could not save SSC Flix state:', error); }
}
function setTheme(theme) {
  // [accent-rgb, accent, accent-text dark, accent-text light]
  const themes = {
    violet:  ['98, 84, 217', '#6254d9', '#a79bf2', '#5144c2'],
    emerald: ['43, 155, 117', '#2b9b75', '#7ed9b3', '#177a57'],
    ocean:   ['86, 136, 222', '#5688de', '#93b7ef', '#3a6fb5']
  };
  if (!themes[theme]) theme = 'violet'; // migrate unknown saved keys (e.g. legacy 'cyan')
  state.accentTheme = theme;
  const chosen = themes[theme];
  document.documentElement.style.setProperty('--accent-rgb', chosen[0]);
  document.documentElement.style.setProperty('--accent', chosen[1]);
  document.documentElement.style.setProperty('--accent-text', state.themeMode === 'light' ? chosen[3] : chosen[2]);
  persist();
}
// Single entry point for every exam change (switcher popover, landing cards, settings dropdown).
function setTargetExam(examId, goDashboard = false) {
  const target = EXAM_CATEGORIES.find(item => item.id === examId);
  if (!target) return;
  const changed = target.id !== state.selectedExamId;
  state.selectedExamId = target.id;
  if (goDashboard) state.activeTab = 'dashboard';
  exam.examSwitchOpen = exam.profileOpen = exam.notificationsOpen = false;
  render();
  if (changed) showToast(`Switched to ${target.code} workspace`, examIconSvg(target.id, 14));
}
function showToast(message, badge = '') {
  $('#appToast')?.remove();
  clearTimeout(toastHandle);
  const node = document.createElement('div');
  node.id = 'appToast';
  node.className = 'app-toast';
  node.innerHTML = `<span class="app-toast-icon">${badge || iconSvg('sparkles', 14)}</span><span>${esc(message)}</span>`;
  document.body.appendChild(node);
  toastHandle = setTimeout(() => node.remove(), 2600);
}
function getStats() {
  const counts = { answered: 0, unanswered: 0, marked: 0, answeredMarked: 0, unvisited: 0 };
  const scope = exam.active ? new Set(allQuestions().map(question => question.id)) : null;
  Object.entries(state.userState).forEach(([id, item]) => {
    if (scope && !scope.has(id)) return;
    if (item.status === 'ANSWERED') counts.answered++;
    else if (item.status === 'UNANSWERED') counts.unanswered++;
    else if (item.status === 'MARKED') counts.marked++;
    else if (item.status === 'ANSWERED_MARKED') counts.answeredMarked++;
    else counts.unvisited++;
  });
  return counts;
}
function getScore() {
  let correct = 0, incorrect = 0, unattempted = 0, totalScore = 0;
  allQuestions().forEach(q => {
    const selected = state.userState[q.id]?.selectedOption;
    if (selected !== null && selected !== undefined) {
      if (selected === q.correct) { correct++; totalScore += 2; }
      else { incorrect++; totalScore -= .5; }
    } else unattempted++;
  });
  const accuracy = correct + incorrect ? ((correct / (correct + incorrect)) * 100).toFixed(1) : '0.0';
  return { correct, incorrect, unattempted, totalScore, accuracy };
}
function formatTime(seconds) {
  const min = Math.floor(seconds / 60).toString().padStart(2, '0');
  const sec = (seconds % 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
}
function startTimer() {
  clearInterval(timerHandle);
  timerHandle = setInterval(() => {
    if (!exam.active || exam.submitted || exam.paused) { clearInterval(timerHandle); return; }
    exam.timeLeft = Math.max(0, exam.timeLeft - 1);
    const timer = $('#examTimer');
    if (timer) {
      timer.textContent = formatTime(exam.timeLeft);
      timer.closest('.timer-box')?.classList.toggle('warning', exam.timeLeft < 300);
    }
    if (exam.timeLeft <= 0) submitExam();
  }, 1000);
}
function startExam(title = `${currentExam().code} Tier-I Official Full Mock #08`, premium = false) {
  if (premium && state.user.plan === 'FREE') {
    exam.selectedPlan = 'PRO';
    exam.activeModal = 'subscription';
    render();
    return;
  }
  const study = state.studyModeActive === true;
  exam.title = title;
  exam.active = true;
  exam.submitted = false;
  exam.entryGate = !study;
  exam.gateAccepted = false;
  exam.studyMode = study;
  exam.paused = false;
  exam.confirmExit = false;
  exam.confirmSubmit = false;
  exam.reportOpen = false;
  exam.practiceQuestions = null;
  exam.wrongPractice = false;
  exam.reportView = 'analytics';
  exam.timeLeft = 3600;
  exam.sectionId = 'reasoning';
  exam.questionIndex = 0;
  exam.paletteFilter = 'ALL';
  markCurrentUnvisited();
  render();
  if (study) showToast('Study session started — answers visible, no timer', iconSvg('lightbulb', 14));
}
function getWrongQuestions() {
  return allQuestions().filter(question => {
    const selected = state.userState[question.id]?.selectedOption;
    return selected !== null && selected !== undefined && selected !== question.correct;
  });
}
function startWrongPractice() {
  const wrongs = getWrongQuestions();
  if (!wrongs.length) return;
  exam.practiceQuestions = wrongs;
  exam.wrongPractice = true;
  exam.title = `${exam.title.split(' · ')[0]} · Wrong-Answers Practice`;
  exam.active = true;
  exam.submitted = false;
  exam.entryGate = true;
  exam.gateAccepted = false;
  exam.paused = false;
  exam.confirmExit = false;
  exam.confirmSubmit = false;
  exam.reportOpen = false;
  exam.reportView = 'analytics';
  exam.studyMode = false;
  exam.timeLeft = wrongs.length * 90;
  exam.sectionId = wrongs[0].sectionId;
  exam.questionIndex = 0;
  exam.paletteFilter = 'ALL';
  wrongs.forEach(question => { state.userState[question.id] = { selectedOption: null, status: 'UNANSWERED' }; });
  persist();
  render();
}
function markCurrentUnvisited() {
  const q = currentQuestion();
  if (!q) return;
  const item = state.userState[q.id] || { selectedOption: null, status: 'UNVISITED' };
  if (item.status === 'UNVISITED') state.userState[q.id] = { ...item, status: 'UNANSWERED' };
  persist();
}
function changeQuestion(index, sectionId = exam.sectionId) {
  const list = questionsFor(sectionId);
  if (!list.length) return;
  exam.sectionId = sectionId;
  exam.questionIndex = Math.max(0, Math.min(index, list.length - 1));
  markCurrentUnvisited();
  render();
}
function navigateNext() {
  if (exam.questionIndex < currentQuestions().length - 1) changeQuestion(exam.questionIndex + 1);
  else {
    const sectionIndex = SECTIONS.findIndex(section => section.id === exam.sectionId);
    if (sectionIndex < SECTIONS.length - 1) changeQuestion(0, SECTIONS[sectionIndex + 1].id);
  }
}
function navigatePrevious() {
  if (exam.questionIndex > 0) changeQuestion(exam.questionIndex - 1);
  else {
    const sectionIndex = SECTIONS.findIndex(section => section.id === exam.sectionId);
    if (sectionIndex > 0) {
      const previousSection = SECTIONS[sectionIndex - 1].id;
      changeQuestion(questionsFor(previousSection).length - 1, previousSection);
    }
  }
}
function toggleBookmark(id) {
  state.bookmarkedIds = state.bookmarkedIds.includes(id)
    ? state.bookmarkedIds.filter(item => item !== id)
    : [...state.bookmarkedIds, id];
  persist();
  render();
}
function recordAttempt(status) {
  if (!exam.title) return;
  const answered = Object.values(state.userState).filter(qs => qs.selectedOption !== null && qs.selectedOption !== undefined).length;
  const kind = exam.title.includes('Sectional') ? 'Sectional' : exam.title.includes('PYQ') ? 'PYQ' : exam.title.includes('Chapter Test') ? 'Chapter' : exam.title.includes('Practice') ? 'Chapter' : 'Full Mock';
  const when = new Date().toLocaleString([], { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' });
  const entry = status === 'attempted'
    ? { id: `mt-${Date.now()}`, title: exam.title, kind, status, score: `${getScore().totalScore.toFixed(1)} / ${allQuestions().length * 2}`, when }
    : { id: `mt-${Date.now()}`, title: exam.title, kind, status, answered, total: allQuestions().length, when };
  state.myTests = state.myTests.filter(t => t.title !== exam.title);
  state.myTests.unshift(entry);
  persist();
}
function submitExam() {
  exam.submitted = true;
  exam.paused = false;
  exam.confirmSubmit = false;
  exam.reportOpen = false;
  clearInterval(timerHandle);
  if (!exam.wrongPractice && !exam.studyMode) recordAttempt('attempted');
  render();
}
function exitExamTo(tab = 'dashboard') {
  clearInterval(timerHandle);
  if (!exam.submitted && !exam.wrongPractice && !exam.studyMode) recordAttempt('pending');
  exam.active = false;
  exam.submitted = false;
  exam.paused = false;
  exam.entryGate = false;
  exam.gateAccepted = false;
  exam.confirmExit = false;
  exam.confirmSubmit = false;
  exam.reportOpen = false;
  exam.wrongPractice = false;
  exam.practiceQuestions = null;
  exam.studyMode = false;
  exam.showInstructions = false;
  state.activeTab = tab;
  persist();
  render();
}

function renderNav() {
  return NAV_ITEMS.map(([id, label, icon, badge]) => `
    <button class="nav-btn ${state.activeTab === id ? 'active' : ''}" data-action="nav" data-tab="${id}">
      <span class="nav-icon">${iconSvg(icon, 16)}</span><span>${label}</span>
      ${badge ? `<span class="nav-badge">${badge}</span>` : ''}
      ${id === 'bookmarks' && state.bookmarkedIds.length ? `<span class="nav-count">${state.bookmarkedIds.length}</span>` : ''}
    </button>`).join('');
}
function renderSidebar() {
  return `<aside class="sidebar">
    <div>
      <div class="brand" data-action="nav" data-tab="landing"><div class="brand-mark">PRO</div><div><h1>SSC FLIX</h1><p>ULTRA CBT EXAM PORTAL</p></div></div>
      <nav class="nav">${renderNav()}</nav>
    </div>
    <div class="sidebar-bottom">
      <div class="side-ad" data-action="open-subscription" role="button" tabindex="0">
        <span class="side-ad-icon">${iconSvg('crown', 15)}</span>
        <strong>Go PRO Pass</strong>
        <p>Unlock every mock, PYQ vault and AIR insight in one plan.</p>
        <span class="side-ad-cta">See plans ${iconSvg('arrow-right', 11)}</span>
      </div>
      <div class="sidebar-user">
        ${state.user.isLoggedIn ? `<div class="user-mini">${avatarHtml(37)}<div><strong>${esc(state.user.name)}</strong><small>${iconSvg('crown', 10)} ${esc(state.user.plan)} PASS</small></div><button class="upgrade-mini" data-action="open-subscription">Upgrade</button></div>` : `<button class="btn btn-primary btn-block" data-action="open-auth">Sign In / Register</button>`}
      </div>
    </div>
  </aside>`;
}
function renderHeader() {
  const examItem = currentExam();
  return `<header class="topbar">
    <div class="top-left">
      <button class="hamburger" data-action="toggle-drawer" aria-label="Open navigation menu" title="Open menu">${iconSvg('menu', 18)}</button>
      <button class="mobile-brand" data-action="nav" data-tab="dashboard" aria-label="SSC Flix home">
        <span class="mobile-brand-mark">SF</span><span>SSC Flix</span>
      </button>
      <button class="exam-pill${exam.examSwitchOpen ? ' open' : ''}" data-action="exam-switch" title="Switch target exam">
        <span class="exam-pill-icon">${examIconSvg(examItem.id, 17)}</span>
        <span class="exam-pill-text"><strong>${esc(examItem.code)}</strong><small>${esc(examItem.name)}</small></span>
        <span class="exam-pill-days">${iconSvg('clock', 10)} ${examItem.targetDays}d left</span>
        ${iconSvg('chevron-down', 12)}
      </button>
    </div>
    <div class="top-actions">
      <div class="search-wrap desktop-search-wrap"><span class="search-icon">${iconSvg('search', 15)}</span><input id="globalSearch" class="search-input" type="search" placeholder="Search mocks, PYQs, reasoning..." value="${esc(state.globalSearch)}" aria-label="Search study content"></div>
      <button class="lang-btn desktop-header-control" data-action="toggle-language" title="Switch language">${iconSvg('globe', 14)} <span>${isHindi() ? 'HI' : 'EN'}</span></button>
      <button class="icon-btn" data-action="toggle-mode" title="${state.themeMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}">${iconSvg(state.themeMode === 'light' ? 'moon' : 'sun', 16)}</button>
      <button class="icon-btn desktop-header-control" data-action="notifications" aria-label="Notifications" title="Notifications">${iconSvg('bell', 16)}<span class="dot"></span></button>
      ${state.user.isLoggedIn ? `<button class="profile-btn" data-action="profile" aria-label="Open profile" aria-expanded="${exam.profileOpen ? 'true' : 'false'}">${avatarHtml(28)}<span class="profile-name">${esc(state.user.name)}</span>${iconSvg('chevron-down', 13)}</button>` : `<button class="btn btn-primary" data-action="open-auth">Sign In</button>`}
    </div>
    ${exam.profileOpen ? `<div class="profile-menu">
      <div class="menu-head">${avatarHtml(40)}<div class="menu-id"><strong>${esc(state.user.name)}</strong><small>${esc(state.user.email)}</small><div class="tag gold" style="margin-top:6px">${esc(state.user.plan)} PASS ACTIVE</div></div></div>
      <div class="profile-mobile-tools">
        <label class="profile-search-wrap"><span class="search-icon">${iconSvg('search', 15)}</span><input id="globalSearchMobile" class="search-input" type="search" placeholder="Search mocks, PYQs, reasoning..." value="${esc(state.globalSearch)}" aria-label="Search study content"></label>
        <div class="profile-tools-row">
          <button class="profile-tool-button" data-action="toggle-language">${iconSvg('globe', 15)}<span>Language</span><strong>${isHindi() ? 'Hindi' : 'English'}</strong></button>
          <button class="profile-tool-button" data-action="profile-notifications" aria-expanded="${exam.notificationsOpen ? 'true' : 'false'}">${iconSvg('bell', 15)}<span>Notifications</span><strong>${exam.notificationsOpen ? 'Hide' : 'View'}</strong></button>
        </div>
        ${exam.notificationsOpen ? `<div class="profile-notifications-panel"><div class="profile-notifications-heading">Notifications</div><div class="notification-item">${iconSvg('bell', 13)} <span><strong>${esc(currentExam().code)} 2026:</strong> Official Tier-1 Mock Series #09 is now live!</span></div><div class="notification-item">${iconSvg('zap', 13)} <span><strong>Daily Challenge:</strong> Solve 15 Quant questions to maintain streak.</span></div></div>` : ''}
      </div>
      <button class="menu-item" data-action="open-subscription">${iconSvg('crown', 13)} Subscription Plan</button>
      <button class="menu-item" data-action="nav" data-tab="settings">${iconSvg('settings', 13)} Preferences</button>
      <button class="menu-item text-rose" data-action="logout">${iconSvg('log-out', 13)} Sign Out</button>
    </div>` : ''}
    ${exam.notificationsOpen && !exam.profileOpen ? `<div class="notification-menu"><div class="row-between"><h4>Exam Notifications</h4><button class="btn btn-ghost" data-action="notifications">×</button></div><div class="notification-item">${iconSvg('bell', 13)} <strong>${esc(currentExam().code)} 2026:</strong> Official Tier-1 Mock Series #09 is now live!</div><div class="notification-item">${iconSvg('zap', 13)} <strong>Daily Challenge:</strong> Solve 15 Quant questions to maintain streak.</div></div>` : ''}
    ${renderExamSwitcher()}
  </header>`;
}
function renderExamSwitcher() {
  if (!exam.examSwitchOpen) return '';
  return `<div class="exam-switch-menu">
    <div class="exam-switch-head"><span class="exam-switch-kicker">Target workspace</span><strong>Choose your target exam</strong><small>Picking an exam re-targets the entire portal</small></div>
    <div class="exam-switch-grid">${EXAM_CATEGORIES.map(item => `
      <button class="exam-switch-card${item.id === state.selectedExamId ? ' current' : ''}" data-action="exam-switch-select" data-exam="${item.id}">
        <span class="exam-switch-top"><span class="exam-switch-icon">${examIconSvg(item.id, 17)}</span>${item.id === state.selectedExamId ? `<span class="exam-switch-check">${iconSvg('check-circle', 11)}CURRENT</span>` : `<span class="exam-switch-arrow">${iconSvg('chevron-right', 12)}</span>`}</span>
        <strong>${esc(item.code)}</strong>
        <small>${esc(item.name)}</small>
        <span class="exam-switch-meta">
          <span>${iconSvg('clock', 10)} ${item.targetDays}d</span>
          <span>${iconSvg('file-text', 10)} ${item.totalMocks} mocks</span>
          <span>${iconSvg('target', 10)} cut ${item.cutoff}</span>
        </span>
      </button>`).join('')}
    </div>
  </div>`;
}
function renderWelcome() {
  const examCategories = { cgl: 'graduate', chsl: 'secondary', cpo: 'police', mts: 'secondary', steno: 'secondary', gd: 'police' };
  const filters = [['all', 'All exams'], ['graduate', 'Graduate level'], ['secondary', '10+2 level'], ['police', 'Defence & police']];
  const visibleExams = EXAM_CATEGORIES.filter(item => exam.workspaceFilter === 'all' || examCategories[item.id] === exam.workspaceFilter);
  const examCards = visibleExams.map(item => `<article class="welcome-exam-card ${item.id === state.selectedExamId ? 'selected' : ''}" data-exam-card="${item.id}">
    <div class="welcome-exam-top"><span class="welcome-exam-icon">${examIconSvg(item.id, 21)}</span>${item.id === state.selectedExamId ? '<span class="welcome-selected">YOUR TARGET</span>' : '<span class="welcome-exam-days">' + item.targetDays + ' days</span>'}</div>
    <h3>${esc(item.code)}</h3><p>${esc(item.name)}</p>
    <div class="welcome-exam-meta"><span>${item.tier}</span><span>${item.totalMocks} mock tests</span></div>
    <button class="welcome-exam-action" data-action="choose-exam" data-exam="${item.id}">Open workspace ${iconSvg('arrow-right', 14)}</button>
  </article>`).join('');
  const features = [
    ['monitor', 'Realistic CBT practice', 'Timed tests with section switching, question palettes, and review controls.'],
    ['book-open', 'Learn while you practise', 'Study mode reveals hints and explanations as you work through questions.'],
    ['chart', 'Review your performance', 'Use your test history and score summaries to spot topics that need attention.'],
    ['zap', 'Focused chapter sessions', 'Move from full mocks to short, subject-wise practice whenever you need.']
  ];
  return `<div class="welcome-v4">
    <div class="welcome-announcement"><span>SSC FLIX</span><p>A focused workspace for your SSC preparation</p><span class="welcome-announcement-note">DEMO PORTAL</span></div>
    <header class="welcome-nav">
      <button class="welcome-brand" data-action="wl-goto" data-target="welcome-top"><span class="welcome-brand-mark">SF</span><span>SSC <b>Flix</b></span></button>
      <div class="welcome-nav-actions">
        <button class="welcome-nav-control" data-action="toggle-language" title="Switch language">${iconSvg('globe', 15)} <span>${isHindi() ? 'HI' : 'EN'}</span></button>
        <button class="welcome-nav-control" data-action="toggle-mode" title="${state.themeMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}">${iconSvg(state.themeMode === 'light' ? 'moon' : 'sun', 15)}</button>
        <button class="welcome-sign-in" data-action="open-auth" data-mode="login">Sign in</button>
      </div>
    </header>
    <main class="welcome-main" id="welcome-top">
      <section class="welcome-hero-v4">
        <div class="welcome-hero-copy">
          <span class="welcome-kicker"><span></span> PREPARE WITH A CLEAR PLAN</span>
          <h1>Make every practice session <em>count.</em></h1>
          <p>A clean, focused SSC preparation portal for mock tests, previous-year questions, and chapter-wise practice — all in one place.</p>
          <div class="welcome-hero-actions"><button class="btn btn-primary" data-action="start-free">${iconSvg('play-circle', 16)} Try a free mock</button><button class="btn btn-secondary" data-action="wl-goto" data-target="wl-exams">Explore exams ${iconSvg('arrow-down', 14)}</button></div>
          <div class="welcome-trust-row"><span>${iconSvg('check-circle', 14)} CBT-style practice</span><span>${iconSvg('check-circle', 14)} English & Hindi</span><span>${iconSvg('check-circle', 14)} Study mode</span></div>
        </div>
        <aside class="welcome-preview-card">
          <div class="welcome-preview-head"><div><span>YOUR STUDY SPACE</span><strong>One workspace. Multiple exams.</strong></div><span class="welcome-live-dot">●</span></div>
          <div class="welcome-preview-exam"><span>${examIconSvg(currentExam().id, 23)}</span><div><small>CURRENT TARGET</small><strong>${esc(currentExam().code)}</strong></div><button data-action="wl-goto" data-target="wl-exams" aria-label="Choose exam">${iconSvg('chevron-down', 15)}</button></div>
          <div class="welcome-preview-divider"></div>
          <div class="welcome-preview-stats"><div><strong>01</strong><small>Pick a paper</small></div><div><strong>02</strong><small>Attempt questions</small></div><div><strong>03</strong><small>Review answers</small></div></div>
          <p class="welcome-preview-note">A demonstration workspace — sample scores and test data are illustrative.</p>
        </aside>
      </section>
      <section class="welcome-exams-section" id="wl-exams">
        <div class="welcome-section-heading"><div><span class="welcome-kicker-small">CHOOSE YOUR PATH</span><h2>Which exam are you preparing for?</h2><p>Select your target to open a workspace built around that exam.</p></div></div>
        <div class="welcome-filter-row">${filters.map(([id, label]) => `<button class="welcome-filter ${exam.workspaceFilter === id ? 'active' : ''}" data-action="wl-filter" data-cat="${id}">${label}</button>`).join('')}</div>
        <div class="welcome-exam-grid">${examCards || '<div class="empty-state">No exams match this filter.</div>'}</div>
      </section>
      <section class="welcome-features-section">
        <div class="welcome-section-heading"><div><span class="welcome-kicker-small">BUILT FOR PRACTICE</span><h2>Everything you need. Nothing in the way.</h2><p>Keep the important study tools close and the interface out of your way.</p></div></div>
        <div class="welcome-feature-grid">${features.map(([icon, title, copy], index) => `<article class="welcome-feature-card"><span class="welcome-feature-index">0${index + 1}</span><span class="welcome-feature-icon">${iconSvg(icon, 19)}</span><h3>${title}</h3><p>${copy}</p></article>`).join('')}</div>
      </section>
      <section class="welcome-bottom-cta"><div><span class="welcome-kicker-small">READY WHEN YOU ARE</span><h2>Start with one paper today.</h2><p>Choose an exam and make your next session count.</p></div><button class="btn btn-primary" data-action="start-free">${iconSvg('play', 14)} Start a free mock</button></section>
    </main>
    <footer class="welcome-footer"><span>© ${new Date().getFullYear()} SSC Flix</span><span>Independent exam-preparation demo · Not affiliated with the Staff Selection Commission.</span><button data-action="open-subscription">View Pro plans</button></footer>
  </div>`;
}
function renderFirstWelcome() {
  const examGroups = [
    { label: 'Graduate level', ids: ['cgl', 'cpo'] },
    { label: '10+2 level', ids: ['chsl', 'mts', 'steno'] },
    { label: 'Defence & police', ids: ['gd'] }
  ];
  const firstName = (state.user.name || 'aspirant').trim().split(/\\s+/)[0];
  const examCards = examGroups.map(group => {
    const cards = group.ids.map(id => {
      const item = EXAM_CATEGORIES.find(examItem => examItem.id === id);
      if (!item) return '';
      const active = state.selectedExamId === item.id;
      return `<button class="first-welcome-exam ${active ? 'active' : ''}" data-action="welcome-select-exam" data-exam="${item.id}" aria-pressed="${active}">
        <span class="first-welcome-exam-icon">${examIconSvg(item.id, 20)}</span>
        <span class="first-welcome-exam-copy"><strong>${esc(item.code)}</strong><small>${esc(item.name)}</small></span>
        <span class="first-welcome-exam-check">${iconSvg(active ? 'check-circle' : 'circle', 16)}</span>
      </button>`;
    }).join('');
    return `<section class="first-welcome-group"><h3>${group.label}</h3><div class="first-welcome-exam-grid">${cards}</div></section>`;
  }).join('');
  return `<div class="first-welcome-page">
    <header class="first-welcome-header">
      <button class="welcome-brand" data-action="wl-goto" data-target="first-welcome-top"><span class="welcome-brand-mark">SF</span><span>SSC <b>Flix</b></span></button>
      <div class="first-welcome-header-actions">
        <span class="first-welcome-header-label">YOUR FIRST VISIT</span>
        <button class="welcome-nav-control" data-action="toggle-mode" title="${state.themeMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}">${iconSvg(state.themeMode === 'light' ? 'moon' : 'sun', 15)}</button>
      </div>
    </header>
    <main class="first-welcome-main" id="first-welcome-top">
      <section class="first-welcome-intro">
        <span class="first-welcome-kicker"><span></span> YOUR PREPARATION STARTS HERE</span>
        <h1>Welcome to SSC Flix, ${esc(firstName)}.</h1>
        <p>Let’s set up your study space. Choose your target exam and preferred language. You can change both later in Preferences.</p>
      </section>
      <section class="first-welcome-setup">
        <div class="first-welcome-step-head"><span>01</span><div><h2>Which exam are you preparing for?</h2><p>Your selection personalises the exam workspace.</p></div></div>
        <div class="first-welcome-groups">${examCards}</div>
      </section>
      <section class="first-welcome-language">
        <div class="first-welcome-step-head"><span>02</span><div><h2>Choose your language</h2><p>Choose the default language for questions and study content.</p></div></div>
        <div class="first-welcome-language-options">
          <button class="first-welcome-language-option ${state.lang === 'en' ? 'active' : ''}" data-action="welcome-language" data-lang="en" aria-pressed="${state.lang === 'en'}"><strong>English</strong><small>Use English by default</small>${iconSvg(state.lang === 'en' ? 'check-circle' : 'circle', 17)}</button>
          <button class="first-welcome-language-option ${state.lang === 'hi' ? 'active' : ''}" data-action="welcome-language" data-lang="hi" aria-pressed="${state.lang === 'hi'}"><strong>हिन्दी</strong><small>डिफ़ॉल्ट भाषा हिन्दी रखें</small>${iconSvg(state.lang === 'hi' ? 'check-circle' : 'circle', 17)}</button>
        </div>
      </section>
      <section class="first-welcome-bottom">
        <div><strong>All set?</strong><small>Your choices are saved on this device. You can update them anytime.</small></div>
        <button class="btn btn-primary" data-action="welcome-complete">${iconSvg('arrow-right', 15)} Enter my study space</button>
      </section>
      <button class="first-welcome-skip" data-action="welcome-complete">Skip for now</button>
    </main>
    <footer class="first-welcome-footer"><span>SSC Flix</span><span>Independent exam-preparation workspace · Not affiliated with the Staff Selection Commission.</span></footer>
  </div>`;
}

function dashboardPage() {
  const examItem = currentExam();
  const metrics = [
    { label: 'Mocks attempted', value: '24', detail: 'tests completed', icon: 'file-text' },
    { label: 'Questions solved', value: '2,840', detail: 'across all subjects', icon: 'brain' },
    { label: 'Accuracy', value: '89.2%', detail: 'overall practice', icon: 'target' }
  ];
  const recommendations = [
    { title: examItem.code + ' Full Mock Test', description: 'A complete timed exam simulation', meta: '100 questions · 60 min', icon: 'monitor', tone: 'violet', action: 'Full mock', premium: false },
    { title: 'Quantitative Aptitude', description: 'Build speed with focused practice', meta: '25 questions · 20 min', icon: 'zap', tone: 'amber', action: 'Sectional', premium: false },
    { title: 'Previous Year Questions', description: 'Practice questions from past papers', meta: 'Shift-wise practice', icon: 'history', tone: 'green', action: 'PYQ set', premium: false }
  ];
  const metricsMarkup = metrics.map(item =>
    '<article class="dash-stat"><div class="dash-stat-top"><span>' + item.label + '</span><span class="dash-stat-icon">' + iconSvg(item.icon, 16) + '</span></div><strong>' + item.value + '</strong><small>' + item.detail + '</small></article>'
  ).join('');
  const recommendationsMarkup = recommendations.map(item =>
    '<article class="dash-recommend-card tone-' + item.tone + '">' +
      '<div class="dash-recommend-icon">' + iconSvg(item.icon, 18) + '</div>' +
      '<div class="dash-recommend-copy"><span>' + item.action + '</span><h3>' + esc(item.title) + '</h3><p>' + item.description + '</p><small>' + item.meta + '</small></div>' +
      '<button class="dash-recommend-action" data-action="start-recommendation" data-title="' + esc(item.title) + '" data-premium="false" aria-label="Start ' + esc(item.title) + '">' + iconSvg('play-circle', 16) + '</button>' +
    '</article>'
  ).join('');
  return '<section class="page dashboard-page-v3">' +
    '<header class="dash-heading">' +
      '<div class="dash-heading-copy"><span class="dash-eyebrow">YOUR STUDY SPACE</span><h1>Good to see you, ' + esc(state.user.name.split(' ')[0]) + '.</h1><p>Small, consistent sessions make a big difference. What would you like to work on today?</p></div>' +
      '<button class="dash-target-pill" data-action="exam-switch" title="Switch target exam"><span class="dash-target-icon">' + examIconSvg(examItem.id, 18) + '</span><span><small>YOUR TARGET EXAM</small><strong>' + esc(examItem.code) + '</strong></span><span class="dash-target-days">' + examItem.targetDays + ' days left</span>' + iconSvg('chevron-down', 13) + '</button>' +
    '</header>' +
    '<section class="dash-focus-card">' +
      '<div class="dash-focus-copy"><span class="dash-focus-kicker">' + iconSvg('sparkles', 13) + ' A GOOD PLACE TO START</span><h2>One focused session at a time.</h2><p>Build confidence with a timed mock, review your answers, and keep your preparation moving forward.</p>' +
        '<div class="dash-focus-actions"><button class="btn btn-primary" data-action="resume-mock">' + iconSvg('play', 14) + ' Start a full mock</button><button class="btn btn-secondary" data-action="nav" data-tab="mocks">Browse all tests ' + iconSvg('arrow-right', 14) + '</button></div>' +
      '</div>' +
      '<aside class="dash-focus-aside"><span class="dash-aside-label">CURRENT PREPARATION TARGET</span><div class="dash-aside-exam">' + examIconSvg(examItem.id, 23) + '<strong>' + esc(examItem.code) + '</strong></div><div class="dash-aside-divider"></div><div class="dash-aside-bottom"><span><strong>' + examItem.targetDays + '</strong><small>days to target</small></span><span><strong>' + examItem.totalMocks + '</strong><small>mock tests listed</small></span></div></aside>' +
    '</section>' +
    '<section class="dash-stats-section"><div class="dash-section-heading"><div><h2>Your activity</h2><p>A quick snapshot of your preparation</p></div></div><div class="dash-stats-grid">' + metricsMarkup + '</div></section>' +
    '<section class="dash-recommendations-section"><div class="dash-section-heading"><div><h2>Pick your next session</h2><p>Continue with a mock or focus on one subject</p></div><button class="dash-text-link" data-action="nav" data-tab="mocks">View test library ' + iconSvg('arrow-right', 14) + '</button></div><div class="dash-recommendations-grid">' + recommendationsMarkup + '</div></section>' +
    '<section class="dash-shortcuts"><button class="dash-shortcut" data-action="nav" data-tab="pyq"><span>' + iconSvg('history', 17) + '</span><div><strong>Previous year papers</strong><small>Practice real exam questions</small></div>' + iconSvg('arrow-right', 14) + '</button><button class="dash-shortcut" data-action="nav" data-tab="practice"><span>' + iconSvg('book-open', 17) + '</span><div><strong>Chapter-wise practice</strong><small>Work on a specific topic</small></div>' + iconSvg('arrow-right', 14) + '</button></section>' +
  '</section>';
}
function mocksPage() {
  const examItem = currentExam();
  const full = state.mocksView !== 'sectional';
  const subject = state.sectionalSubject || 'all';
  const rows = full
    ? MOCK_LIST.map(mock => ({ ...mock, title: `${examItem.code} ${mock.title}`, marks: examItem.totalMarks })).filter(mock => !mock.title.includes('Sectional')).filter(mock => searchMatch(mock.title) || searchMatch(mock.diff) || searchMatch(examItem.code))
    : SECTIONS.filter(section => subject === 'all' || section.id === subject).map(section => {
        const lastScores = { reasoning: '42.5 / 50', quant: '40.0 / 50' };
        return { title: `${examItem.code} Sectional: ${section.name}`, q: 25, marks: 50, mins: 20, diff: 'Exam Standard', attempted: lastScores[section.id] !== undefined, score: lastScores[section.id] || '', premium: false };
      }).filter(mock => searchMatch(mock.title) || searchMatch(mock.diff) || searchMatch(examItem.code));
  const rowHtml = mock => `<article class="library-test-card mock-library-card ${mock.attempted ? 'is-attempted' : 'is-new'}">
    <div class="library-test-main">
      <span class="library-test-icon">${iconSvg(full ? 'monitor' : 'layers', 19)}</span>
      <div class="library-test-copy">
        <div class="mock-card-heading">
          <h3>${esc(mock.title)}</h3>
          <div class="mock-card-badges">
            ${mock.premium ? '<span class="library-tag pro">PRO</span>' : ''}
            <span class="library-tag">${esc(mock.diff)}</span>
          </div>
        </div>
        <div class="library-test-meta">
          <span>${iconSvg('file-text', 12)} ${mock.q} questions</span>
          <span>${iconSvg('award', 12)} ${mock.marks} marks</span>
          <span>${iconSvg('clock', 12)} ${mock.mins} min</span>
        </div>
      </div>
    </div>
    <div class="library-test-side">
      ${mock.attempted
        ? '<div class="library-last-score"><small>LAST SCORE</small><strong>' + esc(mock.score) + '</strong></div>'
        : '<div class="library-last-score mock-not-attempted"><small>STATUS</small><strong>Not attempted</strong></div>'}
      <button class="btn ${mock.premium && state.user.plan === 'FREE' ? 'btn-warning' : 'btn-primary'}" data-action="start-mock" data-title="${esc(mock.title)}" data-premium="${mock.premium}">${mock.premium && state.user.plan === 'FREE' ? 'Unlock Pro' : mock.attempted ? 'Re-attempt' : state.studyModeActive ? 'Open Study' : 'Attempt test'}</button>
    </div>
  </article>`;
  return `<section class="page library-page-v3">
    <header class="library-page-intro"><div><span class="library-page-kicker">TEST LIBRARY</span><h1>Mock tests</h1><p>Practice with full-length and subject-wise simulations for ${esc(examItem.code)}.</p></div><div class="library-page-context"><span>YOUR TARGET</span><strong>${esc(examItem.code)}</strong><small>${examItem.targetDays} days remaining</small></div></header>
    <div class="library-toolbar"><div class="library-toolbar-main"><div class="library-tabs"><button class="library-tab ${full ? 'active' : ''}" data-action="mocks-view" data-view="full">Full mocks</button><button class="library-tab ${!full ? 'active' : ''}" data-action="mocks-view" data-view="sectional">Sectional</button></div>${!full ? `<select class="field library-filter" data-change="sectional-subject" aria-label="Choose sectional subject"><option value="all" ${subject === 'all' ? 'selected' : ''}>All subjects</option>${SECTIONS.map(s => `<option value="${s.id}" ${subject === s.id ? 'selected' : ''}>${esc(s.name)}</option>`).join('')}</select>` : ''}</div><div class="library-mode-switch"><button class="${!state.studyModeActive ? 'active' : ''}" data-action="study-mode" data-value="false">Test mode</button><button class="${state.studyModeActive ? 'active' : ''}" data-action="study-mode" data-value="true">Study mode</button></div></div>
    <div class="library-results-heading"><strong>${full ? 'Full mock series' : 'Subject-wise tests'}</strong><span>${rows.length} available</span></div>
    <div class="library-test-list">${rows.length ? rows.map(rowHtml).join('') : `<div class="empty-state">No ${full ? 'mock' : 'sectional test'} matches your search. Try another keyword or switch exam.</div>`}</div>
  </section>`;
}
function pyqPage() {
  const examItem = currentExam();
  const full = state.pyqView !== 'sectional';
  const year = state.pyqYear || 'all';
  const subject = state.pyqSubject || 'all';
  const lastScores = { '2025 Shift 1': '138.5 / 200', '2024 Tier 1': '128.0 / 200' };
  const years = [...new Set(PYQ_LIST.map(item => item.year.split(' ')[0]))];
  const rows = full
    ? PYQ_LIST.filter(item => year === 'all' || item.year.startsWith(year)).map(item => ({ title: `${examItem.code} PYQ Paper: ${item.shift}`, action: 'start-pyq', shiftKey: item.shift, yearTag: item.year, coverage: item.subject, q: item.q, marks: examItem.totalMarks, mins: item.q > 100 ? 120 : 60, attempted: lastScores[item.year] !== undefined, score: lastScores[item.year] || '' })).filter(row => searchMatch(row.title) || searchMatch(row.yearTag) || searchMatch(row.coverage) || searchMatch(examItem.code))
    : SECTIONS.filter(section => subject === 'all' || section.id === subject).map(section => ({ title: `${examItem.code} PYQ Sectional${year !== 'all' ? ` ${year}` : ''}: ${section.name}`, action: 'start-mock', shiftKey: '', coverage: 'Exam Standard', q: 25, marks: 50, mins: 20, attempted: false, score: '' })).filter(row => searchMatch(row.title) || searchMatch(examItem.code));
  const rowHtml = row => `<article class="library-test-card pyq-library-card ${row.attempted ? 'is-attempted' : 'is-new'}">
    <div class="library-test-main">
      <span class="library-test-icon pyq">${iconSvg('history', 19)}</span>
      <div class="library-test-copy">
        <div class="pyq-card-heading">
          <h3>${esc(row.title)}</h3>
          ${row.yearTag ? `<span class="library-tag year">${esc(row.yearTag)}</span>` : ''}
        </div>
        <div class="library-test-meta">
          <span>${iconSvg('file-text', 12)} ${row.q} questions</span>
          <span>${iconSvg('award', 12)} ${row.marks} marks</span>
          <span>${iconSvg('clock', 12)} ${row.mins} min</span>
          <span class="pyq-coverage">${esc(row.coverage)}</span>
        </div>
      </div>
    </div>
    <div class="library-test-side">
      ${row.attempted
        ? '<div class="library-last-score"><small>LAST SCORE</small><strong>' + esc(row.score) + '</strong></div>'
        : '<div class="library-last-score pyq-not-attempted"><small>STATUS</small><strong>Not attempted</strong></div>'}
      <button class="btn btn-primary" data-action="${row.action}" ${row.action === 'start-pyq' ? `data-shift="${esc(row.shiftKey)}"` : ''} data-title="${esc(row.title)}">${row.attempted ? 'Re-attempt' : state.studyModeActive ? 'Open Study' : 'Attempt paper'}</button>
    </div>
  </article>`;
  return `<section class="page library-page-v3">
    <header class="library-page-intro"><div><span class="library-page-kicker">PREVIOUS YEAR QUESTIONS</span><h1>PYQ papers</h1><p>Work through available shift papers and subject-wise PYQ practice for ${esc(examItem.code)}.</p></div><div class="library-page-context"><span>PAPER ARCHIVE</span><strong>2024–2025</strong><small>Shift-wise practice</small></div></header>
    <div class="library-toolbar"><div class="library-toolbar-main"><div class="library-tabs"><button class="library-tab ${full ? 'active' : ''}" data-action="pyq-view" data-view="full">Full papers</button><button class="library-tab ${!full ? 'active' : ''}" data-action="pyq-view" data-view="sectional">Sectional</button></div><select class="field library-filter" data-change="pyq-year" aria-label="Choose PYQ year"><option value="all" ${year === 'all' ? 'selected' : ''}>All years</option>${years.map(y => `<option value="${y}" ${year === y ? 'selected' : ''}>${y}</option>`).join('')}</select>${!full ? `<select class="field library-filter" data-change="pyq-subject" aria-label="Choose sectional subject"><option value="all" ${subject === 'all' ? 'selected' : ''}>All subjects</option>${SECTIONS.map(s => `<option value="${s.id}" ${subject === s.id ? 'selected' : ''}>${esc(s.name)}</option>`).join('')}</select>` : ''}</div><div class="library-mode-switch"><button class="${!state.studyModeActive ? 'active' : ''}" data-action="study-mode" data-value="false">Test mode</button><button class="${state.studyModeActive ? 'active' : ''}" data-action="study-mode" data-value="true">Study mode</button></div></div>
    <div class="library-results-heading"><strong>${full ? 'Available papers' : 'Section-wise PYQs'}</strong><span>${rows.length} available</span></div>
    <div class="library-test-list">${rows.length ? rows.map(rowHtml).join('') : `<div class="empty-state">No ${full ? 'PYQ paper' : 'sectional paper'} matches your filters. Try another combination or switch exam.</div>`}</div>
  </section>`;
}
function practicePage() {
  const examItem = currentExam();
  const activeSubject = PRACTICE_LIST.find(s => s.id === state.practiceSubject) || PRACTICE_LIST[0];
  const shortName = { quant: 'Quant', reasoning: 'Reasoning', english: 'English', ga: 'General Awareness', computer: 'Computer' };
  const rows = (CHAPTER_PAPERS[activeSubject.id] || []).map(chapter => ({ id: activeSubject.id, title: `${examItem.code} Chapter Test: ${chapter}`, chapter, chapterTag: shortName[activeSubject.id], q: 10, marks: 20, mins: 12 }))
    .filter(row => searchMatch(row.title) || searchMatch(row.chapterTag) || searchMatch(examItem.code));
  const progress = Math.round(activeSubject.solved / Math.max(1, activeSubject.totalQ) * 100);
  const rowHtml = (row, index) => `<article class="chapter-test-card chapter-test-card-v2">
    <span class="chapter-index">${String(index + 1).padStart(2, '0')}</span>
    <div class="chapter-copy">
      <span>${esc(row.chapterTag)} · CHAPTER ${index + 1}</span>
      <h3>${esc(row.chapter)}</h3>
      <small><span>${iconSvg('file-text', 11)} ${row.q} questions</span><span>${iconSvg('award', 11)} ${row.marks} marks</span><span>${iconSvg('clock', 11)} ${row.mins} min</span></small>
    </div>
    <button class="btn btn-primary chapter-start-button" data-action="start-practice" data-subject="${esc(row.id)}" data-title="${esc(row.title)}">${state.studyModeActive ? 'Open study' : 'Start test'} ${iconSvg('arrow-right', 13)}</button>
  </article>`;
  return `<section class="page library-page-v3 practice-page-v3">
    <header class="library-page-intro"><div><span class="library-page-kicker">SUBJECT-WISE PREPARATION</span><h1>Chapter practice</h1><p>Choose one subject and work through its key chapters at your own pace.</p></div><div class="library-page-context"><span>ACTIVE SUBJECT</span><strong>${shortName[activeSubject.id]}</strong><small>${activeSubject.chapters} chapters listed</small></div></header>
    <div class="practice-subject-layout"><div class="practice-subject-tabs">${PRACTICE_LIST.map(s => `<button class="practice-subject-tab ${s.id === activeSubject.id ? 'active' : ''}" data-action="practice-subject" data-subject="${s.id}">${shortName[s.id]}</button>`).join('')}</div>
      <aside class="practice-progress"><div><span>QUESTION PROGRESS</span><strong>${activeSubject.solved.toLocaleString()} <small>/ ${activeSubject.totalQ.toLocaleString()}</small></strong></div><div class="practice-progress-track"><span style="width:${progress}%"></span></div><small>${progress}% of ${shortName[activeSubject.id]} questions completed</small></aside>
    </div>
    <div class="practice-list-heading"><div><strong>${esc(activeSubject.name)}</strong><span>${rows.length} chapter sets</span></div><div class="library-mode-switch"><button class="${!state.studyModeActive ? 'active' : ''}" data-action="study-mode" data-value="false">Test mode</button><button class="${state.studyModeActive ? 'active' : ''}" data-action="study-mode" data-value="true">Study mode</button></div></div>
    <div class="chapter-test-list">${rows.length ? rows.map(rowHtml).join('') : `<div class="empty-state">No chapter tests match your search. Try another keyword or subject.</div>`}</div>
  </section>`;
}
function bookmarksPage() {
  const examItem = currentExam();
  const bookmarked = allQuestions().filter(q => state.bookmarkedIds.includes(q.id));
  const shortName = { quant: 'Quant', reasoning: 'Reasoning', english: 'English', ga: 'General Awareness', computer: 'Computer' };
  const counts = {};
  PRACTICE_LIST.forEach(s => { counts[s.id] = bookmarked.filter(q => (q.sectionId || '') === s.id).length; });
  const subjectId = counts[state.bookmarksSubject] ? state.bookmarksSubject : ((PRACTICE_LIST.find(s => counts[s.id]) || {}).id || 'quant');
  const activeName = shortName[subjectId] || 'Unknown';
  const list = bookmarked.filter(q => (q.sectionId || '') === subjectId).filter(q => searchMatch(q.text) || searchMatch(q.textHi) || searchMatch(q.sectionId) || searchMatch(examItem.code));
  const rowHtml = q => `<article class="saved-question-card">
    <div class="saved-question-head"><span class="library-tag year">${esc(shortName[q.sectionId] || q.sectionId)}</span><span class="saved-question-label">SAVED QUESTION</span></div>
    <p class="saved-question-text">${esc(questionText(q))}</p>
    <div class="saved-answer"><span>Correct answer</span><strong>Option ${String.fromCharCode(65 + q.correct)}</strong><p>${esc(q.explanation)}</p></div>
    <div class="saved-question-actions"><button class="btn btn-primary" data-action="resolve-bookmark" data-id="${q.id}">${iconSvg('refresh-cw', 13)} Re-solve</button><button class="btn btn-secondary" data-action="remove-bookmark" data-id="${q.id}">${iconSvg('bookmark-minus', 13)} Remove</button></div>
  </article>`;
  const tabs = PRACTICE_LIST.filter(s => counts[s.id]).map(s =>
    `<button class="saved-filter-tab ${s.id === subjectId ? 'active' : ''}" data-action="bookmarks-subject" data-subject="${s.id}">${shortName[s.id]} <span>${counts[s.id]}</span></button>`
  ).join('');
  return `<section class="page saved-page-v3">
    <header class="saved-page-head"><div><span class="library-page-kicker">YOUR SAVED WORK</span><h1>Bookmarks</h1><p>Questions you marked for a second look. Revisit them whenever you revise a topic.</p></div><div class="saved-total"><strong>${bookmarked.length}</strong><span>saved questions</span></div></header>
    <div class="saved-filter-row">${tabs || '<span class="saved-filter-empty">Subject filters will appear when you save questions.</span>'}</div>
    <div class="saved-list-heading"><strong>${esc(activeName)} questions</strong><span>${list.length} shown</span></div>
    <div class="saved-question-list">${list.length ? list.map(rowHtml).join('') : (bookmarked.length ? `<div class="empty-state">No bookmarked ${esc(activeName)} questions${state.globalSearch ? ' match your search' : ''}.</div>` : `<div class="saved-empty-state"><span>${iconSvg('bookmark', 22)}</span><strong>No bookmarks yet</strong><p>Mark a tricky question during a mock or chapter test and it will be saved here.</p><button class="btn btn-primary" data-action="nav" data-tab="mocks">Browse mock tests</button></div>`)}</div>
  </section>`;
}
function myTestsPage() {
  const examItem = currentExam();
  const pending = state.myTestsView !== 'attempted';
  const rows = state.myTests.filter(t => pending ? t.status === 'pending' : t.status === 'attempted').filter(t => searchMatch(t.title) || searchMatch(examItem.code));
  const countAttempted = state.myTests.filter(t => t.status === 'attempted').length;
  const countPending = state.myTests.length - countAttempted;
  const rowHtml = t => `<article class="my-test-card">
    <div class="my-test-main"><span class="my-test-icon">${iconSvg(t.kind === 'PYQ' ? 'history' : t.kind === 'Sectional' ? 'layers' : 'monitor', 18)}</span>
      <div class="my-test-copy"><div class="my-test-title-row"><h3>${esc(t.title)}</h3><span class="library-tag">${esc(t.kind)}</span><span class="library-tag ${pending ? 'pending' : 'complete'}">${pending ? 'Pending' : 'Attempted'}</span></div>
      <p>${pending ? `${t.answered} of ${t.total} questions answered · ${esc(t.when)}` : `Submitted ${esc(t.when)}`}</p></div>
    </div>
    <div class="my-test-side">${pending ? `<div class="my-test-score"><small>PROGRESS</small><strong>${t.answered}/${t.total}</strong></div>` : `<div class="my-test-score"><small>LAST SCORE</small><strong>${esc(t.score)}</strong></div>`}
      <button class="btn ${pending ? 'btn-secondary' : 'btn-primary'}" data-action="start-mytest" data-title="${esc(t.title)}">${pending ? 'Open test' : 'Re-attempt'} ${iconSvg('arrow-right', 13)}</button>
    </div>
  </article>`;
  return `<section class="page saved-page-v3 my-tests-page-v3">
    <header class="saved-page-head"><div><span class="library-page-kicker">YOUR TEST HISTORY</span><h1>My tests</h1><p>Review your completed papers or return to a test you have not submitted.</p></div><div class="my-tests-summary"><div><strong>${countAttempted}</strong><span>attempted</span></div><div><strong>${countPending}</strong><span>pending</span></div></div></header>
    <div class="my-tests-toolbar"><div class="saved-filter-row"><button class="saved-filter-tab ${!pending ? 'active' : ''}" data-action="mytests-view" data-view="attempted">Attempted <span>${countAttempted}</span></button><button class="saved-filter-tab ${pending ? 'active' : ''}" data-action="mytests-view" data-view="pending">Pending <span>${countPending}</span></button></div><div class="library-mode-switch"><button class="${!state.studyModeActive ? 'active' : ''}" data-action="study-mode" data-value="false">Test mode</button><button class="${state.studyModeActive ? 'active' : ''}" data-action="study-mode" data-value="true">Study mode</button></div></div>
    <div class="my-test-list">${rows.length ? rows.map(rowHtml).join('') : `<div class="saved-empty-state"><span>${iconSvg('clipboard-check', 22)}</span><strong>${pending ? 'No pending tests' : 'No completed tests yet'}</strong><p>${pending ? 'You are all caught up. Start a mock or practice set to continue.' : 'Your completed papers and scores will appear here after you submit a test.'}</p><button class="btn btn-primary" data-action="nav" data-tab="mocks">Explore tests</button></div>`}</div>
  </section>`;
}
function leaderboardPage() {
  const examItem = currentExam();
  const weekly = state.leaderboardView !== 'alltime';
  const scored = LEADERBOARD_DATA.map(row => ({ ...row, pts: weekly ? row.weekly : row.total })).sort((a, b) => b.pts - a.pts);
  const top3 = scored.slice(0, 3);
  const list = scored.map((row, i) => ({ ...row, pos: i + 1 })).filter(row => searchMatch(row.name) || searchMatch(row.state) || searchMatch(examItem.code));
  const podiumCard = ([row, pos]) => `<article class="leader-podium-card rank-${pos}">
    <span class="leader-rank">#${pos}</span><div class="leader-podium-avatar">${esc(row.name.split(' ').map(part => part[0]).slice(0,2).join(''))}</div>
    <strong>${esc(row.name)}</strong><small>${esc(row.state)} · ${row.tests} tests</small><b>${row.pts.toLocaleString()} <span>pts</span></b>
  </article>`;
  const rowHtml = row => `<article class="leaderboard-row ${row.isUser ? 'is-user' : ''}">
    <span class="leaderboard-position">${String(row.pos).padStart(2, '0')}</span><div class="leaderboard-person"><strong>${esc(row.name)} ${row.isUser ? '<em>YOU</em>' : ''}</strong><small>${esc(row.state)} · ${row.tests} tests ${weekly ? 'this week' : 'all time'}</small></div>
    <strong class="leaderboard-points">${row.pts.toLocaleString()} <small>pts</small></strong>
  </article>`;
  return `<section class="page saved-page-v3 leaderboard-page-v3">
    <header class="saved-page-head"><div><span class="library-page-kicker">COMMUNITY PERFORMANCE</span><h1>Leaderboard</h1><p>See how aspirants are progressing in the ${esc(examItem.code)} workspace.</p></div><div class="library-tabs"><button class="library-tab ${weekly ? 'active' : ''}" data-action="leaderboard-view" data-view="weekly">This week</button><button class="library-tab ${!weekly ? 'active' : ''}" data-action="leaderboard-view" data-view="alltime">All time</button></div></header>
    <section class="leaderboard-podium">${top3.map((row, i) => podiumCard([row, i + 1])).join('')}</section>
    <div class="leaderboard-list-head"><strong>Rankings</strong><span>${list.length} aspirants</span></div>
    <div class="leaderboard-list">${list.length ? list.map(rowHtml).join('') : '<div class="empty-state">No leaderboard matches your search.</div>'}</div>
    <p class="leaderboard-note">Demo leaderboard data · points are based on the sample scoring model shown in this workspace.</p>
  </section>`;
}
function settingsPage() {
  const u = state.user;
  const themes = [['violet', 'Violet', '#6254d9'], ['emerald', 'Emerald', '#2b9b75'], ['ocean', 'Ocean', '#5688de']];
  const photoActive = u.avatarType === 'photo' && u.avatarImage;
  const themeModeLabel = state.themeMode === 'light' ? 'Light appearance' : 'Dark appearance';
  const profileCard = `<article class="settings-card">
    <div class="settings-card-heading"><span class="settings-card-icon">${iconSvg('user', 17)}</span><div><h2>Profile</h2><p>Your account details and display name</p></div></div>
    <div class="settings-profile-line">${avatarHtml(58, 'avatar-big')}<div class="avatar-edit-copy"><strong>${esc(u.name)}</strong><small>${esc(u.email)} · ${esc(u.plan)} PASS</small></div></div>
    <div class="settings-action-row"><button class="btn btn-secondary" data-action="avatar-upload">${iconSvg('camera', 14)} Upload photo</button>${photoActive ? `<button class="btn btn-ghost" data-action="avatar-photo-remove">Remove photo</button>` : ''}</div>
    <input id="avatarUpload" type="file" accept="image/*" data-change="avatar-file" hidden>
    <label class="settings-field-label" for="settingsName">DISPLAY NAME</label><input id="settingsName" class="field" value="${esc(u.name)}" data-change="display-name">
  </article>`;
  const interfaceCard = `<article class="settings-card">
    <div class="settings-card-heading"><span class="settings-card-icon">${iconSvg('sliders-horizontal', 17)}</span><div><h2>Appearance & language</h2><p>Adjust how the portal looks and reads</p></div></div>
    <div class="settings-option-row"><div><strong>Color mode</strong><small>${themeModeLabel} · light is the default</small></div><button class="settings-mode-button" data-action="toggle-mode">${iconSvg(state.themeMode === 'light' ? 'moon' : 'sun', 15)} Switch to ${state.themeMode === 'light' ? 'dark' : 'light'}</button></div>
    <div class="settings-divider"></div><label class="settings-field-label">ACCENT COLOR</label><div class="theme-options">${themes.map(([id, label, color]) => `<button class="theme-chip ${state.accentTheme === id ? 'active' : ''}" data-action="theme" data-theme="${id}"><span class="color-dot" style="background:${color}"></span>${label}</button>`).join('')}</div>
    <div class="settings-divider"></div><label class="settings-field-label" for="settingsLanguage">DEFAULT TEST LANGUAGE</label><select id="settingsLanguage" class="field" data-change="language"><option value="en" ${state.lang === 'en' ? 'selected' : ''}>English</option><option value="hi" ${state.lang === 'hi' ? 'selected' : ''}>Hindi (हिंदी)</option></select>
  </article>`;
  const examCard = `<article class="settings-card">
    <div class="settings-card-heading"><span class="settings-card-icon">${iconSvg('target', 17)}</span><div><h2>Exam preferences</h2><p>Set the exam that shapes your workspace</p></div></div>
    <label class="settings-field-label" for="settingsExam">PRIMARY TARGET EXAM</label><select id="settingsExam" class="field" data-change="exam">${EXAM_CATEGORIES.map(item => `<option value="${item.id}" ${item.id === state.selectedExamId ? 'selected' : ''}>${esc(item.code)} — ${esc(item.name)}</option>`).join('')}</select>
    <p class="settings-hint">Changing your target updates the dashboard, mock tests, PYQ list, chapter practice, and leaderboard context.</p>
  </article>`;
  return `<section class="page settings-page-v3"><header class="saved-page-head"><div><span class="library-page-kicker">MAKE IT YOURS</span><h1>Preferences</h1><p>Manage your profile, appearance, language, and target exam.</p></div></header><div class="settings-grid-v3">${profileCard}${interfaceCard}${examCard}</div></section>`;
}
function renderCurrentPage() {
  switch (state.activeTab) {
    case 'dashboard': return dashboardPage();
    case 'mocks': return mocksPage();
    case 'pyq': return pyqPage();
    case 'practice': return practicePage();
    case 'bookmarks': return bookmarksPage();
    case 'mytests': return myTestsPage();
    case 'leaderboard': return leaderboardPage();
    case 'settings': return settingsPage();
    default: return dashboardPage();
  }
}

function renderMobileNav() {
  const primary = [
    ['dashboard', 'Home', 'layout-dashboard'],
    ['mocks', 'Tests', 'file-text'],
    ['pyq', 'PYQs', 'history'],
    ['practice', 'Practice', 'book-open']
  ];
  const secondary = NAV_ITEMS.filter(([id]) => !primary.some(([primaryId]) => primaryId === id));
  const primaryMarkup = primary.map(([id, label, icon]) =>
    '<button class="mobile-nav-item' + (state.activeTab === id ? ' active' : '') + '" data-action="nav" data-tab="' + id + '"' + (state.activeTab === id ? ' aria-current="page"' : '') + '>' +
      '<span class="mobile-nav-icon">' + iconSvg(icon, 18) + '</span><span>' + label + '</span></button>'
  ).join('');
  const secondaryMarkup = secondary.map(([id, label, icon]) =>
    '<button class="mobile-more-link' + (state.activeTab === id ? ' active' : '') + '" data-action="nav" data-tab="' + id + '">' +
      '<span class="mobile-more-icon">' + iconSvg(icon, 17) + '</span><span>' + label + '</span>' +
      (id === 'bookmarks' && state.bookmarkedIds.length ? '<span class="mobile-more-count">' + state.bookmarkedIds.length + '</span>' : '') +
    '</button>'
  ).join('');
  return '<div class="mobile-nav-layer">' +
    (exam.mobileMoreOpen ? '<button class="mobile-more-backdrop" data-action="close-mobile-more" aria-label="Close more menu"></button>' : '') +
    (exam.mobileMoreOpen ? '<section class="mobile-more-sheet" aria-label="More navigation"><div class="mobile-more-head"><div><strong>More</strong><small>More of your workspace</small></div><button class="mobile-more-close" data-action="close-mobile-more" aria-label="Close menu">×</button></div><div class="mobile-more-grid">' + secondaryMarkup + '</div></section>' : '') +
    '<nav class="mobile-bottom-nav" aria-label="Primary navigation">' + primaryMarkup +
      '<button class="mobile-nav-item' + (exam.mobileMoreOpen ? ' active' : '') + '" data-action="mobile-more" aria-expanded="' + (exam.mobileMoreOpen ? 'true' : 'false') + '"><span class="mobile-nav-icon">' + iconSvg('menu', 18) + '</span><span>More</span></button>' +
    '</nav></div>';
}
function renderApp() {
  app.innerHTML = `<div class="app-shell">${renderSidebar()}<div class="workspace">${renderHeader()}<main class="main-content">${renderCurrentPage()}</main></div><div class="nav-scrim" data-action="close-drawer"></div>${renderMobileNav()}</div>${renderModal()}`;
}
function statusClass(status) {
  return ({ ANSWERED: 'answered', UNANSWERED: 'unanswered', MARKED: 'marked', ANSWERED_MARKED: 'answered-marked' })[status] || '';
}
function renderExam() {
  if (exam.entryGate) { app.innerHTML = renderExamGate(); return; }
  const q = currentQuestion();
  if (!q) return;
  const qState = currentQuestionState();
  const section = SECTIONS.find(item => item.id === exam.sectionId);
  const stats = getStats();
  const options = questionOptions(q) || [];
  const activeSections = exam.practiceQuestions ? [...new Set(exam.practiceQuestions.map(question => question.sectionId))].map(id => SECTIONS.find(section => section.id === id)) : SECTIONS;
  const visiblePalette = currentQuestions().map((item,index) => ({ item,index,status: state.userState[item.id]?.status || 'UNVISITED' })).filter(item => {
    if (exam.paletteFilter === 'ANSWERED') return ['ANSWERED','ANSWERED_MARKED'].includes(item.status);
    if (exam.paletteFilter === 'UNANSWERED') return item.status === 'UNANSWERED';
    if (exam.paletteFilter === 'MARKED') return ['MARKED','ANSWERED_MARKED'].includes(item.status);
    return true;
  });
  app.innerHTML = `<div class="exam-shell exam-v4 exam-live-shell">
    <header class="exam-header"><div class="exam-brand"><div class="exam-logo">TCS</div><div><h1>${esc(exam.title)} <span class="tag">${exam.studyMode ? 'Study CBT' : 'Official CBT Engine'}</span></h1><p>Candidate: ${esc(state.user.name)} | Roll: ${esc(state.user.rollNo)}</p></div></div><div class="exam-header-actions">${exam.studyMode ? `<div class="timer-box study"><span>${iconSvg('lightbulb', 13)}</span><div><small>Study Session</small><strong>Answers visible</strong></div></div>` : `<div class="timer-box ${exam.timeLeft < 300 ? 'warning' : ''}"><span>◷</span><div><small>Time Remaining</small><strong id="examTimer">${formatTime(exam.timeLeft)}</strong></div></div>`}<button class="lang-btn" data-action="toggle-language">◎ ${isHindi() ? 'English' : 'Hindi'}</button>${exam.studyMode ? '' : `<button class="lang-btn hide-mobile" data-action="pause-test">${iconSvg('pause', 13)} Pause Test</button><button class="lang-btn hide-mobile" data-action="instructions">? Guidelines</button>`}</div></header>
    <div class="exam-body"><section class="exam-main"><div class="exam-tabs">${activeSections.map(item => { const secQuestions = questionsFor(item.id); const answered = secQuestions.filter(question => ['ANSWERED','ANSWERED_MARKED'].includes(state.userState[question.id]?.status)).length; return `<button class="exam-tab ${exam.sectionId === item.id ? 'active' : ''}" data-action="exam-section" data-section="${item.id}">${esc(isHindi() ? item.nameHi : item.name)} <small>${answered}/${secQuestions.length}</small></button>`; }).join('')}</div>
      <div class="question-heading"><div class="question-title-block"><div class="question-title-row"><strong>Question ${q.num}</strong><span class="question-position">${exam.questionIndex + 1} / ${currentQuestions().length}</span></div><span class="marks">${exam.studyMode ? 'Self-check question — instant solution below' : '+2.0 Marks | −0.5 Negative'}</span></div><div class="heading-actions"><button class="btn ${state.bookmarkedIds.includes(q.id) ? 'btn-warning' : 'btn-ghost'}" style="padding:7px 10px" data-action="bookmark-current">☆ ${state.bookmarkedIds.includes(q.id) ? 'Bookmarked' : 'Bookmark'}</button>${exam.studyMode ? '' : `<button class="btn btn-ghost" style="padding:7px 10px" data-action="report-question">${iconSvg('flag', 13)} Report</button>`}</div></div>
      <div class="question-content"><div class="question-panel">${esc(questionText(q))}</div><div class="options-label">SELECT OPTION:</div><div class="options-list">${options.map((option,index) => { const revealed = exam.studyMode && qState.selectedOption !== null && qState.selectedOption !== undefined; const revealClass = revealed && index === q.correct ? 'reveal-correct' : revealed && qState.selectedOption === index && index !== q.correct ? 'reveal-wrong' : ''; return `<button class="option-btn ${qState.selectedOption === index ? 'selected' : ''} ${revealClass}" data-action="select-option" data-option="${index}" aria-pressed="${qState.selectedOption === index ? 'true' : 'false'}"><span class="option-letter">${String.fromCharCode(65+index)}</span><span>${esc(option)}</span>${!exam.studyMode && qState.selectedOption === index ? '<strong style="margin-left:auto">✓</strong>' : ''}</button>`; }).join('')}${(() => { if (!exam.studyMode) return ''; const selected = qState.selectedOption; if (selected === null || selected === undefined) return ''; const right = selected === q.correct; return `<div class="solution-info study-reveal"><strong class="${right ? 'text-green' : 'text-rose'}">${right ? '✓ Correct — this would score +2.0 in the real test' : '✗ Incorrect — the right answer is option ' + String.fromCharCode(65 + q.correct)}</strong><strong class="text-green">Correct Option: ${String.fromCharCode(65 + q.correct)} — ${esc((questionOptions(q) || [])[q.correct])}</strong>${questionHint(q) ? `<p>Hint: <span class="text-gold">${esc(questionHint(q))}</span></p>` : ''}<p>Explanation: <span class="text-gold">${esc(q.explanation || '')}</span></p></div>`; })()}</div></div>
      <div class="exam-actions">${exam.studyMode ? `<div class="row"><button class="btn btn-secondary" data-action="previous-question" ${exam.questionIndex === 0 ? 'disabled' : ''}>← Previous</button><button class="btn btn-primary" data-action="save-next">Check & Next →</button></div>` : `<div class="row"><button class="btn btn-warning" data-action="mark-next">⚑ Mark for Review & Next</button><button class="btn btn-secondary" data-action="clear-response" ${qState.selectedOption === null ? 'disabled' : ''}>↶ Clear Response</button></div><div class="row"><button class="btn btn-secondary" data-action="previous-question">← Previous</button><button class="btn btn-primary" data-action="save-next">Save & Next →</button></div>`}</div>
    </section><aside class="exam-sidebar"><div class="palette-legend">${exam.studyMode ? `<div class="legend-item"><span class="legend-number answered">${stats.answered}</span>Answered</div><div class="legend-item"><span class="legend-number unanswered">${stats.unanswered}</span>Not Answered</div>` : `<div class="legend-item"><span class="legend-number answered">${stats.answered}</span>Answered</div><div class="legend-item"><span class="legend-number unanswered">${stats.unanswered}</span>Not Answered</div><div class="legend-item"><span class="legend-number marked">${stats.marked}</span>Marked for Review</div><div class="legend-item"><span class="legend-number both">${stats.answeredMarked}</span>Ans & Marked</div>`}</div>${exam.studyMode ? '' : `<div class="palette-head"><strong>QUESTION PALETTE</strong><select class="small-select" data-change="palette-filter"><option value="ALL" ${exam.paletteFilter === 'ALL' ? 'selected' : ''}>All Statuses</option><option value="ANSWERED" ${exam.paletteFilter === 'ANSWERED' ? 'selected' : ''}>Answered</option><option value="UNANSWERED" ${exam.paletteFilter === 'UNANSWERED' ? 'selected' : ''}>Unanswered</option><option value="MARKED" ${exam.paletteFilter === 'MARKED' ? 'selected' : ''}>Marked</option></select></div>`}<div class="palette-grid">${visiblePalette.map(({item,index,status}) => `<button class="palette-btn ${statusClass(status)} ${index === exam.questionIndex ? 'current' : ''}" data-action="palette-question" data-index="${index}">${index+1}</button>`).join('') || '<p class="muted" style="grid-column:1/-1;font-size:10px">No questions in this filter.</p>'}</div><div class="palette-footer"><button class="btn btn-secondary" data-action="exit-exam">${exam.studyMode ? 'Close' : 'Exit'}</button><button class="btn btn-success" data-action="submit-exam">${exam.studyMode ? '✓ Finish Study' : '✓ Submit Test'}</button></div></aside></div>
  </div>${renderExamOverlays()}`;
}
function renderExamGate() {
  const examItem = currentExam();
  const activeQuestions = allQuestions();
  const activeSections = [...new Set(activeQuestions.map(question => question.sectionId))]
    .map(id => SECTIONS.find(section => section.id === id)).filter(Boolean);
  const sectionsTotal = activeQuestions.length;
  const rules = [
    `The countdown timer displays the <strong>remaining time</strong> for this paper. The timer starts only after you press <strong>“I am Ready to Begin”</strong>.`,
    `The question palette shows the <strong>status of every question</strong> using the colour codes in the legend. Use it to navigate within the active section.`,
    `Select an option and press <strong>“Save &amp; Next”</strong>. Use <strong>“Mark for Review &amp; Next”</strong> to flag a question you want to revisit.`,
    `To <strong>deselect</strong> a chosen answer, press “Clear Response”. You may change an answer any number of times before the timer ends.`,
    `Questions from a section can be attempted only while that section tab is <strong>active</strong>. Sections: ${activeSections.map(item => esc(isHindi() ? item.nameHi : item.name) + ' (' + questionsFor(item.id).length + ')').join(', ')}.`,
    `Pressing <strong>“Submit Test”</strong> ends your attempt and generates the score report. You cannot return after submission. The test is automatically submitted when the timer reaches zero.`,
    `You may switch between <strong>English and Hindi</strong> for questions using the language control in the exam header.`,
    `This is a <strong>sample demo attempt</strong>. Do not refresh or leave the page while the exam is running. Your answers are held in this local session.`
  ];
  const legend = [
    ['answered', '1', 'Answered'],
    ['unanswered', '2', 'Not answered'],
    ['marked', '3', 'Marked for review'],
    ['both', '4', 'Answered & marked'],
    ['current', '5', 'Current question']
  ];
  const facts = [
    ['Total questions', sectionsTotal],
    ['Sections', activeSections.length],
    ['Duration', formatTime(exam.timeLeft)],
    ['Marking scheme', '+2.0 / −0.5'],
    ['Maximum marks', (sectionsTotal * 2).toFixed(1)],
    ['Target exam', examItem.code]
  ];
  return `<div class="exam-shell exam-v4 exam-gate-shell">
    <header class="exam-header">
      <div class="exam-brand">
        <div class="exam-logo">TCS</div>
        <div>
          <h1>${esc(exam.title)} <span class="tag">Official CBT Engine</span></h1>
          <p>Candidate: ${esc(state.user.name)} | Roll: ${esc(state.user.rollNo)}</p>
        </div>
      </div>
    </header>
    <main class="exam-gate exam-gate-v2">
      <section class="gate-welcome">
        <span class="gate-welcome-icon">${iconSvg('clipboard-check', 21)}</span>
        <div class="gate-welcome-copy">
          <span class="gate-kicker">BEFORE YOU BEGIN</span>
          <h2>Read the exam instructions</h2>
          <p>Review the paper details and important rules. Your exam timer will start only when you are ready.</p>
        </div>
        <span class="gate-question-count">${sectionsTotal} questions</span>
      </section>

      <section class="gate-overview-v2">
        <div class="gate-v2-section-heading">
          <div><span class="gate-v2-eyebrow">PAPER OVERVIEW</span><h3>At a glance</h3></div>
          <span class="gate-v2-exam-pill">${esc(examItem.code)}</span>
        </div>
        <div class="gate-facts-v2">
          ${facts.map(([label, value]) => `<div class="gate-fact-v2"><span>${label}</span><strong>${esc(value)}</strong></div>`).join('')}
        </div>
      </section>

      <section class="gate-legend-v2">
        <div class="gate-v2-section-heading">
          <div><span class="gate-v2-eyebrow">QUESTION PALETTE</span><h3>Know the status colours</h3></div>
        </div>
        <div class="gate-legend-list-v2">
          ${legend.map(([status, number, label]) => `<div class="gate-legend-item-v2"><span class="legend-number ${status}">${number}</span><span>${label}</span></div>`).join('')}
        </div>
      </section>

      <section class="exam-gate-main gate-instructions-v2">
        <div class="gate-v2-section-heading">
          <div><span class="gate-v2-eyebrow">IMPORTANT</span><h3>General instructions</h3></div>
          <span class="gate-rule-count"> ${rules.length} rules</span>
        </div>
        <ol class="gate-rules gate-rules-v2">${rules.map(rule => `<li><span class="gate-rule-text">${rule}</span></li>`).join('')}</ol>
        <label class="gate-accept gate-accept-v2">
          <input type="checkbox" data-change="gate-accept" ${exam.gateAccepted ? 'checked' : ''}>
          <span><strong>Declaration</strong><small>I have read and understood the instructions above. I agree to follow the exam rules and understand that failure to do so may lead to disqualification.</small></span>
        </label>
        <div class="gate-actions gate-actions-v2">
          <button class="btn btn-secondary" data-action="gate-exit">Cancel</button>
          <button class="btn btn-success" data-action="gate-begin" ${exam.gateAccepted ? '' : 'disabled'}>${iconSvg('play', 14)} I am Ready to Begin</button>
        </div>
      </section>
    </main>
  </div>`;
}

function renderExamOverlays() {
  let html = '';
  if (exam.showInstructions) html += `<div class="modal-backdrop"><div class="modal medium"><button class="modal-close" data-action="instructions">×</button><h3>SSC CBT Exam Pattern Instructions</h3><p class="modal-sub">Please read the test guidelines before proceeding.</p><div class="solution-info">• Total Duration: <strong>60 Minutes</strong> for Tier 1 Paper.<br><br>• Marking Scheme: <strong>+2.0 Marks</strong> for correct answer | <strong>−0.5 Negative Marks</strong> for wrong attempt.<br><br>• Question Status Colors: Green = Answered, Red = Not Answered, Purple = Marked for Review.<br><br>• Switch between English & Hindi anytime using the top header language toggle.</div><div class="modal-actions"><button class="btn btn-primary" data-action="instructions">Return to Exam</button></div></div></div>`;
  if (exam.paused) html += `<div class="modal-backdrop"><div class="modal narrow war-modal"><div class="confirm-head"><span class="confirm-ic warn">${iconSvg('pause', 18)}</span><div><h3>Test Paused</h3><p class="modal-sub">The countdown is on hold. Your answers are saved locally.</p></div></div><div class="confirm-strip"><div><small>Time Remaining</small><strong>${formatTime(exam.timeLeft)}</strong></div><div><small>Status</small><strong>On Hold</strong></div></div><div class="confirm-actions"><button class="btn btn-secondary" data-action="exit-exam">Exit &amp; Save Pending</button><button class="btn btn-primary" data-action="resume-test">${iconSvg('play-circle', 15)} Resume Test</button></div></div></div>`;

  if (exam.confirmExit) html += (() => {
    const stats = getStats();
    const total = allQuestions().length;
    const pct = total ? Math.round(stats.answered / total * 100) : 0;
    return `<div class="modal-backdrop exam-confirm-backdrop">
      <section class="modal narrow war-modal exam-confirm-modal exit-confirm-modal" role="dialog" aria-modal="true" aria-labelledby="exitConfirmTitle">
        <button class="modal-close exam-confirm-close" data-action="cancel-confirm" aria-label="Close confirmation">×</button>
        <div class="exam-confirm-eyebrow"><span class="exam-confirm-dot exit-dot"></span> EXIT CONFIRMATION</div>
        <div class="exam-confirm-heading">
          <span class="exam-confirm-icon exit-icon">${iconSvg('log-out', 21)}</span>
          <div>
            <h3 id="exitConfirmTitle">Leave this test?</h3>
            <p>You can save your progress as a pending attempt and continue later from My Tests.</p>
          </div>
        </div>
        <div class="exam-confirm-progress">
          <div class="donut" style="--pct:${pct}"><b>${pct}%</b><small>done</small></div>
          <div class="exam-confirm-progress-copy">
            <strong>${stats.answered} of ${total} answered</strong>
            <span>Your attempt progress</span>
            <div class="exam-confirm-progress-track"><span style="width:${pct}%"></span></div>
            <small>${stats.unanswered} questions still unanswered</small>
          </div>
        </div>
        <div class="exam-confirm-stats">
          <div class="exam-confirm-stat"><span>Answered</span><strong>${stats.answered}</strong></div>
          <div class="exam-confirm-stat"><span>Not answered</span><strong>${stats.unanswered}</strong></div>
          <div class="exam-confirm-stat"><span>Marked for review</span><strong>${stats.marked}</strong></div>
          <div class="exam-confirm-stat"><span>Time remaining</span><strong>${formatTime(exam.timeLeft)}</strong></div>
        </div>
        <div class="exam-confirm-note exit-note">${iconSvg('bookmark-check', 16)}<span><strong>Your answers will be saved.</strong> This test will appear as Pending in My Tests, where you can resume it.</span></div>
        <div class="confirm-actions exam-confirm-actions">
          <button class="btn btn-secondary" data-action="cancel-confirm">Keep attempting</button>
          <button class="btn btn-solid-danger" data-action="exit-final">Exit &amp; save</button>
        </div>
      </section>
    </div>`;
  })();
  if (exam.confirmSubmit) html += (() => {
    const stats = getStats();
    const total = allQuestions().length;
    const pct = total ? Math.round(stats.answered / total * 100) : 0;
    return `<div class="modal-backdrop exam-confirm-backdrop">
      <section class="modal narrow war-modal exam-confirm-modal submit-confirm-modal" role="dialog" aria-modal="true" aria-labelledby="submitConfirmTitle">
        <button class="modal-close exam-confirm-close" data-action="cancel-confirm" aria-label="Close confirmation">×</button>
        <div class="exam-confirm-eyebrow"><span class="exam-confirm-dot submit-dot"></span> FINAL SUBMISSION</div>
        <div class="exam-confirm-heading">
          <span class="exam-confirm-icon submit-icon">${iconSvg('clipboard-check', 21)}</span>
          <div>
            <h3 id="submitConfirmTitle">Ready to submit?</h3>
            <p>Review your attempt summary. Once submitted, you cannot change your answers.</p>
          </div>
        </div>
        <div class="exam-confirm-progress">
          <div class="donut" style="--pct:${pct}"><b>${pct}%</b><small>done</small></div>
          <div class="exam-confirm-progress-copy">
            <strong>${stats.answered} of ${total} answered</strong>
            <span>Paper completion</span>
            <div class="exam-confirm-progress-track"><span style="width:${pct}%"></span></div>
            <small>${stats.unanswered} questions left blank</small>
          </div>
        </div>
        <div class="exam-confirm-stats">
          <div class="exam-confirm-stat"><span>Answered</span><strong>${stats.answered}</strong></div>
          <div class="exam-confirm-stat"><span>Not answered</span><strong>${stats.unanswered}</strong></div>
          <div class="exam-confirm-stat"><span>Marked for review</span><strong>${stats.marked}</strong></div>
          <div class="exam-confirm-stat"><span>Time remaining</span><strong>${formatTime(exam.timeLeft)}</strong></div>
        </div>
        ${stats.unanswered > 0
          ? `<div class="exam-confirm-note submit-warning">${iconSvg('alert-triangle', 16)}<span><strong>${stats.unanswered} unanswered questions.</strong> Blank answers score zero. Incorrect attempted answers carry −0.5 marks.</span></div>`
          : `<div class="exam-confirm-note submit-ready">${iconSvg('check-circle', 16)}<span><strong>All questions have responses.</strong> You can still review marked questions before final submission.</span></div>`}
        <div class="confirm-actions exam-confirm-actions">
          <button class="btn btn-secondary" data-action="cancel-confirm">Review answers</button>
          <button class="btn btn-success" data-action="submit-final">${iconSvg('check', 15)} Submit test</button>
        </div>
      </section>
    </div>`;
  })();
  if (exam.reportOpen) html += `<div class="modal-backdrop"><div class="modal narrow"><button class="modal-close" data-action="cancel-report">×</button><h3>Report this question</h3><p class="modal-sub">Tell us what looks wrong with Question No. ${currentQuestion().num}. Our review team checks every report.</p><div class="report-list">${[['wrong-key', 'Wrong answer key or solution'], ['unclear', 'Question text is unclear or ambiguous'], ['typo', 'Spelling / language error'], ['options', 'Missing or duplicate options'], ['media', 'Image, figure or table not loading']].map(([id,label]) => `<label class="report-item"><input type="radio" name="reportReason" value="${id}" data-change="report-reason" ${exam.reportReason === id ? 'checked' : ''}><span>${label}</span></label>`).join('')}</div><label class="label" for="reportNote">ADD A NOTE (OPTIONAL)</label><textarea id="reportNote" class="field report-note" rows="2" placeholder="Describe the issue briefly…"></textarea><div class="modal-actions"><button class="btn btn-secondary" data-action="cancel-report">Cancel</button><button class="btn btn-danger" data-action="report-submit">${iconSvg('flag', 14)} Submit Report</button></div></div></div>`;
  if (exam.submitted) html += exam.wrongPractice ? (() => { const s = getScore(); const total = allQuestions().length; const pct = total ? Math.round(s.correct / total * 100) : 0; return `<div class="modal-backdrop"><div class="modal narrow war-modal"><button class="modal-close" data-action="exit-practice">×</button><div class="confirm-head"><span class="confirm-ic good">${iconSvg('check-circle', 17)}</span><div><h3>Wrong-Answers Practice Complete</h3><p class="modal-sub">You reworked ${total} previously wrong question${total > 1 ? 's' : ''} from ${esc(exam.title.split(' · ')[0])}.</p></div></div><div class="confirm-body"><div class="donut" style="--pct:${pct}"><b>${pct}%</b><small>Now Correct</small></div><div class="confirm-grid"><div class="mini-stat"><small>Now Correct</small><strong>${s.correct}/${total}</strong></div><div class="mini-stat"><small>Still Wrong</small><strong>${s.incorrect}</strong></div><div class="mini-stat"><small>Attempted</small><strong>${s.correct + s.incorrect}</strong></div><div class="mini-stat"><small>Time Used</small><strong>${formatTime(allQuestions().length * 90 - exam.timeLeft)}</strong></div></div></div><div class="confirm-note safe">${iconSvg('bookmark', 13)} No changes were made to your original attempt record or My Tests.</div><div class="confirm-actions"><button class="btn btn-primary" data-action="exit-practice">Back to Dashboard</button></div></div></div>`; })() : renderResultsModal();
  return html;
}
function renderResultsModal() {
  const score = getScore();
  const view = exam.reportView || 'analytics';
  const questions = allQuestions();
  const total = questions.length;
  const attempted = score.correct + score.incorrect;
  const skipped = Math.max(0, total - attempted);
  const maxMarks = total * 2;
  const earnedMarks = score.correct * 2;
  const negativeMarks = score.incorrect * 0.5;
  const timeUsed = Math.max(0, 3600 - exam.timeLeft);
  const percentage = maxMarks ? Math.max(0, Math.min(100, Math.round(score.totalScore / maxMarks * 100))) : 0;
  const wrongCount = score.incorrect;
  const benchmark = currentExam().cutoff;
  const benchmarkDelta = score.totalScore - benchmark;

  const sectionRows = [...new Set(questions.map(question => question.sectionId))].map(sectionId => {
    const section = SECTIONS.find(item => item.id === sectionId);
    const sectionQuestions = questions.filter(question => question.sectionId === sectionId);
    let correct = 0;
    let incorrect = 0;
    sectionQuestions.forEach(question => {
      const selected = state.userState[question.id]?.selectedOption;
      if (selected === null || selected === undefined) return;
      if (selected === question.correct) correct++;
      else incorrect++;
    });
    const unanswered = Math.max(0, sectionQuestions.length - correct - incorrect);
    return {
      id: sectionId,
      label: esc(section ? (isHindi() ? section.nameHi : section.name) : sectionId),
      total: sectionQuestions.length,
      correct,
      incorrect,
      unanswered,
      accuracy: correct + incorrect ? Math.round(correct / (correct + incorrect) * 100) : 0
    };
  });

  const bestSection = sectionRows.slice().sort((a, b) => b.accuracy - a.accuracy || b.correct - a.correct)[0];
  const weakestSection = sectionRows.slice().sort((a, b) => a.accuracy - b.accuracy || a.correct - b.correct)[0];

  const sectionAnalytics = `
    <section class="result-section-card">
      <div class="result-section-head">
        <div><span class="result-eyebrow">SUBJECT BREAKDOWN</span><h3>Section-wise performance</h3></div>
        <span class="result-muted-count">${sectionRows.length} sections</span>
      </div>
      <div class="result-section-list">
        ${sectionRows.map(row => {
          const correctWidth = row.total ? row.correct / row.total * 100 : 0;
          const wrongWidth = row.total ? row.incorrect / row.total * 100 : 0;
          const skippedWidth = row.total ? row.unanswered / row.total * 100 : 0;
          return `<article class="result-section-row">
            <div class="result-section-title">
              <strong>${row.label}</strong>
              <span>${row.correct}/${row.total} correct · ${row.accuracy}% accuracy</span>
            </div>
            <div class="result-section-bar" role="img" aria-label="${row.correct} correct, ${row.incorrect} incorrect, ${row.unanswered} unanswered">
              <span class="correct-part" style="width:${correctWidth}%"></span>
              <span class="wrong-part" style="width:${wrongWidth}%"></span>
              <span class="skipped-part" style="width:${skippedWidth}%"></span>
            </div>
            <div class="result-section-counts">
              <span><i class="correct-dot"></i>${row.correct} correct</span>
              <span><i class="wrong-dot"></i>${row.incorrect} wrong</span>
              <span><i class="skipped-dot"></i>${row.unanswered} skipped</span>
            </div>
          </article>`;
        }).join('')}
      </div>
      ${bestSection && weakestSection ? `<div class="result-insight-grid">
        <div class="result-insight best"><span>${iconSvg('trending-up', 15)} STRONGEST SECTION</span><strong>${bestSection.label}</strong><small>${bestSection.accuracy}% accuracy · ${bestSection.correct} correct</small></div>
        <div class="result-insight improve"><span>${iconSvg('target', 15)} NEEDS MORE PRACTICE</span><strong>${weakestSection.label}</strong><small>${weakestSection.accuracy}% accuracy · ${weakestSection.incorrect} wrong</small></div>
      </div>` : ''}
    </section>`;

  const leaderboardRows = (() => {
    const seed = (function (str) { let h = 0; for (const ch of str) h = (h * 31 + ch.charCodeAt(0)) | 0; return Math.abs(h); })(exam.title.split(' · ')[0]);
    const pool = [
      ['Ananya Roy', 'West Bengal'], ['Vikram Singh', 'Rajasthan'], ['Priya Sharma', 'Uttar Pradesh'],
      ['Amit Verma', 'Madhya Pradesh'], ['Sneha Kulkarni', 'Karnataka'], ['Arjun Banerjee', 'Bihar'],
      ['Kavya Nair', 'Kerala'], ['Rohit Deshmukh', 'Maharashtra'], ['Meera Iyer', 'Tamil Nadu'], ['Harsh Vardhan', 'Delhi NCR']
    ];
    const deltas = [9, 4, -3, 12, -7, 6, -1, 15, 2, 18].map((delta, i) => delta * 2 + (seed % 7) * 0.5);
    return pool.map((entry, index) => ({
      name: entry[0],
      state: entry[1],
      tests: 4 + (seed + index) % 10,
      marks: Math.min(maxMarks, Math.max(-maxMarks * 0.25, Math.round((score.totalScore + deltas[index]) * 2) / 2)),
      you: false
    })).concat([{ name: `${state.user.name} (You)`, state: '—', tests: 1, marks: score.totalScore, you: true }]).sort((a, b) => b.marks - a.marks);
  })();

  const leaderboardHtml = `
    <section class="result-section-card result-leaderboard-card">
      <div class="result-section-head">
        <div><span class="result-eyebrow">PAPER COMPARISON</span><h3>Leaderboard preview</h3></div>
        <span class="result-demo-tag">SAMPLE DATA</span>
      </div>
      <div class="result-sample-note">${iconSvg('info', 15)} This is illustrative demo data, not a live All-India ranking or official percentile.</div>
      <div class="result-leaderboard-list">
        ${leaderboardRows.map((row, index) => `<div class="result-leaderboard-row ${row.you ? 'is-you' : ''}">
          <span class="result-rank">#${index + 1}</span>
          <span class="result-candidate"><strong>${esc(row.name)}</strong><small>${esc(row.state)}</small></span>
          <span class="result-candidate-tests">${row.tests} tests</span>
          <strong class="result-candidate-score">${row.marks >= 0 ? '+' : ''}${row.marks.toFixed(1)}</strong>
        </div>`).join('')}
      </div>
      <p class="result-footnote">The comparison is generated locally for demonstration only.</p>
    </section>`;

  const filteredSolutions = questions.filter(question => {
    const selected = state.userState[question.id]?.selectedOption;
    const isAttempted = selected !== null && selected !== undefined;
    const isCorrect = isAttempted && selected === question.correct;
    if (exam.solutionFilter === 'CORRECT') return isCorrect;
    if (exam.solutionFilter === 'INCORRECT') return isAttempted && !isCorrect;
    if (exam.solutionFilter === 'BOOKMARKED') return state.bookmarkedIds.includes(question.id);
    return true;
  });

  const actions = view === 'analytics'
    ? `<button class="btn btn-secondary" data-action="report-view" data-view="leaderboard">${iconSvg('trophy', 14)} Leaderboard preview</button>
       <button class="btn btn-warning" data-action="reattempt-wrong" ${wrongCount ? '' : 'disabled'}>${iconSvg('refresh-cw', 14)} Reattempt wrong (${wrongCount})</button>
       <button class="btn btn-primary" data-action="report-view" data-view="solutions">${iconSvg('book-open', 14)} Review solutions</button>
       <button class="btn btn-ghost" data-action="exit-to-mytests">Go to My Tests ${iconSvg('arrow-right', 14)}</button>`
    : `<button class="btn btn-secondary" data-action="report-view" data-view="analytics">${iconSvg('arrow-left', 14)} Back to report</button>`;

  const solutionsHtml = `
    <section class="result-section-card result-solutions">
      <div class="result-section-head">
        <div><span class="result-eyebrow">LEARN FROM THIS ATTEMPT</span><h3>Solutions review</h3></div>
        <span class="result-muted-count">${filteredSolutions.length} questions</span>
      </div>
      <div class="result-solution-filters">
        ${[['ALL','All'],['CORRECT','Correct'],['INCORRECT','Incorrect'],['BOOKMARKED','Bookmarked']].map(([filter, label]) =>
          `<button class="result-filter ${exam.solutionFilter === filter ? 'active' : ''}" data-action="solution-filter" data-filter="${filter}">${label}</button>`
        ).join('')}
      </div>
      <div class="result-solution-list">
        ${filteredSolutions.map(question => {
          const selected = state.userState[question.id]?.selectedOption;
          const attemptedQuestion = selected !== null && selected !== undefined;
          const correct = attemptedQuestion && selected === question.correct;
          const status = correct ? '+2.0 · Correct' : attemptedQuestion ? '−0.5 · Incorrect' : 'Not attempted';
          const statusClass = correct ? 'correct' : attemptedQuestion ? 'wrong' : 'skipped';
          return `<article class="result-solution-item">
            <div class="result-solution-head"><strong>Q.${question.num} · ${(question.sectionId || '').toUpperCase()}</strong><span class="result-solution-status ${statusClass}">${status}</span></div>
            <p class="result-solution-question">${esc(questionText(question))}</p>
            <div class="result-solution-answer"><strong>Correct answer: ${String.fromCharCode(65 + question.correct)} · ${esc(questionOptions(question)[question.correct])}</strong>
              ${attemptedQuestion ? `<small>Your answer: ${String.fromCharCode(65 + selected)} · ${esc(questionOptions(question)[selected])}</small>` : ''}
              <p>${esc(question.explanation || 'No explanation provided.')}</p>
            </div>
          </article>`;
        }).join('') || `<div class="result-empty">No questions match this filter.</div>`}
      </div>
    </section>`;

  return `<div class="result-backdrop">
    <main class="result-page">
      <header class="result-page-header">
        <div class="result-page-title">
          <span class="result-page-badge">${iconSvg('award', 19)}</span>
          <div><span class="result-eyebrow">ATTEMPT COMPLETE</span><h1>${exam.studyMode ? 'Study session summary' : 'Your score report'}</h1><p>${esc(exam.title)} · ${esc(state.user.name)}${exam.studyMode ? ' · Study mode' : ` · Time used ${formatTime(timeUsed)}`}</p></div>
        </div>
        <div class="result-page-actions">${actions}</div>
      </header>

      ${view === 'analytics' ? `<section class="result-overview-card">
        <div class="result-overview-main">
          <div class="result-overview-score"><span class="result-eyebrow">YOUR FINAL SCORE</span><strong>${score.totalScore.toFixed(1)}<small> / ${maxMarks.toFixed(1)}</small></strong><span class="result-score-caption">${percentage}% of maximum marks</span></div>
          <div class="result-overview-ring" style="--result-pct:${percentage}"><div><strong>${score.accuracy}%</strong><small>Accuracy</small></div></div>
        </div>
        <div class="result-overview-verdict ${benchmarkDelta >= 0 ? 'positive' : 'neutral'}">
          <span>${iconSvg(benchmarkDelta >= 0 ? 'check-circle' : 'target', 16)}</span>
          <div><strong>${benchmarkDelta >= 0 ? 'Above practice benchmark' : 'Below practice benchmark'}</strong><small>${benchmarkDelta >= 0 ? `${benchmarkDelta.toFixed(1)} marks above` : `${Math.abs(benchmarkDelta).toFixed(1)} marks below`} the configured target · not an official SSC cutoff</small></div>
        </div>
      </section>

      <section class="result-metric-grid">
        <article class="result-metric correct"><span>${iconSvg('check-circle', 16)} CORRECT</span><strong>${score.correct}</strong><small>+${earnedMarks.toFixed(1)} marks earned</small></article>
        <article class="result-metric wrong"><span>${iconSvg('x-circle', 16)} INCORRECT</span><strong>${score.incorrect}</strong><small>−${negativeMarks.toFixed(1)} marks deducted</small></article>
        <article class="result-metric skipped"><span>${iconSvg('minus-circle', 16)} UNANSWERED</span><strong>${skipped}</strong><small>0 marks</small></article>
        <article class="result-metric accuracy"><span>${iconSvg('target', 16)} ACCURACY</span><strong>${score.accuracy}%</strong><small>${attempted} attempted of ${total}</small></article>
      </section>

      <section class="result-section-card result-marks-breakdown">
        <div class="result-section-head"><div><span class="result-eyebrow">HOW YOUR SCORE WAS CALCULATED</span><h3>Marks breakdown</h3></div><strong class="result-net-score">${score.totalScore.toFixed(1)} marks</strong></div>
        <div class="result-marks-equation">
          <div><span>Correct answers</span><strong>${score.correct} × 2</strong><b class="positive-text">+${earnedMarks.toFixed(1)}</b></div>
          <span class="result-equation-sign">−</span>
          <div><span>Incorrect answers</span><strong>${score.incorrect} × 0.5</strong><b class="negative-text">${negativeMarks.toFixed(1)}</b></div>
          <span class="result-equation-sign">=</span>
          <div class="result-net-block"><span>Final score</span><strong>${score.totalScore.toFixed(1)}</strong></div>
        </div>
      </section>

      ${sectionAnalytics}
      <section class="result-next-steps">
        <div><span class="result-eyebrow">YOUR NEXT STEP</span><h3>${weakestSection ? `Spend your next practice session on ${weakestSection.label}` : 'Keep building consistency'}</h3><p>${weakestSection ? `${weakestSection.accuracy}% accuracy in this section. Review the incorrect answers and revisit the concepts you found difficult.` : 'Review your answers and continue practising regularly.'}</p></div>
        <button class="btn btn-primary" data-action="report-view" data-view="solutions">${iconSvg('book-open', 14)} Review answers</button>
      </section>` : ''}
      ${view === 'leaderboard' ? leaderboardHtml : ''}
      ${view === 'solutions' ? solutionsHtml : ''}
      <footer class="result-page-footer"><span>Score is calculated using this paper's configured marking scheme: +2 for correct and −0.5 for incorrect.</span><button class="btn btn-secondary" data-action="exit-to-mytests">Finish and go to My Tests ${iconSvg('arrow-right', 14)}</button></footer>
    </main>
  </div>`;
}
function renderModal() {
  if (!exam.activeModal) return '';
  if (exam.activeModal === 'subscription') {
    const isAnnual = state.billingCycle === 'annual';
    return `<div class="modal-backdrop"><div class="modal wide"><button class="modal-close" data-action="close-modal">×</button><div style="text-align:center"><span class="tag gold">UNLOCK UNLIMITED SSC FLIX PRO PASS</span><h2 style="margin:12px 0 5px">Choose Your Preparation Plan</h2><p class="modal-sub">Attempt 200+ TCS iON Mock Tests, Full PYQ Vault & AIR Analytics</p><div class="toggle-group"><button class="btn ${!isAnnual ? 'active' : 'btn-ghost'}" data-action="billing" data-cycle="monthly">Monthly Pass</button><button class="btn ${isAnnual ? 'active' : 'btn-ghost'}" data-action="billing" data-cycle="annual">Annual Pass · Save 35%</button></div></div><div class="grid grid-3"><article class="plan-card"><div><h3>Free Tier</h3><div class="plan-price">₹0 <span class="muted" style="font-size:10px">/ forever</span></div><ul><li>2 Diagnostic Full Mocks</li><li>Basic Chapter Practice</li><li>Community AIR Rank</li></ul></div><button class="btn btn-secondary" disabled>Default Plan</button></article><article class="plan-card featured"><div><span class="tag accent">MOST POPULAR</span><h3 class="text-accent" style="margin-top:10px">♛ Pro Pass</h3><div class="plan-price">${isAnnual ? '₹499' : '₹99'} <span class="muted" style="font-size:10px">/ ${isAnnual ? 'year' : 'month'}</span></div><ul><li>All 200+ SSC Full Mocks</li><li>Complete PYQ Vault (2022–25)</li><li>Bilingual Step-by-Step Solutions</li><li>Detailed Subject Analytics</li></ul></div><button class="btn btn-primary" data-action="checkout" data-plan="PRO">Get Pro Pass</button></article><article class="plan-card"><div><h3 class="text-gold">✦ Elite Pass</h3><div class="plan-price">${isAnnual ? '₹899' : '₹199'} <span class="muted" style="font-size:10px">/ ${isAnnual ? 'year' : 'month'}</span></div><ul><li>Everything in Pro Pass</li><li>1-on-1 AIR Ranker Mentorship</li><li>Print-ready PDF Solved Papers</li></ul></div><button class="btn btn-warning" data-action="checkout" data-plan="ELITE">Get Elite Pass</button></article></div><p class="muted" style="font-size:9px;margin:14px 0 0;text-align:center">Demo pricing only. Checkout below is a local simulation and does not collect or process money.</p></div></div>`;
  }
  if (exam.activeModal === 'checkout') {
    const amount = exam.selectedPlan === 'PRO' ? (state.billingCycle === 'annual' ? '₹499' : '₹99') : (state.billingCycle === 'annual' ? '₹899' : '₹199');
    return `<div class="modal-backdrop"><div class="modal narrow"><button class="modal-close" data-action="close-modal">×</button><div style="text-align:center"><span class="tag green">SIMULATED GATEWAY</span><h2 style="margin-top:12px">Upgrade to ${exam.selectedPlan} Pass</h2><p class="modal-sub">Total payable: <strong class="text-green mono">${amount}</strong> (${state.billingCycle})</p></div><div class="solution-info">Select Payment Method:<div class="grid grid-2" style="margin-top:10px"><button class="btn btn-secondary">⚡ UPI Instant</button><button class="btn btn-secondary">▣ Card / Netbanking</button></div></div><label class="label">UPI ID / VPA (demo only)</label><input class="field" type="text" value="candidate@upi" disabled><p class="muted" style="font-size:9px;line-height:1.6">This is a front-end demonstration. No payment gateway is connected and no payment will be made.</p><button class="btn btn-primary btn-block" data-action="simulate-payment" ${exam.processingPayment ? 'disabled' : ''}>${exam.processingPayment ? '◌ Verifying Demo...' : '✓ Simulate Unlock'}</button></div></div>`;
  }
  if (exam.activeModal === 'auth') {
    const m = exam.authMode;
    const copy = m === 'login'
      ? { badge: 'log-in', title: 'Welcome back, aspirant', sub: 'Sign in to continue your preparation exactly where you left off.' }
      : m === 'signup'
        ? { badge: 'user-plus', title: 'Create Aspirant Account', sub: 'Track mock tests, PYQs and chapter practice across every section.' }
        : { badge: 'mail', title: 'Reset your password', sub: "Enter your registered email and we'll send a recovery link." };
    return `<div class="modal-backdrop"><div class="modal narrow auth-modal"><button class="modal-close" data-action="close-modal">×</button>
      <div class="auth-head"><span class="auth-badge">${iconSvg(copy.badge, 22)}</span><h2>${copy.title}</h2><p class="modal-sub">${copy.sub} <span class="tag">Demo form · no server auth</span></p></div>
      ${m !== 'forgot' ? `<div class="auth-tabs"><button type="button" class="auth-tab ${m === 'login' ? 'active' : ''}" data-action="auth-mode" data-mode="login">Sign In</button><button type="button" class="auth-tab ${m === 'signup' ? 'active' : ''}" data-action="auth-mode" data-mode="signup">Sign Up Free</button></div>` : ''}
      <form id="authForm" class="form-stack">
        <input type="hidden" name="mode" value="${m}">
        ${m === 'signup' ? '<label>Full Name<input class="field" name="name" type="text" required placeholder="Your full name"></label>' : ''}
        ${m === 'forgot' ? '<label>Registered Email Address<input class="field" name="email" type="email" required placeholder="name@example.com"></label>' : '<label>Email Address<input class="field" name="email" type="email" required placeholder="name@example.com"></label>'}
        ${m === 'login' ? '<label>Password<input class="field" name="password" type="password" required placeholder="Enter your password"></label><div class="auth-links-row"><button type="button" class="auth-link" data-action="auth-mode" data-mode="forgot">Forgot password?</button></div>' : ''}
        ${m === 'signup' ? '<label>Create Password<input class="field" name="password" type="password" required placeholder="Minimum 6 characters"></label>' : ''}
        ${m === 'signup' ? `<label>Select Your State<span class="field-wrap"><select class="field auth-select" name="state" required><option value="" disabled ${state.user.state ? '' : 'selected'}>Choose your state</option>${INDIAN_STATES.map(item => `<option value="${item}" ${state.user.state === item ? 'selected' : ''}>${item}</option>`).join('')}</select><span class="field-caret">${iconSvg('chevron-down', 14)}</span></span></label>` : ''}
        ${m === 'forgot' ? `<p class="confirm-note risk">${iconSvg('shield', 13)} Demo platform — no real email is sent. Submitting only shows a confirmation toast and returns you to Sign In.</p>` : ''}
        <button class="btn btn-primary btn-block" type="submit">${m === 'login' ? 'Sign In →' : m === 'signup' ? 'Create Account →' : 'Send Reset Link →'}</button>
      </form>
      <p class="auth-foot">${m === 'signup' ? 'Already registered? <button type="button" class="auth-link" data-action="auth-mode" data-mode="login">Sign In instead</button>' : 'New to SSC Flix? <button type="button" class="auth-link" data-action="auth-mode" data-mode="signup">Create a free account</button>'}</p>
    </div></div>`;
  }
  return '';
}
function render() {
  // Any re-render closes the navigation drawer: navigating from the menu,
  // opening the engine or a modal must never leave the drawer open behind.
  document.body.classList.remove('nav-open');
  setTheme(state.accentTheme);
  persist();
  if (exam.active) renderExam();
  else if (!state.welcomeCompleted && state.user.isLoggedIn) app.innerHTML = renderFirstWelcome() + renderModal();
  else if (state.activeTab === 'landing') renderWelcome();
  else renderApp();
}

// Click handling is delegated so newly rendered buttons work without extra listeners.
app.addEventListener('click', event => {
  const button = event.target.closest('[data-action]');
  if (!button) return;
  const action = button.dataset.action;
  const id = button.dataset.id;
  switch (action) {
    case 'nav': state.activeTab = button.dataset.tab; exam.profileOpen = false; exam.notificationsOpen = false; exam.examSwitchOpen = false; exam.mobileMoreOpen = false; render(); break;
    case 'toggle-drawer': document.body.classList.toggle('nav-open'); break;
    case 'mobile-more': exam.mobileMoreOpen = !exam.mobileMoreOpen; render(); break;
    case 'close-mobile-more': exam.mobileMoreOpen = false; render(); break;
    case 'close-drawer': document.body.classList.remove('nav-open'); break;
    case 'welcome-select-exam': {
      const target = EXAM_CATEGORIES.find(item => item.id === button.dataset.exam);
      if (!target) break;
      state.selectedExamId = target.id;
      persist();
      render();
      break;
    }
    case 'welcome-language': {
      if (!['en', 'hi'].includes(button.dataset.lang)) break;
      state.lang = button.dataset.lang;
      persist();
      render();
      break;
    }
    case 'welcome-complete': {
      state.welcomeCompleted = true;
      state.activeTab = 'dashboard';
      persist();
      render();
      showToast('Your study space is ready', iconSvg('check-circle', 14));
      break;
    }
    case 'choose-exam': setTargetExam(button.dataset.exam, true); break;
    case 'exam-switch': exam.examSwitchOpen = !exam.examSwitchOpen; exam.profileOpen = false; exam.notificationsOpen = false; render(); break;
    case 'exam-switch-select': setTargetExam(button.dataset.exam); break;
    case 'toggle-language': state.lang = isHindi() ? 'en' : 'hi'; render(); break;
    case 'toggle-mode': state.themePreferenceSet = true; state.themeMode = state.themeMode === 'light' ? 'dark' : 'light'; applyTheme(); persist(); render(); showToast(state.themeMode === 'light' ? 'Light mode on' : 'Dark mode on', iconSvg(state.themeMode === 'light' ? 'sun' : 'moon', 14)); break;
    case 'notifications': exam.notificationsOpen = !exam.notificationsOpen; exam.profileOpen = false; exam.examSwitchOpen = false; render(); break;
    case 'profile-notifications': exam.notificationsOpen = !exam.notificationsOpen; exam.profileOpen = true; exam.examSwitchOpen = false; render(); break;
    case 'profile': exam.profileOpen = !exam.profileOpen; exam.notificationsOpen = false; exam.examSwitchOpen = false; render(); break;
    case 'open-subscription': exam.activeModal = 'subscription'; render(); break;
    case 'open-auth': exam.activeModal = 'auth'; exam.authMode = button.dataset.mode || 'login'; render(); break;
    case 'close-modal': exam.activeModal = ''; exam.processingPayment = false; render(); break;
    case 'logout': state.user.isLoggedIn = false; exam.profileOpen = false; state.activeTab = 'landing'; render(); break;
    case 'start-free': startExam(`${currentExam().code} Free Diagnostic Mock`); break;
    case 'wl-goto': { const target = document.getElementById(button.dataset.target); if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' }); } break;
    case 'wl-filter': exam.workspaceFilter = button.dataset.cat; render(); break;
    case 'scroll-welcome': $('.landing-features')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); break;
    case 'resume-mock': startExam(`${currentExam().code} Tier-I Full Mock #08`); break;
    case 'start-recommendation': startExam(button.dataset.title, button.dataset.premium === 'true'); break;
    case 'start-mock': startExam(button.dataset.title, button.dataset.premium === 'true'); break;
    case 'mocks-view': state.mocksView = button.dataset.view === 'sectional' ? 'sectional' : 'full'; persist(); render(); break;
    case 'pyq-view': state.pyqView = button.dataset.view === 'sectional' ? 'sectional' : 'full'; persist(); render(); break;
    case 'practice-subject': { const s = PRACTICE_LIST.find(item => item.id === button.dataset.subject); if (s) { state.practiceSubject = s.id; persist(); render(); } break; }
    case 'mytests-view': state.myTestsView = button.dataset.view === 'pending' ? 'pending' : 'attempted'; persist(); render(); break;
    case 'leaderboard-view': state.leaderboardView = button.dataset.view === 'alltime' ? 'alltime' : 'weekly'; persist(); render(); break;
    case 'start-mytest': startExam(button.dataset.title); break;
    case 'start-pyq': startExam(`${currentExam().code} PYQ: ${button.dataset.shift}`); break;
    case 'bookmarks-subject': { const s = PRACTICE_LIST.find(item => item.id === button.dataset.subject); if (s) { state.bookmarksSubject = s.id; persist(); render(); } break; }
    case 'start-practice': { const subject = PRACTICE_LIST.find(item => item.id === button.dataset.subject); startExam(button.dataset.title || `Practice Set: ${subject?.name || 'Chapter Practice'}`); break; }
    case 'resolve-bookmark': {
      const q = allQuestions().find(item => item.id === button.dataset.id);
      if (!q) break;
      startExam(`${currentExam().code} Bookmark Re-solve`);
      changeQuestion(Math.max(0, questionsFor(q.sectionId).findIndex(item => item.id === q.id)), q.sectionId);
      break;
    }
    case 'study-mode': state.studyModeActive = button.dataset.value === 'true'; render(); break;
    case 'toggle-hint': state.showHintsMap[id] = !state.showHintsMap[id]; render(); break;
    case 'remove-bookmark': toggleBookmark(id); break;
    case 'bookmark-current': toggleBookmark(currentQuestion().id); break;
    case 'theme': setTheme(button.dataset.theme); render(); break;
    case 'avatar-upload': document.getElementById('avatarUpload')?.click(); break;
    case 'avatar-photo-remove': state.user = { ...state.user, avatarType: 'monogram', avatarImage: '' }; persist(); render(); break;
    case 'billing': state.billingCycle = button.dataset.cycle; render(); break;
    case 'checkout': exam.selectedPlan = button.dataset.plan; exam.activeModal = 'checkout'; render(); break;
    case 'simulate-payment':
      exam.processingPayment = true; render();
      setTimeout(() => { state.user.plan = exam.selectedPlan; exam.processingPayment = false; exam.activeModal = ''; persist(); render(); }, 1500);
      break;
    case 'auth-mode': exam.authMode = button.dataset.mode; render(); break;
    case 'start-auth': exam.activeModal = 'auth'; render(); break;
    case 'exam-section': changeQuestion(0, button.dataset.section); break;
    case 'select-option': {
      const q = currentQuestion();
      state.userState[q.id] = { ...state.userState[q.id], selectedOption: Number(button.dataset.option) };
      persist(); render(); break;
    }
    case 'mark-next': {
      const q = currentQuestion(); const selected = state.userState[q.id].selectedOption;
      state.userState[q.id].status = selected !== null ? 'ANSWERED_MARKED' : 'MARKED';
      persist(); navigateNext(); break;
    }
    case 'clear-response': {
      const q = currentQuestion(); const marked = state.userState[q.id].status.includes('MARKED');
      state.userState[q.id] = { selectedOption: null, status: marked ? 'MARKED' : 'UNANSWERED' };
      render(); break;
    }
    case 'save-next': {
      const q = currentQuestion();
      state.userState[q.id].status = state.userState[q.id].selectedOption !== null ? 'ANSWERED' : 'UNANSWERED';
      persist(); navigateNext(); break;
    }
    case 'previous-question': navigatePrevious(); break;
    case 'palette-question': changeQuestion(Number(button.dataset.index)); break;
    case 'submit-exam': if (exam.studyMode) { submitExam(); break; } exam.confirmSubmit = true; render(); break;
    case 'exit-exam': if (exam.studyMode) { exitExamTo(state.activeTab); break; } exam.confirmExit = true; render(); break;
    case 'submit-final': exam.confirmSubmit = false; submitExam(); break;
    case 'exit-final': exam.confirmExit = false; exitExamTo(state.activeTab); break;
    case 'cancel-confirm': exam.confirmExit = false; exam.confirmSubmit = false; render(); break;
    case 'report-view': exam.reportView = button.dataset.view || 'analytics'; render(); break;
    case 'reattempt-wrong': startWrongPractice(); break;
    case 'pause-test': exam.paused = true; clearInterval(timerHandle); render(); break;
    case 'resume-test': exam.paused = false; render(); showToast('Test resumed — timer running', iconSvg('play-circle', 14)); startTimer(); break;
    case 'cancel-report': exam.reportOpen = false; render(); break;
    case 'exit-practice': exam.submitted = true; exitExamTo('dashboard'); break;
    case 'report-question': exam.reportOpen = true; render(); break;
    case 'report-submit': {
      const reason = exam.reportReason;
      const detail = document.getElementById('reportNote')?.value.trim() || '';
      exam.reportOpen = false; render();
      showToast(`Question reported (${reason})${detail ? ' — thanks!' : ''}`, iconSvg('flag', 14));
      break;
    }
    case 'gate-begin': if (!exam.gateAccepted) break; exam.entryGate = false; render(); showToast('Test started — all the best!', iconSvg('play-circle', 14)); startTimer(); break;
    case 'gate-exit': exam.submitted = true; exam.entryGate = false; exam.gateAccepted = false; exitExamTo(state.activeTab); break;
    case 'instructions': exam.showInstructions = !exam.showInstructions; render(); break;
    case 'solution-filter': exam.solutionFilter = button.dataset.filter; render(); break;
    case 'exit-to-mytests': state.myTestsView = 'attempted'; persist(); exitExamTo('mytests'); break;
  }
});

app.addEventListener('change', event => {
  const target = event.target;
  if (target.dataset.change === 'exam') setTargetExam(target.value);
  if (target.dataset.change === 'gate-accept') { exam.gateAccepted = target.checked; render(); }
  if (target.dataset.change === 'report-reason') { exam.reportReason = target.value; }
  if (target.dataset.change === 'language') { state.lang = target.value; render(); }
  if (target.dataset.change === 'palette-filter') { exam.paletteFilter = target.value; render(); }
  if (target.dataset.change === 'sectional-subject') { state.sectionalSubject = target.value; persist(); render(); }
  if (target.dataset.change === 'pyq-year') { state.pyqYear = target.value; persist(); render(); }
  if (target.dataset.change === 'pyq-subject') { state.pyqSubject = target.value; persist(); render(); }
  if (target.dataset.change === 'display-name') { const name = target.value.trim(); if (name) { state.user = { ...state.user, name }; persist(); render(); } }
  if (target.dataset.change === 'avatar-file') handleAvatarFile(target.files && target.files[0]);
});
app.addEventListener('input', event => {
  const target = event.target;
  if (target.id === 'globalSearch' || target.id === 'globalSearchMobile') {
    const caret = target.selectionStart;
    const activeSearchId = target.id;
    state.globalSearch = target.value;
    render();
    const fresh = document.getElementById(activeSearchId);
    if (fresh) {
      fresh.focus();
      if (typeof caret === 'number') fresh.setSelectionRange(caret, caret);
    }
  }
  if (target.dataset.noteId) {
    state.customNotes[target.dataset.noteId] = target.value;
    persist();
  }
});
app.addEventListener('submit', event => {
  if (event.target.id !== 'authForm') return;
  event.preventDefault();
  const form = new FormData(event.target);
  const mode = String(form.get('mode') || 'login');
  const email = String(form.get('email') || '').trim();
  if (!email) return;
  if (mode === 'forgot') {
    exam.authMode = 'login';
    render();
    showToast(`Demo password reset queued for ${email} — no real email is sent.`, iconSvg('mail', 14));
    return;
  }
  const name = String(form.get('name') || '').trim();
  const aspirantState = String(form.get('state') || '').trim();
  if (mode === 'signup') state.user = { ...state.user, isLoggedIn: true, email, name: name || state.user.name || 'SSC Aspirant', state: aspirantState || state.user.state || '' };
  else state.user = { ...state.user, isLoggedIn: true, email };
  if (mode === 'signup') state.welcomeCompleted = false;
  exam.activeModal = '';
  if (state.activeTab === 'landing') state.activeTab = 'dashboard';
  persist();
  render();
});

// Close open popovers when clicking outside their controls.
document.addEventListener('click', event => {
  if (!exam.profileOpen && !exam.notificationsOpen) return;
  if (event.target.closest('.profile-menu, .notification-menu, .exam-switch-menu, [data-action="profile"], [data-action="notifications"], [data-action="exam-switch"]')) return;
  exam.profileOpen = false;
  exam.notificationsOpen = false;
  if (!exam.active && !exam.activeModal) render();
});

setTheme(state.accentTheme);
render();
