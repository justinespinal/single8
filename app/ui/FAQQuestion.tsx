import React from 'react'
import { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

export function FAQQuestion({question, answer}: {question: string, answer: any}){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className = "mb-4">
                <div className={`w-[75vw] mx-auto p-4 rounded-lg shadow-md bg-white hover:bg-gray-100 ${isOpen ? 'border-2 border-gray-500' : 'border border-gray-300'}`}>
                    <div className="flex justify-between items-center cursor-pointer font-mono" onClick={() => setIsOpen(!isOpen)}>
                        <div className="break-normal break-keep text-[#ec5c2c] font-bold"> {question} </div>
                        <span>{isOpen ? "▲" : "▼"}</span>
                    </div>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ maxHeight: 0, opacity: 0 }}
                            animate={{ maxHeight: 500, opacity: 1 }}
                            transition={{
                            maxHeight: { duration: 0.3, ease: 'easeInOut' },
                            opacity: { duration: 0.3, ease: 'easeInOut' },
                            }}
                            className="overflow-hidden bg-gray-100 p-4 rounded-md break-keep"
                        >
                            <div className='flex justify-between font-bold'>
                                <span><FontAwesomeIcon icon={faLocationDot} style={{color: "#ec5b2c",}} /> Location</span>
                                <span><FontAwesomeIcon icon={faFilm} style={{color: "#ec5b2c",}} /> Theater</span>
                                <span><FontAwesomeIcon icon={faPhone} style={{color: "#ec5b2c",}} /> Phone</span>
                            </div>
                            <hr className='solid border-t-4'/>
                            {
                                answer.map((t: any) => (
                                    <div key={t.name}>
                                        <div className='flex justify-between pt-4 pb-4'>
                                            <span>{t.location}</span>
                                            <a className='text-[#ec5c2c] cursor-pointer hover:underline hover:text-orange-800' href={t.link}>{t.name}</a>
                                            <span>{t.number}</span>
                                        </div>
                                        <hr className="border-dashed dash"/>
                                    </div>
                                ))
                            }
                        </motion.div>
                    )}
                </AnimatePresence>
        </div>
    )
}