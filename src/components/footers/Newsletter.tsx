'use client';

import getErrorMessage from '@/utils/get-error-message';
import axios from 'axios';
import { LoaderCircleIcon } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [joining, setJoining] = useState(false);

    const join = async (event: React.FormEvent<HTMLFormElement>) => {
        setJoining(true);
        event.preventDefault();
        try {
            const response = await axios.post('/api/join-newsletter', {
                email,
            });
            const { message } = response.data;

            // reset email field
            setEmail('');

            // toast, display or notify message
            toast.success(message);
        } catch (error) {
            console.log({ error });
            const message = getErrorMessage(error);
            toast.error(message);
        } finally {
            setJoining(false);
        }
    };
    return (
        <div className="w-full flex gap-[25px] flex-col items-center sm:items-start">
            <h3 className="footer-subtitle">Join my newsletter</h3>
            <form
                className="w-full flex gap-[20px] flex-col items-center sm:items-start sm:flex-row"
                onSubmit={join}
            >
                <input
                    type="email"
                    required
                    className="w-[312px] h-[50px] border-[2px] border-[#303030] py-0 px-[15px] rounded-[8px] text-[#898989] leading-[26.4px] transition focus:border-transparent focus:outline-[2px] focus:outline-(--theme-color) lg:min-w-[100px]"
                    placeholder="Email address"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <button
                    className="w-[319px] h-[50px] rounded-[8px] flex gap-3 justify-center items-center text-(--white) bg-(--theme-color) sm:w-[160px] lg:flex-auto"
                    disabled={joining}
                >
                    {!joining && (
                        <span className="text-[15px] font-medium">JOIN</span>
                    )}
                    {joining && (
                        <LoaderCircleIcon className="size-[16px] animate-spin" />
                    )}
                </button>
            </form>
        </div>
    );
};

export default Newsletter;
