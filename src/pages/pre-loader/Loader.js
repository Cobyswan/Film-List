import React, { useState } from 'react'
import './Loader.css'
import { motion, AnimatePresence } from 'framer-motion/dist/framer-motion'
import logo from '../../assets/logo.png'
import preloader from '../../assets/preloader.svg'

function Loader() {
  const [showLoader, setShowLoader] = useState(true)

  setTimeout(() => {
    setShowLoader(false)
  }, 3000)

  const loaderVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 2,
      },
    },
  }

  const logoVariant = {
    hidden: {
      opacity: 0,
      x: '-100vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 2,
      },
    },
  }

  const preloaderVariant = {
    hidden: {
      opacity: 0,
      x: '100vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 2,
      },
    },
  }

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className='preloader-container'
          variants={loaderVariant}
          initial='hidden'
          animate='visible'
          exit={{ opacity: 0 }}
        >
          <motion.img
            variants={logoVariant}
            initial='hidden'
            animate='visible'
            className='loader-logo'
            src={logo}
            alt='site branding'
            exit={{ y: -1000 }}
          />
          <motion.img
            variants={preloaderVariant}
            initial='hidden'
            animate='visible'
            className='preloader'
            src={preloader}
            alt='loader icon'
            exit={{ y: 1000 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
