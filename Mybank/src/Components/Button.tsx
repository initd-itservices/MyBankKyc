import React from 'react';
import '../Style/Button.css';

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  // const [isHovered, setIsHovered] = useState(false);

  return (
    <button 
      className="button" 
      onClick={onClick}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <p className={text}>{text}</p>
    </button>
  );
};

export default Button;
