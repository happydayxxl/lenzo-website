'use client'

import {Button} from "@nextui-org/react";
import {useState} from "react";
import {MdOutlineMarkEmailRead} from "react-icons/md";
import {BsFillPersonFill} from "react-icons/bs";
import ReCAPTCHA from "react-google-recaptcha";
import {Notify} from 'notiflix/build/notiflix-notify-aio';
import {lenzoData} from "@/app/data/data";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "", email: "", message: ""
    });


    const reCaptchaPublicSiteKey = process.env.NEXT_PUBLIC_RECAPTCHAPUBLICSITEKEY || '';


    function notifyNoReCAPTCHA(textInput: string) {
        Notify.failure(textInput);
    }

    const [formSuccess, setFormSuccess] = useState(false);
    const [formSuccessMessage, setFormSuccessMessage] = useState("");
    const [CaptchaKey, setCaptchaKey] = useState('');

    const handleInput = (e: any) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState, [fieldName]: fieldValue
        }));
    }

    const handleSubmit = (async (e: any) => {
        e.preventDefault();

        if (!CaptchaKey) {
            console.log('Error bitte shcau das du kein...')
            notifyNoReCAPTCHA('Bitte schau das du kein Roboter bist');
            return;
        }

        const data = new FormData()
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        })
        data.append('g-recaptcha-response', CaptchaKey);

        const formURL = 'https://www.formbackend.com/f/bf48cd30cc3ebda3';

        // Attach generated token to your API requests and validate it on the server
        await fetch(formURL, {
            method: "POST", body: data, headers: {
                'accept': 'application/json'
            },
        }).then((response) => response.json())
            .then((data) => {
                setFormData({name: "", email: "", message: ""})
                setFormSuccess(true)
                setFormSuccessMessage(data.submission_text)
            }).catch((e) => {
                console.log(e);
                notifyNoReCAPTCHA('Fehler! Versuche es später nocheinmal.');
            });
    });

    async function handleCaptcha(token: string | null) {
        if (token)
            setCaptchaKey(token);
    }

    // @ts-ignore
    return (<div className='my-10'>


        <div className='block sm:flex sm:flex-row sm:justify-center w-full'>
            <div className=''>
                {formSuccess ?
                    <div
                        className='flex flex-col justify-center py-10 text-3xl text-center text-black'>{formSuccessMessage}
                        <div className='flex flex-col justify-center items-center text-5xl py-4'>
                            <MdOutlineMarkEmailRead/></div>
                    </div> : <form method="POST"
                                   onSubmit={handleSubmit} acceptCharset='UTF-8'>

                        <div>
                            <div className='content-center'>
                                <div className='py-5'>Haben wir nun auch Ihr Interesse für unsere Produkte und/oder Dienstleistungen geweckt, schreiben
                                Sie uns einfach eine Nachricht damit wir uns mit Ihnen in Verbindung setzen können.
                                </div>
                                <label htmlFor="human-icon"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ihr
                                    Name</label>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none ">
                                        <BsFillPersonFill/>
                                    </div>
                                    <input type="text" id="human-icon" name="name" onChange={handleInput}
                                           value={formData.name}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                                           placeholder="Name"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email-address-icon"
                                   className="block pt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">Ihre
                                E-Mail Adresse<span className='text-red-600'>*</span></label>
                            <div className="relative">
                                <div
                                    className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                    {lenzoData.emailIcon}
                                </div>
                                <input type="email" id="email-address-icon" name="email"
                                       onChange={handleInput}
                                       value={formData.email}
                                       required
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                                       placeholder="E-Mail"/>
                            </div>
                        </div>


                        <div>
                            <label htmlFor="message-icon"
                                   className="block pt-4  mb-2 text-sm font-medium text-gray-900 dark:text-white">Schreiben
                                Sie
                                uns Ihr Anliegen, Ihre Fragen<span className='text-red-600'>*</span></label>
                            <div className="relative">

                        <textarea rows={4} id="message-icon" name="message" value={formData.message}
                                  required

                                  onChange={handleInput}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                                  placeholder="Nachricht"/>
                            </div>
                        </div>
                        <div className='pt-4 changeColorScheme'
                             id='recaptcha-container'
                        >
                            <ReCAPTCHA
                                sitekey={reCaptchaPublicSiteKey}
                                onChange={(e) => handleCaptcha(e)}
                                size="normal"
                            />
                        </div>


                        <div className='pt-4 justify-center flex'
                        >

                            <Button
                                className="text-xl px-4 py-2 mt-3 text-center  text-white bg-primary rounded-md"
                                type="submit">Sende Nachricht
                            </Button>
                        </div>


                    </form>}

            </div>
        </div>

    </div>);

}