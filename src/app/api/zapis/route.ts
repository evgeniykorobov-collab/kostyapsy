import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const DIRECTION_LABELS: Record<string, string> = {
  razvod: 'Развод и расставание',
  poterya: 'Потеря и горе',
  vygoranie: 'Выгорание и увольнение',
  ekzistencia: 'Экзистенциальный тупик',
  ostroe: 'Острые состояния / паника',
  drugoe: 'Другое',
};

const FORMAT_LABELS: Record<string, string> = {
  online: 'Онлайн',
  offline: 'Очно',
  '': 'Не указан',
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, contact, email, direction, format, comment } = body;

    if (!name?.trim() || !contact?.trim()) {
      return NextResponse.json({ error: 'Имя и контакт обязательны' }, { status: 400 });
    }

    const lines = [
      '📋 Новая заявка на консультацию',
      '',
      `👤 Имя: ${name}`,
      `📱 Контакт: ${contact}`,
      email ? `📧 Email: ${email}` : null,
      direction ? `🎯 Направление: ${DIRECTION_LABELS[direction] || direction}` : null,
      format ? `📍 Формат: ${FORMAT_LABELS[format] || format}` : null,
      comment ? `💬 Комментарий: ${comment}` : null,
      '',
      `🕐 ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}`,
    ];

    const text = lines.filter(Boolean).join('\n');

    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      const tgRes = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text,
            parse_mode: 'HTML',
          }),
        }
      );

      if (!tgRes.ok) {
        console.error('Telegram API error:', await tgRes.text());
        return NextResponse.json({ error: 'Ошибка отправки' }, { status: 502 });
      }
    } else {
      console.log('--- ЗАЯВКА (Telegram не настроен) ---');
      console.log(text);
      console.log('---');
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('Form submission error:', e);
    return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}
