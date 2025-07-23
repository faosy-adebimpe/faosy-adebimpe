import { alertMe, joinNewsletter } from '@/lib/mail';
import customResponse from '@/utils/custom-response';
import getErrorMessage from '@/utils/get-error-message';
import { NextRequest } from 'next/server';

export const POST = async (request: NextRequest) => {
    try {
        const { email } = await request.json();

        // check body errors
        if (!email) {
            return customResponse(
                {
                    success: false,
                    message: 'Please provide an email address.',
                },
                400
            );
        }

        // todo: add user email to the database (mongodb)
        // so that they can receive updates about you if you send out mail updates

        // send email
        await joinNewsletter(email);

        // alert me
        await alertMe(email);

        const response = Response.json({
            success: true,
            message: 'Thank you for joining my newsletter.',
        });

        return response;
    } catch (error) {
        const message = getErrorMessage(error);
        return customResponse({ success: false, message }, 500);
    }
};
