import { useEffect, useState } from 'react';
import { BiUpArrowAlt } from 'react-icons/bi'

export default function ReturnToTop() {
    const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return(
        <button
            className={`text-5xl fixed bottom-6 right-8 z-10 border rounded-lg bg-[var(--purple)] hover:bg-[var(--dark-gray)] hover:text-[var(--purple)] hover:scale-150 transition duration-500 ${
                isVisible ? 'visible' : 'invisible'
            }`}
            onClick={scrollToTop}
        >
            <BiUpArrowAlt />
        </button>
    )
}