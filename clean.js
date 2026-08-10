const { REST, Routes } = require('discord.js');

const token = 'MTQwMjQzNzk3MjQ4NTIxNDI0OQ.GfSFAj.f9i_n2dS8cjb-HcitN7FTnU6rpmN0ihX1DCFCE';
const guildId = '1400184516957573120';
const clientId = '1402437972485214249'; // ايد البوت/التطبيق

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log(`جارٍ مسح كل الأوامر المحلية من السيرفر ${guildId}...`);

    // حذف كل الأوامر المحلية بالسيرفر (سلسلة الأوامر تبقى فارغة)
    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: [] },
    );

    console.log('تم مسح كل الأوامر المحلية في السيرفر بنجاح!');
  } catch (error) {
    console.error('حدث خطأ أثناء مسح الأوامر:', error);
  }
})();
