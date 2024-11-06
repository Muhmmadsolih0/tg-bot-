const TelegramBot = require('node-telegram-bot-api');

// Telegram bot tokenini shu yerga yozing
const TOKEN = '7842785285:AAGGFfRpCtlobD0BqwuzP47qLzLMszRvXiY';  // O'zingizning haqiqiy bot tokeningizni kiriting

// Botni yaratamiz
const bot = new TelegramBot(TOKEN, { polling: true });

// Yangi foydalanuvchilar bilan salomlashish
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    const welcomeMessage = "Salom, BYTEMC donat botga hush kelibsiz! IP: bytemc.uz";
    bot.sendMessage(chatId, welcomeMessage);

    // Boshlang'ich menyu
    const keyboard = [
        [{ text: "🟢 Survival", callback_data: 'Survival' }],
        [{ text: "🔴 Anarxiya", callback_data: 'Anarchy' }],
        [{ text: "⚔ Bedwars", callback_data: 'Bedwars' }] // Bedwars qo'shildi
    ];
    bot.sendMessage(chatId, "O'yin turini tanlang:", {
        reply_markup: {
            inline_keyboard: keyboard
        }
    });
});

// Tugmalar uchun callback query
bot.on('callback_query', (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    const action = callbackQuery.data;

    // Yangilangan username
    const username = "@Bytemc_ADMIN";

    // Survival tanlanganda donat menyusini ko'rsatish
    if (action === 'Survival') {
        const keyboard = [
            [{ text: `🌟 Vip - 10 000 so'm | ♾ UMRBOD: 100 000 so'm`, callback_data: 'Vip' }],
            [{ text: `🌟 Elite - 20 000 so'm | ♾ UMRBOD: 150 000 so'm`, callback_data: 'Elite' }],
            [{ text: `🌟 Prime - 30 000 so'm | ♾ UMRBOD: 200 000 so'm`, callback_data: 'Prime' }],
            [{ text: `🌟 Epicly - 40 000 so'm | ♾ UMRBOD: 230 000 so'm`, callback_data: 'Epicly' }],
            [{ text: `🌟 Ultra - 60 000 so'm | ♾ UMRBOD: 280 000 so'm`, callback_data: 'Ultra' }],
            [{ text: `🌟 Premium - 100 000 so'm | ♾ UMRBOD: 350 000 so'm`, callback_data: 'Premium' }],
            [{ text: `🌟 Universal - 120 000 so'm | ♾ UMRBOD: 600 000 so'm`, callback_data: 'Universal' }],
            [{ text: `🌟 Premium+ - 150 000 so'm | ♾ UMRBOD: 800 000 so'm`, callback_data: 'Premium+' }],
            [{ text: "🆔 Isbot", callback_data: 'show_username' }],
            [{ text: "🔙 Ortga qaytish", callback_data: 'main_menu' }]
        ];
        bot.editMessageText(`Survival donat turini tanlang:`, {
            chat_id: chatId,
            message_id: callbackQuery.message.message_id,
            reply_markup: { inline_keyboard: keyboard }
        });
    } 
    // Anarxiya tugmasi tanlanganda donat menyusini ko'rsatish
    else if (action === 'Anarchy') {
        const keyboard = [
            [{ text: `🌟 Askar - 10 000 so'm | ♾ UMRBOD: 90 000 so'm`, callback_data: 'Askar' }],
            [{ text: `🌟 Sarkarda - 20 000 so'm | ♾ UMRBOD: 140 000 so'm`, callback_data: 'Sarkarda' }],
            [{ text: `🌟 Fravn - 30 000 so'm | ♾ UMRBOD: 199 000 so'm`, callback_data: 'Fravn' }],
            [{ text: `🌟 Lord - 50 000 so'm | ♾ UMRBOD: 240 000 so'm`, callback_data: 'Lord' }],
            [{ text: `🌟 Gladiator - 60 000 so'm | ♾ UMRBOD: 299 000 so'm`, callback_data: 'Gladiator' }],
            [{ text: `🌟 Qirol - 80 000 so'm | ♾ UMRBOD: 340 000 so'm`, callback_data: 'Qirol' }],
            [{ text: `🌟 General - 110 000 so'm | ♾ UMRBOD: 590 000 so'm`, callback_data: 'General' }],
            [{ text: `🌟 Imperator - 130 000 so'm | ♾ UMRBOD: 800 000 so'm`, callback_data: 'Imperator' }],
            [{ text: "🆔 Isbot", callback_data: 'show_username' }],
            [{ text: "🔙 Ortga qaytish", callback_data: 'main_menu' }]
        ];
        bot.editMessageText(`Anarxiya donat turini tanlang:`, {
            chat_id: chatId,
            message_id: callbackQuery.message.message_id,
            reply_markup: { inline_keyboard: keyboard }
        });
    }
    // Bedwars tugmasi tanlanganda donat menyusini ko'rsatish
    else if (action === 'Bedwars') {
        const keyboard = [
            [{ text: `🟡 [Vip] - 8 000 so'm`, callback_data: 'Bedwars_Vip' }],
            [{ text: `🟣 [Vip+] - 19 000 so'm`, callback_data: 'Bedwars_Vip+' }],
            [{ text: `🔵 [Mvp] - 32 000 so'm`, callback_data: 'Bedwars_Mvp' }],
            [{ text: `🔴 [Mvp+] - 54 000 so'm`, callback_data: 'Bedwars_Mvp+' }],
            [{ text: "🆔 Isbot", callback_data: 'show_username' }],
            [{ text: "🔙 Ortga qaytish", callback_data: 'main_menu' }]
        ];
        bot.editMessageText(`Bedwars donat turini tanlang:`, {
            chat_id: chatId,
            message_id: callbackQuery.message.message_id,
            reply_markup: { inline_keyboard: keyboard }
        });
    } 
    // Ortga qaytish menyusiga qaytish
    else if (action === 'main_menu') {
        const keyboard = [
            [{ text: "🟢 Survival", callback_data: 'Survival' }],
            [{ text: "🔴 Anarxiya", callback_data: 'Anarchy' }],
            [{ text: "⚔ Bedwars", callback_data: 'Bedwars' }]
        ];
        bot.editMessageText("O'yin turini tanlang:", {
            chat_id: chatId,
            message_id: callbackQuery.message.message_id,
            reply_markup: { inline_keyboard: keyboard }
        });
    } 
    // Donat tugmalari tanlanganda
    else if (['Vip', 'Elite', 'Prime', 'Epicly', 'Ultra', 'Premium', 'Universal', 'Premium+', 'Askar', 'Sarkarda', 'Fravn', 'Lord', 'Gladiator', 'Qirol', 'General', 'Imperator', 'Bedwars_Vip', 'Bedwars_Vip+', 'Bedwars_Mvp', 'Bedwars_Mvp+'].includes(action)) {
        const user = callbackQuery.from.first_name;

        const donationInfo = {
            'Vip': { 'butun_omr': '100 000 so\'m' },
            'Elite': { 'butun_omr': '150 000 so\'m' },
            'Prime': { 'butun_omr': '200 000 so\'m' },
            'Epicly': { 'butun_omr': '230 000 so\'m' },
            'Ultra': { 'butun_omr': '280 000 so\'m' },
            'Premium': { 'butun_omr': '350 000 so\'m' },
            'Universal': { 'butun_omr': '600 000 so\'m' },
            'Premium+': { 'butun_omr': '800 000 so\'m' },
            'Askar': { 'butun_omr': '90 000 so\'m' },
            'Sarkarda': { 'butun_omr': '140 000 so\'m' },
            'Fravn': { 'butun_omr': '199 000 so\'m' },
            'Lord': { 'butun_omr': '240 000 so\'m' },
            'Gladiator': { 'butun_omr': '299 000 so\'m' },
            'Qirol': { 'butun_omr': '340 000 so\'m' },
            'General': { 'butun_omr': '590 000 so\'m' },
            'Imperator': { 'butun_omr': '800 000 so\'m' },
            'Bedwars_Vip': { 'butun_omr': '40 000 so\'m' },
            'Bedwars_Vip+': { 'butun_omr': '90 000 so\'m' },
            'Bedwars_Mvp': { 'butun_omr': '120 000 so\'m' },
            'Bedwars_Mvp+': { 'butun_omr': '150 000 so\'m' }
        }[action];

        const keyboard = [
            [{ text: "🔙 Ortga qaytish", callback_data: 'main_menu' }]
        ];

        bot.editMessageText(
            `Rahmat, ${user}!\nSiz ${action} donatini tanladingiz.\nNarxlar:\nButun umr: ${donationInfo['butun_omr']}\nBiz bilan bog'laning yoki to'lov qiling: ${username}`, 
            {
                chat_id: chatId,
                message_id: callbackQuery.message.message_id,
                reply_markup: { inline_keyboard: keyboard }
            }
        );
    } 
    // Isbot tugmasi bosilganda username ko'rsatish
    else if (action === 'show_username') {
        bot.editMessageText(`Admin bilan bog'lanish uchun: ${username}`, {
            chat_id: chatId,
            message_id: callbackQuery.message.message_id,
            reply_markup: {
                inline_keyboard: [
                    [{ text: "🔙 Ortga qaytish", callback_data: 'main_menu' }]
                ]
            }
        });
    }
});
