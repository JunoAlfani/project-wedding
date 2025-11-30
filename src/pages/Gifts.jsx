import config from '@/config/config'
import { motion } from 'framer-motion'
import { Copy, Gift, CheckCircle, Wallet, Building2 } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Gifts() {
    const [copiedAccount, setCopiedAccount] = useState(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        setHasAnimated(true);
    }, []);

    const copyToClipboard = (text, bank) => {
        navigator.clipboard.writeText(text)
        setCopiedAccount(bank)
        setTimeout(() => setCopiedAccount(null), 2000)
    }

    return (
        <>
            {/* === GIFTS SECTION (Background same as Events.jsx) === */}
            <section
                id="gifts"
                className="
                    min-h-screen
                    relative overflow-hidden
                    flex flex-col items-center justify-center
                    px-3 py-20 text-center
                    bg-floral-1 bg-cover bg-center bg-no-repeat
                "
            >
                {/* Overlay lembut sama seperti event/location */}
                <div className="absolute inset-0 bg-white/0" />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={hasAnimated ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 container mx-auto px-4 py-10"
                >

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-4"
                    >
                        <div className="mt-10">
                            <motion.span className="inline-block text-red-700 font-medium">
                                Hadiah Pernikahan
                            </motion.span>

                            <motion.h2 className="text-4xl md:text-5xl font-serif text-gray-800 mt-3">
                                Berikan Hadiah
                            </motion.h2>
                        </div>

                        {/* Decorative line */}
                        <div className="flex items-center justify-center gap-4 pt-4">
                            <div className="h-[1px] w-12 bg-red-200" />
                            <Gift className="w-5 h-5 text-red-800" />
                            <div className="h-[1px] w-12 bg-red-200" />
                        </div>

                        <div className="space-y-4 max-w-md mx-auto">
                            <p className="font-arabic text-xl text-gray-800">إن شاء الله</p>

                            <p className="text-gray-700">
                                Insya Allah, setiap hadiah yang diberikan akan kami terima 
                                dengan penuh rasa syukur dan kebahagiaan.
                            </p>

                            <div className="space-y-2">
                                <p className="font-arabic text-lg text-gray-800">
                                    جزاكم الله خيرا وبارك الله فيكم
                                </p>
                                <p className="text-gray-600 italic text-sm">
                                    Jazakumullahu khairan, Barakallah fiikum
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bank Cards */}
                    <div className="max-w-2xl mx-auto grid gap-6 mt-10">
                        {config.data.banks.map((account, index) => (
                            <motion.div
                                key={account.accountNumber}
                                initial={{ opacity: 0, y: 20 }}
                                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.2 * index + 0.7 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-red-100/50 to-red-100/50 rounded-2xl group-hover:scale-105 transition-transform duration-300" />
                                <div className="relative backdrop-blur-sm bg-white/80 p-6 rounded-2xl shadow-lg border border-red-100">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-white p-2 shadow-sm">
                                                <Building2 className="w-full h-full text-red-800" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-gray-800">{account.bank}</h3>
                                                <p className="text-sm text-gray-500">{account.accountName}</p>
                                            </div>
                                        </div>
                                        <Wallet className="w-5 h-5 text-red-800" />
                                    </div>

                                    <div className="mt-4">
                                        <div className="flex items-center justify-between bg-gray-50/80 px-4 py-3 rounded-lg">
                                            <p className="font-mono text-gray-700">{account.accountNumber}</p>

                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => copyToClipboard(account.accountNumber, account.accountNumber)}
                                                className="flex items-center gap-1 text-red-800 hover:text-red-900"
                                            >
                                                {copiedAccount === account.accountNumber ? (
                                                    <CheckCircle className="w-4 h-4" />
                                                ) : (
                                                    <Copy className="w-4 h-4" />
                                                )}
                                                <span className="text-sm">
                                                    {copiedAccount === account.accountNumber ? 'Copied!' : 'Copy'}
                                                </span>
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </>
    )
}
