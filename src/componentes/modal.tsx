
interface ModalProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

export const Modal = ({isOpen,setIsOpen}: ModalProps) =>{


    return(
        <>
        
              
			{isOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black-bg-opacity-50"
					role="dialog"
					aria-modal="true"
				>
					<div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
						<div className="max-w-xl mx-auto p-6 ">
						<h2 className="text-2xl font-bold text-center mb-4">🪨📄✂️ Rules</h2>
							<p className="text-gray-700 mb-4">
								Players must simultaneously stretch out one hand in which they have formed a symbol (rock, paper, or scissors).
							</p>
							<p className="text-gray-700 mb-4">
								Then, players compare the symbols to decide the winner:
							</p>
							<ul className="list-disc pl-5 space-y-2 text-gray-700">
								<li>Rock beats Scissors (crushing or breaking them).</li>
								<li>Scissors beats Paper (cutting it).</li>
								<li>Paper beats Rock (wrapping it).</li>
							</ul>
						</div>
						<div className="mt-6 flex justify-end gap-2">
							<button
								onClick={() => setIsOpen(false)}
								className="px-4 py-2 text-sm rounded bg-red-800 hover:bg-red-500 text-amber-50"
							>
								Exit
							</button>							
						</div>
					</div>
				</div>
			)}
        
        </>
    )
}