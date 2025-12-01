export type Language = 'en' | 'hi' | 'ta' | 'te';

export interface Translations {
  // Header
  appName: string;
  appTagline: string;

  // Image Upload
  uploadTitle: string;
  uploadSubtitle: string;
  captureLeaf: string;
  captureDescription: string;
  takePhoto: string;
  uploadFile: string;
  retake: string;
  chooseFile: string;

  // Analysis
  analyzeButton: string;
  analyzingButton: string;
  analyzeAnother: string;

  // Loading
  loadingModel: string;
  preparingOffline: string;

  // Results
  confidence: string;
  treatmentInstructions: string;
  preventionTips: string;

  // Severity
  healthy: string;
  mild: string;
  severe: string;

  // Weather
  weatherTitle: string;
  weatherSubtitle: string;
  enterCity: string;
  checkWeather: string;
  loading: string;
  temperature: string;
  humidity: string;
  farmingAdvice: string;

  // Download
  downloadGuide: string;

  // Install
  installTitle: string;
  installDescription: string;
  install: string;

  // Footer
  footerText: string;

  // Toast messages
  noImageSelected: string;
  noImageDescription: string;
  modelNotLoaded: string;
  modelNotLoadedDescription: string;
  analysisComplete: string;
  detectedPrefix: string;
  analysisFailed: string;
  enterCityName: string;
  enterCityDescription: string;
  weatherUpdated: string;
  weatherFetchFailed: string;
  modelLoadFailed: string;
  modelLoadFailedDescription: string;

  // Language selector
  selectLanguage: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    appName: 'CropGPT',
    appTagline: 'AI-Powered Crop Disease Detection',
    
    uploadTitle: 'Capture Leaf Photo',
    uploadSubtitle: 'Take or upload an image for analysis',
    captureLeaf: 'Capture Leaf Photo',
    captureDescription: 'Take a clear, well-lit photo of the affected leaf for accurate diagnosis',
    takePhoto: 'Take Photo',
    uploadFile: 'Upload File',
    retake: 'Retake',
    chooseFile: 'Choose File',

    analyzeButton: 'Analyze Crop Disease',
    analyzingButton: 'Analyzing Disease...',
    analyzeAnother: 'Analyze Another Crop',

    loadingModel: 'Loading AI Model',
    preparingOffline: 'Preparing offline disease detection',

    confidence: 'Confidence:',
    treatmentInstructions: 'Treatment Instructions',
    preventionTips: 'Prevention Tips',

    healthy: 'HEALTHY',
    mild: 'MILD',
    severe: 'SEVERE',

    weatherTitle: 'Weather Conditions',
    weatherSubtitle: 'Get farming advice based on local weather',
    enterCity: 'Enter your city',
    checkWeather: 'Check',
    loading: 'Loading...',
    temperature: 'Temperature',
    humidity: 'Humidity',
    farmingAdvice: '🌾 Farming Advice',

    downloadGuide: 'Download Offline Treatment Guide',

    installTitle: 'Install CropGPT',
    installDescription: 'Add to your home screen for offline access in the field',
    install: 'Install',

    footerText: 'Built for farmers • Works offline • Always free',

    noImageSelected: 'No Image Selected',
    noImageDescription: 'Please upload a crop image first',
    modelNotLoaded: 'Model Not Loaded',
    modelNotLoadedDescription: 'Please upload and load the AI model first',
    analysisComplete: 'Analysis Complete',
    detectedPrefix: 'Detected:',
    analysisFailed: 'Analysis Failed',
    enterCityName: 'Enter City Name',
    enterCityDescription: 'Please enter your city or district name',
    weatherUpdated: 'Weather Updated',
    weatherFetchFailed: 'Weather Fetch Failed',
    modelLoadFailed: 'Model Loading Failed',
    modelLoadFailedDescription: 'Could not load the AI model. Please refresh the page.',

    selectLanguage: 'Select Language',
  },
  
  hi: {
    appName: 'CropGPT',
    appTagline: 'एआई-संचालित फसल रोग पहचान',
    
    uploadTitle: 'पत्ती की फोटो लें',
    uploadSubtitle: 'विश्लेषण के लिए फोटो लें या अपलोड करें',
    captureLeaf: 'पत्ती की फोटो लें',
    captureDescription: 'सटीक निदान के लिए प्रभावित पत्ती की स्पष्ट, अच्छी रोशनी वाली तस्वीर लें',
    takePhoto: 'फोटो लें',
    uploadFile: 'फाइल अपलोड करें',
    retake: 'फिर से लें',
    chooseFile: 'फाइल चुनें',

    analyzeButton: 'फसल रोग का विश्लेषण करें',
    analyzingButton: 'रोग का विश्लेषण हो रहा है...',
    analyzeAnother: 'एक और फसल का विश्लेषण करें',

    loadingModel: 'एआई मॉडल लोड हो रहा है',
    preparingOffline: 'ऑफलाइन रोग पहचान तैयार हो रही है',

    confidence: 'विश्वास:',
    treatmentInstructions: 'उपचार निर्देश',
    preventionTips: 'रोकथाम के सुझाव',

    healthy: 'स्वस्थ',
    mild: 'हल्का',
    severe: 'गंभीर',

    weatherTitle: 'मौसम की स्थिति',
    weatherSubtitle: 'स्थानीय मौसम के आधार पर खेती की सलाह प्राप्त करें',
    enterCity: 'अपना शहर दर्ज करें',
    checkWeather: 'जांचें',
    loading: 'लोड हो रहा है...',
    temperature: 'तापमान',
    humidity: 'नमी',
    farmingAdvice: '🌾 खेती की सलाह',

    downloadGuide: 'ऑफलाइन उपचार गाइड डाउनलोड करें',

    installTitle: 'CropGPT इंस्टॉल करें',
    installDescription: 'खेत में ऑफलाइन एक्सेस के लिए अपनी होम स्क्रीन पर जोड़ें',
    install: 'इंस्टॉल करें',

    footerText: 'किसानों के लिए बनाया गया • ऑफलाइन काम करता है • हमेशा मुफ्त',

    noImageSelected: 'कोई छवि नहीं चुनी गई',
    noImageDescription: 'कृपया पहले एक फसल की छवि अपलोड करें',
    modelNotLoaded: 'मॉडल लोड नहीं हुआ',
    modelNotLoadedDescription: 'कृपया पहले एआई मॉडल अपलोड और लोड करें',
    analysisComplete: 'विश्लेषण पूर्ण',
    detectedPrefix: 'पहचाना गया:',
    analysisFailed: 'विश्लेषण विफल',
    enterCityName: 'शहर का नाम दर्ज करें',
    enterCityDescription: 'कृपया अपना शहर या जिले का नाम दर्ज करें',
    weatherUpdated: 'मौसम अपडेट हो गया',
    weatherFetchFailed: 'मौसम प्राप्त करने में विफल',
    modelLoadFailed: 'मॉडल लोडिंग विफल',
    modelLoadFailedDescription: 'एआई मॉडल लोड नहीं हो सका। कृपया पेज रिफ्रेश करें।',

    selectLanguage: 'भाषा चुनें',
  },

  ta: {
    appName: 'CropGPT',
    appTagline: 'AI-இயங்கும் பயிர் நோய் கண்டறிதல்',
    
    uploadTitle: 'இலை புகைப்படம் எடுக்கவும்',
    uploadSubtitle: 'பகுப்பாய்வுக்காக புகைப்படம் எடுக்கவும் அல்லது பதிவேற்றவும்',
    captureLeaf: 'இலை புகைப்படம் எடுக்கவும்',
    captureDescription: 'துல்லியமான நோய் கண்டறிதலுக்கு பாதிக்கப்பட்ட இலையின் தெளிவான, நல்ல வெளிச்ச புகைப்படம் எடுக்கவும்',
    takePhoto: 'புகைப்படம் எடு',
    uploadFile: 'கோப்பு பதிவேற்று',
    retake: 'மீண்டும் எடு',
    chooseFile: 'கோப்பு தேர்வு',

    analyzeButton: 'பயிர் நோயை பகுப்பாய்வு செய்யவும்',
    analyzingButton: 'நோய் பகுப்பாய்வு செய்யப்படுகிறது...',
    analyzeAnother: 'மற்றொரு பயிரை பகுப்பாய்வு செய்யவும்',

    loadingModel: 'AI மாதிரி ஏற்றப்படுகிறது',
    preparingOffline: 'ஆஃப்லைன் நோய் கண்டறிதல் தயாராகிறது',

    confidence: 'நம்பிக்கை:',
    treatmentInstructions: 'சிகிச்சை வழிமுறைகள்',
    preventionTips: 'தடுப்பு குறிப்புகள்',

    healthy: 'ஆரோக்கியமான',
    mild: 'லேசான',
    severe: 'கடுமையான',

    weatherTitle: 'வானிலை நிலைமைகள்',
    weatherSubtitle: 'உள்ளூர் வானிலை அடிப்படையில் விவசாய ஆலோசனை பெறவும்',
    enterCity: 'உங்கள் நகரத்தை உள்ளிடவும்',
    checkWeather: 'சரிபார்',
    loading: 'ஏற்றுகிறது...',
    temperature: 'வெப்பநிலை',
    humidity: 'ஈரப்பதம்',
    farmingAdvice: '🌾 விவசாய ஆலோசனை',

    downloadGuide: 'ஆஃப்லைன் சிகிச்சை வழிகாட்டியை பதிவிறக்கவும்',

    installTitle: 'CropGPT நிறுவவும்',
    installDescription: 'வயலில் ஆஃப்லைன் அணுகலுக்கு உங்கள் முகப்பு திரையில் சேர்க்கவும்',
    install: 'நிறுவு',

    footerText: 'விவசாயிகளுக்காக உருவாக்கப்பட்டது • ஆஃப்லைனில் வேலை செய்யும் • எப்போதும் இலவசம்',

    noImageSelected: 'படம் தேர்ந்தெடுக்கப்படவில்லை',
    noImageDescription: 'முதலில் ஒரு பயிர் படத்தை பதிவேற்றவும்',
    modelNotLoaded: 'மாதிரி ஏற்றப்படவில்லை',
    modelNotLoadedDescription: 'முதலில் AI மாதிரியை பதிவேற்றி ஏற்றவும்',
    analysisComplete: 'பகுப்பாய்வு முடிந்தது',
    detectedPrefix: 'கண்டறியப்பட்டது:',
    analysisFailed: 'பகுப்பாய்வு தோல்வியடைந்தது',
    enterCityName: 'நகரத்தின் பெயரை உள்ளிடவும்',
    enterCityDescription: 'உங்கள் நகரம் அல்லது மாவட்டத்தின் பெயரை உள்ளிடவும்',
    weatherUpdated: 'வானிலை புதுப்பிக்கப்பட்டது',
    weatherFetchFailed: 'வானிலை பெறுவது தோல்வியடைந்தது',
    modelLoadFailed: 'மாதிரி ஏற்றுதல் தோல்வியடைந்தது',
    modelLoadFailedDescription: 'AI மாதிரியை ஏற்ற முடியவில்லை. பக்கத்தை புதுப்பிக்கவும்.',

    selectLanguage: 'மொழியைத் தேர்ந்தெடுக்கவும்',
  },

  te: {
    appName: 'CropGPT',
    appTagline: 'AI-ఆధారిత పంట వ్యాధి గుర్తింపు',
    
    uploadTitle: 'ఆకు ఫోటో తీయండి',
    uploadSubtitle: 'విశ్లేషణ కోసం ఫోటో తీయండి లేదా అప్‌లోడ్ చేయండి',
    captureLeaf: 'ఆకు ఫోటో తీయండి',
    captureDescription: 'ఖచ్చితమైన నిర్ధారణ కోసం ప్రభావిత ఆకు యొక్క స్పష్టమైన, మంచి వెలుతురు ఫోటో తీయండి',
    takePhoto: 'ఫోటో తీయండి',
    uploadFile: 'ఫైల్ అప్‌లోడ్ చేయండి',
    retake: 'మళ్లీ తీయండి',
    chooseFile: 'ఫైల్ ఎంచుకోండి',

    analyzeButton: 'పంట వ్యాధిని విశ్లేషించండి',
    analyzingButton: 'వ్యాధి విశ్లేషించబడుతోంది...',
    analyzeAnother: 'మరొక పంటను విశ్లేషించండి',

    loadingModel: 'AI మోడల్ లోడ్ అవుతోంది',
    preparingOffline: 'ఆఫ్‌లైన్ వ్యాధి గుర్తింపు సిద్ధమవుతోంది',

    confidence: 'విశ్వాసం:',
    treatmentInstructions: 'చికిత్స సూచనలు',
    preventionTips: 'నివారణ చిట్కాలు',

    healthy: 'ఆరోగ్యకరమైన',
    mild: 'తేలికైన',
    severe: 'తీవ్రమైన',

    weatherTitle: 'వాతావరణ పరిస్థితులు',
    weatherSubtitle: 'స్థానిక వాతావరణం ఆధారంగా వ్యవసాయ సలహా పొందండి',
    enterCity: 'మీ నగరాన్ని నమోదు చేయండి',
    checkWeather: 'తనిఖీ చేయండి',
    loading: 'లోడ్ అవుతోంది...',
    temperature: 'ఉష్ణోగ్రత',
    humidity: 'తేమ',
    farmingAdvice: '🌾 వ్యవసాయ సలహా',

    downloadGuide: 'ఆఫ్‌లైన్ చికిత్స గైడ్‌ను డౌన్‌లోడ్ చేయండి',

    installTitle: 'CropGPT ఇన్‌స్టాల్ చేయండి',
    installDescription: 'పొలంలో ఆఫ్‌లైన్ యాక్సెస్ కోసం మీ హోమ్ స్క్రీన్‌కు జోడించండి',
    install: 'ఇన్‌స్టాల్ చేయండి',

    footerText: 'రైతుల కోసం నిర్మించబడింది • ఆఫ్‌లైన్‌లో పనిచేస్తుంది • ఎల్లప్పుడూ ఉచితం',

    noImageSelected: 'చిత్రం ఎంచుకోబడలేదు',
    noImageDescription: 'దయచేసి మొదట పంట చిత్రాన్ని అప్‌లోడ్ చేయండి',
    modelNotLoaded: 'మోడల్ లోడ్ కాలేదు',
    modelNotLoadedDescription: 'దయచేసి మొదట AI మోడల్‌ను అప్‌లోడ్ చేసి లోడ్ చేయండి',
    analysisComplete: 'విశ్లేషణ పూర్తయింది',
    detectedPrefix: 'గుర్తించబడింది:',
    analysisFailed: 'విశ్లేషణ విఫలమైంది',
    enterCityName: 'నగరం పేరు నమోదు చేయండి',
    enterCityDescription: 'దయచేసి మీ నగరం లేదా జిల్లా పేరును నమోదు చేయండి',
    weatherUpdated: 'వాతావరణం నవీకరించబడింది',
    weatherFetchFailed: 'వాతావరణం పొందడం విఫలమైంది',
    modelLoadFailed: 'మోడల్ లోడింగ్ విఫలమైంది',
    modelLoadFailedDescription: 'AI మోడల్‌ను లోడ్ చేయడం సాధ్యం కాలేదు. దయచేసి పేజీని రిఫ్రెష్ చేయండి.',

    selectLanguage: 'భాషను ఎంచుకోండి',
  },
};

export const languageNames: Record<Language, string> = {
  en: 'English',
  hi: 'हिंदी',
  ta: 'தமிழ்',
  te: 'తెలుగు',
};
