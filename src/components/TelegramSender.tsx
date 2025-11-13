import { useState } from "react";

export const TelegramSender = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const sendMessage = async (formData: { name: string; email: string; phone: string; message: string }) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const botToken = "8020514759:AAGItdigxcEy9RpGWJChdkKJoo0D5TERJwY";
    const chatId = "960366486";    

    const text = `
    user_name:${formData.name}
    user_email: ${formData.email}
    user_phone:${formData.phone}
    user_message: ${formData.message}
    `;

    try {
        const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            chat_id: chatId,
            text: text,
            }),
        });

        if (!res.ok) throw new Error("Failed to send message");

        setSuccess(true);
        } catch (err) {
        setError("Failed to send message to telegram");
        } finally {
        setLoading(false);
        }
    };

    return { sendMessage, loading, error, success };
};
