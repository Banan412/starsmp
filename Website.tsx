// Get Started: https://www.framer.com/developers

// @ts-ignore - framer-motion is expected to be installed in the standalone Vite app
import { motion } from "framer-motion"

/**
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function Website(props) {
    const { tint = "rgba(150,150,150,0.15)" } = props

    return (
        <motion.div
            style={{
                margin: 50,
                width: 100,
                height: 100,
                borderRadius: 5,
                backgroundColor: tint,
            }}
            animate={{ scale: 1.5 }}
            whileHover={{ rotate: 90 }}
        />
    )
}
