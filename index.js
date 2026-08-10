/**
 * ┌────────────────────────────────────────────────────────────┐
 * │                  🔒 جميع الحقوق محفوظة © 2025               │
 * │          تم برمجة هذا البوت بواسطة Abu Shama’a             │
 * │    يُمنع إعادة البيع أو النشر أو التعديل دون إذن خطي      │
 * │        Discord: https://discord.gg/                     │
 * └────────────────────────────────────────────────────────────┘
 */

const {
  Client,
  GatewayIntentBits,
  Events,
  EmbedBuilder,
  SlashCommandBuilder,
  REST,
  Routes,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  StringSelectMenuBuilder,
} = require("discord.js");

const {
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
  AudioPlayerStatus,
} = require("@discordjs/voice");

const RPC = require("discord-rpc");
const path = require("path");
const fs = require("fs");

// ===== إعدادات البوت =====
const TOKEN = ""; #حط توكن هان  يفضل عند تطوير بوت تضيف توكن في بيئة امنة تستدعي في الكود الاساسي 
const CLIENT_ID = ""; // نفس الـ Client ID حق البوت
const RPC_CLIENT_ID = CLIENT_ID;
let VOICE_CHANNEL_ID = null; // الروم المختار
const AUDIO_FOLDER = path.join(__dirname, "audios");

// ===== إنشاء بوت =====
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

// ===== Rich Presence =====
function startRichPresence() {
  const rpc = new RPC.Client({ transport: "ipc" });
  rpc.on("ready", () => {
    function setActivity() {
      rpc.setActivity({
        state: "معزوفة على الموسيقى",
        details: "استمتع بالأغاني مع الأصدقاء",
        startTimestamp: Date.now(),
        largeImageKey: "numbani_level_100",
        largeImageText: "Numbani - Level 100",
        smallImageKey: "rogue_level_100",
        smallImageText: " Rogue - Level 100",
        instance: false,
      });
    }
    setActivity();
    setInterval(setActivity, 15000);
  });
  rpc.login({ clientId: RPC_CLIENT_ID }).catch(console.error);
}

// ===== دوال تشغيل الأغاني =====
let globalPlayer = null;
let audioFiles = [];
let currentIndex = 0;
let connection = null;
let autoPlay = true;

function getAudioFiles() {
  return fs
    .readdirSync(AUDIO_FOLDER)
    .filter((file) => file.endsWith(".mp3"))
    .map((file) => path.join(AUDIO_FOLDER, file));
}

function playAudio(index) {
  if (!audioFiles.length || !connection) return;
  if (index >= audioFiles.length) index = 0;
  currentIndex = index;
  const resource = createAudioResource(audioFiles[currentIndex]);
  globalPlayer.play(resource);
}

function startPlayer(conn) {
  connection = conn;
  globalPlayer = createAudioPlayer();
  connection.subscribe(globalPlayer);

  globalPlayer.on(AudioPlayerStatus.Idle, () => {
    if (autoPlay) playAudio(currentIndex + 1);
  });

  globalPlayer.on("error", (error) =>
    console.error("🔴 خطأ في تشغيل الصوت:", error)
  );

  playAudio(0);
}

// ===== أوامر السلاش =====
const commands = [
  new SlashCommandBuilder()
    .setName("قائمة")
    .setDescription("فتح قائمة التحكم في البوت"),
].map((cmd) => cmd.toJSON());

const rest = new REST({ version: "10" }).setToken(TOKEN);
(async () => {
  try {
    console.log("⏳ جاري تسجيل أوامر السلاش...");
    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
    console.log("✅ تم تسجيل أوامر السلاش بنجاح.");
  } catch (error) {
    console.error(error);
  }
})();

// ===== جاهزية البوت =====
client.once(Events.ClientReady, async () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
  audioFiles = getAudioFiles();
  startRichPresence();
});

// ===== التفاعلات =====
client.on(Events.InteractionCreate, async (interaction) => {
  // ===== أمر /قائمة =====
  if (interaction.isCommand()) {
    if (interaction.commandName === "قائمة") {
      const embed = new EmbedBuilder()
        .setColor(0x00aeff)
        .setTitle("🎶 قائمة التحكم بالموسيقى")
        .setDescription(
          "استخدم الأزرار أدناه للتحكم:\n\n▶️ تشغيل\n⏹️ إيقاف\n⏭️ تخطي\n📜 عرض قائمة الأغاني\n🚪 خروج من الروم\n📡 اختيار روم"
        )
        .setThumbnail(interaction.user.displayAvatarURL())
        .setFooter({ text: "شكراً لاستخدامك البوت | ميزات قادمة 🔥" });

      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("play")
          .setLabel("تشغيل")
          .setStyle(ButtonStyle.Success)
          .setEmoji("▶️"),
        new ButtonBuilder()
          .setCustomId("stop")
          .setLabel("إيقاف")
          .setStyle(ButtonStyle.Danger)
          .setEmoji("⏹️"),
        new ButtonBuilder()
          .setCustomId("skip")
          .setLabel("تخطي")
          .setStyle(ButtonStyle.Primary)
          .setEmoji("⏭️"),
        new ButtonBuilder()
          .setCustomId("list")
          .setLabel("الأغاني")
          .setStyle(ButtonStyle.Secondary)
          .setEmoji("📜"),
        new ButtonBuilder()
          .setCustomId("leave")
          .setLabel("خروج")
          .setStyle(ButtonStyle.Secondary)
          .setEmoji("🚪")
      );

      const row2 = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("choose_room")
          .setLabel("اختيار روم")
          .setStyle(ButtonStyle.Primary)
          .setEmoji("📡")
      );

      await interaction.reply({ embeds: [embed], components: [row, row2] });
    }
  }

  // ===== الأزرار =====
  if (interaction.isButton()) {
    if (interaction.customId === "choose_room") {
      const guild = interaction.guild;
      const voiceChannels = guild.channels.cache.filter((ch) => ch.type === 2);

      const options = voiceChannels.map((ch) => ({
        label: ch.name,
        value: ch.id,
      }));

      const selectMenu = new StringSelectMenuBuilder()
        .setCustomId("select_room")
        .setPlaceholder("اختر روم صوتي 🎶")
        .addOptions(options);

      const row = new ActionRowBuilder().addComponents(selectMenu);

      await interaction.reply({
        content: "📡 اختر روم صوتي من القائمة:",
        components: [row],
        ephemeral: true,
      });
    }

    if (interaction.customId === "play") {
      if (!connection) {
        if (!VOICE_CHANNEL_ID) {
          await interaction.reply({
            content: "⚠️ لازم تختار روم أول باستخدام زر 📡.",
            ephemeral: true,
          });
          return;
        }
        const channel = await client.channels.fetch(VOICE_CHANNEL_ID);
        if (channel && channel.type === 2) {
          connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
            selfDeaf: false,
          });
          startPlayer(connection);
        }
      }
      autoPlay = true;
      playAudio(currentIndex);
      await interaction.reply({
        content: `▶️ جاري تشغيل: ${path.basename(audioFiles[currentIndex])}`,
        ephemeral: true,
      });
    }

    if (interaction.customId === "stop") {
      autoPlay = false;
      if (globalPlayer) globalPlayer.stop(true);
      await interaction.reply({
        content: "⏹️ تم إيقاف التشغيل.",
        ephemeral: true,
      });
    }

    if (interaction.customId === "skip") {
      playAudio(currentIndex + 1);
      await interaction.reply({
        content: `⏭️ تم التخطي إلى: ${path.basename(audioFiles[currentIndex])}`,
        ephemeral: true,
      });
    }

    if (interaction.customId === "list") {
      const listEmbed = new EmbedBuilder()
        .setColor(0x00ffcc)
        .setTitle("📜 قائمة الأغاني")
        .setDescription(
          audioFiles
            .map((f, i) =>
              i === currentIndex
                ? `🎶 **${i + 1}. ${path.basename(f)} (يشغل الآن)**`
                : `${i + 1}. ${path.basename(f)}`
            )
            .join("\n")
        );
      await interaction.reply({ embeds: [listEmbed], ephemeral: true });
    }

    if (interaction.customId === "leave") {
      if (connection) {
        connection.destroy();
        connection = null;
        await interaction.reply({
          content: "🚪 تم إخراج البوت من الروم.",
          ephemeral: true,
        });
      } else {
        await interaction.reply({
          content: "⚠️ البوت مش داخل أي روم.",
          ephemeral: true,
        });
      }
    }
  }

  // ===== القائمة المنسدلة =====
  if (interaction.isStringSelectMenu()) {
    if (interaction.customId === "select_room") {
      VOICE_CHANNEL_ID = interaction.values[0];
      await interaction.reply({
        content: `✅ تم اختيار الروم: <#${VOICE_CHANNEL_ID}>`,
        ephemeral: true,
      });
    }
  }
});

client.login(TOKEN);
// ===== المكتبات =====