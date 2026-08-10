🎵 Local Music Discord Bot

Local Music Discord Bot هو بوت Discord بسيط لتشغيل الملفات الصوتية المحلية، مبني باستخدام JavaScript وNode.js.

فكرة المشروع بسيطة ومباشرة: ضع ملفاتك الصوتية داخل مجلد audios، شغّل البوت، واستخدمه لتشغيل الصوت داخل سيرفر Discord.

المشروع لا يحاول أن يقدم نفسه كبوت موسيقى ضخم أو كنظام متكامل ينافس المشاريع الكبيرة.

الفكرة الأساسية هي توفير Base بسيطة للمطورين.

يمكنك أخذ المشروع، فهم الكود، تعديله، إعادة هيكلته، إضافة أنظمة جديدة، تطوير الـDashboard، أو حتى إعادة بناء أجزاء كبيرة منه بالطريقة التي تناسبك.

Simple by design. Built for developers.

✨ Features
🎵 تشغيل الملفات الصوتية المحلية.
📁 استخدام مجلد audios لتخزين الملفات الصوتية.
🤖 Discord Bot مبني باستخدام Node.js.
🟨 JavaScript.
📦 إدارة التبعيات باستخدام npm.
🎛️ Dashboard للإدارة.
🔧 بنية بسيطة وقابلة للتعديل.
🚀 قابل للتطوير وإعادة البناء.

المشروع حاليًا بسيط، وهذا مقصود؛ الهدف هو أن يكون نقطة بداية يستطيع المطور البناء فوقها.

🧑‍💻 Build Something Bigger

يمكنك تطوير المشروع وإضافة أي أنظمة تحتاجها، مثل:

🎶 Queue System
⏭️ Next / Previous
🔀 Shuffle
🔁 Loop
🔊 Volume Control
🎚️ Audio Filters
📻 Streaming
🌐 Web Dashboard
🔐 Authentication
💾 Database
📊 Statistics
🛡️ Permission System
🧩 Plugin System
⚙️ Configuration System

أو يمكنك إعادة هيكلة المشروع بالكامل وبناء نسخة مختلفة منه.

الكود هو نقطة البداية، والتطوير بيدك.

🚀 Local Installation

لتشغيل المشروع على جهازك، تحتاج إلى Node.js و Git.

ابدأ باستنساخ المستودع:

git clone https://github.com/abushama1-ar/bot_voic.git

ثم انتقل إلى مجلد المشروع:

cd bot_voic

بعد ذلك قم بتثبيت جميع التبعيات:

npm install

ضع ملفات الصوت التي تريد تشغيلها داخل مجلد:

audios/

مثلًا:

audios/song-01.mp3

ثم شغّل البوت باستخدام:

npm start

أو يمكنك تشغيله مباشرة باستخدام:

node index.js

وعلى Windows يمكنك أيضًا استخدام ملف:

start.cmd

⚡ Quick Start

إذا كان Git وNode.js مثبتين لديك، فالخطوات هي:

git clone https://github.com/abushama1-ar/bot_voic.git

cd bot_voic

npm install

npm start

أو:

node index.js

📁 Project Structure

المشروع يحتوي حاليًا على بنية بسيطة:

bot_voic/

├── audios/ — ملفات الصوت المحلية
├── node_modules/ — الحزم المثبتة
├── clean.js — ملف مساعد
├── index.js — ملف تشغيل البوت
├── package.json — إعدادات المشروع والتبعيات
├── package-lock.json — معلومات التبعيات
└── start.cmd — تشغيل سريع على Windows

🛠️ Requirements

قبل تشغيل المشروع تحتاج إلى:

Node.js
Git
Discord Bot
Discord Bot Token
اتصال بالإنترنت

يفضل استخدام إصدار حديث ومدعوم من Node.js.

☁️ Free Hosting — Wispbyte

يمكنك تشغيل البوت محليًا على جهازك، أو رفعه إلى خدمة استضافة.

Wispbyte توفر استضافة يمكن استخدامها لتشغيل البوت:

🌐 https://wispbyte.com/

بعد رفع المشروع إلى الاستضافة، قم بتثبيت التبعيات باستخدام:

npm install

ثم شغّل البوت:

npm start

أو:

node index.js

🔐 Security

لا تقم برفع المعلومات الحساسة إلى GitHub، خصوصًا:

Discord Bot Token
API Keys
Passwords
Database Credentials

إذا تم تسريب Discord Bot Token، قم بإلغائه وإنشاء Token جديد من Discord Developer Portal.

📜 Usage & Permissions
No Official License File

هذا المشروع لا يحتوي حاليًا على ملف LICENSE رسمي داخل المستودع.

وبحسب الإذن الممنوح من Nova System، يمكن استخدام كود المشروع كأساس للتطوير وإعادة البناء.

يسمح لك ذلك بـ:

تعديل الكود.
إعادة هيكلة المشروع.
إضافة أو إزالة الميزات.
تغيير التصميم والواجهة.
إنشاء نسخة خاصة بك.
استخدام المشروع كأساس لمشروع جديد.
تطوير نسخة تجارية.
بيع نسختك المعدلة.
إعادة توزيع نسختك المعدلة.

لا يشترط أن تبقى النسخة التي تطورها مطابقة للمشروع الأصلي.

مهم: هذا الإذن يتعلق بكود المشروع نفسه، أما المكتبات والتبعيات الخارجية فتخضع لرخصها وشروطها الخاصة.

كما أن استخدام المشروع لا يمنحك حقوق Discord أو العلامات التجارية أو الملفات الصوتية أو أي محتوى تابع لأطراف أخرى.

🚀 Fork It. Modify It. Rebuild It.

هذا المشروع ليس منتجًا نهائيًا.

إنه Starting Point.

إذا وجدت طريقة أفضل لبنائه — غيّره.

إذا أردت Dashboard مختلفة — ابنِها.

إذا أردت إضافة Database — أضفها.

إذا أردت إعادة كتابة المشروع بالكامل — افعلها.

إذا أردت تحويل البوت البسيط إلى مشروع أكبر — Go for it.

Start simple. Build something bigger.

🤝 Contributing

المساهمات مرحب بها.

يمكنك عمل Fork للمشروع، تطوير ميزات جديدة أو إصلاح المشاكل، ثم إرسال Pull Request.

سواء كانت مساهمتك صغيرة أو إعادة بناء كبيرة، فأنت مرحب بك.

💬 Support & Community

للدعم الفني، مناقشة التطوير، مشاركة الأفكار والتواصل مع مجتمع:

𝑵𝒐𝒗𝒂 𝑺𝒚𝒔𝒕𝒆𝒎

انضم إلى Discord:

https://discord.gg/REenS3jB72

❤️ Support Nova System

إذا استفدت من المشروع وأردت دعم استمرار تطوير مشاريع Nova System، يمكنك الدعم عبر PayPal:

https://paypal.me/Alaaabushamaa

كل دعم يساعد على استمرار تطوير المشاريع وتجربة أفكار جديدة.

🔗 Links

GitHub:
https://github.com/abushama1-ar/bot_voic

Wispbyte:
https://wispbyte.com/

Discord — Nova System:
https://discord.gg/REenS3jB72

PayPal:
https://paypal.me/Alaaabushamaa

𝑵𝒐𝒗𝒂 𝑺𝒚𝒔𝒕𝒆𝒎

Simple Base. Open Development. Your Ideas.

خذ المشروع، طوّره، أعد بناءه، وحوّله إلى شيء خاص بك.

Fork it. Modify it. Rebuild it. Make it yours.
