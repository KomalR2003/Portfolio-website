'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-8 text-center bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-300">
            © 2024 Komal Ribadiya. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}