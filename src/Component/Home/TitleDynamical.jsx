import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function TitleDynamical() {
    const titleTable = [
        "Developpeur",
        "Database Engineer",
        "Passionné",
        "Designer",
        "Geek"
    ];

    const [title, setTitle] = useState(titleTable[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const typeEffect = (currentTitle, newTitle) => {
            let i = currentTitle.length;
            let j = 0;
            const typing = () => {
                if (i >= 0) {
                    setTitle(currentTitle.substring(0, i));
                    i--;
                } else if (j <= newTitle.length) {
                    setTitle(newTitle.substring(0, j));
                    j++;
                } else {
                    clearInterval(typingInterval);
                }
            };
            const typingInterval = setInterval(typing, 100);
        };

        const interval = setInterval(() => {
            const newIndex = (index + 1) % titleTable.length;
            typeEffect(title, titleTable[newIndex]);
            setIndex(newIndex);
        }, 10000);

        return () => clearInterval(interval);
    }, [index, title, titleTable]);

    return (
        <div className="flex">
            <div className="pl-1 text-indigo-500">{title} </div>
            <motion.div 
                animate={{ opacity: [1, 0, 1] }} // Animation de clignotement
                transition={{ duration: 1, repeat: Infinity }} // Durée de 1 seconde, répétition infinie
                className=""
            >|</motion.div>
        </div>
    );
}

export default TitleDynamical;