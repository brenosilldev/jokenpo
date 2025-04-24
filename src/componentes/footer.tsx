import { useState } from "react";
import { Modal } from "./modal";
export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
		<footer className="bg-gray-100 text-center py-4 mt-auto">
			<button
				onClick={() => setIsOpen(true)}
			className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
			>
				Regras
			</button>

			<Modal isOpen={isOpen} setIsOpen={setIsOpen} />
		</footer>
	);
};
