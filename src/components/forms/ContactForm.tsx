'use client';

import { ContactFormType } from '@/types';
import capitalize from '@/utils/capitalize';
import getErrorMessage from '@/utils/get-error-message';
import axios from 'axios';
import { LoaderCircleIcon } from 'lucide-react';
import React from 'react';
import { useForm, FieldErrors } from 'react-hook-form';
import { toast } from 'sonner';

const ContactForm = () => {
    const form = useForm<ContactFormType>({
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });
    const { register, handleSubmit, formState, reset } = form;
    const { isSubmitting: isSending } = formState;

    const onSubmit = async (data: ContactFormType) => {
        try {
            const response = await axios.post('/api/contact', data);
            const { message } = response.data;
            toast.success(message);

            // reset values to default
            reset();
        } catch (error) {
            const message = getErrorMessage(error);
            toast.error(message);
        }
    };

    const onError = (errors: FieldErrors<ContactFormType>) => {
        const errorNames = Object.keys(errors)
            .map((error) => capitalize(error))
            .join(', ');
        toast.error(`All fields are required (${errorNames})`);
    };

    return (
        <form
            className="w-full flex flex-col gap-[20px]"
            onSubmit={handleSubmit(onSubmit, onError)}
        >
            <input
                type="text"
                className="border-[2px] border-[#303030] rounded-[8px] leading-[26.4px] px-[15px] py-0 text-[#898989] w-full h-[50px] focus:outline-[2px] focus:outline-(--theme-color) focus:border-transparent"
                placeholder="Name"
                {...register('name', {
                    required: { value: true, message: 'Name is required' },
                })}
            />
            <input
                type="text"
                className="border-[2px] border-[#303030] rounded-[8px] leading-[26.4px] px-[15px] py-0 text-[#898989] w-full h-[50px] focus:outline-[2px] focus:outline-(--theme-color) focus:border-transparent"
                placeholder="Email Address"
                {...register('email', {
                    required: { value: true, message: 'Email is required' },
                })}
            />

            <textarea
                className="border-[2px] border-[#303030] rounded-[8px] leading-[26.4px] px-[15px] py-[15px] text-[#898989] w-full h-[120px] focus:outline-[2px] focus:outline-(--theme-color) focus:border-transparent "
                placeholder="Comment or Message"
                {...register('message', {
                    required: { value: true, message: 'Message is required' },
                })}
            />

            <div className="flex justify-center sm:justify-start">
                <button
                    className="w-[168px] h-[50px] rounded-[8px] cc bg-(--theme-color) gap-2"
                    disabled={isSending}
                >
                    <span className="text-[15px] text-(--white) text-center leading-[24.75px]">
                        {isSending ? 'Sending...' : 'Send Message'}
                    </span>
                    {isSending && (
                        <LoaderCircleIcon className="size-5 animate-spin" />
                    )}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
