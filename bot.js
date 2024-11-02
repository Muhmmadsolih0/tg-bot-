const TelegramBot = require('node-telegram-bot-api');

// Telegram bot tokenini shu yerga yozing
const TOKEN = '7871185052:AAG67YsM1BO7CbjrBOZGD8ZNf5W31kY3mxM';  // O'zingizning haqiqiy bot tokeningizni kiriting

// Botni yaratamiz
const bot = new TelegramBot(TOKEN, { polling: true });

// Donatlar va ularning narxlari (UZS)
const DONATES = {
    'VIP': { '3_oy': '10 000 so\'m', 'butun_omr': '40 000 so\'m' },
    'MVP': { '3_oy': '32 000 so\'m', 'butun_omr': '73 000 so\'m' },
    'ULTRA': { '3_oy': '57 000 so\'m', 'butun_omr': '89 000 so\'m' },
    'ELITE': { '3_oy': '75 000 so\'m', 'butun_omr': '127 000 so\'m' }
};

// Boshlang'ich menyu
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const keyboard = [
        [{ text: "🟢 Survival", callback_data: 'Survival' }],
        [{ text: "🔴 Anarxiya", callback_data: 'Anarchy' }],
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
    const username = "@Special_Spacee";

    // Survival tanlanganda donat menyusini ko'rsatish
    if (action === 'Survival') {
        const keyboard = [
            [{ text: `🟢 VIP: ${DONATES['VIP']['3_oy']} (3 oy) | Butun umr: ${DONATES['VIP']['butun_omr']}`, callback_data: 'VIP' }],
            [{ text: `🟩 MVP: ${DONATES['MVP']['3_oy']} (3 oy) | Butun umr: ${DONATES['MVP']['butun_omr']}`, callback_data: 'MVP' }],
            [{ text: `🟧 ULTRA: ${DONATES['ULTRA']['3_oy']} (3 oy) | Butun umr: ${DONATES['ULTRA']['butun_omr']}`, callback_data: 'ULTRA' }],
            [{ text: `🟥 ELITE: ${DONATES['ELITE']['3_oy']} (3 oy) | Butun umr: ${DONATES['ELITE']['butun_omr']}`, callback_data: 'ELITE' }],
            [{ text: "🆔 Isbot", callback_data: 'show_username' }],
            [{ text: "🔙 Ortga qaytish", callback_data: 'main_menu' }]
        ];
        bot.editMessageText(`Survival donat turini tanlang:`
            
            , {
            chat_id: chatId,
            message_id: callbackQuery.message.message_id,
            reply_markup: { inline_keyboard: keyboard }
        });
    } 
    // Anarxiya tugmasi tanlanganda
    else if (action === 'Anarchy') {
        bot.editMessageText("🚨 Anarxiya rejimi tez kunda kutilmoqda!", {
            chat_id: chatId,
            message_id: callbackQuery.message.message_id
        });
    } 
            // Ortga qaytish menyusiga qaytish
            else if (action === 'main_menu') {
        const keyboard = [
            [{ text: "🟢 Survival", callback_data: 'Survival' }],
            [{ text: "🔴 Anarxiya", callback_data: 'Anarchy' }],
        ];
        bot.editMessageText("O'yin turini tanlang:", {
            chat_id: chatId,
            message_id: callbackQuery.message.message_id,
            reply_markup: { inline_keyboard: keyboard }
        });
    } 
    // Donat tugmalari tanlanganda
    else if (DONATES[action]) {a
        const user = callbackQuery.from.first_name;
        const donationInfo = DONATES[action];
        const keyboard = [
            [{ text: "🔙 Ortga qaytish", callback_data: 'main_menu' }]
        ]; // Ortga qaytish tugmasini qo'shish

        bot.editMessageText(
            `Rahmat, ${user}!\nSiz ${action} donatini tanladingiz.\nNarxlar:\n3 oy: ${donationInfo['3_oy']}\nButun umr: ${donationInfo['butun_omr']}\nBiz bilan bog'laning yoki to'lov qiling: ${username}`, 
            {
                chat_id: chatId,
                message_id: callbackQuery.message.message_id,
                reply_markup: { inline_keyboard: keyboard }
            }
        );
    } 
    // Isbot tugmasi tanlanganda
    else if (action === 'show_username') {
        const keyboard = [
            [{ text: "🔙 Ortga qaytish", callback_data: 'main_menu' }]
        ]; // Ortga qaytish tugmasini qo'shish

        bot.editMessageText(`Isbot uchun username: ${username}`, {
            chat_id: chatId,
            message_id: callbackQuery.message.message_id,
            reply_markup: { inline_keyboard: keyboard }
        });
    }
});
