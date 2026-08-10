<div align="center">

# 🎵 Local Music Discord Bot

[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![Discord.js](https://img.shields.io/badge/Discord.js-14.x-5865F2?style=for-the-badge&logo=discord)](https://discord.js.org/)
[![Support](https://img.shields.io/badge/💬-Discord-5865F2?style=for-the-badge&logo=discord)](https://discord.gg/REenS3jB72)
[![PayPal](https://img.shields.io/badge/💰-Donate-00457C?style=for-the-badge&logo=paypal)](https://paypal.me/Alaaabushamaa)
[![Hosting](https://img.shields.io/badge/🚀-Wispbyte-6A0DAD?style=for-the-badge&logo=cloud)](https://wispbyte.com/)

</div>

---

## 📖 نبذة

بوت ديسكورد بدائي لتشغيل الموسيقى محلياً من مجلد `audios`، يتم التحكم به عبر أوامر داخل السيرفر. مبني بـ Node.js و Discord.js، مفتوح المصدر وقابل للتطوير.

---

## ✨ المميزات

- تشغيل محلي من مجلد `audios`
- أوامر صوتية داخل ديسكورد
- ملف `start.cmd` للتشغيل السريع في ويندوز
- أداة تنظيف `clean.js`
- هيكل بسيط مناسب للتطوير

---

## 📂 هيكل المشروع
📁 Local-Music-Bot/
├── 📁 audios/ # ضع ملفاتك الصوتية هنا
├── 📁 node_modules/ # اعتماديات المشروع
├── 📄 index.js # الملف الرئيسي (التوكن بداخله)
├── 📄 clean.js # أداة التنظيف
├── 📄 package.json # معلومات المشروع
├── 📄 package-lock.json # قفل الإصدارات
└── 📄 start.cmd # تشغيل سريع (ويندوز)

text

---

## ⚙️ طريقة التثبيت والتشغيل

```bash
# 1. تثبيت الاعتماديات
npm install

# 2. تعديل التوكن في ملف index.js
# ابحث عن: client.login('YOUR_TOKEN_HERE')
# واستبدله بتوكن البوت الخاص بك

# 3. ضع ملفاتك الصوتية في مجلد audios/

# 4. تشغيل البوت
npm start
# أو استخدم ملف start.cmd
🎮 الأوامر المتاحة
الأمر	الوظيفة
!play	تشغيل أغنية من مجلد audios
!pause	إيقاف التشغيل مؤقتاً
!resume	استئناف التشغيل
!skip	تخطي الأغنية الحالية
!stop	إيقاف التشغيل ومسح الطابور
!list	عرض قائمة الأغاني المتاحة
!help	عرض قائمة الأوامر
🛠️ للتطوير
المشروع بدائي ويحتاج إلى تطويرات مثل:

إضافة نظام .env للتوكن

دعم تشغيل من روابط YouTube

إضافة طابور أغاني (Queue)

دمج قاعدة بيانات

إضافة أوامر بحث متقدم

تحسين إدارة الأخطاء

☁️ استضافة مجانية
https://img.shields.io/badge/%F0%9F%9A%80_%D8%A7%D8%B3%D8%AA%D8%B6%D8%A7%D9%81%D8%A9_%D9%85%D8%AC%D8%A7%D9%86%D9%8A%D8%A9-Wispbyte-6A0DAD?style=for-the-badge&logo=cloud

💬 الدعم والمجتمع
https://img.shields.io/badge/%F0%9F%92%AC_%D8%A7%D9%86%D8%B6%D9%85_%D9%84%D9%84%D8%B3%D9%8A%D8%B1%D9%81%D8%B1-Nova_System-5865F2?style=for-the-badge&logo=discord

🤝 دعم المشروع
https://img.shields.io/badge/%F0%9F%92%B0_%D8%AF%D8%B9%D9%85_%D8%B9%D8%A8%D8%B1_PayPal-00457C?style=for-the-badge&logo=paypal

<div align="center">
⭐ لا تنسَ وضع نجمة للمشروع!

</div> ```
