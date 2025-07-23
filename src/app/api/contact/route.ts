import { sendMessage } from '@/lib/mail';
import { ContactFormType } from '@/types';
import customResponse from '@/utils/custom-response';
import getErrorMessage from '@/utils/get-error-message';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
    try {
        const { name, email, message } =
            (await request.json()) as ContactFormType;
        if (!name || !email || !message) {
            return customResponse(
                { success: false, message: 'All fields are required' },
                400
            );
        }

        // send message
        await sendMessage(name, email, message);

        // / todo: add (name, email, message) to the database (mongodb) // for later reference
        // so that they can receive updates about you if you send out mail

        const response = NextResponse.json(
            {
                success: true,
                message:
                    'Your message has been delivered successfully. I’ll get back to you shortly.',
            },
            { status: 200 }
        );
        return response;
    } catch (error) {
        const message = getErrorMessage(error);
        return customResponse({ success: false, message }, 500);
    }
};
