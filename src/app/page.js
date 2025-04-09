"use client"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, CalendarHeart, Heart, Send } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function WeddingInvitation() {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      // Initial check
      setIsMobile(window.innerWidth < 1024)

      // Add resize listener
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024)
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Mobile Design
  if (isMobile) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white flex flex-col items-center justify-center p-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md mx-auto"
        >
          <Card className="w-full shadow-xl rounded-3xl overflow-hidden border-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative h-28 bg-teal-100 overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-[url('/floral-pattern.png')] opacity-20"></div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                      repeatType: "reverse",
                    }}
                  >
                    <Heart className="text-teal-500 fill-teal-500" size={24} />
                  </motion.div>
                  <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-teal-300 to-transparent"></div>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                      repeatType: "reverse",
                      delay: 0.5,
                    }}
                  >
                    <Heart className="text-teal-500 fill-teal-500" size={24} />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <CardContent className="p-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-center mb-6"
              >
                <h1 className="text-3xl font-serif font-bold text-teal-700 mb-2">WEDDING INVITATION</h1>
                <div className="h-[2px] w-28 mx-auto bg-gradient-to-r from-transparent via-teal-300 to-transparent mb-3"></div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Dear and respected colleague,
                  <br />
                  We are pleased to invite you and your team to the wedding celebration of one of our close family
                  members.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="bg-teal-50 rounded-2xl p-5 mb-5 shadow-inner"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="bg-white p-2.5 rounded-full shadow-sm">
                    <CalendarHeart className="text-teal-600" size={20} />
                  </motion.div>
                  <div>
                    <div className="text-xs text-teal-600 font-medium">Date:</div>
                    <div className="text-base text-gray-800 font-semibold">May 15-16, 2025</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="bg-white p-2.5 rounded-full shadow-sm">
                    <MapPin className="text-teal-600" size={20} />
                  </motion.div>
                  <div>
                    <div className="text-xs text-teal-600 font-medium">Location:</div>
                    <div className="text-base text-gray-800 font-semibold">Uzbekistan, Fergana Region, Kokand City</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="text-center text-sm text-gray-600 mb-5 bg-white p-3.5 rounded-xl border border-teal-100"
              >
                We would be delighted to have you as our guest. Please let us know in advance if you will be able to
                attend.
              </motion.div>

              {/* Contact Section for Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="bg-white p-4 rounded-xl border border-teal-100 mb-5"
              >
                <h3 className="text-center text-teal-700 font-medium mb-3">Contact</h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Send className="text-teal-600 h-4 w-4" />
                    <motion.a
                      href="https://t.me/Muslimbek_sotvoldiyev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-700 hover:text-teal-500 transition-colors text-sm"
                      whileHover={{ scale: 1.03 }}
                    >
                      @muslimbek
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="relative overflow-hidden rounded-xl mb-5"
              >
                <iframe
                  className="w-full h-56 rounded-xl border-2 border-white shadow-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4313.629283966321!2d71.14343387844849!3d40.5567267389024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bae3473ad49b0f%3A0x2486eedcd53c2f4e!2sYangiqo%27rg%27on%20shahri!5e1!3m2!1suz!2s!4v1744202890716!5m2!1suz!2s"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="flex justify-center mb-5"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-2.5 rounded-full inline-block text-center transition-all shadow-lg hover:shadow-teal-200"
                  href="https://maps.app.goo.gl/GtTAYgKJDwPUxCo87"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Location
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-1.5">
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                      delay: 0.1,
                    }}
                  >
                    <Heart className="text-teal-400 fill-teal-400" size={14} />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                      delay: 0.3,
                    }}
                  >
                    <Heart className="text-teal-500 fill-teal-500" size={16} />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                      delay: 0.5,
                    }}
                  >
                    <Heart className="text-teal-600 fill-teal-600" size={14} />
                  </motion.div>
                </div>
                <div className="text-right text-gray-500 text-sm font-medium">Sincerely, Muslimbek</div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  // Desktop Design
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-50 flex items-center justify-center p-8">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-teal-300"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-teal-400"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute -bottom-20 left-1/3 w-72 h-72 rounded-full bg-teal-300"
        ></motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10"
      >
        {/* Left Column - Invitation Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="lg:col-span-2"
        >
          <Card className="w-full shadow-xl rounded-3xl overflow-hidden border-0 bg-white/90 backdrop-blur-sm">
            <div className="relative h-40 bg-teal-100 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-[url('/floral-pattern.png')] opacity-20"></div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                      repeatType: "reverse",
                    }}
                  >
                    <Heart className="text-teal-500 fill-teal-500" size={32} />
                  </motion.div>
                  <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-teal-300 to-transparent"></div>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                      repeatType: "reverse",
                      delay: 0.5,
                    }}
                  >
                    <Heart className="text-teal-500 fill-teal-500" size={32} />
                  </motion.div>
                </div>
              </div>
            </div>

            <CardContent className="p-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-center mb-8"
              >
                <h1 className="text-4xl font-serif font-bold text-teal-700 mb-3">WEDDING INVITATION</h1>
                <div className="h-[2px] w-40 mx-auto bg-gradient-to-r from-transparent via-teal-300 to-transparent mb-4"></div>
                <p className="text-gray-700 leading-relaxed">
                  Dear and respected colleague,
                  <br />
                  We are pleased to invite you and your team to the wedding celebration of one of our close family
                  members.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="bg-teal-50 rounded-2xl p-6 mb-6 shadow-inner"
              >
                <div className="flex items-center gap-4 mb-5">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="bg-white p-3 rounded-full shadow-sm">
                    <CalendarHeart className="text-teal-600" size={24} />
                  </motion.div>
                  <div>
                    <div className="text-sm text-teal-600 font-medium">Date:</div>
                    <div className="text-xl text-gray-800 font-semibold">May 15-16, 2025</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="bg-white p-3 rounded-full shadow-sm">
                    <MapPin className="text-teal-600" size={24} />
                  </motion.div>
                  <div>
                    <div className="text-sm text-teal-600 font-medium">Location:</div>
                    <div className="text-xl text-gray-800 font-semibold">Uzbekistan, Fergana Region, Kokand City</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="text-center text-gray-600 mb-8 bg-white p-5 rounded-xl border border-teal-100"
              >
                We would be delighted to have you as our guest. Please let us know in advance if you will be able to
                attend.
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                      delay: 0.1,
                    }}
                  >
                    <Heart className="text-teal-400 fill-teal-400" size={16} />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                      delay: 0.3,
                    }}
                  >
                    <Heart className="text-teal-500 fill-teal-500" size={20} />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                      delay: 0.5,
                    }}
                  >
                    <Heart className="text-teal-600 fill-teal-600" size={16} />
                  </motion.div>
                </div>
                <div className="text-right text-gray-500 font-medium">Sincerely, Muslimbek</div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Column - Map and Additional Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="lg:col-span-3 flex flex-col gap-6"
        >
          {/* Map Section */}
          <Card className="w-full shadow-xl rounded-3xl overflow-hidden border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-serif font-bold text-teal-700 mb-4">Location</h2>

              <div className="relative overflow-hidden rounded-xl mb-5">
                <iframe
                  className="w-full h-[350px] rounded-xl border-2 border-white shadow-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4313.629283966321!2d71.14343387844849!3d40.5567267389024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bae3473ad49b0f%3A0x2486eedcd53c2f4e!2sYangiqo%27rg%27on%20shahri!5e1!3m2!1suz!2s!4v1744202890716!5m2!1suz!2s"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="flex justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-3 rounded-full inline-block text-center transition-all shadow-lg hover:shadow-teal-200"
                  href="https://maps.app.goo.gl/GtTAYgKJDwPUxCo87"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Location
                </motion.a>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Card className="h-full shadow-xl rounded-3xl overflow-hidden border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-serif font-bold text-teal-700 mb-4">Wedding Program</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="bg-teal-50 p-2 rounded-full mt-1">
                        <CalendarHeart className="text-teal-600 h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">May 15, 2025</p>
                        <p className="text-gray-600">Wedding Ceremony</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-teal-50 p-2 rounded-full mt-1">
                        <CalendarHeart className="text-teal-600 h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">May 16, 2025</p>
                        <p className="text-gray-600">Wedding Celebration</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <Card className="h-full shadow-xl rounded-3xl overflow-hidden border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-serif font-bold text-teal-700 mb-4">Contact</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-teal-50 p-2 rounded-full">
                        <Send className="text-teal-600 h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-teal-600">Telegram:</p>
                        <motion.a
                          href="https://t.me/muslimbek"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-teal-700 hover:text-teal-500 transition-colors"
                          whileHover={{ scale: 1.03 }}
                        >
                          @muslimbek
                        </motion.a>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-teal-100">
                      <p className="text-gray-600">
                        Please let us know in advance if you will be able to attend the wedding.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
